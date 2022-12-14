import React from "react";

function NewDecision() {
  return (
    <div className="w-11/12 ml-20">
      <h1 className="font-bold mb-5 text-green-900">
        Créer une prise de décision
      </h1>
      <form action="">
        <div className="flex ">
          <div className="w-4/6">
            <div className=" mb-5">
              <p className="mb-2">Titre de la décison</p>
              <input
                className="border border-500 w-2/4 rounded-lg"
                type="text"
              />
            </div>
            <div className=" mb-5">
              <p className="mb-2">Descriptif de la décision</p>
              <input
                className="border border-500 h-80 w-full rounded-lg"
                type="text"
              />
            </div>
            <div className=" mb-5">
              <p className="mb-2">Impact sur l'organisation</p>
              <input
                className="border border-500 h-80 w-full rounded-lg"
                type="text"
              />
            </div>
            <div className=" mb-5">
              <p className="mb-2">Bénéfices</p>
              <input
                className="border border-500 h-80 w-full rounded-lg"
                type="text"
              />
            </div>
            <div className=" mb-5">
              <p className="mb-2">Risques potentiels</p>
              <input
                className="border border-500 h-80 w-full rounded-lg"
                type="text"
              />
            </div>
            <div className="flex justify-end">
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
      </form>
    </div>
  );
}

export default NewDecision;
