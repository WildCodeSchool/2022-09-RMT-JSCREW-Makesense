import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

import apiConnexion from "../services/apiConnexion";
import editMeta from "../services/seo";

import "react-toastify/dist/ReactToastify.css";

function AdminNewUser() {
  editMeta("Renseigner un nouvel utilisateur");

  const [hidePassword, setHidePassword] = useState(true);

  const [user, setUser] = useState({
    user_firstname: "",
    user_lastname: "",
    user_email: "",
    user_password: "",
    user_role: "administrateur",
  });

  const handleNewUser = (position, value) => {
    const newUser = { ...user };
    newUser[position] = value;
    setUser(newUser);
  };

  const notify = (msg) => {
    toast(msg);
  };

  const navigate = useNavigate();

  const handleAddUser = (e) => {
    e.preventDefault();
    apiConnexion
      .post(`/users`, {
        ...user,
      })
      .then(() => {
        notify(
          `L'utilisateur "${user.user_firstname} ${user.user_lastname}" a été ajouté.`
        );
        setTimeout(() => navigate("/users"), 3000);
      })
      .catch((err) => console.error(err));
  };

  function showPassword() {
    setHidePassword(!hidePassword);
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="dark:bg-[#0c3944] dark:text-[#e7ebec] px-12">
        <h1 className="font-bold text-3xl py-6">
          Renseigner un nouvel utilisateur
        </h1>
        <form onSubmit={handleAddUser}>
          <div>
            <p className="pb-3 text-xs">* Champs obligatoires</p>
          </div>
          <div className="flex justify-start">
            <div className="pr-5">
              <p className="pb-2 text-xl">Prénom*</p>
              <input
                className="dark:bg-[#e7ebec] dark:text-[#0c3944] border-2 w-9/10 rounded-lg border-[#e7ebec] outline-[#ced7da] mb-6 text-lg"
                type="text"
                name="user_firstname"
                required="required"
                placeholder="Saisir le prénom"
                value={user.user_firstname}
                onChange={(e) => handleNewUser(e.target.name, e.target.value)}
              />
            </div>
            <div>
              <p className="pb-2 text-xl">Nom*</p>
              <input
                className="dark:bg-[#e7ebec] dark:text-[#0c3944] border-2 w-9/10 rounded-lg border-[#e7ebec] outline-[#ced7da] mb-6 text-lg"
                type="text"
                name="user_lastname"
                required="required"
                placeholder="Saisir le nom"
                value={user.user_lastname}
                onChange={(e) => handleNewUser(e.target.name, e.target.value)}
              />
            </div>
          </div>
          <div>
            <p className="pb-2 text-xl">Email*</p>
            <input
              className="dark:bg-[#e7ebec] dark:text-[#0c3944] border-2 w-1/4 rounded-lg border-[#e7ebec] outline-[#ced7da] mb-6 text-lg"
              type="text"
              name="user_email"
              required="required"
              placeholder="Saisir l'email"
              value={user.user_email}
              onChange={(e) => handleNewUser(e.target.name, e.target.value)}
            />
          </div>
          <div>
            <p className="pb-2 text-xl">Mot de passe*</p>
            <div className="flex flex-row">
              <div>
                {hidePassword ? (
                  <input
                    className="dark:bg-[#e7ebec] dark:text-[#0c3944] border-2 w-full rounded-lg border-[#e7ebec] outline-[#ced7da] mb-2 text-lg"
                    type="password"
                    name="user_password"
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                    required="required"
                    placeholder="Saisir le mot de passe"
                    value={user.user_password}
                    onChange={(e) =>
                      handleNewUser(e.target.name, e.target.value)
                    }
                  />
                ) : (
                  <input
                    className="dark:bg-[#e7ebec] dark:text-[#0c3944] border-2 w-full rounded-lg border-[#e7ebec] outline-[#ced7da] mb-2 text-lg"
                    type="text"
                    name="user_password"
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                    required="required"
                    placeholder="Saisir le mot de passe"
                    value={user.user_password}
                    onChange={(e) =>
                      handleNewUser(e.target.name, e.target.value)
                    }
                  />
                )}
              </div>
              <div>
                {hidePassword ? (
                  <button
                    className="w-[20px] h-[20px] ml-2 mt-1.5"
                    onClick={showPassword}
                    type="button"
                  >
                    <img
                      src="https://www.svgrepo.com/show/384356/close-cross-eye-hidden-vision.svg"
                      alt="eyeCross"
                    />
                  </button>
                ) : (
                  <button
                    className="w-[20px] h-[20px] ml-2 mt-1.5"
                    onClick={showPassword}
                    type="button"
                  >
                    <img
                      src="https://www.svgrepo.com/show/384342/eye-look-show-view-visible-visiblity.svg"
                      alt="eyeOpen"
                    />
                  </button>
                )}
              </div>
            </div>
            <p className="mb-4 text-xs">
              Le mot de passe doit contenir au minimum 8 caractères, à savoir :
              au moins une lettre minuscule, une lettre majuscule et un chiffre.
            </p>
          </div>
          <div>
            <p className="pb-4 text-xl">Rôle*</p>
            <div className="relative w-52 lg:max-w-sm">
              <select
                className="p-2.5 text-[#3d6169] bg-white border rounded-md border-[#b6c4c7] shadow-sm outline-none dark:bg-[#e7ebec] mb-10"
                name="user_role"
                onChange={(e) => handleNewUser(e.target.name, e.target.value)}
              >
                <option value="administrator">Administrateur</option>
                <option value="user">Utilisateur</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center pb-5">
            <Link
              to="/users"
              className="dark:text-[#0c3944] bg-[#ced7da] rounded-xl px-5 py-2 text-ml font-semibold mr-2"
            >
              Annuler
            </Link>
            <button
              type="submit"
              className="dark:text-[#0c3944] bg-[#ced7da] rounded-xl px-5 py-2 text-ml font-semibold mr-2"
            >
              Valider
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AdminNewUser;
