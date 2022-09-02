import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const httpReqsSlice = createSlice({
  name: 'httpReqs',
  initialState: [] as string[],
  reducers: {
    setHttpReqs: (_, action: PayloadAction<string[]>) => action.payload,
  },
});

export default httpReqsSlice;

export const { setHttpReqs } = httpReqsSlice.actions;
