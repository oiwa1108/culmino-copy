import { setHttpReqs } from 'redux/slices/httpReqsSlice';
import { store } from 'redux/store';
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from 'axios';
import Cookies from 'js-cookie';
import { Base64 } from 'js-base64';
import { AuthToken } from '@/types';
import { IncomingMessage, ServerResponse } from 'http';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';
import { parse, serialize } from 'cookie';
import { GetServerSidePropsResult } from 'next';

const update_http_reqs = (
  http_req: {
    method: Method;
    url: string;
  },
  add: boolean,
) => {
  const http_reqs = store.getState().httpReqs;
  if (add === true) {
    store.dispatch(
      setHttpReqs([...http_reqs, `${http_req.method}:${http_req.url}`]),
    );
  } else {
    store.dispatch(
      setHttpReqs(
        http_reqs.filter(
          (item) => item !== `${http_req.method}:${http_req.url}`,
        ),
      ),
    );
  }
};

const config = async (config: AxiosRequestConfig) => {
  // if access token or refresh token is not set, return
  let accessToken = Cookies.get('AccessToken');
  let refreshToken = Cookies.get('RefreshToken');
  if (accessToken === undefined || refreshToken === undefined) {
    return config;
  }

  // if refresh token expired redirect to login page
  if (expiredToken(refreshToken)) {
    Cookies.remove('AccessToken');
    Cookies.remove('RefreshToken');
    if (location.pathname !== '/login') location.href = '/login';
    return config;
  }

  // if access token expired refresh
  if (expiredToken(accessToken)) {
    try {
      const res = await refresh_api.post<AuthToken>('/refresh', {
        token: refreshToken,
      });
      accessToken = res.data.access_token;
      refreshToken = res.data.refresh_token;
      Cookies.set('AccessToken', accessToken);
      Cookies.set('RefreshToken', refreshToken);
    } catch {
      Cookies.remove('AccessToken');
      Cookies.remove('RefreshToken');
      if (location.pathname !== '/login') location.href = '/login';
    }
  }

  // set authorization header
  config.headers['Authorization'] = `Bearer ${accessToken}`;

  return config;
};

const configAuth = async (config: AxiosRequestConfig) => {
  // if access token or refresh token is not set, return
  let accessToken = Cookies.get('AccessToken');
  let refreshToken = Cookies.get('RefreshToken');
  if (accessToken === undefined || refreshToken === undefined) {
    if (location.pathname !== '/login') location.href = '/login';
    return config;
  }

  try {
    await refresh_api.get('/user/ok', {
      headers: { Authorization: accessToken },
    });
    config.headers['Authorization'] = `Bearer ${accessToken}`;
    return config;
  } catch (err) {
    try {
      const res = await refresh_api.post<AuthToken>('/refresh', {
        token: refreshToken,
      });
      accessToken = res.data.access_token;
      refreshToken = res.data.refresh_token;
      Cookies.set('AccessToken', accessToken);
      Cookies.set('RefreshToken', refreshToken);
      return config;
    } catch (err) {
      Cookies.remove('AccessToken');
      Cookies.remove('RefreshToken');
      if (location.pathname !== '/login') location.href = '/login';
      return config;
    }
  }
};

const configAdmin = async (config: AxiosRequestConfig) => {
  refresh(
    config,
    'Authorization-Admin',
    'AccessToken-Admin',
    'RefreshToken-Admin',
    '/admins/refresh',
  );
  return config;
};

