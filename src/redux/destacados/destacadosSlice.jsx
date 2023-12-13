import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  destacado: Array(4)
    .fill(0)
};

export const destacadoSlice = createSlice({
  name: 'destacado',
  initialState: INITIAL_STATE,
});

export default destacadoSlice.reducer;