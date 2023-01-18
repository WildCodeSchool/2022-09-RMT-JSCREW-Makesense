import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import apiConnexion from "../services/apiConnexion";
import editMeta from "../services/seo";

function AdminUsersList() {
  editMeta("Gestion des utilisateurs");

  const [usersList, setUsersList] = useState();

  useEffect(() => {
    apiConnexion
      .get(`${import.meta.env.VITE_BACKEND_URL}users`)
      .then((res) => {
        setUsersList(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleDeleteUser = (user) => {
    const newUserList = [...usersList];
    newUserList.splice(newUserList.indexOf(user), 1);
    setUsersList(newUserList);
  };

  const deleteUser = (user) => {
    apiConnexion
      .delete(`${import.meta.env.VITE_BACKEND_URL}users/${user.id}`)
      .then(() => handleDeleteUser(user));
  };

  return (
    <div className="h-[200vh] dark:bg-[#0c3944] dark:text-[#e7ebec]">
      <h1 className="flex justify-center font-bold text-3xl px-12 py-8 ">
        Gestion des utilisateurs
      </h1>
      <div className="flex justify-center pb-6">
        <Link
          to="/users/creation"
          className="dark:text-[#0c3944] bg-[#ced7da] rounded-xl px-5 py-2 text-ml font-semibold mr-2 mb-2"
        >
          Ajouter un utilisateur
        </Link>
      </div>
      <div className="flex justify-center">
        <table className="userslist">
          <tr className="border bg-[#e7ebec] dark:text-[#0c3944] font-bold">
            <th className="w-48">UTILISATEUR</th>
            <th className="w-48">EMAIL</th>
            <th className="w-48">RÔLE</th>
            <th className="w-32">SUPPRIMER</th>
          </tr>
          {usersList &&
            usersList.map((user) => (
              <tr className="border">
                <td className="p-1.5">
                  {user.firstname} {user.lastname}
                </td>
                <td>{user.email}</td>
                <td>
                  <div className="flex justify-center w-52">
                    <select
                      className="w-40 text-gray-500 border rounded-md shadow-sm outline-none"
                      name="user_role"
                      value={user.role}
                    >
                      <option value="admin">Administrateur</option>
                      <option value="user">Utilisateur</option>
                    </select>
                  </div>
                </td>
                <td>
                  <div className="flex justify-center">
                    <button
                      className="font-bold text-xl"
                      type="button"
                      onClick={() => deleteUser(user)}
                    >
                      X
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}

export default AdminUsersList;
