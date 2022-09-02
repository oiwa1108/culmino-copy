import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const mainPhotoUrlSlice = createSlice({
  name: 'mainPhotoUrl',
  initialState: '',
  reducers: {
    setMainPhotoUrl: (_, action: PayloadAction<string>) => action.payload,
  },
});

export default mainPhotoUrlSlice;

export const { setMainPhotoUrl } = mainPhotoUrlSlice.actions;
