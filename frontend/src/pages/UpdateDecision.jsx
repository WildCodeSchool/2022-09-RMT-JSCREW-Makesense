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
    <div className="w-11/12 ml-20">
      <h1 className="font-bold mb-5 text-green-900 mt-5">
        Modifier une prise de décision
      </h1>
      <div className="decision flex">
        <div className="writeDecision w-full">
          <div className="flex">
            <div className="w-full">
              <div className="flex">
                <div className="w-7/12">
                  <div className="mb-5 w-11/12">
                    <p className="mb-2">Titre de la décision*</p>
                    <input
                      className="border-2 w-8/12 rounded-lg outline-[#c8c8c8] bg-[#eeeeee] text-[#7a7a7a] cursor-not-allowed"
                      type="text"
                      id="decisionTitle"
                      name="title"
                      disabled="disabled"
                      required
                      value={decision.title}
                    />
                  </div>
                  <div className=" mb-5">
                    <p className="mb-2">Modification status de la décision*</p>
                    <select
                      onChange={(e) =>
                        handleDecision(e.target.name, e.target.value)
                      }
                      className="border-2 border-500 h-10  w-5/12 rounded-lg outline-[#c8c8c8] resize-none"
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
                  <div className="mb-5">
                    <p className="mb-2">Prise de la première décision*</p>
                    <textarea
                      className="border-2 border-500 h-80 w-full rounded-lg outline-[#c8c8c8] resize-none text-[#7a7a7a]"
                      type="text"
                      id="decisionDetail"
                      name="decision_description"
                      required
                      value={decision.premiereDecision}
                    />
                  </div>
                  <div className="mb-5">
                    <p className="mb-2">Descriptif de la décision*</p>
                    <textarea
                      className="border-2 border-500 h-80 w-full rounded-lg outline-[#c8c8c8] bg-gray-200 resize-none bg-[#eeeeee] text-[#7a7a7a] cursor-not-allowed"
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
              <div className="mb-5 w-full">
                <p className="mb-2">Impact sur l'organisation*</p>
                <textarea
                  className="border-2 border-500 h-80 w-7/12 rounded-lg outline-[#c8c8c8] resize-none bg-[#eeeeee] text-[#7a7a7a] cursor-not-allowed"
                  type="text"
                  id="impact"
                  name="decision_impact"
                  disabled="disabled"
                  required
                  value={decision.impact}
                />
              </div>
              <div className="mb-5">
                <p className="mb-2">Bénéfices*</p>
                <textarea
                  className="border-2 border-500 h-80  w-7/12 rounded-lg outline-[#c8c8c8] resize-none bg-[#eeeeee] text-[#7a7a7a] cursor-not-allowed"
                  type="text"
                  id="benefits"
                  name="decision_benefits"
                  disabled="disabled"
                  required
                  value={decision.profit}
                />
              </div>
              <div className=" mb-5">
                <p className="mb-2">Risques potentiels*</p>
                <textarea
                  className="border-2 border-500 h-80  w-7/12 rounded-lg outline-[#c8c8c8] resize-none bg-[#eeeeee] text-[#7a7a7a] cursor-not-allowed"
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
                  className="text-center w-28 bg-green-900 hover:bg-green-700 px-5 py-2 ml-10 rounded-lg text-white"
                >
                  Annuler
                </Link>
                <button
                  type="button"
                  onClick={(e) => handleSubmit(e.target.value)}
                  className="text-center w-28 bg-green-900 hover:bg-green-700 px-5 py-2 ml-10 rounded-lg text-white"
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
