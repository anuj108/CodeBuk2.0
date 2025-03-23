import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

console.log(sessionStorage.getItem("auth"));
export const postSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "post",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      // Get the token from session storage
      const token = sessionStorage.getItem("auth");
      console.log("Token:", token);
      if (token) {
        // Set the Authorization header if a token is available
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getPosts: builder.query<Post[], number>({
      // The URL for the request is '/fakeApi/posts'
      query: (skip) => `/post?skip=${skip}`,
    }),
  }),
});

interface Post {
  _id: string;
  first_name: string;
  last_name: string;
  postImage: string;
  summary: string;
  profilePhoto: string;
}

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetPostsQuery } = postSlice;
