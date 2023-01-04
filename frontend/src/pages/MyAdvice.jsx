import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import apiConnexion from "../services/apiConnexion";

export default function MyAdvice() {
  const { id } = useParams();
  const [myAdviceText, setMyAdviceText] = useState({
    textAdvice: "",
    userId: 10,
    decisionMakingId: id,
  });

  const handleAdvice = (position, value) => {
    const newAdvice = { ...myAdviceText };
    newAdvice[position] = value;
    setMyAdviceText(newAdvice);
  };

  const handleSubmit = () => {
    apiConnexion
      .post(`/decisionsMaking/advice`, myAdviceText)
      .catch((err) => console.error(err));
  };

  return (
    <div className="pt-20 w-[1000px] mx-auto mb-80">
      <div className="text-left">
        <h2 className="text-emerald-900 text-4xl font-bold mt-2">
          Soumettre un nouvel avis
        </h2>
      </div>
      <div className="mb-10">
        <form>
          <textarea
            className="border-2 border-500 h-80 w-full mt-20 rounded-lg outline-[#c8c8c8]"
            type="text"
            id="adviceText"
            name="textAdvice"
            required
            value={myAdviceText.textAdvice}
            onChange={(e) => handleAdvice(e.target.name, e.target.value)}
          />
        </form>
      </div>
      <div className="flex justify-end">
        <Link
          to={`/decision/${id}`}
          className="bg-emerald-900 hover:bg-emerald-700 text-white py-2 px-16 rounded-full mt-10 text-sm mr-10"
        >
          Annuler
        </Link>
        <Link
          to={`/decision/${id}`}
          className="bg-emerald-900 hover:bg-emerald-700 text-white py-2 px-16 rounded-full mt-10 text-sm"
          onClick={handleSubmit}
        >
          Valider
        </Link>
      </div>
    </div>
  );
}
