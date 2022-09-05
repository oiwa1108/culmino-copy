import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const isGirlsSlice = createSlice({
  name: 'isGirls',
  initialState: false,
  reducers: {
    setIsGirls: (_, action: PayloadAction<boolean>) => action.payload,
  },
});

export default isGirlsSlice;

export const { setIsGirls } = isGirlsSlice.actions;
