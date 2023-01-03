import { Link } from "react-router-dom";

function DecisionCard({ decisionsMaking }) {
  return (
    <Link
      className="max-w-sm flex flex-col rounded-lg border-2 overflow-hidden ml-10 my-2 w-1/3 px-2"
      to={`/onedecision/${decisionsMaking.id}`}
    >
      <div className="px-6 pt-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {decisionsMaking.status}
        </span>
      </div>
      <div className="flex flex-col px-6 py-4 h-1/2">
        <div className="font-bold text-xl mb-2">{decisionsMaking.title}</div>
        <div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="./src/assets/Avatar.png"
              alt="Avatar of user"
            />
            <p className="text-gray-700 text-base text-sm">
              Par {decisionsMaking.firstname} {decisionsMaking.lastname}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default DecisionCard;
