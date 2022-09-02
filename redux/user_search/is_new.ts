import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type S = 'unselected' | boolean;
const s = createSlice({
  name: 'cache',
  initialState: 'unselected' as S,
  reducers: {
    set_is_new: (_, action: PayloadAction<S>) => action.payload,
  },
});

export default s;

export const { set_is_new } = s.actions;
