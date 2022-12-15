import { useState, useEffect } from "react";

import DecisionCard from "./DecisionCard";

function DecisionInProgressList({ search }) {
  const [decisionInProgressList, setDecisionInProgressList] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/decisionsMaking/?status=1`)
      .then((res) => res.json())
      .then((data) => setDecisionInProgressList(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-start font-bold text-3xl px-12 pt-8 pb-4">
          Décisions en cours
        </h1>
        <div className="px-2">
          <div className="flex -mx-2">
            <div className="w-1/3 px-2">
              {decisionInProgressList &&
                decisionInProgressList
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
    </div>
  );
}

export default DecisionInProgressList;
