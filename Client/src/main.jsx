import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import FormDataProvider from "./store/FormDataProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FormDataProvider>
        <App />
      </FormDataProvider>
    </BrowserRouter>
  </StrictMode>,
);
