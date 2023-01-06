import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminUsersList from "@pages/AdminUsersList";
import AdminNewUser from "@pages/AdminNewUser";
import NewDecision from "./pages/NewDecision";
import ArchivedDecisions from "./pages/ArchivedDecisions";
import ShowOneDecision from "./pages/ShowOneDecision";
import AllDecisions from "./pages/AllDecisions";
import Navbar from "./components/Navbar";
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
        <Route
          path="/archives"
          element={
            <ArchivedDecisions search={search} handleSearch={handleSearch} />
          }
        />
        <Route path="/onedecision/:id" element={<ShowOneDecision />} />
        <Route path="/users" element={<AdminUsersList />} />
        <Route path="/users/creation" element={<AdminNewUser />} />
      </Routes>
    </Router>
  );
}

export default App;
