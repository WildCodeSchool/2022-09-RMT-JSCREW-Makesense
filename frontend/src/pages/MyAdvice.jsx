import React from "react";

export default function MyAdvice() {
  return (
    <div className="pt-20 w-[1000px] mx-auto">
      <div className="text-left w-4/5 pr-20">
        <h2 className="text-emerald-900 text-4xl font-bold mt-2">
          Soumettre un nouvel avis
        </h2>
      </div>
      <div>
        <form>
          <textarea
            className="border-2 border-500 h-80 w-full mt-20 rounded-lg outline-[#c8c8c8]"
            type="text"
            id="adviceText"
          />
        </form>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-emerald-900 hover:bg-emerald-700 text-white py-2 px-16 rounded-full mt-10 text-sm mr-10"
          type="button"
        >
          Annuler
        </button>
        <button
          className="bg-emerald-900 hover:bg-emerald-700 text-white py-2 px-16 rounded-full mt-10 text-sm"
          type="button"
        >
          Valider
        </button>
      </div>
    </div>
  );
}
