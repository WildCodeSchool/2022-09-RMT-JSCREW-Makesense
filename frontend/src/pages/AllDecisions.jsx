import DecisionList from "../components/DecisionList";
import Search from "../components/Search";

function AllDecisions() {
  return (
    <div>
      <Search />
      <DecisionList statusId={1} title="Décision en cours" />
      <DecisionList statusId={2} title="Première décision prise" />
    </div>
  );
}

export default AllDecisions;
