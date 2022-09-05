import { combineReducers } from 'redux';
import authSlice from 'redux/auth';
import cacheSlice from 'redux/cache';
import domSlice from './dom';
import isNewSlice from './user_search/is_new';
import kindsSlice from './kinds';
import categoriesSlice from './categories';
import httpReqsSlice from './slices/httpReqsSlice';
import agentSlice from './slices/agent';
import agentAccessTokenSlice from './slices/agentAccessToken';
import newCountSlice from './slices/newCount';
import loggedSlice from './slices/loggedSlice';
import isGirlsSlice from './slices/isGirlsSlice';
import mainPhotoUrlSlice from './slices/mainPhotoUrlSlice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  cache: cacheSlice.reducer,
  dom: domSlice.reducer,
  is_new: isNewSlice.reducer,
  kinds: kindsSlice.reducer,
  categories: categoriesSlice.reducer,
  httpReqs: httpReqsSlice.reducer,
  agent: agentSlice.reducer,
  agentAccessToken: agentAccessTokenSlice.reducer,
  newCount: newCountSlice.reducer,
  logged: loggedSlice.reducer,
  isGirls: isGirlsSlice.reducer,
  mainPhotoUrl: mainPhotoUrlSlice.reducer,
});

type RootState = ReturnType<typeof rootReducer>;

declare module 'react-redux' {
  type DefaultRootState = RootState;
}

export default rootReducer;
