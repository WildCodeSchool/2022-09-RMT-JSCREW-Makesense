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
    const emailPattern = /^[^s@]+@[^s@]+.[^s@]+$/;
    const pwdPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
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
    <div>
      <div className="flex justify-center h-100">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex justify-center card rounded-none">
        <form className="m-5">
          <div className="group m-3">
            <label htmlFor="login">Adresse email :</label>
            <br />
            <input
              className="border-2 border-500 w-80 rounded-lg outline-[#c8c8c8]"
              id="email-address"
              name="email"
              type="email"
              value={connexion.email}
              onChange={(e) =>
                setConnexion({ ...connexion, email: e.target.value })()
              }
              autoComplete="email"
              required
              placeholder="Adresse email"
            />
          </div>
          <div className="group m-3">
            <label htmlFor="password">Mot de passe :</label>
            <br />
            <input
              className="border-2 border-500 w-80 rounded-lg outline-[#c8c8c8]"
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
              className="mt-4 bg-gray-200 rounded-xl px-5 py-2 text-ml font-semibold text-gray-700 mr-2 mb-2"
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
