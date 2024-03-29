import { Link } from "react-router-dom";

import { Avatar, AvatarDark } from "../assets";

function DecisionCard({ decisionsMaking, definitive }) {
  return (
    <Link
      className="max-w-sm flex flex-col rounded-lg border-2 border-[#e7ebec] overflow-hidden ml-6 sm:ml-10 my-2 w-5/6 sm:w-1/3 px-2 h-52"
      to={`/decision/${decisionsMaking.id}`}
    >
      <div className="px-6 pt-4">
        <span className="inline-block bg-[#e7ebec] rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
          {definitive ? "Décision archivée" : decisionsMaking.status}
        </span>
      </div>
      <div className="font-bold text-xl mb-2 dark:text-[#e7ebec] px-6 pt-4 h-1/3">
        {decisionsMaking.title}
      </div>
      <div className="flex flex-col px-6 my-4 h-2/2">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4 dark:hidden"
            src={Avatar}
            alt="Avatar of user"
          />
          <img
            className="w-10 h-10 rounded-full mr-4 hidden dark:inline"
            src={AvatarDark}
            alt="Avatar of user"
          />
          <p className="text-gray-700 text-base text-sm dark:text-[#e7ebec]">
            Par {decisionsMaking.firstname} {decisionsMaking.lastname}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default DecisionCard;
