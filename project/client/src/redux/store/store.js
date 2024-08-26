import { configureStore } from "@reduxjs/toolkit";
import userReducers from "../reducers/userReducers";
import loaderReducers from "../reducers/loaderReducers";

export default configureStore({
  reducer: {
    user: userReducers,
    loader: loaderReducers,
  },
});
