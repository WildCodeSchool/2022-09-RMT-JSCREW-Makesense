import { Link } from "react-router-dom";

import MyDecisionList from "../components/MyDecisionList";
import Search from "../components/Search";
import editMeta from "../services/seo";

function MyDecisions({ search, handleSearch }) {
  editMeta("Mes décisions");

  return (
    <div className="min-h-screen dark:bg-[#0c3944] pb-10">
      <div className="flex flex-col sm:flex-row justify-between">
        <Link
          to="/user/decision/new"
          className="text-center ml-6 mr-28 sm:ml-10 mt-4 sm:mt-8 bg-[#ced7da] rounded-xl px-5 py-2 text-ml font-semibold mr-2 sm:mb-2"
        >
          Créer une prise de décision
        </Link>
        <Search search={search} handleSearch={handleSearch} />
      </div>
      <MyDecisionList statusId={1} title="Décisions en cours" search={search} />
      <MyDecisionList
        statusId={2}
        title="Première décision prise"
        search={search}
      />
      <MyDecisionList
        statusId={3}
        title="Décisions définitives"
        search={search}
      />
    </div>
  );
}

export default MyDecisions;
