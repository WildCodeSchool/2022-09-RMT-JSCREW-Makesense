import React from "react";
import { Link } from "react-router-dom";

import Logo from "@assets/logo1.svg";
import PictoHome from "@assets/home.svg";
import PictoArchive from "@assets/archive.svg";
import PictoDecision from "@assets/decision.svg";
import PictoNotification from "@assets/notification.svg";
import PictoLogout from "@assets/logout.svg";
import PictoUsers from "@assets/users.svg";

import DarkModeButton from "./DarkModeButton";

function Navbar() {
  return (
    <div className="flex justify-between pb-1 bg-gray-200">
      <Link to="/">
        <img className="ml-10 mt-3 aspect-auto" src={Logo} alt="logo" />
      </Link>
      <div className="mt-3">
        <DarkModeButton />
      </div>
      <div>
        <div className="inline-block text-center place-content-center items-center mr-4">
          <Link to="/">
            <img
              className="inline place-content-center p-1 m-1"
              src={PictoHome}
              alt="home"
            />
            <p>Parcourir les décisions</p>
          </Link>
        </div>
        <div className="inline-block text-center place-content-center mr-4">
          <img
            className="inline place-content-center p-1 m-1"
            src={PictoDecision}
            alt="decisions"
          />
          <p>Mes décisions</p>
        </div>
        <div className="inline-block text-center place-content-center mr-4">
          <Link to="/archives">
            <img
              className="inline place-content-center p-1 m-1"
              src={PictoArchive}
              alt="archives"
            />
            <p>Archives</p>
          </Link>
        </div>
        <div className="inline-block text-center place-content-center mr-4">
          <img
            className="inline place-content-center m-1"
            src={PictoUsers}
            alt="users"
          />
          <p>Gestion des utilisateurs</p>
        </div>
        <div className="inline-block text-center place-content-center mr-4">
          <img
            className="inline place-content-center m-1"
            src={PictoNotification}
            alt="notifications"
          />
          <p>Notifications</p>
        </div>
        <div className="inline-block text-center place-content-center mr-10">
          <img
            className="inline place-content-center p-1 m-1"
            src={PictoLogout}
            alt="logout"
          />
          <p>Se déconnecter</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
