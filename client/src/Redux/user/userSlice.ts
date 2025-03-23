// features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  name: null,
  _id: "66883885cb38073dbb72913d",
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state._id = action.payload._id;
    },
    clearUserDetails: (state) => {
      state.userDetails = null;
    },
  },
});

export const { setUserDetails, clearUserDetails } = userSlice.actions;

export default userSlice.reducer;
