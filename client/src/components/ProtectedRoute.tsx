import { Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const AUTH_KEY = "token";
const USER_ID_KEY = "userId";

const ProtectedRoute = () => {

  const token = Cookies.get(AUTH_KEY);
  const isAuthenticated = !!token // !! means converting some string or int value to boolean value i.e first ! changes to opposite bool value and the other ! again changes the bool value to original

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  console.log(isAuthenticated);
  
  return (
    <>
    <Outlet/>
    </>
    
  );
};

export default ProtectedRoute;