/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "@assets/logo1.svg";
import PictoHome from "@assets/home.svg";
import PictoArchive from "@assets/archive.svg";
import PictoDecision from "@assets/decision.svg";
import PictoLogout from "@assets/logout.svg";
import PictoUsers from "@assets/users.svg";
import User from "../contexts/User";

import DarkModeButton from "./DarkModeButton";

function Navbar() {
  const { user, handleUser } = useContext(User.UserContext);
  const navigate = useNavigate();
  const handleLogOut = (e) => {
    handleUser(null);
    navigate("/");
  };
  return (
    <div
      id="navbar"
      className="flex justify-between pb-1 bg-[#ced7da] dark:bg-[#6d888f] dark:text-[#e7ebec] font-bold"
    >
      <Link to="/home">
        <img className="ml-10 mt-3 aspect-auto" src={Logo} alt="logo" />
      </Link>
      <div className="mt-3">
        <DarkModeButton />
      </div>
      <div>
        <div className="inline-block text-center place-content-center items-center mr-4">
          <Link to="/home">
            <img
              className="inline place-content-center p-1 m-1"
              src={PictoHome}
              alt="logo1"
            />
            <p>Parcourir les décisions</p>
          </Link>
        </div>
        <div className="inline-block text-center place-content-center mr-4">
          <img
            className="inline place-content-center p-1 m-1"
            src={PictoDecision}
            alt="logo2"
          />
          <p>Mes décisions</p>
        </div>
        <div className="inline-block text-center place-content-center mr-4">
          <Link to="/archives">
            <img
              className="inline place-content-center p-1 m-1"
              src={PictoArchive}
              alt="logo3"
            />
            <p>Archives</p>
          </Link>
        </div>
        {user?.role === "administrator" && (
          <div className="inline-block text-center place-content-center mr-4">
            <Link to="/admin/users">
              <img
                className="inline place-content-center m-1"
                src={PictoUsers}
                alt="users"
              />
              <p>Gestion des utilisateurs</p>
            </Link>
          </div>
        )}
        <button
          type="button"
          onClick={handleLogOut}
          className="text-center place-content-center mr-10"
        >
          <img className="ml-9 p-1 m-1" src={PictoLogout} alt="logo6" />
          <p>Se déconnecter</p>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
