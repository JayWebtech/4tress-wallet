import React from "react";
import { CiSettings, CiWallet } from "react-icons/ci";
import { GoHistory } from "react-icons/go";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper function to check if the current route is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="bottom-0 bg-white shadow-md flex justify-around py-3 w-full">
      <button
        className="flex flex-col items-center cursor-pointer"
        onClick={() => navigate("/wallet")}
      >
        <CiWallet
          size={24}
          className={isActive("/wallet") ? "text-primary" : "text-gray-600"}
        />
        <span
          className={`text-xs ${
            isActive("/wallet") ? "text-primary" : "text-gray-600"
          }`}
        >
          Wallet
        </span>
      </button>
      <button
        className="flex flex-col items-center cursor-pointer"
        onClick={() => navigate("/history")}
      >
        <GoHistory
          size={20}
          className={isActive("/history") ? "text-primary" : "text-gray-600"}
        />
        <span
          className={`text-xs ${
            isActive("/history") ? "text-primary" : "text-gray-600"
          }`}
        >
          History
        </span>
      </button>
      <button
        className="flex flex-col items-center cursor-pointer"
        onClick={() => navigate("/settings")}
      >
        <CiSettings
          size={24}
          className={isActive("/settings") ? "text-primary" : "text-gray-600"}
        />
        <span
          className={`text-xs ${
            isActive("/settings") ? "text-primary" : "text-gray-600"
          }`}
        >
          Settings
        </span>
      </button>
    </div>
  );
};

export default BottomNavigation;