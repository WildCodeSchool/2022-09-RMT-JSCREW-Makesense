import React from "react";

function DecisionCard() {
  return (
    <div className="max-w-sm rounded-lg border-2 overflow-hidden ml-10 my-2">
      <div className="px-6 pt-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Prise de décision commencée
        </span>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          Baisser le prix du café à la machine
        </div>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="./src/assets/Avatar.png"
            alt="Avatar of user"
          />
          <p className="text-gray-700 text-base text-sm">Par Sylvain TORMO</p>
        </div>
      </div>
    </div>
  );
}

export default DecisionCard;
