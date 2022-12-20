import React from "react";

import Logo from "@assets/logo1.svg";
import PictoHome from "@assets/home.svg";
import PictoArchive from "@assets/archive.svg";
import PictoDecision from "@assets/decision.svg";
import PictoNotification from "@assets/notification.svg";
import PictoLogout from "@assets/logout.svg";
import PictoUsers from "@assets/users.svg";

function Navbar() {
  return (
    <div className="flex justify-between pb-1 bg-gray-200">
      <img className="ml-10 aspect-auto" src={Logo} alt="logo" />
      <div>
        <div className="inline-block text-center place-content-center items-center mr-4">
          <img
            className="inline place-content-center p-1 m-1"
            src={PictoHome}
            alt="home"
          />
          <p>Parcourir les décisions</p>
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
          <img
            className="inline place-content-center p-1 m-1"
            src={PictoArchive}
            alt="archives"
          />
          <p>Archives</p>
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
