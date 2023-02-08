import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Toast from "@components/Toast";
import apiConnexion from "../services/apiConnexion";
import User from "../contexts/User";
import editMeta from "../services/seo";

import Logo from "../assets/logo1.svg";

function UpdatePassword() {
  editMeta("Changement mot de passe");

  const userContext = useContext(User.UserContext);

  const [user, setUser] = useState({
    oldPassword: "",
    password: "",
    confirmPassword: "",
    email: userContext.user.email,
  });
  const [message, setMessage] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePassword2, setHidePassword2] = useState(true);
  const [hidePassword3, setHidePassword3] = useState(true);
  const navigate = useNavigate();

  /* logique de l'affichage du mot de passe actuel */

  function showPassword() {
    setHidePassword(!hidePassword);
  }

  /* logique de l'affichage du nouveau mot de passe */

  function showPassword2() {
    setHidePassword2(!hidePassword2);
  }

  /* logique de l'affichage confirmation du mot de passe */

  function showPassword3() {
    setHidePassword3(!hidePassword3);
  }

  /* récupération du nouveau mot de passe */

  const handleNewPassword = (position, value) => {
    const newPassword = { ...user };
    newPassword[position] = value;
    setUser(newPassword);
  };

  /* vérification du nouveau mot de passe via pattern Regex
   * envoi du nouveau mot de passe en back
   * notification de l'envoi par toastify
   */

  const handleSubmit = () => {
    setMessage("");
    const pwdPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (user.password === user.confirmPassword) {
      if (pwdPattern.test(user.password)) {
        apiConnexion
          .put("/password", {
            oldPassword: user.oldPassword,
            password: user.password,
            email: user.email,
          })
          .then((res) => {
            toast(`Votre mot de passe a bien été modifié.`);
            setTimeout(() => navigate("/home"), 2500);
            userContext.handleNewPassword(res.data);
          })
          .catch((err) => {
            setMessage(err.response.data || "");
          });
      } else {
        setMessage("Invalid credentials");
      }
    } else {
      setMessage("Assurez-vous que les deux mots de passe soient identiques");
    }
  };

  return (
    <div className="min-h-screen">
      <Toast />
      <div className="flex justify-center h-100 pt-10">
        <img src={Logo} alt="Logo" />
      </div>
      <h1 className="flex justify-center font-bold text-2xl pt-16 py-8">
        Modifier votre mot de passe
      </h1>
      <div className="flex justify-center card rounded-none ml-8">
        <form>
          <div className="group">
            <input
              className="mb-5 pl-3 border-2 border-[#e7ebec] w-80 rounded-lg outline-[#ced7da] text-lg"
              id="email-address"
              name="email"
              type="email"
              value={userContext.user.email}
              autoComplete="email"
              readOnly
              required
              placeholder="Adresse email"
            />
          </div>
          <div className="group flex flex-row">
            <input
              className="mb-8 pl-3 border-2 border-[#e7ebec] w-80 rounded-lg outline-[#ced7da] text-lg"
              id="password"
              name="oldPassword"
              type={hidePassword ? "password" : "text"}
              value={user.oldPassword}
              onChange={(e) => handleNewPassword(e.target.name, e.target.value)}
              autoComplete="current-password"
              required
              placeholder="Mot de passe actuel"
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
          <div className="group flex flex-row">
            <input
              className="mb-8 pl-3 border-2 border-[#e7ebec] w-80 rounded-lg outline-[#ced7da] text-lg"
              id="password"
              name="password"
              type={hidePassword2 ? "password" : "text"}
              value={user.password}
              onChange={(e) => handleNewPassword(e.target.name, e.target.value)}
              autoComplete="current-password"
              required
              placeholder="Nouveau mot de passe"
            />
            <div>
              <button
                className="w-[20px] h-[20px] ml-2 mt-1.5"
                onClick={showPassword2}
                type="button"
              >
                {hidePassword2 ? (
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
          <div className="group flex flex-row">
            <input
              className="mb-8 pl-3 border-2 border-[#e7ebec] w-80 rounded-lg outline-[#ced7da] text-lg"
              id="password"
              name="confirmPassword"
              type={hidePassword3 ? "password" : "text"}
              value={user.confirmPassword}
              onChange={(e) => handleNewPassword(e.target.name, e.target.value)}
              autoComplete="current-password"
              required
              placeholder="Confirmer nouveau mot de passe"
            />
            <div>
              <button
                className="w-[20px] h-[20px] ml-2 mt-1.5"
                onClick={showPassword3}
                type="button"
              >
                {hidePassword3 ? (
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
          <p>{message}</p>
          <div className="group m-3 flex justify-center">
            <button
              className="bg-[#ced7da] rounded-xl px-5 py-2 text-ml font-semibold mr-4 mb-2"
              type="button"
              onClick={handleSubmit}
            >
              Valider
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdatePassword;
