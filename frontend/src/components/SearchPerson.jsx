import React, { useState, useEffect } from "react";
import apiConnexion from "../services/apiConnexion";

function SearchPerson() {
  const [users, setUsers] = useState();
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    if (searchUser !== "") {
      apiConnexion
        .get(`/users/list/?searchUser=${searchUser}`)
        .then((usr) => setUsers(usr.data))
        .catch((err) => console.error(err));
    } else {
      setUsers();
    }
  }, [searchUser]);

  const handleSearchUser = (e) => {
    const { value } = e.target;
    setSearchUser(value);
  };

  return (
    <div>
      <div className="searchBar">
        <input
          className="dark:bg-[#ced7da] dark:text-[#0c3944] border-2 w-10/12 rounded-lg border-[#e7ebec] outline-[#ced7daa] text-lg"
          type="text"
          onChange={handleSearchUser}
          required
        />
      </div>
      <div className="searchResults absolute border-2 border-[#e5e7eb] rounded-lg bg-[#e5e7eb] dark:text-[#0c3944] dark:border-[#9eb0b4] dark:bg-[#9eb0b4]">
        {users &&
          users.map((user) => {
            return (
              <button
                type="button"
                className="searchResult flex w-full  p-3"
                key={user.id}
              >
                {user.firstname} {user.lastname}
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default SearchPerson;
