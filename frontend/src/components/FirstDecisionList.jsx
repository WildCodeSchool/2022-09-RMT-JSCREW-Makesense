import { useState, useEffect } from "react";

import DecisionCard from "./DecisionCard";

function FirstDecisionList() {
  const [firstDecisionList, setFirstDecisionsList] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/decisionsMaking/?status=2`)
      .then((res) => res.json())
      .then((data) => setFirstDecisionsList(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-start font-bold text-3xl px-12 pt-8 pb-4">
          Première décision prise
        </h1>
        <div className="px-2">
          <div className="flex -mx-2">
            <div className="w-1/3 px-2">
              {firstDecisionList &&
                firstDecisionList.map((decisionsMaking) => (
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

export default FirstDecisionList;
