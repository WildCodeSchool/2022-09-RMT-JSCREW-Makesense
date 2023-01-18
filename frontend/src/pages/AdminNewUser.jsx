import React, { useState } from "react";
import { Link } from "react-router-dom";

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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="dark:bg-[#0c3944] dark:text-[#e7ebec] px-12 ">
      <h1 className="font-bold text-3xl py-8">
        Renseigner un nouvel utilisateur
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <p className="pb-4 text-xl">Identifiant</p>
          <input
            className="dark:bg-[#e7ebec] dark:text-[#0c3944] border-2 w-1/4 rounded-lg border-[#e7ebec] outline-[#ced7da] mb-10 text-lg"
            type="text"
            name="user_username"
            required="required"
            value={user.user_username}
            onChange={(e) => handleNewUser(e.target.name, e.target.value)}
          />
        </div>
        <div className="flex justify-start">
          <div>
            <p className="pb-4 text-xl">Prénom</p>
            <input
              className="dark:bg-[#e7ebec] dark:text-[#0c3944] border-2 w-9/10 rounded-lg border-[#e7ebec] outline-[#ced7da] mb-10 text-lg mr-5"
              type="text"
              name="user_firstname"
              required="required"
              value={user.user_firstname}
              onChange={(e) => handleNewUser(e.target.name, e.target.value)}
            />
          </div>
          <div>
            <p className="pb-4 text-xl">Nom</p>
            <input
              className="dark:bg-[#e7ebec] dark:text-[#0c3944] border-2 w-9/10 rounded-lg border-[#e7ebec] outline-[#ced7da] mb-10 text-lg"
              type="text"
              name="user_lastname"
              required="required"
              value={user.user_lastname}
              onChange={(e) => handleNewUser(e.target.name, e.target.value)}
            />
          </div>
        </div>
        <div>
          <p className="pb-4 text-xl">Email</p>
          <input
            className="dark:bg-[#e7ebec] dark:text-[#0c3944] border-2 w-1/4 rounded-lg border-[#e7ebec] outline-[#ced7da] mb-10 text-lg"
            type="text"
            name="user_mail"
            required="required"
            value={user.user_mail}
            onChange={(e) => handleNewUser(e.target.name, e.target.value)}
          />
        </div>
        <div>
          <p className="pb-4 text-xl">Mot de passe</p>
          <input
            className="dark:bg-[#e7ebec] dark:text-[#0c3944] border-2 w-1/4 rounded-lg border-[#e7ebec] outline-[#ced7da] mb-10 text-lg"
            type="text"
            name="user_password"
            required="required"
            value={user.user_password}
            onChange={(e) => handleNewUser(e.target.name, e.target.value)}
          />
        </div>
        <div>
          <p className="pb-4 text-xl">Rôle</p>
          <div className="relative w-1/4 lg:max-w-sm">
            <select
              className="p-2.5 text-[#3d6169] bg-white border rounded-md border-[#b6c4c7] shadow-sm outline-none dark:bg-[#e7ebec] mb-10"
              name="user_role"
              onChange={(e) => handleNewUser(e.target.name, e.target.value)}
            >
              <option value="administrateur">Administrateur</option>
              <option value="utilisateur">Utilisateur</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center mb-5">
          <Link
            to="/users"
            className="dark:text-[#0c3944] bg-[#ced7da] rounded-xl px-5 py-2 text-ml font-semibold mr-2 mb-2"
          >
            Annuler
          </Link>
          <button
            type="submit"
            className="dark:text-[#0c3944] bg-[#ced7da] rounded-xl px-5 py-2 text-ml font-semibold mr-2 mb-2"
          >
            Valider
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminNewUser;
