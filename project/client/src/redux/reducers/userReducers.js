import { createSlice } from "@reduxjs/toolkit";

export const userReducers = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserInfo } = userReducers.actions;

export default userReducers.reducer;
