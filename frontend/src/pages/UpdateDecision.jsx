import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import apiConnexion from "../services/apiConnexion";

function UpdateDecision() {
  const { id } = useParams();

  const [decision, setDecision] = useState([]);

  const getDecision = () => {
    apiConnexion
      .get(`decisionsMaking/${id}`)
      .then((res) => {
        setDecision(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getDecision();
  }, []);

  const handleDecision = (position, value) => {
    const newDecision = { ...decision };
    newDecision[position] = value;
    setDecision(newDecision);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="dark:bg-[#0c3944] dark:text-[#e7ebec] px-12">
      <h1 className="font-bold text-3xl py-8">
        Modifier une prise de décision
      </h1>
      <div className="decision flex">
        <div className="writeDecision w-full">
          <div className="flex">
            <div className="w-full">
              <div className="flex">
                <div className="w-7/12">
                  <div className="w-11/12">
                    <p className="pb-4 text-xl font-bold">
                      Titre de la décision
                    </p>
                    <input
                      className="p-2 cursor-not-allowed text-[#a2a5a5] border-2  w-full rounded-lg outline-[#ced7da] resize-none mb-10 text-lg"
                      type="text"
                      id="decisionTitle"
                      name="title"
                      disabled="disabled"
                      required
                      value={decision.title}
                    />
                  </div>
                  <div>
                    <p className="pb-4 text-xl font-bold">
                      Statut de la décision
                    </p>
                    <select
                      onChange={(e) =>
                        handleDecision(e.target.name, e.target.value)
                      }
                      className="p-2.5 text-[#3d6169] bg-white border rounded-md border-[#b6c4c7] shadow-sm outline-none dark:bg-[#e7ebec] mb-10"
                      type="text"
                      id="decisionStatus"
                      name="status"
                      required
                      value={decision.status}
                    >
                      <option value="1">Prise de décision commencée</option>
                      <option value="2">Première décision prise</option>
                      <option value="3">Décision archivée</option>
                    </select>
                  </div>
                  <div>
                    <p className="pb-4 text-xl font-bold">
                      Prise de la première décision
                    </p>
                    <textarea
                      className="p-2 dark:text-[#0c3944] dark:bg-[#e7ebec] border-2 h-80 w-full border-[#e7ebec] rounded-lg outline-[#ced7da] resize-none mb-10 text-lg"
                      type="text"
                      id="decisionDetail"
                      name="decision_description"
                      required
                      value={decision.premiereDecision}
                    />
                  </div>
                  <div>
                    <p className="pb-4 text-xl font-bold">
                      Descriptif de la décision
                    </p>
                    <textarea
                      className="p-2 cursor-not-allowed text-[#a2a5a5] border-2 h-80 w-full rounded-lg outline-[#ced7da] resize-none mb-10 text-lg"
                      type="text"
                      id="decisionDetail"
                      name="decision_description"
                      disabled="disabled"
                      required
                      value={decision.description}
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="pb-4 text-xl font-bold">
                  Impacts sur l'organisation
                </p>
                <textarea
                  className="p-2 cursor-not-allowed w-7/12 text-[#a2a5a5] border-2 h-80 w-full rounded-lg outline-[#ced7da] resize-none mb-10 text-lg"
                  type="text"
                  id="impact"
                  name="decision_impact"
                  disabled="disabled"
                  required
                  value={decision.impact}
                />
              </div>
              <div>
                <p className="pb-4 text-xl font-bold">Bénéfices</p>
                <textarea
                  className="p-2 cursor-not-allowed w-7/12 text-[#a2a5a5] border-2 h-80 w-full rounded-lg outline-[#ced7da] resize-none mb-10 text-lg"
                  type="text"
                  id="benefits"
                  name="decision_benefits"
                  disabled="disabled"
                  required
                  value={decision.profit}
                />
              </div>
              <div>
                <p className="pb-4 text-xl font-bold">Risques potentiels</p>
                <textarea
                  className="p-2 cursor-not-allowed w-7/12 text-[#a2a5a5] border-2 h-80 w-full rounded-lg outline-[#ced7da] resize-none mb-10 text-lg"
                  type="text"
                  id="decisionTitle"
                  name="decision_risk"
                  disabled="disabled"
                  required
                  value={decision.risk}
                />
              </div>
              <div className="flex justify-end w-7/12 mb-5">
                <Link
                  to={`/decision/${id}`}
                  className="dark:text-[#0c3944] bg-[#ced7da] rounded-xl px-5 py-2 text-ml font-semibold mr-2 mb-2"
                >
                  Annuler
                </Link>
                <button
                  type="button"
                  onClick={(e) => handleSubmit(e.target.value)}
                  className="dark:text-[#0c3944] bg-[#ced7da] rounded-xl px-5 py-2 text-ml font-semibold mr-2 mb-2"
                >
                  Valider
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateDecision;
