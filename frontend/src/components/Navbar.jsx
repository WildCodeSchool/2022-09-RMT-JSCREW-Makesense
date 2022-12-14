import React from "react";

import Logo from "@assets/logo.png";
import PictoHome from "@assets/home.png";
import PictoArchive from "@assets/archive.png";
import PictoDecision from "@assets/decision.png";
import PictoNotification from "@assets/notification.png";
import PictoLogout from "@assets/logout.png";

function Navbar() {
  return (
    <div className="flex justify-between">
      <img className="items-start p-2 w-80" src={Logo} alt="logo" />
      <div className="flex items-center">
        <img className="p-2 w-14 m-2" src={PictoHome} alt="logo1" />
        <img className="p-2 w-14 m-2" src={PictoArchive} alt="logo2" />
        <img className="p-2 w-14 m-2" src={PictoDecision} alt="logo3" />
        <img className="p-2 w-14 m-2" src={PictoNotification} alt="logo4" />
        <img className="p-2 w-14 m-2" src={PictoLogout} alt="logo5" />
      </div>
    </div>
  );
}

export default Navbar;
