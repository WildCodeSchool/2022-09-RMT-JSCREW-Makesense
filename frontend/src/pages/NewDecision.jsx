import React, { useState } from "react";

function NewDecision() {
  const [handleDecisionTitle, setHandleDecisonTitle] = useState("");
  const [handleDecisionDescription, setHandleDecisionDescription] =
    useState("");
  const [handleImpact, setHandleImpact] = useState("");
  const [handleBenefits, setHandleBenefits] = useState("");
  const [handleRisk, setHandleRisk] = useState("");
  const [handleDecisionDate, setHandleDecisionDate] = useState("mydate");

  const handleDecisionInput = (e) => {
    setHandleDecisonTitle(e.target.value);
  };
  const handleDescriptionInput = (e) => {
    setHandleDecisionDescription(e.target.value);
  };
  const handleImpactInput = (e) => {
    setHandleImpact(e.target.value);
  };
  const handleBenefitsInput = (e) => {
    setHandleBenefits(e.target.value);
  };
  const handleRiskInput = (e) => {
    setHandleRisk(e.target.value);
  };
  const handleDecisionDateInput = (e) => {
    setHandleDecisionDate(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-11/12 ml-20">
      <h1 className="font-bold mb-5 text-green-900">
        Créer une prise de décision
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex">
          <div className="w-full">
            <div className="flex">
              <div className="w-7/12">
                <div className="mb-5 w-11/12">
                  <p className="mb-2">Titre de la décision</p>
                  <input
                    className="border border-500 w-8/12 rounded-lg"
                    type="text"
                    id="decisionTitle"
                    name="decisionTitle"
                    value={handleDecisionTitle}
                    onChange={handleDecisionInput}
                  />
                </div>
                <div className=" mb-5">
                  <p className="mb-2">Descriptif de la décision</p>
                  <input
                    className="border border-500 h-80 w-full rounded-lg"
                    type="text"
                    id="decisionDetail"
                    name="decisionDetail"
                    value={handleDecisionDescription}
                    onChange={handleDescriptionInput}
                  />
                </div>
              </div>
              <div className="w-4/12 text-center">
                <div className="mb-20">
                  <p className="mb-2">Saisie date</p>
                  <input
                    className="border border-500 w-8/12 rounded-lg"
                    type="date"
                    value={handleDecisionDate}
                    onChange={handleDecisionDateInput}
                  />
                </div>
                <div className="mb-2 ">
                  <p className="mb-2">Personnes expertes</p>
                  <input
                    className="border border-500 rounded-lg w-8/12"
                    type="text"
                  />
                </div>
                <div className="mb-5">
                  <p className="mb-2">Personnes impactées</p>
                  <input
                    className="border border-500 rounded-lg w-8/12"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="mb-5 w-full">
              <p className="mb-2">Impact sur l'organisation</p>
              <input
                className="border border-500 h-80 w-7/12 rounded-lg"
                type="text"
                id="impact"
                name="impact"
                value={handleImpact}
                onChange={handleImpactInput}
              />
            </div>
            <div className=" mb-5">
              <p className="mb-2">Bénéfices</p>
              <input
                className="border border-500 h-80  w-7/12 rounded-lg"
                type="text"
                id="benefits"
                name="benefits"
                value={handleBenefits}
                onChange={handleBenefitsInput}
              />
            </div>
            <div className=" mb-5">
              <p className="mb-2">Risques potentiels</p>
              <input
                className="border border-500 h-80  w-7/12 rounded-lg"
                type="text"
                id="decisionTitle"
                name="decisionTitle"
                value={handleRisk}
                onChange={handleRiskInput}
              />
            </div>
            <div className="flex justify-end w-7/12">
              <button
                type="submit"
                className="bg-green-900 hover:bg-green-700 w-3/12 h-10 rounded-lg text-white"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="bg-green-900 hover:bg-green-700 w-3/12 h-10 ml-3 rounded-lg text-white"
              >
                Valider
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewDecision;
