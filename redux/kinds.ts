import { Kind } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const kindsSlice = createSlice({
  name: 'kinds',
  initialState: [] as Kind[],
  reducers: {
    setKinds: (_, action: PayloadAction<Kind[]>) => action.payload,
  },
});

export default kindsSlice;

export const { setKinds } = kindsSlice.actions;
