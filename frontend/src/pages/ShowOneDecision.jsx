import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ShowOneDecision() {
  const [myText1, setMyText1] = useState(false);
  const [myText2, setMyText2] = useState(false);
  const [myText3, setMyText3] = useState(false);
  const [myText4, setMyText4] = useState(false);
  const [myText5, setMyText5] = useState(false);
  const [myText6, setMyText6] = useState(false);

  const [oneDecision, setOneDecision] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/decisionsMaking/?status=${id}`)
      .then((res) => res.json())
      .then((data) => setOneDecision(data))
      .catch((err) => console.error(err));
  }, [id]);

  function toggleDisplayMyText1() {
    setMyText1(!myText1);
  }

  function toggleDisplayMyText2() {
    setMyText2(!myText2);
  }

  function toggleDisplayMyText3() {
    setMyText3(!myText3);
  }

  function toggleDisplayMyText4() {
    setMyText4(!myText4);
  }

  function toggleDisplayMyText5() {
    setMyText5(!myText5);
  }

  function toggleDisplayMyText6() {
    setMyText6(!myText6);
  }

  return (
    <div className="flex w-full pt-20">
      <div className="text-left ml-20 w-4/5 pr-20">
        <p className="border-2 border-solid border-black w-fit rounded-full px-2">
          {oneDecision.status}
        </p>
        <h2 className="text-emerald-900 text-4xl font-bold mt-2">
          {oneDecision.title}
        </h2>
        <div className="inline-flex mb-20 mt-2">
          <img src="./src/assets/Avatar.png" alt="Avatar utilisateur" />
          <p className="ml-5">
            Par {oneDecision.firstname} {oneDecision.lastname}
          </p>
        </div>
        <div className="border-b-2 ml-10">
          <button
            onClick={toggleDisplayMyText1}
            className="text-emerald-900 text-2xl font-bold inline-flex items-center"
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
            Détail décision
          </button>
          {myText1 ? (
            <p className="text-black ml-10 mb-5">{oneDecision.description}</p>
          ) : null}
        </div>
        <div className="border-b-2 ml-10">
          <button
            onClick={toggleDisplayMyText2}
            className="text-emerald-900 text-2xl font-bold inline-flex items-center mt-5"
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
            Impact sur l'organisation
          </button>
          {myText2 ? (
            <p className="text-black ml-10 mb-5">{oneDecision.impact}</p>
          ) : null}
        </div>
        <div className="border-b-2 ml-10">
          <button
            onClick={toggleDisplayMyText3}
            className="text-emerald-900 text-2xl font-bold inline-flex items-center mt-5"
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
          {myText3 ? (
            <p className="text-black ml-10 mb-5">{oneDecision.profit}</p>
          ) : null}
        </div>
        <div className="border-b-2 ml-10">
          <button
            onClick={toggleDisplayMyText4}
            className="text-emerald-900 text-2xl font-bold inline-flex items-center mt-5"
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
          {myText4 ? (
            <p className="text-black ml-10 mb-5">{oneDecision.risk}</p>
          ) : null}
        </div>
        <div className="border-b-2 ml-10">
          <button
            onClick={toggleDisplayMyText5}
            className="text-emerald-900 text-2xl font-bold inline-flex items-center mt-5"
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
          {myText5 ? <p className="text-black ml-10 mb-5">test</p> : null}
        </div>
        <div className="border-b-2 ml-10">
          <button
            onClick={toggleDisplayMyText6}
            className="text-emerald-900 text-2xl font-bold inline-flex items-center mt-5"
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
          {myText6 ? <p className="text-black ml-10 mb-5">test</p> : null}
        </div>
      </div>

      <div className="text-center w-1/5 border-l-2">
        <div className="mb-16">
          <h3 className="text-emerald-900 text-xl font-bold">
            Dates à retenir
          </h3>
          <div className="inline-flex mt-8">
            <div className="w-2/5">
              <p className="">{oneDecision.dateCreate}</p>
              <p className="mt-6">{oneDecision.dateAdvice}</p>
              <p className="mt-6">{oneDecision.dateFirstDecision}</p>
              <p className="mt-6">{oneDecision.dateConflict}</p>
              <p className="mt-6">{oneDecision.dateFinalDecision}</p>
            </div>
            <div className="w-1/5">
              <div className="h-4 w-4 mt-1 border border-black rounded-full bg-lime-400 align-middle mx-auto" />
              <div className="h-8 w-0 border border-black align-middle mx-auto" />
              <div className="h-4 w-4 border border-black rounded-full bg-lime-400 align-middle mx-auto" />
              <div className="h-8 w-0 border border-black align-middle mx-auto" />
              <div className="h-4 w-4 border border-black rounded-full bg-lime-400 align-middle mx-auto" />
              <div className="h-8 w-0 border border-black align-middle mx-auto" />
              <div className="h-4 w-4 border border-black rounded-full bg-slate-300 align-middle mx-auto" />
              <div className="h-8 w-0 border border-black align-middle mx-auto" />
              <div className="h-4 w-4 border border-black rounded-full bg-slate-300 align-middle mx-auto" />
            </div>
            <div className="w-2/5 font-bold text-xs">
              <p>{oneDecision.decisionStatus}</p>
              <p className="mt-4">Deadline pour donner son avis</p>
              <p className="mt-4">Première décision prise</p>
              <p className="mt-4">Deadline pour rentrer en conflit</p>
              <p className="mt-5">Décision définitive</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-emerald-900 text-xl font-bold">
            Personnes impactées
          </h3>
          <div className="flex justify-center mt-5">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="./src/assets/Avatar.png"
              alt="Avatar utilisateur"
            />
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="./src/assets/Avatar.png"
              alt="Avatar utilisateur"
            />
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="./src/assets/Avatar.png"
              alt="Avatar utilisateur"
            />
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="./src/assets/Avatar.png"
              alt="Avatar utilisateur"
            />
          </div>
          <p className="text-left mt-8 ml-4 text-emerald-900 font-extralight">
            voir les avis
          </p>
        </div>
        <div>
          <h3 className="text-emerald-900 text-xl font-bold mt-5">
            Personnes expertes
          </h3>
          <div className="flex justify-center mt-5">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="./src/assets/Avatar.png"
              alt="Avatar utilisateur"
            />
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="./src/assets/Avatar.png"
              alt="Avatar utilisateur"
            />
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="./src/assets/Avatar.png"
              alt="Avatar utilisateur"
            />
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="./src/assets/Avatar.png"
              alt="Avatar utilisateur"
            />
          </div>
          <p className="text-left mt-8 ml-4 text-emerald-900 font-extralight">
            voir les avis
          </p>
        </div>
        <div>
          <button
            className="bg-emerald-900 hover:bg-emerald-700 text-white py-2 px-16 rounded-full mt-10 text-sm"
            type="button"
          >
            Donner mon avis
          </button>
        </div>
      </div>
    </div>
  );
}
