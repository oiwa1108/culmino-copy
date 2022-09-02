import { Agent } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const agentSlice = createSlice({
  name: 'agent',
  initialState: {} as Agent,
  reducers: {
    setAgent: (_, action: PayloadAction<Agent>) => action.payload,
  },
});

export default agentSlice;

export const { setAgent } = agentSlice.actions;
