import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UpdateDecision from "@pages/UpdateDecision";
import MyAdvice from "@pages/MyAdvice";
import NotFound from "@pages/NotFound";
import Login from "./pages/Login";
import MyDecisions from "./pages/MyDecisions";
import AdminUsersList from "./pages/AdminUsersList";
import AdminNewUser from "./pages/AdminNewUser";
import NewDecision from "./pages/NewDecision";
import ArchivedDecisions from "./pages/ArchivedDecisions";
import ShowOneDecision from "./pages/ShowOneDecision";
import AllDecisions from "./pages/AllDecisions";
import Footer from "./components/Footer";
import Private from "./layout/Private";
import Admin from "./layout/Admin";
import BackToTopButton from "./components/BackToTopButton";
import EditPassword from "./components/UpdatePassword";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Private />}>
          <Route path="password/edition" element={<EditPassword />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="home"
            element={
              <AllDecisions search={search} handleSearch={handleSearch} />
            }
          />
          <Route path="user/decision/new" element={<NewDecision />} />
          <Route
            path="user/:userId/decisions/:id"
            element={<UpdateDecision />}
          />
          <Route
            path="decisions"
            element={
              <MyDecisions search={search} handleSearch={handleSearch} />
            }
          />
          <Route
            path="archives"
            element={
              <ArchivedDecisions search={search} handleSearch={handleSearch} />
            }
          />
          <Route path="decision/:id" element={<ShowOneDecision />} />
          <Route path="decision/:id/advice" element={<MyAdvice />} />
          <Route path="admin/" element={<Admin />}>
            <Route path="users" element={<AdminUsersList />} />
            <Route path="users/creation" element={<AdminNewUser />} />
          </Route>
        </Route>
      </Routes>
      <BackToTopButton />
      <Footer />
    </Router>
  );
}

export default App;
