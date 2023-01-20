import React from "react";
import ReactDOM from "react-dom/client";
import ExportContextDecision from "./contexts/DecisionContext";
import UserContext from "./contexts/User";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserContext.UserProvider>
      <ExportContextDecision.DecisionProvider>
        <App />
      </ExportContextDecision.DecisionProvider>
    </UserContext.UserProvider>
  </React.StrictMode>
);
