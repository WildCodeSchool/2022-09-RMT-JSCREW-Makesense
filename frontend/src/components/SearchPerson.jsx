import React, { useState, useEffect, useContext } from "react";
import apiConnexion from "../services/apiConnexion";
import ExportContextDecision from "../contexts/DecisionContext";

function SearchPerson() {
  const [searchExpertInput, setSearchExpertInput] = useState();
  const [searchImpactedInput, setSearchImpactedInput] = useState();
  const [searchExpert, setSearchExpert] = useState();
  const [searchImpacted, setSearchImpacted] = useState();
  const {
    experts,
    impacted,
    handleExpert,
    handleImpacted,
    handleDeleteExperts,
    handleDeleteImpacted,
  } = useContext(ExportContextDecision.DecisionContext);

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

  /** Fonction de recherche personnes expertes */
  const handleSearchExpert = (e) => {
    const { value } = e.target;
    setSearchImpactedInput();
    setSearchImpacted();
    setSearchExpertInput(value);
  };

  /** Fonction de recherche personnes impactées */
  const handleSearchImpacted = (e) => {
    const { value } = e.target;
    setSearchExpertInput();
    setSearchExpert();
    setSearchImpactedInput(value);
  };

  /** Fonction d'ajout personnes expertes */
  const handleExpertAdd = (user) => {
    handleExpert(user);
    setSearchExpert();
  };

  /** Fonction d'ajout personnes impactées */
  const handleImpactedAdd = (user) => {
    handleImpacted(user);
    setSearchImpacted();
  };

  return (
    <div>
      <div className="expertPerson mb-8">
        <p className="mb-2 font-semibold dark:text-[#e7ebec] text-xl">
          Personne(s) experte(s)*
        </p>
        <input
          className="dark:bg-[#ced7da] dark:text-[#0c3944] border-2 w-10/12 rounded-lg border-[#e7ebec] outline-[#ced7da]"
          type="text"
          onChange={handleSearchExpert}
        />
        <div className="searchResults absolute">
          {searchExpert &&
            searchExpert.map((user) => {
              return (
                <button
                  type="button"
                  className="searchResult flex w-full bg-gray-300 p-2 dark:text-[#0c3944]"
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
            Personne(s) experte(s) choisie(s)
          </p>
          <div className="experts dark:bg-[#ced7da] dark:text-[#0c3944] border-2 border-500 w-full h-60 rounded-lg overflow-x-auto">
            {experts &&
              experts.map((expert) => {
                return (
                  <div className="flex">
                    <p className="w-8/12">
                      - {expert.firstname} {expert.lastname}
                    </p>
                    <button
                      className="font-bold"
                      type="button"
                      onClick={() => handleDeleteExperts(expert)}
                    >
                      X
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="impactedPerson">
        <p className="mb-2 font-semibold dark:text-[#e7ebec] text-xl">
          Personne(s) impactée(s)*
        </p>
        <input
          className="dark:bg-[#ced7da] dark:text-[#0c3944] border-2 w-10/12 rounded-lg border-[#e7ebec] outline-[#ced7da]"
          type="text"
          onChange={handleSearchImpacted}
        />
        <div className="searchResults absolute">
          {searchImpacted &&
            searchImpacted.map((user) => {
              return (
                <button
                  type="button"
                  className="searchResult flex w-full bg-gray-300 dark:text-[#0c3944] p-2"
                  key={user.id}
                  onClick={() => handleImpactedAdd(user)}
                >
                  {user.firstname} {user.lastname}
                </button>
              );
            })}
        </div>
        <div className="choosenImpacted my-5">
          <p className="mb-2 font-semibold dark:text-[#e7ebec] text-xl mt-5">
            Personne(s) impactée(s) choisie(s)
          </p>
          <div className="experts dark:bg-[#ced7da] dark:text-[#0c3944] border-2 border-500 w-full h-60 rounded-lg overflow-x-auto">
            {impacted &&
              impacted.map((impact) => {
                return (
                  <div className="flex">
                    <p className="w-8/12">
                      - {impact.firstname} {impact.lastname}
                    </p>
                    <button
                      className="font-bold"
                      type="button"
                      onClick={() => handleDeleteImpacted(impact)}
                    >
                      X
                    </button>
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
