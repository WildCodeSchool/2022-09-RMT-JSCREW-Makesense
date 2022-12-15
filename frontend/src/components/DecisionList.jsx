import { useState, useEffect } from "react";

import DecisionCard from "./DecisionCard";

function DecisionList() {
  const [decisionList, setDecisionsList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5005/decisionsMaking`)
      .then((res) => res.json())
      .then((data) => setDecisionsList(data))
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
              {decisionList &&
                decisionList
                  .filter(
                    (decisionsMaking) =>
                      decisionsMaking.decisionStatus ===
                      "Prise de décision commencée"
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
      <div>
        <h1 className="text-start font-bold text-3xl px-12 pt-8 pb-4">
          Première décision prise
        </h1>
        <div className="px-2">
          <div className="flex -mx-2">
            <div className="w-1/3 px-2">
              {decisionList &&
                decisionList
                  .filter(
                    (decisionsMaking) =>
                      decisionsMaking.decisionStatus ===
                      "Première décision prise"
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

export default DecisionList;
