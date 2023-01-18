import DecisionList from "../components/DecisionList";
import Search from "../components/Search";
import editMeta from "../services/seo";

function ArchivedDecisions({ search, handleSearch }) {
  editMeta("Archives");

  return (
    <div className="h-[120vh] dark:bg-[#0c3944]">
      <Search search={search} handleSearch={handleSearch} />
      <DecisionList statusId={3} title="Décisions archivées" search={search} />
    </div>
  );
}

export default ArchivedDecisions;
