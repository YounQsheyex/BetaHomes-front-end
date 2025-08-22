import React from "react";
import { useAppContext } from "../hooks/useAppContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { user } = useAppContext();
  if (!user) {
    return <Navigate to={"/sign-in"} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
