/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import apiConnexion from "../services/apiConnexion";

import "react-toastify/dist/ReactToastify.css";

export default function MyAdvice() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [myAdviceText, setMyAdviceText] = useState({
    textAdvice: "",
    userId: 10,
    decisionMakingId: id,
  });

  const notify = (msg) => {
    toast(msg);
  };

  const handleAdvice = (position, value) => {
    const newAdvice = { ...myAdviceText };
    newAdvice[position] = value;
    setMyAdviceText(newAdvice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    apiConnexion
      .post(`/decisions/${id}/advice`, myAdviceText)
      .then((res) => {
        notify("Votre avis a bien été ajouté");
        setTimeout(() => navigate(`/decision/${id}`), 2000);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="dark:bg-[#0c3944] dark:text-[#e7ebec] pb-80">
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
      <div className="pt-20 w-[1000px] mx-auto">
        <div className="text-left">
          <h2 className="text-4xl font-bold mt-2">Soumettre un nouvel avis</h2>
        </div>
        <div className="mb-10">
          <form onSubmit={handleSubmit}>
            <textarea
              className="dark:bg-[#ced7da] dark:text-[#0c3944] border-2 border-500 h-80 w-full mt-20 border-[#e7ebec] rounded-lg outline-[#ced7da] p-4"
              type="text"
              id="adviceText"
              name="textAdvice"
              required="required"
              value={myAdviceText.textAdvice}
              onChange={(e) => handleAdvice(e.target.name, e.target.value)}
              placeholder="Veuillez renseigner votre avis"
            />
            <div className="flex justify-end">
              <Link
                to={`/decision/${id}`}
                className="dark:text-[#0c3944] bg-[#ced7da] font-bold py-2 px-16 rounded-full mt-10 text-sm mr-10"
              >
                Annuler
              </Link>
              <button
                type="submit"
                className="dark:text-[#0c3944] bg-[#ced7da] font-bold py-2 px-16 rounded-full mt-10 text-sm"
              >
                Valider
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
