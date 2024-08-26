import { createSlice } from "@reduxjs/toolkit";

export const loaderReducers = createSlice({
  name: "loader",
  initialState: {
    loader: false,
  },
  reducers: {
    showloader: (state) => {
      state.loader = true;
    },
    hideloader: (state) => {
      state.loader = false;
    },
  },
});

export const { showloader, hideloader } = loaderReducers.actions;
export default loaderReducers.reducer;
