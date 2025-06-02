import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import TripContext from "./context/TripContext.jsx";

createRoot(document.getElementById("root")).render(
  <TripContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TripContext>
);
