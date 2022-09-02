import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Affiliator, User } from '@/types';

type State = {
  access_token: string;
  user: User;
  affiliator: Affiliator | null;
  affiliator_access_token: string;
  admin_access_token: string;
};

const initialState: State = {
  access_token: '',
  user: {} as User,
  affiliator: null,
  affiliator_access_token: '',
  admin_access_token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    set_access_token: (state: State, action: PayloadAction<string>) => {
      state.access_token = action.payload;
    },
    set_user: (state: State, action: PayloadAction<User>) => {
      state.user = { ...state.user, ...action.payload };
    },
    reset_user: (state: State) => {
      state.user = {} as User;
    },
    set_affiliator: (
      state: State,
      action: PayloadAction<Affiliator | null>
    ) => {
      state.affiliator = action.payload;
    },
    set_affiliator_access_token: (
      state: State,
      action: PayloadAction<string>
    ) => {
      state.affiliator_access_token = action.payload;
    },
    set_admin_access_token: (state: State, action: PayloadAction<string>) => {
      state.admin_access_token = action.payload;
    },
  },
});

export default authSlice;

export const {
  set_access_token,
  set_user,
  reset_user,
  set_affiliator,
  set_affiliator_access_token,
  set_admin_access_token,
} = authSlice.actions;
