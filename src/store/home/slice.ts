import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isLoader: false,
  isDesktop: true,
};

export const translatesSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    toggleLoader: (state) => {
      state.isLoader = !state.isLoader;
    },
    toggleScreen: (state) => {
      state.isDesktop = !state.isDesktop;
    },
  },
});

export const { toggleLoader, toggleScreen } = translatesSlice.actions;

export default translatesSlice.reducer;
