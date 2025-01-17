import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { GlobalContextsProvider } from "./context/index.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalContextsProvider>
      <App />
    </GlobalContextsProvider>
  </React.StrictMode>
);
