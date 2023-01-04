import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

function UpdateDecision() {
  const [updateDecision, setUpdateDecision] = useState({
    decision_title: "",
    decision_description: "",
    decision_impact: "",
    decision_benefits: "",
    decision_risk: "",
  });
  const { id } = useParams();
  /**
   *maj du state en fonction de sa propriété
   * @param {string} position
   * @param {string} value
   */
  const handleUpdateDecision = (position, value) => {
    const newDecision = { ...updateDecision };
    newDecision[position] = value;
    setUpdateDecision(newDecision);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-11/12 ml-20">
      <h1 className="font-bold mb-5 text-green-900 mt-5">
        Modifier une prise de décision
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="decision flex">
          <div className="writeDecision w-full">
            <div className="flex">
              <div className="w-full">
                <div className="flex">
                  <div className="w-7/12">
                    <div className="mb-5 w-11/12">
                      <p className="mb-2">Titre de la décision*</p>
                      <input
                        className="border-2 w-8/12 rounded-lg outline-[#c8c8c8] bg-gray-200"
                        type="text"
                        id="decisionTitle"
                        name="decision_title"
                        disabled="disabled"
                        required
                        value={updateDecision.decision_title}
                      />
                    </div>
                    <div className="mb-5">
                      <p className="mb-2">Descriptif de la décision*</p>
                      <textarea
                        className="border-2 border-500 h-80 w-full rounded-lg outline-[#c8c8c8] bg-gray-200 resize-none"
                        type="text"
                        id="decisionDetail"
                        name="decision_description"
                        disabled="disabled"
                        required
                        value={updateDecision.decision_description}
                        onChange={(e) =>
                          handleUpdateDecision(e.target.name, e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-5 w-full">
                  <p className="mb-2">Impact sur l'organisation*</p>
                  <textarea
                    className="border-2 border-500 h-80 w-7/12 rounded-lg outline-[#c8c8c8] resize-none"
                    type="text"
                    id="impact"
                    name="decision_impact"
                    required
                    value={updateDecision.decision_impact}
                    onChange={(e) =>
                      handleUpdateDecision(e.target.name, e.target.value)
                    }
                  />
                </div>
                <div className="mb-5">
                  <p className="mb-2">Bénéfices*</p>
                  <textarea
                    className="border-2 border-500 h-80  w-7/12 rounded-lg outline-[#c8c8c8] resize-none"
                    type="text"
                    id="benefits"
                    name="decision_benefits"
                    required
                    value={updateDecision.decision_benefits}
                    onChange={(e) =>
                      handleUpdateDecision(e.target.name, e.target.value)
                    }
                  />
                </div>
                <div className=" mb-5">
                  <p className="mb-2">Risques potentiels*</p>
                  <textarea
                    className="border-2 border-500 h-80  w-7/12 rounded-lg outline-[#c8c8c8] resize-none"
                    type="text"
                    id="decisionTitle"
                    name="decision_risk"
                    required
                    value={updateDecision.decision_risk}
                    onChange={(e) =>
                      handleUpdateDecision(e.target.name, e.target.value)
                    }
                  />
                </div>
                <div className="flex justify-end w-7/12 mb-5">
                  <Link
                    to={`/onedecision/${id}`}
                    className="text-center w-28  bg-green-900 hover:bg-green-700 px-5 py-2 ml-10 rounded-lg text-white"
                  >
                    Annuler
                  </Link>
                  <Link
                    to={`/onedecision/${id}`}
                    className="text-center w-28 bg-green-900 hover:bg-green-700 px-5 py-2 ml-10 rounded-lg text-white"
                  >
                    Valider
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateDecision;
