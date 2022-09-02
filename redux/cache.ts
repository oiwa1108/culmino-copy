import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Constants, User } from '@/types';

interface UserSearch {
  photo: number[];
  min_age: number;
  max_age: number;
  area: number[];
  min_height: number;
  max_height: number;
  body_shape: number[];
  job: number[];
  income: number[];
  drink: number[];
  cigarette: number[];
  contact: number[];
  free_word: string;
}

const user_search_default_value: UserSearch = {
  photo: [],
  min_age: 0,
  max_age: 0,
  area: [],
  min_height: 0,
  max_height: 0,
  body_shape: [],
  job: [],
  income: [],
  drink: [],
  cigarette: [],
  contact: [],
  free_word: '',
};

const constants_default_value: Constants = {
  home_youtube_hash: '',
};

interface KeijiSearch {
  min_age: number;
  max_age: number;
  area: number[];
  min_date: string;
  max_date: string;
}

const keiji_search_default_value: KeijiSearch = {
  min_age: 0,
  max_age: 0,
  area: [],
  min_date: '',
  max_date: '',
};

type State = {
  users: User[];
  users_scroll: number;
  prev_path: string;
  user_search: UserSearch;
  keiji_search: KeijiSearch;
  constants: Constants;
};

const initialState: State = {
  users: [],
  users_scroll: 0,
  prev_path: '',
  user_search: user_search_default_value,
  keiji_search: keiji_search_default_value,
  constants: constants_default_value,
};

const cacheSlice = createSlice({
  name: 'cache',
  initialState,
  reducers: {
    set_cache_users: (state: State, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    set_cache_users_scroll: (state: State, action: PayloadAction<number>) => {
      state.users_scroll = action.payload;
    },
    set_prev_path: (state: State, action: PayloadAction<string>) => {
      state.prev_path = action.payload;
    },
    set_user_search: (state: State, action: PayloadAction<UserSearch>) => {
      state.user_search = action.payload;
    },
    set_keiji_search: (state: State, action: PayloadAction<KeijiSearch>) => {
      state.keiji_search = action.payload;
    },
    set_constants: (state: State, action: PayloadAction<Constants>) => {
      state.constants = action.payload;
    },
  },
});

export default cacheSlice;

export const {
  set_cache_users,
  set_cache_users_scroll,
  set_prev_path,
  set_user_search,
  set_keiji_search,
  set_constants,
} = cacheSlice.actions;

export {
  user_search_default_value,
  keiji_search_default_value,
  constants_default_value,
};
