import React, { useContext } from "react";

import { Link } from "react-router-dom";

import SearchPerson from "@components/SearchPerson";
import ChoosenPerson from "@components/ChoosenPerson";
import ExportContextDecision from "../contexts/DecisionContext";

function NewDecision() {
  const { mainDecision, handleMainDecision } = useContext(
    ExportContextDecision.DecisionContext
  );

  /**
   *maj du state en fonction de sa propriété
   * @param {string} position
   * @param {string} value
   */

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getDate = () => {
    const date = new Date();
    return `${date.getDay() + 1}/${date.getMonth() + 1}/${date.getFullYear()}`;

  return (
    <div className="w-11/12 ml-20">
      <h1 className="font-bold mb-5 text-green-900 mt-5">
        Créer une prise de décision
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="decision flex">
          <div className="writeDecision w-full">
            <div className="flex">
              <div className="w-full">
                <div className="flex">
                  <div className="w-7/12">
                    <div className="mb-5 w-full">
                      <p className="mb-2">Titre de la décision*</p>
                      <input
                        className="border-2 w-full rounded-lg outline-[#c8c8c8]"
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
                    <div className=" mb-5">
                      <p className="mb-2">Descriptif de la décision*</p>
                      <textarea
                        className="border-2 border-500 h-80 w-full rounded-lg outline-[#c8c8c8] resize-none"
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
                <div className="mb-5 w-full">
                  <p className="mb-2">Impact sur l'organisation*</p>
                  <textarea
                    className="border-2 border-500 h-80 w-7/12 rounded-lg outline-[#c8c8c8] resize-none"
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
                <div className=" mb-5">
                  <p className="mb-2">Bénéfices*</p>
                  <textarea
                    className="border-2 border-500 h-80  w-7/12 rounded-lg outline-[#c8c8c8] resize-none"
                    type="text"
                    id="benefits"
                    name="benefits"
                    required
                    value={mainDecision.benefits}
                    onChange={(e) =>
                      handleMainDecision(e.target.name, e.target.value)
                    }
                  />
                </div>
                <div className=" mb-5">
                  <p className="mb-2">Risques potentiels*</p>
                  <textarea
                    className="border-2 border-500 h-80  w-7/12 rounded-lg outline-[#c8c8c8] resize-none"
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
                <div className="flex justify-end w-7/12 mb-5">
                  <Link
                    to="/user/decision"
                    className="text-center w-28  bg-green-900 hover:bg-green-700 px-5 py-2 ml-10 rounded-lg text-white"
                  >
                    Annuler
                  </Link>
                  <Link
                    to="/user/decision"
                    className="text-center w-28 bg-green-900 hover:bg-green-700 px-5 py-2 ml-10 rounded-lg text-white"
                  >
                    Valider
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="decisionByUser w-4/12 text-center">
            <div className="mb-20">
              <p className="mb-2">Date de création</p>
              <p className="border-2 border-500 w-8/12 rounded-lg outline-[#c8c8c8]">
                {getDate()}
              </p>
            </div>
            <div className="mb-2 ">
              <p className="mb-2">Personnes expertes*</p>
              <SearchPerson SearchPerson={SearchPerson} />
            </div>
            <div className="mb-2">
              <p className="mb-2">Personnes impactées*</p>
              <SearchPerson SearchPerson={SearchPerson} />
            </div>
            <div className="expertPersons mt-52">
              <p className="mb-2">Personnes expertes choisies</p>
              <ChoosenPerson />
            </div>
            <div className="impactedPersons mt-5">
              <p className="mb-2">Personnes impactées choisies</p>
              <ChoosenPerson />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewDecision;
