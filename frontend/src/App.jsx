import { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./contexts/User";
import MyAdvice from "@pages/MyAdvice";
import Login from "./pages/Login";
import AdminUsersList from "./pages/AdminUsersList";
import AdminNewUser from "./pages/AdminNewUser";
import NewDecision from "./pages/NewDecision";
import ArchivedDecisions from "./pages/ArchivedDecisions";
import ShowOneDecision from "./pages/ShowOneDecision";
import AllDecisions from "./pages/AllDecisions";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const { user } = useContext(User.UserContext);
  const [search, setSearch] = useState("");
  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <Router>
      <Navbar user={user} handleUser={user} />
      <Routes>
        <Route path="/login" element={<Login />} />
        {(user?.role === "user" || user?.role === "administrator") && (
          <>
            <Route
              path="/"
              element={
                <AllDecisions search={search} handleSearch={handleSearch} />
              }
            />
            <Route path="/user/decision/new" element={<NewDecision />} />
            <Route
              path="/archives"
              element={
                <ArchivedDecisions
                  search={search}
                  handleSearch={handleSearch}
                />
              }
            />
            <Route path="/onedecision/:id" element={<ShowOneDecision />} />
            <Route path="/decision/:id/advice" element={<MyAdvice />} />
            <Route path="/users" element={<AdminUsersList />} />
            <Route path="/users/creation" element={<AdminNewUser />} />
          </>
        )}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
