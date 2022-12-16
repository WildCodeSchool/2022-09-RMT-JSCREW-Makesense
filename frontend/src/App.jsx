import { useState } from "react";
import Navbar from "@components/Navbar";
import AllDecisions from "./pages/AllDecisions";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <div className="App">
      <Navbar />
      <AllDecisions search={search} handleSearch={handleSearch} />
    </div>
  );
}

export default App;
