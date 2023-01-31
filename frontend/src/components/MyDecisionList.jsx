import React, { useState, useContext, useEffect } from "react";
import User from "../contexts/User";
import apiConnexion from "../services/apiConnexion";
import DecisionCard from "./DecisionCard";

function MyDecisionList({ search, statusId, title, definitive }) {
  const [myDecisionList, setMyDecisionList] = useState();
  const { user } = useContext(User.UserContext);

  useEffect(() => {
    apiConnexion
      .get(
        `decisionsMaking/user/${user.id}?status=${statusId}&search=${search}`
      )
      .then((res) => {
        setMyDecisionList(res.data);
      })
      .catch((err) => console.error(err));
  }, [search]);
  return (
    <div>
      <div>
        <h1 className="text-start font-bold text-3xl px-6 sm:px-12 pt-8 pb-4 dark:text-[#e7ebec]">
          {title}
        </h1>
        <div className="px-2">
          <div className="sm:flex flex-wrap w-full -mx-2">
            {myDecisionList && myDecisionList.length > 0 ? (
              myDecisionList.map((decisionsMaking) => (
                <DecisionCard
                  key={decisionsMaking.id}
                  decisionsMaking={decisionsMaking}
                  definitive={definitive}
                />
              ))
            ) : (
              <p className="dark:text-[#e7ebec] text-lg px-6 sm:px-12">
                Aucune décision n'est disponible.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyDecisionList;
