/* eslint no-return-assign: "error" */

import React, { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import SearchPerson from "@components/SearchPerson";
import ExportContextDecision from "../contexts/DecisionContext";
import editMeta from "../services/seo";

function NewDecision() {
  editMeta("Créer une prise de décision");
  const navigate = useNavigate();

  const { mainDecision, handleMainDecision, createNewDecision } = useContext(
    ExportContextDecision.DecisionContext
  );

  /**
   *maj de la date du jour
   * @param {string} position
   * @param {string} value
   */
  const getDate = () => {
    const date = new Date();
    return `${date.toISOString().split("T")[0]}`;
  };

  const finalDate = () => {
    const date = new Date();
    const timeDate = date.getTime();
    const theFinalDate = new Date(timeDate + 1000 * 60 * 60 * 24 * 7 * 10);
    return `${theFinalDate.toISOString().split("T")[0]}`;
  };

  const sendFormDecision = async (e) => {
    e.preventDefault();
    const respons = await createNewDecision();
    if (respons.status === 201) {
      navigate(`/decision/${respons.data.id}`);
    }
  };

  return (
    <div className="dark:bg-[#0c3944] dark:text-[#e7ebec] px-6 sm:px-12">
      <h1 className="font-bold text-3xl py-8">Créer une prise de décision</h1>
      <form onSubmit={sendFormDecision}>
        <div className="decision sm:flex">
          <div className="writeDecision w-full dark:text-[#e7ebec]">
            <div className="flex">
              <div className="w-full">
                <div className="flex">
                  <div className="w-full sm:w-10/12">
                    <div className="w-full">
                      <p className="pb-4 text-xl font-bold">
                        Titre de la prise de décision*
                      </p>
                      <input
                        className="dark:bg-[#ced7da] dark:text-[#0c3944] border-2 w-full rounded-lg border-[#e7ebec] outline-[#ced7da] mb-10 text-lg"
                        type="text"
                        id="decisionTitle"
                        name="title"
                        required
                        value={mainDecision.title}
                        onChange={(e) =>
                          handleMainDecision(e.target.name, e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <p className="pb-4 text-xl font-bold">
                        Descriptif de la décision*
                      </p>
                      <textarea
                        className="dark:bg-[#ced7da] dark:text-[#0c3944] border-2 h-80 w-full border-[#e7ebec] rounded-lg outline-[#ced7da] resize-none mb-10 text-lg"
                        type="text"
                        id="decisionDetail"
                        name="description"
                        required
                        value={mainDecision.description}
                        onChange={(e) =>
                          handleMainDecision(e.target.name, e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="pb-4 text-xl font-bold">
                    Impacts sur l'organisation*
                  </p>
                  <textarea
                    className="dark:bg-[#ced7da] dark:text-[#0c3944] border-2 h-80 w-full sm:w-10/12 border-[#e7ebec] rounded-lg outline-[#ced7da] resize-none mb-10 text-lg"
                    type="text"
                    id="impact"
                    name="impact"
                    required
                    value={mainDecision.impact}
                    onChange={(e) =>
                      handleMainDecision(e.target.name, e.target.value)
                    }
                  />
                </div>
                <div>
                  <p className="pb-4 text-xl font-bold">Bénéfices*</p>
                  <textarea
                    className="dark:bg-[#ced7da] dark:text-[#0c3944] border-2 h-80 w-full sm:w-10/12 border-[#e7ebec] rounded-lg outline-[#ced7da] resize-none mb-10 text-lg"
                    type="text"
                    id="profit"
                    name="profit"
                    required
                    value={mainDecision.profit}
                    onChange={(e) =>
                      handleMainDecision(e.target.name, e.target.value)
                    }
                  />
                </div>
                <div>
                  <p className="pb-4 text-xl font-bold">Risques potentiels*</p>
                  <textarea
                    className="dark:bg-[#ced7da] dark:text-[#0c3944] border-2 h-80 w-full sm:w-10/12 border-[#e7ebec] rounded-lg outline-[#ced7da] resize-none mb-10 text-lg"
                    type="text"
                    id="decisionTitle"
                    name="risk"
                    required
                    value={mainDecision.risk}
                    onChange={(e) =>
                      handleMainDecision(e.target.name, e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="decisionByUser sm:w-6/12">
            <div className="flex justify-start mb-5 dark:text-[#e7ebec]">
              <p className="pr-5 text-xl font-bold">Date de création :</p>
              <p className="text-xl">{new Date().toLocaleDateString()}</p>
              <p
                className="hidden text-xl"
                onChange={(e) =>
                  handleMainDecision(e.target.name, e.target.value)
                }
              >
                {(mainDecision.dateCreate = getDate())}
              </p>
              <p
                className="hidden ml-6 text-xl"
                onChange={(e) =>
                  handleMainDecision(e.target.name, e.target.value)
                }
              >
                {(mainDecision.dateFinalDecision = finalDate())}
              </p>
            </div>
            <div className="mb-2">
              <SearchPerson SearchPerson={SearchPerson} />
            </div>
          </div>
        </div>
        <div className="flex justify-end w-10/12 mb-5">
          <Link
            to="/home"
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
      </form>
    </div>
  );
}

export default NewDecision;
