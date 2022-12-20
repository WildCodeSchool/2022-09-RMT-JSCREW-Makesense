import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import NewDecision from "./pages/NewDecision";
import ArchivedDecisions from "./pages/ArchivedDecisions";
import AllDecisions from "./pages/AllDecisions";
import Footer from "./components/Footer";

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
        <Route path="/user/decision/new" element={<NewDecision />} />
        <Route path="/archives" element={<ArchivedDecisions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
