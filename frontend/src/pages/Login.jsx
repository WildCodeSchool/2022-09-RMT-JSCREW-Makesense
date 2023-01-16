import React from "react";

import Logo from "@assets/logo1.svg";

function Login() {
  return (
    <div>
      <div className="flex justify-center h-100">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex justify-center card rounded-none">
        <form className="m-5">
          <div className="group m-3">
            <label htmlFor="login">Identifiant :</label>
            <br />
            <input
              className="border-2 border-500 w-80 rounded-lg outline-[#c8c8c8]"
              type="text"
              name="login"
            />
          </div>
          <div className="group m-3">
            <label htmlFor="password">Mot de passe :</label>
            <br />
            <input
              className="border-2 border-500 w-80 rounded-lg outline-[#c8c8c8]"
              type="password"
              name="password"
            />
          </div>
          <div className="group m-3 flex justify-center">
            <button
              className="mt-4 bg-gray-200 rounded-xl px-5 py-2 text-ml font-semibold text-gray-700 mr-2 mb-2"
              type="button"
            >
              Connexion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
