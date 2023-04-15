import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import ForgotPassword from "./components/ForgotPassword";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/reset" element={<ForgotPassword />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
