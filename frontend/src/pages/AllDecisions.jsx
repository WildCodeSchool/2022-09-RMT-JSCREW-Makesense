import DecisionList from "../components/DecisionList";
import Search from "../components/Search";

function AllDecisions({ search, handleSearch }) {
  return (
    <div className="h-[100vh]">
      <Search search={search} handleSearch={handleSearch} />
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
