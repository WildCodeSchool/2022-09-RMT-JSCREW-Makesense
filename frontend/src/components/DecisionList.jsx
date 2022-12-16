import { useState, useEffect } from "react";

import DecisionCard from "./DecisionCard";

function DecisionList({ search, statusId, title }) {
  const [decisionList, setDecisionList] = useState();

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/decisionsMaking/?status=${statusId}`
    )
      .then((res) => res.json())
      .then((data) => setDecisionList(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-start font-bold text-3xl px-12 pt-8 pb-4">
          {title}
        </h1>
        <div className="px-2">
          <div className="flex w-full -mx-2">
            {decisionList &&
              decisionList
                .filter(
                  (decisionsMaking) =>
                    decisionsMaking.title.includes(search) || search === ""
                )
                .map((decisionsMaking) => (
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
