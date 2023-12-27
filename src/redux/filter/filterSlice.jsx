import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: false
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleVisibility: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggleVisibility } = filterSlice.actions;
export default filterSlice.reducer;