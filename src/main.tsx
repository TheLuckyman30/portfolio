import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SelectedProjContextProvider } from "./utils";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SelectedProjContextProvider>
      <App />
    </SelectedProjContextProvider>
  </StrictMode>,
);
