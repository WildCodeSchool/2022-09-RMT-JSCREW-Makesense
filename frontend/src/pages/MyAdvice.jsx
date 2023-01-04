import React from "react";

export default function MyAdvice() {
  return (
    <div className="pt-20">
      <div className="text-left ml-20 w-4/5 pr-20">
        <h2 className="text-emerald-900 text-4xl font-bold mt-2">
          Soumettre un nouvel avis
        </h2>
      </div>
      <div>
        <form>
          <textarea
            className="border-2 border-500 h-80 w-[1000px] ml-20 mt-20 rounded-lg outline-[#c8c8c8]"
            type="text"
            id="adviceText"
          />
        </form>
      </div>
      <div>
        <button type="button">Annuler</button>
        <button type="button">Valider</button>
      </div>
    </div>
  );
}
