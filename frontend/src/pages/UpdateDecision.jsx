import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams, Link, useNavigate } from "react-router-dom";
import apiConnexion from "../services/apiConnexion";

function UpdateDecision() {
  const navigate = useNavigate();
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
    apiConnexion
      .put(`/decision/${id}/update`, {
        decisionStatus_id: decision.decisionStatus_id,
        firstDecision: decision.firstDecision,
        finalDecision: decision.finalDecision,
      })
      .then(() => {
        toast.success("Décision modifiée avec succès !");
        setTimeout(() => navigate(`/decision/${id}`), 2500);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div className="dark:bg-[#0c3944] dark:text-[#e7ebec] px-6 sm:px-12">
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h1 className="font-bold text-3xl py-8">
        Modifier une prise de décision
      </h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="decision flex">
          <div className="writeDecision w-full">
            <div className="flex">
              <div className="w-full">
                <div className="flex">
                  <div className="sm:w-7/12">
                    <div className="sm:w-11/12">
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
                        className="p-2.5 text-[#3d6169] cursor-not-allowed bg-white border rounded-md border-[#b6c4c7] shadow-sm outline-none dark:bg-[#e7ebec] mb-10"
                        type="text"
                        id="decisionStatus"
                        name="decisionStatus_id"
                        required
                        disabled
                        value={decision.decisionStatus_id}
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
                        onChange={(e) => {
                          if (decision.decisionStatus_id === 1)
                            handleDecision(e.target.name, e.target.value);
                        }}
                        className={`p-2 dark:text-[#0c3944] dark:bg-[#e7ebec] ${
                          decision.decisionStatus_id !== 1 &&
                          "cursor-not-allowed"
                        } border-2 h-80 w-full border-[#e7ebec] rounded-lg outline-[#ced7da] resize-none mb-10 text-lg`}
                        type="text"
                        id="decisionDetail"
                        name="firstDecision"
                        disabled={decision.decisionStatus_id !== 1}
                        required
                        value={decision.firstDecision}
                      />
                      <p className="pb-4 text-xl font-bold">
                        Prise de la décision finale
                      </p>
                      <textarea
                        onChange={(e) => {
                          if (decision.decisionStatus_id === 2)
                            handleDecision(e.target.name, e.target.value);
                        }}
                        className={`p-2 dark:text-[#0c3944] ${
                          decision.decisionStatus_id !== 2 &&
                          "cursor-not-allowed"
                        } dark:bg-[#e7ebec] border-2 h-80 w-full border-[#e7ebec] rounded-lg outline-[#ced7da] resize-none mb-10 text-lg`}
                        type="text"
                        id="decisionDetail"
                        name="finalDecision"
                        disabled={decision.decisionStatus_id !== 2}
                        required
                        value={decision.finalDecision}
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
                    className="p-2 cursor-not-allowed sm:w-7/12 text-[#a2a5a5] border-2 h-80 w-full rounded-lg outline-[#ced7da] resize-none mb-10 text-lg"
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
                    className="p-2 cursor-not-allowed sm:w-7/12 text-[#a2a5a5] border-2 h-80 w-full rounded-lg outline-[#ced7da] resize-none mb-10 text-lg"
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
                    className="p-2 cursor-not-allowed sm:w-7/12 text-[#a2a5a5] border-2 h-80 w-full rounded-lg outline-[#ced7da] resize-none mb-10 text-lg"
                    type="text"
                    id="decisionTitle"
                    name="decision_risk"
                    disabled="disabled"
                    required
                    value={decision.risk}
                  />
                </div>
                <div className="flex justify-end sm:w-7/12 mb-5">
                  <Link
                    to={`/decision/${id}`}
                    className="dark:text-[#0c3944] bg-[#ced7da] rounded-xl px-5 py-2 text-ml font-semibold mr-2 mb-2"
                  >
                    Annuler
                  </Link>
                  <button
                    type="submit"
                    className="dark:text-[#0c3944] bg-[#ced7da] rounded-xl px-5 py-2 text-ml font-semibold mr-2 mb-2"
                  >
                    Valider
                  </button>
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
