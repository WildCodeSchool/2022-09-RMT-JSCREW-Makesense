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

  const handleExpert = (addExpert) => {
    const newExpert = [...experts, addExpert];
    setExperts(newExpert);
  };

  const handleImpacted = (addImpacted) => {
    const newImpacted = [...impacted, addImpacted];
    setImpacted(newImpacted);
  };

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
        handleExpert,
        impacted,
        handleImpacted,
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
