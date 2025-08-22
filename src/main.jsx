import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Approvider from "./context/AppContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Approvider>
      <App />
      <ToastContainer position="top-center" />
    </Approvider>
  </StrictMode>
);
