import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import apiConnexion from "../services/apiConnexion";
import User from "../contexts/User";
import editMeta from "../services/seo";

import Logo from "../assets/logo1.svg";

function Login() {
  editMeta("Connexion");

  const [connexion, setConnexion] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const userContext = useContext(User.UserContext);
  const navigate = useNavigate();

  function showPassword() {
    setHidePassword(!hidePassword);
  }

  const handleSubmit = (route) => {
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
          navigate(route);
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
    <div className="min-h-screen">
      <div className="flex justify-center h-100 pt-10">
        <img src={Logo} alt="Logo" />
      </div>
      <h1 className="flex justify-center font-bold text-4xl pt-16 py-8">
        Connexion
      </h1>
      <div className="flex justify-center card rounded-none ml-8 mr-3">
        <form>
          <div className="group">
            <input
              className="mb-5 pl-3 border-2 border-[#e7ebec] w-80 rounded-lg outline-[#ced7da] text-lg"
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
          <div className="group flex flex-row">
            <input
              className="mb-3 pl-3 border-2 border-[#e7ebec] w-80 rounded-lg outline-[#ced7da] text-lg"
              id="password"
              name="password"
              type={hidePassword ? "password" : "text"}
              value={connexion.password}
              onChange={(e) =>
                setConnexion({ ...connexion, password: e.target.value })
              }
              autoComplete="current-password"
              required
              placeholder="Mot de passe"
            />
            <div>
              <button
                className="w-[20px] h-[20px] ml-2 mt-1.5"
                onClick={showPassword}
                type="button"
              >
                {hidePassword ? (
                  <img
                    src="https://www.svgrepo.com/show/384356/close-cross-eye-hidden-vision.svg"
                    alt="eyeCross"
                  />
                ) : (
                  <img
                    src="https://www.svgrepo.com/show/384342/eye-look-show-view-visible-visiblity.svg"
                    alt="eyeOpen"
                  />
                )}
              </button>
            </div>
          </div>
          <button
            className="text-center"
            type="button"
            onClick={() => handleSubmit("/password/edition")}
          >
            <p className="mb-5 text-sm">Modifier le mot de passe</p>
          </button>
          <p>{message}</p>
          <div className="group m-3 flex justify-center">
            <button
              className="bg-[#ced7da] rounded-xl px-5 py-2 text-ml font-semibold mr-4 mb-2"
              type="button"
              onClick={() => handleSubmit("/home")}
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
