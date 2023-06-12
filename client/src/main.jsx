import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./Components/Auth/AuthProvider.jsx";
import RoutineProvider from "./Components/Routines/RoutineProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RoutineProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RoutineProvider>
  </AuthProvider>
);
