import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import ImportWallet from "./components/home/ImportWallet";
import CreateWallet from "./components/home/CreateWallet";
import EnterPassword from "./components/home/EnterPassword";
import Success from "./components/home/Success";
import Login from "./components/account/Login";
import Wallet from "./components/account/Wallet";
import "./index.css";
import { setLastActivity, isSessionExpired } from "./utils/user_activity";
import { Toaster } from 'react-hot-toast';
import { Buffer } from 'buffer';

window.Buffer = Buffer;

// ProtectedRoute component for authenticated routes
const ProtectedRoute = ({ children }) => {
  const hasCredentials = localStorage.getItem("4tress_credentials");
  if (!hasCredentials) {
    return <Navigate to="/" replace />;
  }
  console.log("index",isSessionExpired())
  if (isSessionExpired()) {
    console.log("Session expired, redirecting to /login");
    return <Navigate to="/login" replace />;
  }

  localStorage.setItem("isFirstTime", false);
  // Update the last activity timestamp
  setLastActivity();

  // Render the protected content
  return children;
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <HashRouter>
      <Routes>
      <Route path="/" element={<App />} />
        <Route path="/import-wallet" element={<ImportWallet />} />
        <Route path="/create-wallet" element={<CreateWallet />} />
        <Route path="/password" element={<EnterPassword />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={<Login />} />

        {/* Protected route */}
        <Route
          path="/wallet"
          element={
            <ProtectedRoute>
              <Wallet />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster />
    </HashRouter>

);