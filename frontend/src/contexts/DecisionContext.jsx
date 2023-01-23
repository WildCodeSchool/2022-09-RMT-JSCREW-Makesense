import { createContext, useState } from "react";

const DecisionContext = createContext();

function DecisionProvider({ children }) {
  /**
   *maj state creation nouvelle decision
   * @param {string} position
   * @param {string} value
   */
  const [mainDecision, setMainDecision] = useState({
    title: "",
    description: "",
    impact: "",
    profit: "",
    risk: "",
  });

  /**
   *maj du state en fonction de son statut
   * @param {string} position
   * @param {string} value
   */
  const [experts, setExperts] = useState([]);
  const [impacted, setImpacted] = useState([]);

  /**
   *maj du state personnes experts choisi
   * @param {string} position
   * @param {string} value
   */
  const handleExpert = (addExpert) => {
    const newExpert = [...experts, addExpert];
    setExperts(newExpert);
  };

  /**
   *maj du state personnes impactées choisi
   * @param {string} position
   * @param {string} value
   */
  const handleImpacted = (addImpacted) => {
    const newImpacted = [...impacted, addImpacted];
    setImpacted(newImpacted);
  };

  /**
   *maj du state en fonction de la saisie
   * @param {string} position
   * @param {string} value
   */
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