const refresh = async (
  config: AxiosRequestConfig,
  authorizationHeaderName: string,
  accessTokenName: string,
  refreshTokenName: string,
  refreshUrl: string,
) => {
  const accessToken = Cookies.get(accessTokenName);
  const refreshToken = Cookies.get(refreshTokenName);
  const setAuthorizationHeader = (config: AxiosRequestConfig, t: string) =>
    (config.headers[authorizationHeaderName] = 'Bearer ' + t);
  if (accessToken !== undefined) {
    if (expiredToken(accessToken)) {
      try {
        const res = await refresh_api.post<AuthToken>(refreshUrl, {
          token: refreshToken,
        });
        Cookies.set(accessTokenName, res.data.access_token);
        Cookies.set(refreshTokenName, res.data.refresh_token);
        setAuthorizationHeader(config, res.data.access_token);
      } catch {}
    } else {
      setAuthorizationHeader(config, accessToken);
    }
  }
  return config;
};

const requestConfig = (request: AxiosRequestConfig) => {
  if (request.method && request.url)
    update_http_reqs({ method: request.method, url: request.url }, true);
  return request;
};

const responseConfig = (response: AxiosResponse): Promise<any> => {
  if (response.config.method && response.config.url)
    update_http_reqs(
      { method: response.config.method, url: response.config.url },
      false,
    );
  return Promise.resolve({
    data: response.data,
  });
};

const error_config_laravel = (error: AxiosError) => error_config(error, false);
const error_config_go = (error: AxiosError) => error_config(error, true);

const error_config = (error: AxiosError, go_api: boolean) => {
  if (error.config.method && error.config.url)
    update_http_reqs(
      { method: error.config.method, url: error.config.url },
      false,
    );
  const status = error.response?.status;
  const message = go_api ? error.response?.data : error.response?.data.message;
  if (status === 401) {
    if (message === 'unauthorized.user') {
      if (location.pathname !== '/login') location.href = '/login';
    }
    if (message === 'auth.agent') {
      if (window.location.pathname !== '/agent/login')
        window.location.href = '/agent/login';
    }
    if (message === 'auth.admin') {
      if (window.location.pathname !== '/control_panel/login')
        window.location.href = '/control_panel/login';
    }
  }
  return Promise.reject(error);
};

const api_v1 = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
api_v1.interceptors.request.use(config);
api_v1.interceptors.request.use(requestConfig);
api_v1.interceptors.response.use(responseConfig, error_config_laravel);

const baseURL = process.env.NEXT_PUBLIC_GO_API_URL;
const refresh_api = axios.create({
  baseURL,
});
const go_api_v1 = axios.create({
  baseURL,
});
go_api_v1.interceptors.request.use(config);
go_api_v1.interceptors.request.use(requestConfig);
go_api_v1.interceptors.response.use(responseConfig, error_config_go);

const unAuthApi = axios.create({
  baseURL,
});
unAuthApi.interceptors.request.use(requestConfig);
unAuthApi.interceptors.response.use(responseConfig, error_config_go);

const authApi = axios.create({
  baseURL,
});
authApi.interceptors.request.use(configAuth);
authApi.interceptors.request.use(requestConfig);
authApi.interceptors.response.use(responseConfig, error_config_go);

const baseURLEats = process.env.NEXT_PUBLIC_EATS_API_URL;
const eats_api = axios.create({
  baseURL: baseURLEats,
});
eats_api.interceptors.request.use(config);
eats_api.interceptors.request.use(requestConfig);
eats_api.interceptors.response.use(responseConfig, error_config_go);

const eats_api_admin = axios.create({
  baseURL: baseURLEats,
});
eats_api_admin.interceptors.request.use(configAdmin);
eats_api_admin.interceptors.request.use(requestConfig);
eats_api_admin.interceptors.response.use(responseConfig, error_config_go);

