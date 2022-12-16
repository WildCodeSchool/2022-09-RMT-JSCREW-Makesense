import React from "react";

import Logo from "@assets/logo1.svg";
import PictoHome from "@assets/home.svg";
import PictoArchive from "@assets/archive.svg";
import PictoDecision from "@assets/decision.svg";
import PictoNotification from "@assets/notification.svg";
import PictoLogout from "@assets/logout.svg";

function Navbar() {
  return (
    <div className="flex justify-between pb-4 bg-gray-200">
      <img className="ml-10 p-2 pt-4 aspect-auto" src={Logo} alt="logo" />
      <div className="">
        <div className="inline-block text-center place-content-center items-center mr-4">
          <img
            className="inline place-content-center p-2 m-2"
            src={PictoHome}
            alt="logo1"
          />
          <p>Parcourir les décisions</p>
        </div>
        <div className="inline-block text-center place-content-center mr-4">
          <img
            className="inline place-content-center p-2 m-2"
            src={PictoArchive}
            alt="logo2"
          />
          <p>Archives</p>
        </div>
        <div className="inline-block text-center place-content-center mr-4">
          <img
            className="inline place-content-center p-2 m-2"
            src={PictoDecision}
            alt="logo3"
          />
          <p>Mes décisions</p>
        </div>
        <div className="inline-block text-center place-content-center mr-4">
          <img
            className="inline place-content-center p-2 m-2"
            src={PictoNotification}
            alt="logo4"
          />
          <p>Notifications</p>
        </div>
        <div className="inline-block text-center place-content-center mr-10">
          <img
            className="inline place-content-center p-2 m-2"
            src={PictoLogout}
            alt="logo5"
          />
          <p>Se déconnecter</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
