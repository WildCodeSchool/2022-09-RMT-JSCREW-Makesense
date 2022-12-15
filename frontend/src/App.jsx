import { useState } from "react";

import AllDecisions from "./pages/AllDecisions";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <div className="App">
      <AllDecisions search={search} handleSearch={handleSearch} />
    </div>
  );
}

export default App;
