import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "@components/Navbar";
import NewDecision from "@pages/NewDecision";
import ArchivedDecisions from "@pages/ArchivedDecisions";
import AllDecisions from "./pages/AllDecisions";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<AllDecisions search={search} handleSearch={handleSearch} />}
        />
        <Route path="/user/decision/create" element={<NewDecision />} />
        <Route path="/archives" element={<ArchivedDecisions />} />
      </Routes>
    </Router>
  );
}

export default App;
