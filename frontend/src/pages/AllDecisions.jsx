import { Link } from "react-router-dom";

import DecisionList from "../components/DecisionList";
import Search from "../components/Search";

function AllDecisions({ search, handleSearch }) {
  return (
    <div className="h-[120vh] dark:bg-[#0c3944]">
      <div className="flex justify-between">
        <Link
          to="/user/decision/new"
          className="ml-10 mt-8 bg-[#ced7da] rounded-xl px-5 py-2 text-ml font-semibold mr-2 mb-2"
        >
          Créer une nouvelle prise de décision
        </Link>
        <Search search={search} handleSearch={handleSearch} />
      </div>
      <DecisionList statusId={1} title="Décision en cours" search={search} />
      <DecisionList
        statusId={2}
        title="Première décision prise"
        search={search}
      />
    </div>
  );
}

export default AllDecisions;
