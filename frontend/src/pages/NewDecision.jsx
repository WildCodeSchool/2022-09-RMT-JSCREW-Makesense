import React, { useState } from "react";

function NewDecision() {
  const [handleChange, setHandleChange] = useState("");
  const handleInput = (e) => {
    setHandleChange(e.target.value);
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
                    value={handleChange}
                    onChange={handleInput}
                  />
                </div>
                <div className=" mb-5">
                  <p className="mb-2">Descriptif de la décision</p>
                  <input
                    className="border border-500 h-80 w-full rounded-lg"
                    type="text"
                    id="decisionDetail"
                    name="decisionDetail"
                  />
                </div>
              </div>
              <div className="w-4/12 text-center">
                <div className="mb-20">
                  <p className="mb-2">Saisie date</p>
                  <input
                    className="border border-500 w-6/12 rounded-lg"
                    type="date"
                  />
                </div>
                <div className="mb-2 ">
                  <p className="mb-2">Personnes expertes</p>
                  <input
                    className="border border-500 rounded-lg w-6/12"
                    type="text"
                  />
                </div>
                <div className="mb-5">
                  <p className="mb-2">Personnes impactées</p>
                  <input
                    className="border border-500 rounded-lg w-6/12"
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
              />
            </div>
            <div className=" mb-5">
              <p className="mb-2">Bénéfices</p>
              <input
                className="border border-500 h-80  w-7/12 rounded-lg"
                type="text"
                id="benefits"
                name="benefits"
              />
            </div>
            <div className=" mb-5">
              <p className="mb-2">Risques potentiels</p>
              <input
                className="border border-500 h-80  w-7/12 rounded-lg"
                type="text"
                id="decisionTitle"
                name="decisionTitle"
              />
            </div>
            <div className="flex justify-end w-7/12">
              <button
                type="submit"
                className="bg-green-900 hover:bg-green-700 w-2/12 h-10 rounded-lg text-white"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="bg-green-900 hover:bg-green-700 w-2/12 h-10 ml-3 rounded-lg text-white"
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
