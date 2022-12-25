import React from "react";

import Logo from "@assets/logo1.svg";

function Authentification() {
  return (
    <div>
      <div className="flex justify-center">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex justify-center card rounded-none">
        <form className="m-5">
          <div className="group m-3">
            <label htmlFor="login">Identifiant :</label>
            <br />
            <input
              className="border-2 border-500 w-12/12 rounded-lg outline-[#c8c8c8]"
              type="text"
              name="login"
            />
          </div>
          <div className="group m-3">
            <label htmlFor="password">Mot de passe :</label>
            <br />
            <input
              className="border-2 border-500 w-12/12 rounded-lg outline-[#c8c8c8]"
              type="text"
              name="password"
            />
          </div>
          <div className="group m-3 flex justify-center">
            <button type="button">Connexion</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Authentification;
