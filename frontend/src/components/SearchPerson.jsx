import React, { useState, useEffect, useContext } from "react";
import apiConnexion from "../services/apiConnexion";
import ExportContextDecision from "../contexts/DecisionContext";

function SearchPerson() {
  const [users, setUsers] = useState();
  const [searchUser, setSearchUser] = useState("");
  const { experts, handleExpert, impacted, handleImpacted } = useContext(
    ExportContextDecision.DecisionContext
  );

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

  const handleSearchExpert = (e) => {
    const { value } = e.target;
    setSearchUser(value);
  };

  const handleSearchImpacted = (e) => {
    const { value } = e.target;
    setSearchUser(value);
  };

  return (
    <div>
      <div className="expertPerson mb-40">
        <p className="mb-2">Personnes expertes*</p>
        <input
          className="border-2 border-500 rounded-lg w-full outline-[#c8c8c8]"
          type="text"
          onChange={handleSearchExpert}
          required
        />
        <div className="searchResults absolute">
          {users &&
            users.map((user) => {
              return (
                <button
                  type="button"
                  className="searchResult flex w-full bg-gray-300 p-2"
                  key={user.id}
                  onClick={() => handleExpert(user)}
                >
                  {user.firstname} {user.lastname}
                </button>
              );
            })}
        </div>
        <div className="choosenExpert">
          <p className="mb-2 mt-5">Personnes expertes choisies</p>
          <div className="experts border-2 border-500 w-full h-60 rounded-lg bg-red-300">
            {experts &&
              experts.map((expert) => {
                return (
                  <div className="text-4xl">
                    {expert.firstname} {expert.lastname}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="impactedPerson">
        <p className="mb-2">Personnes impactées*</p>
        <input
          className="border-2 border-500 rounded-lg w-full outline-[#c8c8c8]"
          type="text"
          onChange={handleSearchImpacted}
          required
        />
        <div className="searchResults absolute">
          {users &&
            users.map((user) => {
              return (
                <button
                  type="button"
                  className="searchResult flex w-full bg-gray-300 p-2"
                  key={user.id}
                  onClick={() => handleImpacted(user)}
                >
                  {user.firstname} {user.lastname}
                </button>
              );
            })}
        </div>
        <div className="choosenImpacted mt-5">
          <p className="mb-2">Personnes impactées choisies</p>
          <div className="experts border-2 border-500 w-full h-60 rounded-lg bg-green-300">
            {impacted &&
              impacted.map((impact) => {
                return (
                  <div className="text-4xl">
                    {impact.firstname} {impact.lastname}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPerson;
