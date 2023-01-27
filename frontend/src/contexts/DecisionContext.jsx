import { createContext, useState } from "react";
import apiConnexion from "@services/apiConnexion";

const DecisionContext = createContext();

function DecisionProvider({ children }) {
  /** Maj state creation nouvelle decision */
  const [mainDecision, setMainDecision] = useState({
    title: "",
    description: "",
    impact: "",
    profit: "",
    risk: "",
  });

  /** State en fonction du statut */
  const [experts, setExperts] = useState([]);
  const [impacted, setImpacted] = useState([]);

  /**
   * Maj du state personnes expertes choisies
   * @param {object} addExpert
   */
  const handleExpert = (addExpert) => {
    if (!experts.some((exp) => exp.id === addExpert.id)) {
      const newExpert = [...experts, addExpert];
      setExperts(newExpert);
    }
  };

  /**
   * Maj du state personnes impactées choisies
   * @param {object} addImpacted
   */
  const handleImpacted = (addImpacted) => {
    if (!impacted.some((imp) => imp.id === addImpacted.id)) {
      const newImpacted = [...impacted, addImpacted];
      setImpacted(newImpacted);
    }
  };

  /**
   * Maj du state en fonction de la saisie
   * @param {string} position
   * @param {string} value
   */
  const handleMainDecision = (position, value) => {
    const newDecision = { ...mainDecision };
    newDecision[position] = value;
    setMainDecision(newDecision);
  };

  /**
   * Fonction suppression d'un expert choisi
   * @param {array} expert
   */
  const handleDeleteExperts = (expert) => {
    const newExpertList = [...experts];
    newExpertList.splice(newExpertList.indexOf(expert), 1);
    setExperts(newExpertList);
  };

  /**
   * Fonction suppression d'une personne impactée choisie
   * @param {array} impact
   */
  const handleDeleteImpacted = (impact) => {
    const newImpactedList = [...impacted];
    newImpactedList.splice(newImpactedList.indexOf(impact), 1);
    setImpacted(newImpactedList);
  };

  /** Fonction création d'une nouvelle décision */
  const createNewDecision = () => {
    return apiConnexion
      .post("/decisionsMaking", {
        ...mainDecision,
        experts,
        impacted,
      })
      .then((res) => res)
      .catch((error) => error);
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
        createNewDecision,
        handleDeleteExperts,
        handleDeleteImpacted,
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
