import React from "react";
import ReactDOM from "react-dom/client";
import ExportContextDecision from "./contexts/DecisionContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ExportContextDecision.DecisonProvider>
      <App />
    </ExportContextDecision.DecisonProvider>
  </React.StrictMode>
);
