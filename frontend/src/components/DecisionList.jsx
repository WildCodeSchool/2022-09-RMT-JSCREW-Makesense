import DecisionCard from "./DecisionCard";

function DecisionList() {
  return (
    <div>
      <h1 className="text-start	font-bold text-3xl px-12 pt-8 pb-4">
        Décisions en cours
      </h1>
      <div className="px-2">
        <div className="flex -mx-2">
          <div className="w-1/3 px-2">
            <DecisionCard />
          </div>
          <div className="w-1/3 px-2">
            <DecisionCard />
          </div>
          <div className="w-1/3 px-2">
            <DecisionCard />
          </div>
        </div>
      </div>
      <div className="px-2">
        <div className="flex -mx-2">
          <div className="w-1/3 px-2">
            <DecisionCard />
          </div>
          <div className="w-1/3 px-2">
            <DecisionCard />
          </div>
        </div>
      </div>
      <h2 className="text-start font-bold text-3xl px-12 pt-8 pb-4">
        Première décision prise
      </h2>
      <div className="px-2">
        <div className="flex -mx-2">
          <div className="w-1/3 px-2">
            <DecisionCard />
          </div>
          <div className="w-1/3 px-2">
            <DecisionCard />
          </div>
          <div className="w-1/3 px-2">
            <DecisionCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DecisionList;
