import React from "react";
import { useAppContext } from "../hooks/useAppContext";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "./Loader";

const ProtectedRoutes = () => {
  const { user, loading } = useAppContext();
  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to={"/sign-in"} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
