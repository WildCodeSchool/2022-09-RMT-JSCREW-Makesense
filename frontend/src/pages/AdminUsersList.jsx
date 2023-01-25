import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Toast from "@components/Toast";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import apiConnexion from "../services/apiConnexion";
import "react-toastify/dist/ReactToastify.css";
import editMeta from "../services/seo";

function AdminUsersList() {
  editMeta("Gestion des utilisateurs");

  const [usersList, setUsersList] = useState();

  const notify = (msg) => {
    toast(msg);
  };

  /** Fonction pour éditer le rôle de l'utilisateur */
  const editUserRole = (user) => {
    apiConnexion
      .put(`/users/${user.id}`, { role: user.role })
      .then(() => {
        notify(
          `Le rôle de l'utilisateur "${user.firstname} ${user.lastname}" a été modifié.`
        );
      })
      .catch((err) => console.error(err));
  };

  /** Fonction pour modifier le rôle de l'utilisateur */
  const handleNewRole = (user, value) => {
    const newUser = [...usersList];
    const userToEdit = newUser.find((usr) => usr === user);
    userToEdit.role = value;
    setUsersList(newUser);
    editUserRole(userToEdit);
  };

  /** Fonction qui récupère tous les utilisateurs de la base de donnée */
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

  /**  Fonction pour supprimer un utilisateur avec notification par toastify */
  const deleteUser = (user) => {
    apiConnexion
      .delete(`${import.meta.env.VITE_BACKEND_URL}users/${user.id}`)
      .then(() => handleDeleteUser(user))
      .then(() => {
        notify(
          `L'utilisateur "${user.firstname} ${user.lastname}" a été supprimé.`
        );
      })
      .catch((err) => console.error(err));
  };

  /** Fonction qui alerte par un modal de confirmation la suppression ou le changement de rôle */
  const submit = (user, value = null) => {
    confirmAlert({
      title:
        value === null
          ? "Confirmer la suppression"
          : "Confirmer le changement de rôle",
      buttons: [
        {
          label: "Oui",
          onClick: () =>
            value === null ? deleteUser(user) : handleNewRole(user, value),
        },
        {
          label: "Non",
        },
      ],
    });
  };

  return (
    <>
      <Toast />
      <div className="h-min-screen dark:bg-[#0c3944] dark:text-[#e7ebec] py-8">
        <h1 className="flex justify-center font-bold text-3xl sm:px-12 pb-6">
          Gestion des utilisateurs
        </h1>
        <div className="flex justify-center pb-6">
          <Link
            to="/admin/users/creation"
            className="dark:text-[#0c3944] bg-[#ced7da] rounded-xl px-5 py-2 text-ml font-semibold mr-2 mb-2"
          >
            Ajouter un utilisateur
          </Link>
        </div>
        <div className="flex justify-center">
          <table className="userslist">
            <tr className="border bg-[#e7ebec] dark:text-[#0c3944] font-bold">
              <th className="w-48">UTILISATEURS</th>
              <th className="w-48 hidden sm:inline-table">EMAIL</th>
              <th className="sm:w-48">RÔLE</th>
              <th className="w-32">SUPPRIMER</th>
            </tr>
            {usersList &&
              usersList.map((user) => (
                <tr className="border">
                  <td className="p-1.5">
                    {user.firstname} {user.lastname}
                  </td>
                  <td className="hidden sm:inline-table">{user.email}</td>
                  <td>
                    <div className="flex justify-center sm:w-52">
                      <select
                        className="sm:w-40 text-gray-500 border rounded-md shadow-sm outline-none"
                        name="user_role"
                        value={user.role}
                        onChange={(e) => submit(user, e.target.value)}
                      >
                        <option value="administrator">Administrateur</option>
                        <option value="user">Utilisateur</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <button
                        className="font-bold text-xl"
                        type="button"
                        onClick={() => submit(user)}
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
    </>
  );
}

export default AdminUsersList;
