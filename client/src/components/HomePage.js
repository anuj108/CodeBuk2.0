import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Post from "./Post";
import Feed from "./Feed";
import { Outlet } from "react-router-dom";
import { useGetUserByIdQuery } from "../utils/userApiSlice";
import { setUserDetails } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const HomePage = (props) => {
  console.log(props.userId);
  const dispatch = useDispatch();
  const { data, isLoading, isSuccess, isError, error } = useGetUserByIdQuery(
    props.userId
  );

  useEffect(() => {
    if (isSuccess && data) {
      console.log(data);
      dispatch(setUserDetails(data));
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
