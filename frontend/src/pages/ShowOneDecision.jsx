import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ShowOneDecision() {
  const [detailDecision, setDetailDecision] = useState(false);
  const [impactOrganisation, setImpactOrganisation] = useState(false);
  const [benef, setBenef] = useState(false);
  const [risk, setRisk] = useState(false);
  const [avis, setAvis] = useState(false);
  const [premiereDecision, setPremiereDecision] = useState(false);

  const [oneDecision, setOneDecision] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}decisionsMaking/${id}`)
      .then((res) => res.json())
      .then((data) => setOneDecision(data))
      .catch((err) => console.error(err));
  }, [id]);

  function getDateCreate(strDate) {
    const strSplitDate = String(strDate).split(" ");
    let date = new Date(strSplitDate[0]);
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    if (dd > 30) {
      mm += 1;
      dd -= 30;
    }
    if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm > 12) {
      yyyy += 1;
      mm -= 12;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    }
    date = `${dd}-${mm}-${yyyy}`;
    return date.toString();
  }

  function getDateAdvice(strDate) {
    const strSplitDate = String(strDate).split(" ");
    let date = new Date(strSplitDate[0]);
    let dd = date.getDate() + 10;
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    if (dd > 30) {
      mm += 1;
      dd -= 30;
    }
    if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm > 12) {
      yyyy += 1;
      mm -= 12;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    }
    date = `${dd}-${mm}-${yyyy}`;
    return date.toString();
  }

  function getDateFirstDecision(strDate) {
    const strSplitDate = String(strDate).split(" ");
    let date = new Date(strSplitDate[0]);
    let dd = date.getDate();
    let mm = date.getMonth() + 2;
    let yyyy = date.getFullYear();
    if (dd > 30) {
      mm += 1;
      dd -= 30;
    }
    if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm > 12) {
      yyyy += 1;
      mm -= 12;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    }
    date = `${dd}-${mm}-${yyyy}`;
    return date.toString();
  }

  function getDateConflict(strDate) {
    const strSplitDate = String(strDate).split(" ");
    let date = new Date(strSplitDate[0]);
    let dd = date.getDate() + 10;
    let mm = date.getMonth() + 2;
    let yyyy = date.getFullYear();
    if (dd > 30) {
      mm += 1;
      dd -= 30;
    }
    if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm > 12) {
      yyyy += 1;
      mm -= 12;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    }
    date = `${dd}-${mm}-${yyyy}`;
    return date.toString();
  }

  function getDateFinalDecision(strDate) {
    const strSplitDate = String(strDate).split(" ");
    let date = new Date(strSplitDate[0]);
    let dd = date.getDate() + 10;
    let mm = date.getMonth() + 3;
    let yyyy = date.getFullYear();
    if (dd > 30) {
      mm += 1;
      dd -= 30;
    }
    if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm > 12) {
      yyyy += 1;
      mm -= 12;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    }
    date = `${dd}-${mm}-${yyyy}`;
    return date.toString();
  }

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
    <div className="flex w-full pt-20">
      <div className="text-left ml-20 w-4/5 pr-20">
        <p className="border-2 border-solid border-black w-fit rounded-full px-2">
          {oneDecision.status}
        </p>
        <h2 className="text-emerald-900 text-4xl font-bold mt-2">
          {oneDecision.title}
        </h2>
        <div className="inline-flex mb-20 mt-2">
          <img
            className="w-10 h-10"
            src="../src/assets/Avatar.png"
            alt="Avatar utilisateur"
          />
          <p className="ml-5 mt-2 text-base text-sm">
            Par {oneDecision.firstname} {oneDecision.lastname}
          </p>
        </div>
        <div className="border-b-2 ml-10">
          <button
            onClick={toggleDisplayDetailDecision}
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
          {detailDecision ? (
            <p className="text-black ml-10 mb-5">{oneDecision.description}</p>
          ) : null}
        </div>
        <div className="border-b-2 ml-10">
          <button
            onClick={toggleDisplayImpactOrganisation}
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
          {impactOrganisation ? (
            <p className="text-black ml-10 mb-5">{oneDecision.impact}</p>
          ) : null}
        </div>
        <div className="border-b-2 ml-10">
          <button
            onClick={toggleDisplayBenef}
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
          {benef ? (
            <p className="text-black ml-10 mb-5">{oneDecision.profit}</p>
          ) : null}
        </div>
        <div className="border-b-2 ml-10">
          <button
            onClick={toggleDisplayRisk}
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
          {risk ? (
            <p className="text-black ml-10 mb-5">{oneDecision.risk}</p>
          ) : null}
        </div>
        <div className="border-b-2 ml-10">
          <button
            onClick={toggleDisplayAvis}
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
          {avis ? <p className="text-black ml-10 mb-5">test</p> : null}
        </div>
        <div className="border-b-2 ml-10">
          <button
            onClick={toggleDisplayPremiereDecision}
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
          {premiereDecision ? (
            <p className="text-black ml-10 mb-5">test</p>
          ) : null}
        </div>
      </div>

      <div className="text-center w-1/5 border-l-2">
        <div className="mb-16">
          <h3 className="text-emerald-900 text-xl font-bold">
            Dates à retenir
          </h3>
          <div className="inline-flex mt-8">
            <div className="w-2/5">
              <p className="">{getDateCreate(oneDecision.dateCreate)}</p>
              <p className="mt-6">{getDateAdvice(oneDecision.dateCreate)}</p>
              <p className="mt-6">
                {getDateFirstDecision(oneDecision.dateCreate)}
              </p>
              <p className="mt-6">{getDateConflict(oneDecision.dateCreate)}</p>
              <p className="mt-6">
                {getDateFinalDecision(oneDecision.dateCreate)}
              </p>
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
              <p>Prise de décision commencée</p>
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
              src="../src/assets/Avatar.png"
              alt="Avatar utilisateur"
            />
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="../src/assets/Avatar.png"
              alt="Avatar utilisateur"
            />
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="../src/assets/Avatar.png"
              alt="Avatar utilisateur"
            />
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="../src/assets/Avatar.png"
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
              src="../src/assets/Avatar.png"
              alt="Avatar utilisateur"
            />
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="../src/assets/Avatar.png"
              alt="Avatar utilisateur"
            />
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="../src/assets/Avatar.png"
              alt="Avatar utilisateur"
            />
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="../src/assets/Avatar.png"
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
