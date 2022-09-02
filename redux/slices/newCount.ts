import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const newCountSlice = createSlice({
  name: 'newCount',
  initialState: 0,
  reducers: {
    setNewCount: (_, action: PayloadAction<number>) => action.payload,
  },
});

export default newCountSlice;

export const { setNewCount } = newCountSlice.actions;
