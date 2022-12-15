import Search from "../components/Search";
import DecisionInProgressList from "../components/DecisionInProgressList";
import FirstDecisionList from "../components/FirstDecisionList";

function AllDecisions({ search, handleSearch }) {
  return (
    <div>
      <Search search={search} handleSearch={handleSearch} />
      <DecisionInProgressList search={search} />
      <FirstDecisionList search={search} />
    </div>
  );
}

export default AllDecisions;
