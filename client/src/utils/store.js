import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./postApiSlice";
import { userApi } from "./userApiSlice";
import { authApi } from "./authApiSlice";
import authReducer from "./authSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    [postSlice.reducerPath]: postSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(postSlice.middleware)
      .concat(authApi.middleware)
      .concat(userApi.middleware),
});
