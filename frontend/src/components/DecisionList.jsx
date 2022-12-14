import { useState, useEffect } from "react";

import DecisionCard from "./DecisionCard";

function DecisionList() {
  return (
    <div>
      <h3>Décisions en cours</h3>
      <div className="px-2">
        <div className="flex -mx-2">
          <div className="w-1/3 px-2">
            <DecisionCard />
          </div>
          <div className="w-1/3 px-2">
            <DecisionCard />
          </div>
          <div className="w-1/3 px-2">
            <DecisionCard />
          </div>
        </div>
      </div>
      <h3>Première décision prise</h3>
      <div className="px-2">
        <div className="flex -mx-2">
          <div className="w-1/3 px-2">
            <DecisionCard />
          </div>
          <div className="w-1/3 px-2">
            <DecisionCard />
          </div>
          <div className="w-1/3 px-2">
            <DecisionCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DecisionList;
