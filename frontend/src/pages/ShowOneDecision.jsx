import React, { useState } from "react";

const dataTest = {
  user_id: "Sylvain Tormo",
  title: "Baisser le prix du café à la machine",
  description:
    "Suite à des échanges avec différents collaborateurs, nous avons constaté que le prix du café à la machine-ci était trop élevé (0,75 euros). Le café faisant partie intégrante de notre quotidien, nous réclamons une baisse conséquente du prix fixée à 0,40 euros afin que nous puissions nous réunir de façon conviviale lors de nos pauses et ainsi échanger plus régulièrement autour d'un bon café. Nos différents échanges ont mis en exergue le fait que le prix actuel du café empêchaient certaines personnes d’en consommer, réduisant par conséquent les liens sociaux",
  impact:
    "Les impacts pour l’organisation sont de deux ordres : 1 : Financier :  La baisse du tarif du café sera compensée par une hausse de sa consommation. Les pertes seront donc nulles pour l’entreprise qui pourra même espérer des bénéfices.  2 : Vision positive de l’entreprise : Les salariés seront sensibles à cette baisse significative, particulièrement en cette période d’inflation.",
  profit:
    "Pour les salariés, les bénéfices seront multiples : 1. Lien social : Cette décision permettra incontestablement de favoriser le lien social entre les collaborateurs.  2. Productivité : Des études ont démontré que la caféine améliore les performances au travail.",
  risk: "Le principal risque de cette demande tient à la multiplication des pauses café. Les managers seront particulièrement attentifs et veilleront à limiter les abus.",
  decisionStatus: "Prise de décision commencée",
  dateCreate: "08 déc 2022",
  dateAdvice: "2022-22-08",
  dateFirstDecision: "2023-10-01",
  dateConflict: "2023-17-01",
  dateFinalDecision: "2023-22-01",
};

export default function ShowOneDecision() {
  const [myText1, setMyText1] = useState(false);
  const [myText2, setMyText2] = useState(false);
  const [myText3, setMyText3] = useState(false);
  const [myText4, setMyText4] = useState(false);
  const [myText5, setMyText5] = useState(false);
  const [myText6, setMyText6] = useState(false);

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
          {dataTest.decisionStatus}
        </p>
        <h2 className="text-emerald-900 text-4xl font-bold">
          {dataTest.title}
        </h2>
        <div className="inline-flex mb-20">
          <img src="" alt="mon avatar" />
          <p>{dataTest.user_id}</p>
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
            Detail decision
          </button>
          {myText1 ? (
            <p className="text-black ml-10 mb-5">{dataTest.description}</p>
          ) : null}
        </div>
        <div className="border-b-2 ml-10">
          <button
            onClick={toggleDisplayMyText2}
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
            Impact sur l'organisation
          </button>
          {myText2 ? (
            <p className="text-black ml-10 mb-5">{dataTest.impact}</p>
          ) : null}
        </div>
        <div className="border-b-2 ml-10">
          <button
            onClick={toggleDisplayMyText3}
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
            Bénéfices
          </button>
          {myText3 ? (
            <p className="text-black ml-10 mb-5">{dataTest.profit}</p>
          ) : null}
        </div>
        <div className="border-b-2 ml-10">
          <button
            onClick={toggleDisplayMyText4}
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
            Risques Potentiels
          </button>
          {myText4 ? (
            <p className="text-black ml-10 mb-5">{dataTest.risk}</p>
          ) : null}
        </div>
        <div className="border-b-2 ml-10">
          <button
            onClick={toggleDisplayMyText5}
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
            Avis
          </button>
          {myText5 ? <p className="text-black ml-10 mb-5">test</p> : null}
        </div>
        <div className="border-b-2 ml-10">
          <button
            onClick={toggleDisplayMyText6}
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
              <p className="">{dataTest.dateCreate}</p>
              <p className="mt-6">{dataTest.dateAdvice}</p>
              <p className="mt-6">{dataTest.dateFirstDecision}</p>
              <p className="mt-6">{dataTest.dateConflict}</p>
              <p className="mt-6">{dataTest.dateFinalDecision}</p>
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
              <p>{dataTest.decisionStatus}</p>
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
