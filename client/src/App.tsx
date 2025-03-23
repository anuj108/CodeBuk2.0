import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
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

import store from "./Redux/store";

const AppLayout = () => {
  return (  
    <Provider store={store}>
      <Outlet />
    </Provider>
  );
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
        element: (
          <ProtectedRoute/>
        ),
        errorElement: <Error />,
        children: [
          {
              path:"",
              element:<HomePage/>,
              errorElement: <Error/>,
              children:[
                {
                  path: "",
                  element: <Feed />,
                  errorElement: <Error />,
                },
                {
                  path: "profile",
                  element: <Profile />,
                  errorElement: <Error />,
                },
                {
                  path: "contest",
                  element: <Contest />,
                  errorElement: <Error />,
                }
              ]
          }
        ],
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<RouterProvider router={appRouter} />);
}
