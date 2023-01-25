/* eslint-disable no-unused-vars */

import React, { useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Toast from "@components/Toast";
import apiConnexion from "../services/apiConnexion";

import User from "../contexts/User";

import "react-toastify/dist/ReactToastify.css";

export default function MyAdvice() {
  const { id } = useParams();
  const navigate = useNavigate();
  const userContext = useContext(User.UserContext);
  const [myAdviceText, setMyAdviceText] = useState({
    textAdvice: "",
    userId: userContext.user.id,
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
      <Toast />
      <div className="pt-10 w-[1000px] mx-auto">
        <div className="text-left">
          <h2 className="text-4xl font-bold mt-2">Soumettre un nouvel avis</h2>
        </div>
        <div className="mb-6">
          <form onSubmit={handleSubmit}>
            <textarea
              className="dark:bg-[#ced7da] dark:text-[#0c3944] border-2 border-500 h-80 w-full mt-20 border-[#e7ebec] rounded-lg outline-[#ced7da] p-4"
              type="text"
              id="adviceText"
              name="textAdvice"
              required="required"
              value={myAdviceText.textAdvice}
              onChange={(e) => handleAdvice(e.target.name, e.target.value)}
              placeholder="Rédigez votre avis."
            />
            <div className="flex justify-end mt-5">
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
          </form>
        </div>
      </div>
    </div>
  );
}
