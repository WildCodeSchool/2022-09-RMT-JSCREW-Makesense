import DecisionList from "../components/DecisionList";
import Search from "../components/Search";

function ArchivedDecisions({ search, handleSearch }) {
  return (
    <div>
      <Search search={search} handleSearch={handleSearch} />
      <DecisionList statusId={3} title="Décisions archivées" search={search} />
    </div>
  );
}

export default ArchivedDecisions;
