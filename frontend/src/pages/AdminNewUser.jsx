import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import apiConnexion from "../services/apiConnexion";
import "react-toastify/dist/ReactToastify.css";

function AdminNewUser() {
  const [user, setUser] = useState({
    user_username: "",
    user_firstname: "",
    user_lastname: "",
    user_mail: "",
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
        notify("Utilisateur ajouté!");
        setTimeout(() => navigate("/users"), 4000);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="w-11/12 ml-20">
        <h1 className="font-bold mt-5 mb-5 text-green-900">
          Renseigner un nouvel utilisateur
        </h1>
        <form action="">
          <div className="mb-8">
            <p className="mb-2">Identifiant</p>
            <input
              className="w-72 border-2 border-500 rounded-lg"
              type="text"
              name="user_username"
              required="required"
              value={user.user_username}
              onChange={(e) => handleNewUser(e.target.name, e.target.value)}
            />
          </div>
          <div className="flex justify-start">
            <div className="mb-8">
              <p className="mb-2">Prénom</p>
              <input
                className="border-2 border-500 rounded-lg mr-12"
                type="text"
                name="user_firstname"
                required="required"
                value={user.user_firstname}
                onChange={(e) => handleNewUser(e.target.name, e.target.value)}
              />
            </div>
            <div className="mb-8">
              <p className="mb-2">Nom</p>
              <input
                className="border-2 border-500 rounded-lg"
                type="text"
                name="user_lastname"
                required="required"
                value={user.user_lastname}
                onChange={(e) => handleNewUser(e.target.name, e.target.value)}
              />
            </div>
          </div>
          <div className="mb-8">
            <p className="mb-2">E-mail</p>
            <input
              className="w-72 border-2 border-500 rounded-lg"
              type="text"
              name="user_mail"
              required="required"
              value={user.user_mail}
              onChange={(e) => handleNewUser(e.target.name, e.target.value)}
            />
          </div>
          <div className="mb-8">
            <p className="mb-2">Mot de Passe</p>
            <input
              className="w-72 border-2 border-500 rounded-lg"
              type="text"
              name="user_password"
              required="required"
              value={user.user_password}
              onChange={(e) => handleNewUser(e.target.name, e.target.value)}
            />
          </div>
          <div className="mb-8">
            <p className="mb-2">Rôle</p>
            <div className="relative w-52 lg:max-w-sm">
              <select
                className="w-52 p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none"
                name="user_role"
                onChange={(e) => handleNewUser(e.target.name, e.target.value)}
              >
                <option value="administrateur">Administrateur</option>
                <option value="utilisateur">Utilisateur</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end w-7/12 mb-4">
            <Link
              to="/users"
              className="flex justify-center items-center bg-green-900 hover:bg-green-700 w-24 h-10 rounded-lg text-white"
            >
              Annuler
            </Link>
            <button
              type="submit"
              className="bg-green-900 hover:bg-green-700 w-24 h-10 ml-3 rounded-lg text-white"
              onClick={handleAddUser}
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
