import Navbar from "@components/Navbar";
import Home from "./pages/Home";
import AllDecisions from "./pages/AllDecisions";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <p>coucou</p>
      <AllDecisions />
    </div>
  );
}

export default App;
