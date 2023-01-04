import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AdminUsersList() {
  const [usersList, setUsersList] = useState();

  useEffect(() => {
    axios
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
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}users/${user.id}`)
      .then(() => handleDeleteUser(user));
  };

  return (
    <div>
      <div className="flex justify-center mt-6 mb-6">
      <Link to="/adduser">
        <button
          type="submit"
          className="bg-green-900 hover:bg-green-700 w-48 h-10 rounded-lg text-white"
        >
          Ajouter un utilisateur
        </button>
        </Link>
      </div>
      <div className="flex justify-center">
        <table className="userslist">
          <tr className="border bg-slate-200">
            <th className="w-48">Utilisateur</th>
            <th className="w-48">E-mail</th>
            <th className="w-48">Rôle</th>
            <th className="w-32">Supprimer</th>
          </tr>
          {usersList &&
            usersList.map((user) => (
              <tr className="border">
                <td className="p-1.5">
                  {user.firstname} {user.lastname}
                </td>
                <td>{user.mail}</td>
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
                    <button type="button" onClick={() => deleteUser(user)}>
                      ❌
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
