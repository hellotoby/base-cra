import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  value: number;
}

const initialState = {
  value: 0,
} as AppState;

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
  },
});

export const { increment, decrement } = appSlice.actions;
export default appSlice.reducer;
