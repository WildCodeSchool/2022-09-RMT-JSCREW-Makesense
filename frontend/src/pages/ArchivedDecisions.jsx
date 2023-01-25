import DecisionList from "../components/DecisionList";
import Search from "../components/Search";
import editMeta from "../services/seo";

function ArchivedDecisions({ search, handleSearch }) {
  editMeta("Archives");

  return (
    <div className="min-h-screen dark:bg-[#0c3944]">
      <Search search={search} handleSearch={handleSearch} />
      <DecisionList statusId={4} title="Décisions archivées" search={search} />
    </div>
  );
}

export default ArchivedDecisions;
