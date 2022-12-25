import React from "react";

import Logo from "@assets/logo1.svg";

function Authentification() {
  return (
    <div>
      <div className="flex justify-center">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex justify-center">
        <form className="m-5">
          <div className="group m-3">
            <label htmlFor="login">Identifiant :</label>
            <br />
            <input type="text" name="login" />
          </div>
          <div className="group m-3">
            <label htmlFor="password">Mot de passe :</label>
            <br />
            <input type="text" name="password" />
          </div>
          <div className="group m-3">
            <button type="button">Connexion</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Authentification;
