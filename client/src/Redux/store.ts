import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./post/postApiSlice";
import { userApi } from "./user/userApiSlice";
import { authApi } from "./auth/authApiSlice";
import authReducer from "./auth/authSlice";
import userReducer from "./user/userSlice";

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
