import React, { useState, useEffect, useContext } from "react";
import apiConnexion from "../services/apiConnexion";
import ExportContextDecision from "../contexts/DecisionContext";

function SearchPerson() {
  const [searchExpertInput, setSearchExpertInput] = useState();
  const [searchImpactedInput, setSearchImpactedInput] = useState();
  const [searchExpert, setSearchExpert] = useState();
  const [searchImpacted, setSearchImpacted] = useState();
  const { experts, handleExpert, impacted, handleImpacted } = useContext(
    ExportContextDecision.DecisionContext
  );

  const getUser = (value, callback) => {
    apiConnexion
      .get(`/users/list/?searchUser=${value}`)
      .then((usr) => callback(usr.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (searchExpertInput) {
      getUser(searchExpertInput, setSearchExpert);
    } else if (searchImpactedInput) {
      getUser(searchImpactedInput, setSearchImpacted);
    }
  }, [searchExpertInput, searchImpactedInput]);

  const handleSearchExpert = (e) => {
    const { value } = e.target;
    setSearchImpactedInput();
    setSearchImpacted();
    setSearchExpertInput(value);
  };

  const handleSearchImpacted = (e) => {
    const { value } = e.target;
    setSearchExpertInput();
    setSearchExpert();
    setSearchImpactedInput(value);
  };

  const handleExpertAdd = (user) => {
    handleExpert(user);
    setSearchExpert();
  };

  const handleImpactedAdd = (user) => {
    handleImpacted(user);
    setSearchImpacted();
  };

  return (
    <div>
      <div className="expertPerson mb-40">
        <p className="mb-2 font-semibold dark:text-[#e7ebec] text-xl">
          Personnes expertes*
        </p>
        <input
          className="dark:bg-[#ced7da] dark:text-[#0c3944] border-2 w-10/12 rounded-lg border-[#e7ebec] outline-[#ced7da]"
          type="text"
          onChange={handleSearchExpert}
          required
        />
        <div className="searchResults absolute">
          {searchExpert &&
            searchExpert.map((user) => {
              return (
                <button
                  type="button"
                  className="searchResult flex w-full bg-gray-300 p-2"
                  key={user.id}
                  onClick={() => handleExpertAdd(user)}
                >
                  {user.firstname} {user.lastname}
                </button>
              );
            })}
        </div>
        <div className="choosenExpert">
          <p className="mb-2 font-semibold dark:text-[#e7ebec] text-xl mt-5">
            Personnes expertes choisies
          </p>
          <div className="experts dark:bg-[#ced7da] dark:text-[#0c3944] border-2 border-500 w-full h-60 rounded-lg">
            {experts &&
              experts.map((expert) => {
                return (
                  <div className="">
                    <p className="">
                      - {expert.firstname} {expert.lastname}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="impactedPerson">
        <p className="mb-2 font-semibold dark:text-[#e7ebec] text-xl">
          Personnes impactées*
        </p>
        <input
          className="dark:bg-[#ced7da] dark:text-[#0c3944] border-2 w-10/12 rounded-lg border-[#e7ebec] outline-[#ced7da]"
          type="text"
          onChange={handleSearchImpacted}
          required
        />
        <div className="searchResults absolute">
          {searchImpacted &&
            searchImpacted.map((user) => {
              return (
                <button
                  type="button"
                  className="searchResult flex w-full bg-gray-300 p-2"
                  key={user.id}
                  onClick={() => handleImpactedAdd(user)}
                >
                  {user.firstname} {user.lastname}
                </button>
              );
            })}
        </div>
        <div className="choosenImpacted mt-5">
          <p className="mb-2 font-semibold dark:text-[#e7ebec] text-xl mt-5">
            Personnes impactées choisies
          </p>
          <div className="experts dark:bg-[#ced7da] dark:text-[#0c3944] border-2 border-500 w-full h-60 rounded-lg">
            {impacted &&
              impacted.map((impact) => {
                return (
                  <div className="">
                    <p className="">
                      - {impact.firstname} {impact.lastname}
                    </p>
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
