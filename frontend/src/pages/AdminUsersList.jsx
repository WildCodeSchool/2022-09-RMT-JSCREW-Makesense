import React, { useState, useEffect } from "react";
import axios from "axios";

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

  const deleteUser = (id) => {
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}users/${id}`);
  };

  return (
    <div>
      <div className="flex justify-around mb-5 mt-20">
        <button
          type="submit"
          className="bg-green-900 hover:bg-green-700 w-48 h-10 rounded-lg text-white"
        >
          Ajouter un utilisateur
        </button>
      </div>
      <div className="flex justify-center">
        <table className="userslist mt-10">
          <tr className="border bg-slate-200">
            <th className="w-48">Nom</th>
            <th className="w-48">E-mail</th>
            <th className="w-48">Rôle</th>
            <th className="w-48">Supprimer</th>
          </tr>
          {usersList &&
            usersList.map((user) => (
              <tr className="border">
                <td>
                  {user.firstname} {user.lastname}
                </td>
                <td>{user.mail}</td>
                <td>
                  <div className="flex justify-center w-52">
                    <select
                      className="w-40 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
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
                    <button type="button" onClick={() => deleteUser(user.id)}>
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
