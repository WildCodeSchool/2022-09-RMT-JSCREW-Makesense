import React, { useState } from "react";

function AdminNewUser() {
  const [user, setUser] = useState({
    user_identifiant: "",
    user_prenom: "",
    user_nom: "",
    user_email: "",
    user_motdepasse: "",
    user_role: "administrateur",
  });

  const handleNewUser = (txtmsg, value) => {
    const newUser = { ...user };
    newUser[txtmsg] = value;
    setUser(newUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-11/12 ml-20">
      <h1 className="font-bold mt-5 mb-5 text-green-900">
        Renseigner un nouvel utilisateur
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-8">
          <p className="mb-2">Identifiant</p>
          <input
            className="w-72 border-2 border-500 rounded-lg"
            type="text"
            name="user_identifiant"
            required="required"
            value={user.user_identifiant}
            onChange={(e) => handleNewUser(e.target.name, e.target.value)}
          />
        </div>
        <div className="flex justify-start">
          <div className="mb-8">
            <p className="mb-2">Prénom</p>
            <input
              className="border-2 border-500 rounded-lg mr-12"
              type="text"
              name="user_prenom"
              required="required"
              value={user.user_prenom}
              onChange={(e) => handleNewUser(e.target.name, e.target.value)}
            />
          </div>
          <div className="mb-8">
            <p className="mb-2">Nom</p>
            <input
              className="border-2 border-500 rounded-lg"
              type="text"
              name="user_nom"
              required="required"
              value={user.user_nom}
              onChange={(e) => handleNewUser(e.target.name, e.target.value)}
            />
          </div>
        </div>
        <div className="mb-8">
          <p className="mb-2">E-mail</p>
          <input
            className="w-72 border-2 border-500 rounded-lg"
            type="text"
            name="user_email"
            required="required"
            value={user.user_email}
            onChange={(e) => handleNewUser(e.target.name, e.target.value)}
          />
        </div>
        <div className="mb-8">
          <p className="mb-2">Mot de Passe</p>
          <input
            className="w-72 border-2 border-500 rounded-lg"
            type="text"
            name="user_motdepasse"
            required="required"
            value={user.user_motdepasse}
            onChange={(e) => handleNewUser(e.target.name, e.target.value)}
          />
        </div>
        <div className="mb-8">
          <p className="mb-2">Rôle</p>
          <div className="relative w-52 lg:max-w-sm">
            <select
              className="w-52 p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              name="user_role"
              onChange={(e) => handleNewUser(e.target.name, e.target.value)}
            >
              <option value="administrateur">Administrateur</option>
              <option value="utilisateur">Utilisateur</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end w-7/12 mb-4">
          <button
            type="submit"
            className="bg-green-900 hover:bg-green-700 w-24 h-10 rounded-lg text-white"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="bg-green-900 hover:bg-green-700 w-24 h-10 ml-3 rounded-lg text-white"
          >
            Valider
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminNewUser;
