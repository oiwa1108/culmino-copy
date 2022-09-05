import { Category } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [] as Category[],
  reducers: {
    setCategories: (_, action: PayloadAction<Category[]>) => action.payload,
  },
});

export default categoriesSlice;

export const { setCategories } = categoriesSlice.actions;
