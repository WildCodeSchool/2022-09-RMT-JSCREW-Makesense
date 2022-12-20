import React, { useState, useEffect } from "react";
import apiConnexion from "../services/apiConnexion";

function SearchPerson() {
  const [users, setUsers] = useState();
  const [searchUser, setSearchUser] = useState("");
  useEffect(() => {
    apiConnexion
      .get(`/users/list/?searchUser=${searchUser}`)
      .then((usr) => setUsers(usr.data))
      .catch((err) => console.error(err));
  }, [searchUser]);
  const handleSearchUser = (e) => {
    const { value } = e.target;
    setSearchUser(value);
  };
  return (
    <div>
      <div className="searchBar">
        <input
          className="border-2 border-500 rounded-lg w-8/12 outline-[#c8c8c8]"
          type="text"
          onChange={handleSearchUser}
          required
        />
      </div>
      <div className="searchResults">
        {users &&
          users.map((user) => {
            return (
              <ul className="searchResult " key={user.id}>
                {user.firstname} {user.lastname}
              </ul>
            );
          })}
      </div>
    </div>
  );
}

export default SearchPerson;
