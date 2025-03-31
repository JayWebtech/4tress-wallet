import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Onboard from "./components/home/Onboard";
import ImportWallet from "./components/home/ImportWallet";
import CreateWallet from "./components/home/CreateWallet";
import EnterPassword from "./components/home/EnterPassword";
import Success from "./components/home/Success";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/import-wallet" element={<ImportWallet />} />
        <Route path="/create-wallet" element={<CreateWallet />} />
        <Route path="/password" element={<EnterPassword />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
