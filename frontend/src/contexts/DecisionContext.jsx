import { createContext, useState } from "react";

const DecisionContext = createContext();

function DecisionProvider({ children }) {
  const [mainDecision, setMainDecision] = useState({
    title: "",
    description: "",
    impact: "",
    profit: "",
    risk: "",
  });

  const [experts, setExperts] = useState([]);
  const [impacted, setImpacted] = useState([]);

  const handleMainDecision = (position, value) => {
    const newDecision = { ...mainDecision };
    newDecision[position] = value;
    setMainDecision(newDecision);
  };

  return (
    <DecisionContext.Provider
      value={{
        mainDecision,
        handleMainDecision,
        experts,
        setExperts,
        impacted,
        setImpacted,
      }}
    >
      {children}
    </DecisionContext.Provider>
  );
}
const ExportContextDecision = {
  DecisionContext,
  DecisionProvider,
};
export default ExportContextDecision;
