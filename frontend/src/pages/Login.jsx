import React from "react";

import Logo from "@assets/logo1.svg";

function Login() {
  return (
    <div className="h-[100vh] dark:bg-[#0c3944] dark:text-[#e7ebec]">
      <div className="flex justify-center py-10">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex justify-center card rounded-none ">
        <form className="">
          <div className="group">
            <label htmlFor="login" className="group font-bold text-2xl">
              Identifiant
            </label>
            <br />
            <input
              className="mb-5 dark:bg-[#e7ebec] dark:text-[#0c3944] border-2 border-[#e7ebec] w-80 rounded-lg outline-[#ced7da] text-lg"
              type="text"
              name="login"
            />
          </div>
          <div className="group">
            <label htmlFor="password" className="group font-bold text-2xl">
              Mot de passe
            </label>
            <br />
            <input
              className="mb-8 dark:bg-[#e7ebec] dark:text-[#0c3944] border-2 border-[#e7ebec] w-80 rounded-lg outline-[#ced7da] text-lg"
              type="password"
              name="password"
            />
          </div>
          <div className="group flex justify-center">
            <button
              className="dark:text-[#0c3944] bg-[#ced7da] rounded-xl px-5 py-2 text-ml font-semibold mr-2 mb-2"
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
