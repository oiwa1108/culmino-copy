import { set_admin_access_token } from 'redux/auth';
import { AxiosError } from 'axios';
import { api_v1 } from './axios';
import store from 'redux/store';
import { AuthToken } from '@/types';
import Cookies from 'js-cookie';

const history_push = (url: string) => {
  window.history.pushState({}, '', url);
};

const requireAdmin = () => {
  const dispatch = store.dispatch;
  api_v1
    .get<{ access_token: string }>('/auth_admin')
    .then((response) => {
      dispatch(set_admin_access_token(response.data.access_token));
    })
    .catch((error: AxiosError) => {
      if (error.response?.status === 401) {
        dispatch(set_admin_access_token(''));
        history_push('/control_panel/login');
      }
    });
};

const setAuthTokenToCookies = (authToken: AuthToken) => {
  Cookies.set('AccessToken', authToken.access_token);
  Cookies.set('RefreshToken', authToken.refresh_token);
};

export { requireAdmin, setAuthTokenToCookies };
