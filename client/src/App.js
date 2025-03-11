import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Error from "./components/Error";
import Signup from "./components/Signup";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import Setup from "./components/Setup";
import Contest from "./components/Contest";
import { Provider, useDispatch, useSelector } from "react-redux";

import React from "react";
import store from "./utils/store";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Outlet />
    </Provider>
  );
};

const ProtectedRoute = () => {
  console.log("PROTECTED ROUTE");
  const isAuthenticated = !!sessionStorage.getItem("auth"); // !! means converting some string or int value to boolean value i.e first ! changes to opposite bool value and the other ! again changes the bool value to original
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <HomePage userId={sessionStorage.getItem("userId")} />;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/landingpage",
        element: <LandingPage />,
        errorElement: <Error />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
      },
      {
        path: "/signup",
        element: <Signup />,
        errorElement: <Error />,
      },
      {
        path: "/setup",
        element: <Setup />,
        errorElement: <Error />,
      },

      {
        path: "/user",
        element: <ProtectedRoute />,
        errorElement: <Error />,
        children: [
          {
            path: "/user",
            element: <Feed />,
            errorElement: <Error />,
          },
          {
            path: "/user/profile",
            element: <Profile />,
            errorElement: <Error />,
          },
          {
            path: "/user/contest",
            element: <Contest />,
            errorElement: <Error />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//const element = React.createElement("h1", {}, "abc");
root.render(<RouterProvider router={appRouter} />);
