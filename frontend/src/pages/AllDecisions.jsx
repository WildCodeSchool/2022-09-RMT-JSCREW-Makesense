import Search from "../components/Search";
import DecisionInProgressList from "../components/DecisionInProgressList";
import FirstDecisionList from "../components/FirstDecisionList";

function AllDecisions() {
  return (
    <div>
      <Search />
      <DecisionInProgressList />
      <FirstDecisionList />
    </div>
  );
}

export default AllDecisions;
