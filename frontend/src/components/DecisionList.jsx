import { useState, useEffect } from "react";
import apiConnexion from "../services/apiConnexion";

import DecisionCard from "./DecisionCard";

function DecisionList({ search, statusId, title }) {
  const [decisionList, setDecisionList] = useState();

  useEffect(() => {
    apiConnexion
      .get(`decisionsMaking/?status=${statusId}&search=${search}`)
      .then((res) => {
        setDecisionList(res.data);
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
          <div className="sm:flex w-full -mx-2">
            {decisionList &&
              decisionList.map((decisionsMaking) => (
                <DecisionCard
                  key={decisionsMaking.id}
                  decisionsMaking={decisionsMaking}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DecisionList;
