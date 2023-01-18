import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import apiConnexion from "../services/apiConnexion";
import User from "../contexts/User";

import Logo from "../assets/logo1.svg";

function Login() {
  const [connexion, setConnexion] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const userContext = useContext(User.UserContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setMessage("");
    const emailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pwdPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (
      emailPattern.test(connexion.email) &&
      pwdPattern.test(connexion.password)
    ) {
      apiConnexion
        .post("/login", { ...connexion })
        .then((res) => {
          navigate("/");
          userContext.handleUser(res.data);
        })
        .catch((err) => {
          setMessage(err.response.data);
        });
    } else {
      setMessage("Invalid credentials");
    }
  };
  return (
    <div className="h-[100vh] dark:bg-[#0c3944] dark:text-[#e7ebec]">
      <div className="flex justify-center py-10">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex justify-center card rounded-none">
        <form>
          <div className="group">
            <label htmlFor="login" className="group font-bold text-2xl">
              Adresse email
            </label>
            <br />
            <input
              className="mb-5 dark:bg-[#e7ebec] dark:text-[#0c3944] border-2 border-[#e7ebec] w-80 rounded-lg outline-[#ced7da] text-lg"
              id="email-address"
              name="email"
              type="email"
              value={connexion.email}
              onChange={(e) =>
                setConnexion({ ...connexion, email: e.target.value })
              }
              autoComplete="email"
              required
              placeholder="Adresse email"
            />
          </div>
          <div className="group">
            <label htmlFor="password" className="group font-bold text-2xl">
              Mot de passe
            </label>
            <br />
            <input
              className="mb-8 dark:bg-[#e7ebec] dark:text-[#0c3944] border-2 border-[#e7ebec] w-80 rounded-lg outline-[#ced7da] text-lg"
              id="password"
              name="password"
              type="password"
              value={connexion.password}
              onChange={(e) =>
                setConnexion({ ...connexion, password: e.target.value })
              }
              autoComplete="current-password"
              required
              placeholder="Mot de passe"
            />
          </div>
          <p>{message}</p>
          <div className="group m-3 flex justify-center">
            <button
              className="dark:text-[#0c3944] bg-[#ced7da] rounded-xl px-5 py-2 text-ml font-semibold mr-2 mb-2"
              type="button"
              onClick={handleSubmit}
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
