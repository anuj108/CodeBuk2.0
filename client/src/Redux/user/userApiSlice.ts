import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

console.log("user");
export const userApi = createApi({
  reducerPath: "userApi",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      // Get the token from session storage
      const token = sessionStorage.getItem("auth");
      console.log("Token:", token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => `/user`,
    }),
    getUserById: builder.query({
      query: (userId) => {
        console.log(userId)
        return `/user/${userId}`;
      },
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetUserQuery, useGetUserByIdQuery } = userApi;
