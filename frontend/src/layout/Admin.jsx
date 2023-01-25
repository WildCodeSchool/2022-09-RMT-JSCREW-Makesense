import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import User from "../contexts/User";

function Private() {
  const { user } = useContext(User.UserContext);

  if (user.role === "administrator") {
    return <Outlet />;
  }
  return <Navigate to="/home" replace />;
}

export default Private;
