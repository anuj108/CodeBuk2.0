import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.js";
import Post from "./Post.js";
import Feed from "./Feed.js";
import { Outlet } from "react-router-dom";
import { useGetUserByIdQuery } from "../Redux/user/userApiSlice.js";
import { setUserDetails } from "../Redux/user/userSlice.js";
import { useDispatch } from "react-redux";
import { decodeJWT } from "../utils/jwtUtils";
import Cookies from "js-cookie";
const AUTH_KEY = "token";
const USER_ID_KEY = "userId";


const HomePage = () => {
  
  const token = Cookies.get(AUTH_KEY);

  const decodedToken = decodeJWT(token);
  const userId = decodedToken.id;

  const dispatch = useDispatch();
  const { data, isLoading, isSuccess, isError, error } = useGetUserByIdQuery(
    userId
  );


  
  useEffect(() => {
    if (isSuccess && data) {
      console.log(data);
      dispatch(setUserDetails(data));
      console.log(data);
    }
  }, [isSuccess, data]);

  console.log(data);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomePage;
