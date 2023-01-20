import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import User from "../contexts/User";

function Private() {
  const { user } = useContext(User.UserContext);

  if (!user) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Private;
