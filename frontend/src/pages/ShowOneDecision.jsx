import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { Avatar } from "@assets/";
import apiConnexion from "../services/apiConnexion";
import editMeta from "../services/seo";

export default function ShowOneDecision() {
  const [detailDecision, setDetailDecision] = useState(false);
  const [impactOrganisation, setImpactOrganisation] = useState(false);
  const [benef, setBenef] = useState(false);
  const [risk, setRisk] = useState(false);
  const [avis, setAvis] = useState(false);
  const [premiereDecision, setPremiereDecision] = useState(false);

  const [oneDecision, setOneDecision] = useState([]);
  const { id } = useParams();

  editMeta(oneDecision.title);

  useEffect(() => {
    apiConnexion
      .get(`decisionsMaking/${id}`)
      .then((res) => {
        setOneDecision(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const dateCreate = new Date(oneDecision.dateCreate);
  const timeDate = dateCreate.getTime();

  const dateAdvice = new Date(timeDate + 1000 * 60 * 60 * 24 * 7);
  const dateFirstDecision = new Date(timeDate + 1000 * 60 * 60 * 24 * 7 * 4);
  const dateConflict = new Date(timeDate + 1000 * 60 * 60 * 24 * 7 * 8);
  const dateFinalDecision = new Date(timeDate + 1000 * 60 * 60 * 24 * 7 * 10);

  function toggleDisplayDetailDecision() {
    setDetailDecision(!detailDecision);
  }

  function toggleDisplayImpactOrganisation() {
    setImpactOrganisation(!impactOrganisation);
  }

  function toggleDisplayBenef() {
    setBenef(!benef);
  }

  function toggleDisplayRisk() {
    setRisk(!risk);
  }

  function toggleDisplayAvis() {
    setAvis(!avis);
  }

  function toggleDisplayPremiereDecision() {
    setPremiereDecision(!premiereDecision);
  }

  return (
    <div className="flex w-full px-12 dark:bg-[#0c3944] dark:text-[#e7ebec] pb-16">
      <div className="text-left w-4/5 py-8 mr-16">
        <p className="dark:text-[#0c3944] inline-block bg-[#e7ebec] rounded-full px-5 py-2 text-lg font-semibold mb-5">
          {oneDecision.status}
        </p>
        <h2 className="font-bold text-3xl">{oneDecision.title}</h2>
        <div className="inline-flex mb-12 mt-2">
          <img className="w-14 h-14" src={Avatar} alt="Avatar utilisateur" />
          <p className="ml-5 mt-3.5 text-xl">
            Par {oneDecision.firstname} {oneDecision.lastname}
          </p>
        </div>
        <div className="border-b-2">
          <button
            onClick={toggleDisplayDetailDecision}
            className="text-2xl font-bold inline-flex items-center mb-3"
            type="button"
          >
            <svg
              className="mr-2 w-8 h-8"
              aria-hidden
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Détails de la décision
          </button>
          {detailDecision ? (
            <p className="mb-5 text-lg ml-10">{oneDecision.description}</p>
          ) : null}
        </div>
        <div className="border-b-2">
          <button
            onClick={toggleDisplayImpactOrganisation}
            className="text-2xl font-bold inline-flex items-center mt-5 mb-3"
            type="button"
          >
            <svg
              className="mr-2 w-8 h-8"
              aria-hidden
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Impacts sur l'organisation
          </button>
          {impactOrganisation ? (
            <p className="text-lg mb-5 ml-10">{oneDecision.impact}</p>
          ) : null}
        </div>
        <div className="border-b-2">
          <button
            onClick={toggleDisplayBenef}
            className="text-2xl font-bold inline-flex items-center mt-5 mb-3"
            type="button"
          >
            <svg
              className="mr-2 w-8 h-8"
              aria-hidden
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Bénéfices
          </button>
          {benef ? (
            <p className="text-lg mb-5 ml-10">{oneDecision.profit}</p>
          ) : null}
        </div>
        <div className="border-b-2">
          <button
            onClick={toggleDisplayRisk}
            className="text-2xl font-bold inline-flex items-center mt-5 mb-3"
            type="button"
          >
            <svg
              className="mr-2 w-8 h-8"
              aria-hidden
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Risques Potentiels
          </button>
          {risk ? (
            <p className="text-lg mb-5 ml-10">{oneDecision.risk}</p>
          ) : null}
        </div>
        <div className="border-b-2">
          <button
            onClick={toggleDisplayAvis}
            className="text-2xl font-bold inline-flex items-center mt-5 mb-3"
            type="button"
          >
            <svg
              className="mr-2 w-8 h-8"
              aria-hidden
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Avis
          </button>
          {avis ? (
            <p className="text-lg mb-5 ml-10">
              {oneDecision.advice.map((e) => (
                <div className="mb-6">
                  <div className="mb-2">
                    Avis de {e.firstname} {e.lastname} :
                  </div>
                  <div>{e.textAdvice}</div>
                </div>
              ))}
            </p>
          ) : null}
        </div>
        <div className="border-b-2">
          <button
            onClick={toggleDisplayPremiereDecision}
            className="text-2xl font-bold inline-flex items-center mt-5"
            type="button"
          >
            <svg
              className="mr-2 w-8 h-8"
              aria-hidden
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Première Décision
          </button>
          {premiereDecision && oneDecision?.firstDecision ? (
            <p className="text-black ml-10 mb-5">{oneDecision.firstDecision}</p>
          ) : null}
        </div>
      </div>
      <div>
        <Link
          to={`/decision/${id}/update`}
          className="ml-10 mt-8 bg-gray-200 rounded-xl px-5 py-2 text-ml font-semibold text-gray-700 mr-2 mb-2"
        >
          Modifier
        </Link>
      </div>
      <div className="text-center w-1/5 border-l-2">
        <div className="mb-16">
          <h3 className="text-emerald-900 text-xl font-bold">
            Dates à retenir
          </h3>
          <div className="inline-flex mt-8">
            <div className="w-2/5">
              <p className="text-lg">{`${dateCreate.toLocaleDateString()}`}</p>
              <p className="mt-6">{`${dateAdvice.toLocaleDateString()}`}</p>
              <p className="mt-6">
                {`${dateFirstDecision.toLocaleDateString()}`}
              </p>
              <p className="mt-6">{`${dateConflict.toLocaleDateString()}`}</p>
              <p className="mt-6">
                {`${dateFinalDecision.toLocaleDateString()}`}
              </p>
            </div>
            <div className="w-1/5">
              <div className="h-4 w-4 mt-1 border border-[#3d6169] rounded-full bg-[#3d6169] align-middle mx-auto" />
              <div className="h-8 w-0 border border-[#3d6169] align-middle mx-auto" />
              <div className="h-4 w-4 border border-[#3d6169] rounded-full bg-[#3d6169] align-middle mx-auto" />
              <div className="h-8 w-0 border border-[#3d6169] align-middle mx-auto" />
              <div className="h-4 w-4 border border-[#3d6169] rounded-full bg-[#3d6169] align-middle mx-auto" />
              <div className="h-8 w-0 border border-[#3d6169] align-middle mx-auto" />
              <div className="h-4 w-4 border border-[#ced7da] rounded-full bg-[#ced7da] align-middle mx-auto" />
              <div className="h-8 w-0 border border-[#ced7da] align-middle mx-auto" />
              <div className="h-4 w-4 border border-[#ced7da] rounded-full bg-[#ced7da] align-middle mx-auto" />
            </div>
            <div className="w-2/5 font-bold text-xs">
              <p>Prise de décision commencée</p>
              <p className="mt-4">Deadline pour donner son avis</p>
              <p className="mt-4">Première décision prise</p>
              <p className="mt-4">Deadline pour rentrer en conflit</p>
              <p className="mt-5">Décision définitive</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-center">
            Personnes impactées
          </h3>
          <div className="flex justify-center mt-3">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={Avatar}
              alt="Avatar utilisateur"
            />
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={Avatar}
              alt="Avatar utilisateur"
            />
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={Avatar}
              alt="Avatar utilisateur"
            />
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={Avatar}
              alt="Avatar utilisateur"
            />
          </div>
          <p className="text-end mt-3 ml-4 font-extralight">
            <button onClick={toggleDisplayAvis} type="button">
              Consulter les avis
            </button>
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mt-8">Personnes expertes</h3>
          <div className="flex justify-center mt-3">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={Avatar}
              alt="Avatar utilisateur"
            />
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={Avatar}
              alt="Avatar utilisateur"
            />
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={Avatar}
              alt="Avatar utilisateur"
            />
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={Avatar}
              alt="Avatar utilisateur"
            />
          </div>
          <p className="text-end mt-3 ml-4 font-extralight mb-20">
            <button onClick={toggleDisplayAvis} type="button">
              Consulter les avis
            </button>
          </p>
        </div>
        <Link
          to={`/decision/${id}/advice`}
          className="mt-10 dark:text-[#0c3944] bg-[#ced7da] rounded-xl px-5 py-2 text-ml font-semibold"
        >
          Donner mon avis
        </Link>
      </div>
    </div>
  );
}
