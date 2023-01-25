import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { Avatar } from "@assets/";
import apiConnexion from "../services/apiConnexion";
import editMeta from "../services/seo";

export default function ShowOneDecision() {
  const [oneDecision, setOneDecision] = useState([]);
  const { id } = useParams();

  editMeta(oneDecision.title);

  /* récupération de la date du jour */

  const dateOfTheDay = () => {
    const date = new Date();
    return `${date.getTime()}`;
  };

  /* récupération des informations de la décision en fonction de l'id */

  useEffect(() => {
    apiConnexion
      .get(`decisionsMaking/${id}`)
      .then((res) => {
        setOneDecision(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  /** récupération de la date de création et génération des dates en conséquences 
  @params (array) oneDecision
  */

  const dateCreate = new Date(oneDecision.dateCreate);
  const timeDate = dateCreate.getTime();

  const dateAdvice = new Date(timeDate + 1000 * 60 * 60 * 24 * 7);
  const dateFirstDecision = new Date(timeDate + 1000 * 60 * 60 * 24 * 7 * 4);
  const dateConflict = new Date(timeDate + 1000 * 60 * 60 * 24 * 7 * 8);
  const dateFinalDecision = new Date(timeDate + 1000 * 60 * 60 * 24 * 7 * 10);

  /* logique d'actualisation pour archivage de la décision en fonction de la date du jour */

  useEffect(() => {
    if (dateOfTheDay() >= dateFinalDecision.getTime()) {
      apiConnexion.put(`/decision/${id}/update`, {
        decisionStatus_id: 3,
      });
    }
  });

  return (
    <div className="flex flex-col sm:flex-row w-full px-6 sm:px-12 dark:bg-[#0c3944] dark:text-[#e7ebec] pb-16 min-h-screen">
      <div className="text-left w-full sm:w-4/5 py-8 mr-16">
        <p className="dark:text-[#0c3944] text-center inline-block bg-[#e7ebec] rounded-full px-5 py-2 text-lg font-semibold mb-5">
          {oneDecision.status}
        </p>
        <div className="flex flex-col sm:flex-row">
          <h2 className="font-bold text-3xl">{oneDecision.title}</h2>
          <Link
            to={`/decision/${id}/update`}
            className="text-center sm:ml-10 bg-[#ced7da] dark:text-[#0c3944] rounded-xl px-5 py-2 text-ml mx-20 font-semibold my-2 sm:mt-0"
          >
            Modifier
          </Link>
        </div>
        <div className="inline-flex mb-12 mt-2">
          <img className="w-14 h-14" src={Avatar} alt="Avatar utilisateur" />
          <p className="ml-5 mt-3.5 text-xl">
            Par {oneDecision.firstname} {oneDecision.lastname}
          </p>
        </div>
        <details className="border-b-2 sm:ml-8">
          <summary className="text-2xl font-bold items-center mb-3">
            Détails de la décision
          </summary>
          <p className="mb-5 text-lg sm:ml-10">{oneDecision.description}</p>
        </details>
        <details className="border-b-2 sm:ml-8">
          <summary className="text-2xl font-bold items-center mt-5 mb-3">
            Impacts sur l'organisation
          </summary>
          <p className="text-lg mb-5 sm:ml-10">{oneDecision.impact}</p>
        </details>
        <details className="border-b-2 sm:ml-8">
          <summary className="text-2xl font-bold items-center mt-5 mb-3">
            Bénéfices
          </summary>
          <p className="text-lg mb-5 sm:ml-10">{oneDecision.profit}</p>
        </details>
        <details className="border-b-2 sm:ml-8">
          <summary className="text-2xl font-bold items-center mt-5 mb-3">
            Risques potentiels
          </summary>
          <p className="text-lg mb-5 sm:ml-10">{oneDecision.risk}</p>
        </details>
        <details className="border-b-2 sm:ml-8">
          <summary className="text-2xl font-bold items-center mt-5 mb-3">
            Avis
          </summary>
          <p className="text-lg mb-5 sm:ml-10">
            {oneDecision.advice?.map((e) => (
              <div className="mb-6">
                <div className="mb-2">
                  Avis de {e.firstname} {e.lastname} :
                </div>
                <div>{e.textAdvice}</div>
              </div>
            ))}
          </p>
        </details>
        <details className="border-b-2 sm:ml-8">
          <summary className="text-2xl font-bold items-center mt-5 mb-3">
            Première décision
          </summary>
          <p className="text-black ml-10 mb-5">{oneDecision.firstDecision}</p>
        </details>
      </div>
      <div className="text-center sm:w-1/5 sm:border-l-2">
        <div className="mb-8 sm:mb-16">
          <h3 className="text-2xl font-bold sm:mt-8">Dates à retenir</h3>
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
              <div
                className={
                  dateOfTheDay() >= dateCreate.getTime()
                    ? "h-4 w-4 mt-1 border border-[#3d6169] rounded-full bg-[#3d6169] align-middle mx-auto"
                    : "h-4 w-4 mt-1 border border-[#ced7da] rounded-full bg-[#ced7da] align-middle mx-auto"
                }
              />
              <div
                className={
                  dateOfTheDay() >= dateCreate.getTime()
                    ? "h-8 w-0 border border-[#3d6169] align-middle mx-auto"
                    : "h-8 w-0 border border-[#ced7da] align-middle mx-auto"
                }
              />
              <div
                className={
                  dateOfTheDay() >= dateAdvice.getTime()
                    ? "h-4 w-4 border border-[#3d6169] rounded-full bg-[#3d6169] align-middle mx-auto"
                    : "h-4 w-4 border border-[#ced7da] rounded-full bg-[#ced7da] align-middle mx-auto"
                }
              />
              <div
                className={
                  dateOfTheDay() >= dateAdvice.getTime()
                    ? "h-8 w-0 border border-[#3d6169] align-middle mx-auto"
                    : "h-8 w-0 border border-[#ced7da] align-middle mx-auto"
                }
              />
              <div
                className={
                  dateOfTheDay() >= dateFirstDecision.getTime()
                    ? "h-4 w-4 border border-[#3d6169] rounded-full bg-[#3d6169] align-middle mx-auto"
                    : "h-4 w-4 border border-[#ced7da] rounded-full bg-[#ced7da] align-middle mx-auto"
                }
              />
              <div
                className={
                  dateOfTheDay() >= dateFirstDecision.getTime()
                    ? "h-8 w-0 border border-[#3d6169] align-middle mx-auto"
                    : "h-8 w-0 border border-[#ced7da] align-middle mx-auto"
                }
              />
              <div
                className={
                  dateOfTheDay() >= dateConflict.getTime()
                    ? "h-4 w-4 border border-[#3d6169] rounded-full bg-[#3d6169] align-middle mx-auto"
                    : "h-4 w-4 border border-[#ced7da] rounded-full bg-[#ced7da] align-middle mx-auto"
                }
              />
              <div
                className={
                  dateOfTheDay() >= dateConflict.getTime()
                    ? "h-8 w-0 border border-[#3d6169] align-middle mx-auto"
                    : "h-8 w-0 border border-[#ced7da] align-middle mx-auto"
                }
              />
              <div
                className={
                  dateOfTheDay() >= dateFinalDecision.getTime()
                    ? "h-4 w-4 border border-[#3d6169] rounded-full bg-[#3d6169] align-middle mx-auto"
                    : "h-4 w-4 border border-[#ced7da] rounded-full bg-[#ced7da] align-middle mx-auto"
                }
              />
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
        </div>
        <div className="mb-20">
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
