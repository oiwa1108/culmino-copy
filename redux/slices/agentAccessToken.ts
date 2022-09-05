import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const agentAccessTokenSlice = createSlice({
  name: 'agentAccessToken',
  initialState: '',
  reducers: {
    setAgentAccessToken: (_, action: PayloadAction<string>) => action.payload,
  },
});

export default agentAccessTokenSlice;

export const { setAgentAccessToken } = agentAccessTokenSlice.actions;
