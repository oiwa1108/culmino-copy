import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const loggedSlice = createSlice({
  name: 'logged',
  initialState: false,
  reducers: {
    setLogged: (_, action: PayloadAction<boolean>) => action.payload,
  },
});

export default loggedSlice;

export const { setLogged } = loggedSlice.actions;
