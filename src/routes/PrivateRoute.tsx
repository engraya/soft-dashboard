import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isLoggedIn = true
  return !isLoggedIn  ? <Navigate to="/auth" /> : <Outlet />;
};

export default PrivateRoute;