const ssr_api_base = (
  baseURL: string | undefined,
  authorizationHeaderName: string,
  accessTokenStr: string,
  refreshTokenStr: string,
  refreshUrl: string,
) => {
  const api_base = (
    cookies?: NextApiRequestCookies,
    serverRes?: ServerResponse,
  ) => {
    const api = axios.create({
      baseURL,
    });

    const accessToken = cookies ? cookies[accessTokenStr] : '';
    const refreshToken = cookies ? cookies[refreshTokenStr] : '';

    const setAuthorizationHeader = (config: AxiosRequestConfig, t: string) =>
      (config.headers[authorizationHeaderName] = 'Bearer ' + t);

    const setAuthTokenCookieFromServer = (
      serverRes: ServerResponse,
      accessToken: string,
      refreshToken: string,
    ) => {
      serverRes.setHeader('Set-Cookie', [
        serialize(accessTokenStr, accessToken, { path: '/' }),
        serialize(refreshTokenStr, refreshToken, { path: '/' }),
      ]);
    };

    const config = async (config: AxiosRequestConfig) => {
      if (accessToken !== '') {
        setAuthorizationHeader(config, accessToken);
      }
      if (
        accessToken !== '' &&
        refreshToken !== '' &&
        serverRes !== undefined
      ) {
        if (expiredToken(accessToken)) {
          try {
            const res = await refresh_api.post<AuthToken>(refreshUrl, {
              token: refreshToken,
            });
            setAuthTokenCookieFromServer(
              serverRes,
              res.data.access_token,
              res.data.refresh_token,
            );
            setAuthorizationHeader(config, res.data.access_token);
          } catch {}
        }
      }
      return config;
    };

    const response_config = (response: AxiosResponse): Promise<any> => {
      return Promise.resolve({
        data: response.data,
      });
    };

    const error_config = async (error: AxiosError) => {
      return Promise.reject(error);
    };

    api.interceptors.request.use(config);
    api.interceptors.response.use(response_config, error_config);
    return api;
  };
  return api_base;
};
const ssr_api_eats = axios.create({
  baseURL: baseURLEats,
});
const ssr_api_core_admin = ssr_api_base(
  baseURL,
  'Authorization-Admin',
  'AccessToken-Admin',
  'RefreshToken-Admin',
  '/admins/refresh',
);
const ssr_api_eats_admin = ssr_api_base(
  baseURLEats,
  'Authorization-Admin',
  'AccessToken-Admin',
  'RefreshToken-Admin',
  '/admins/refresh',
);

const expiredToken = (accessToken: string) => {
  const base64 = accessToken.split('.')[1];
  const str = Base64.atob(base64);
  const json = JSON.parse(str);
  const exp = parseInt(json['exp']);
  const d = new Date();
  return d.getTime() / 1000 >= exp;
};

const ssr_api_v1 = (accessToken?: string) => {
  const api = axios.create({
    baseURL,
  });

  const config = async (config: AxiosRequestConfig) => {
    if (accessToken !== undefined && accessToken !== '') {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  };

  api.interceptors.request.use(config);
  return api;
};

const getAccessTokenForSsr = (
  req: IncomingMessage & {
    cookies: NextApiRequestCookies;
  },
  serverRes: ServerResponse,
) => {
  const reqCookies = req.cookies;
  const serverResCookies = serverRes.getHeader('Set-Cookie') as string[];
  if (serverResCookies !== undefined && serverResCookies.length > 0) {
    let accessToken = '';
    serverResCookies.forEach((serverResCookie) => {
      const parsedObject = parse(serverResCookie);
      if (parsedObject['AccessToken'] !== undefined) {
        accessToken = parsedObject['AccessToken'];
      }
    });
    if (accessToken !== '') return accessToken;
  } else {
    if (reqCookies['AccessToken'] !== undefined) {
      return reqCookies['AccessToken'];
    }
  }
  return '';
};

const redirectToLogin: GetServerSidePropsResult<any> = {
  redirect: {
    destination: '/login',
    permanent: false,
  },
};

export {
  api_v1,
  go_api_v1,
  ssr_api_eats,
  ssr_api_core_admin,
  ssr_api_eats_admin,
  eats_api,
  eats_api_admin,
  expiredToken,
  ssr_api_v1,
  getAccessTokenForSsr,
  redirectToLogin,
  unAuthApi,
  authApi,
};
