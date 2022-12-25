import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Authentification from "@pages/Authentification";
import Navbar from "@components/Navbar";
import NewDecision from "@pages/NewDecision";
import ArchivedDecisions from "@pages/ArchivedDecisions";
import ShowOneDecision from "@pages/ShowOneDecision";
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
        <Route path="/connexion" element={<Authentification />} />
        <Route
          path="/"
          element={<AllDecisions search={search} handleSearch={handleSearch} />}
        />
        <Route path="/user/decision/new" element={<NewDecision />} />
        <Route path="/archives" element={<ArchivedDecisions />} />
        <Route path="/onedecision" element={<ShowOneDecision />} />
      </Routes>
    </Router>
  );
}

export default App;
