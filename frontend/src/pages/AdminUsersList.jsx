import React from "react";

function AdminUsersList() {
  return (
    <div>
      <div className="flex justify-around mb-5 mt-20">
        <button
          type="submit"
          className="bg-green-900 hover:bg-green-700 w-48 h-10 rounded-lg text-white"
        >
          Ajouter un utilisateur
        </button>
        <button
          type="button"
          className="delete bg-red-500 hover:bg-red-400 w-48 h-10 rounded-lg text-white"
        >
          Supprimer un utilisateur
        </button>
      </div>
      <div className="flex justify-center">
        <table className="userslist mt-10">
          <tr className="border bg-slate-200">
            <th className="w-48">Nom</th>
            <th className="w-48">E-mail</th>
            <th className="w-48">Rôle</th>
            <th className="w-48">Sélectionner</th>
          </tr>
          <tr className="border">
            <td>Joy Markarian</td>
            <td>joymarkarian@mail.com</td>
            <td>
              <div className="flex justify-center w-52">
                <select
                  className="w-40 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                  name="user_role"
                >
                  <option value="administrateur">Administrateur</option>
                  <option value="utilisateur">Utilisateur</option>
                </select>
              </div>
            </td>
            <td>
              <div className="flex justify-center">
                <input type="checkbox" name="select" />
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default AdminUsersList;
