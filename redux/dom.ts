import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  open_menus: boolean;
};

const initialState: State = {
  open_menus: false,
};

const domSlice = createSlice({
  name: 'realtime',
  initialState,
  reducers: {
    set_open_menus: (state: State, action: PayloadAction<boolean>) => {
      state.open_menus = action.payload;
    },
  },
});

export default domSlice;

export const { set_open_menus } = domSlice.actions;
