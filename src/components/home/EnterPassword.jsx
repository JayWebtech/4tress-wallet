import React, { useState } from "react";
import Button from "../form/Button";
import { useLocation } from "react-router-dom";
import Logo from "../reusable/Logo";
import Input from "../form/Input";
import { useNavigate } from "react-router";

const EnterPassword = () => {
  const location = useLocation();
  const mnemonic = location.state?.mnemonic || []; // Retrieve the mnemonic from state

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (password === confirmPassword) {
      console.log("Password set successfully");
      console.log("Mnemonic:", mnemonic);
      navigate("/success");
    } else {
      alert("Passwords do not match");
    }
  };

  const isFormValid =
    password && confirmPassword && password === confirmPassword;

  return (
    <div className="flex justify-center h-screen items-center py-6">
      <div className="p-6 bg-white flex flex-col justify-between h-[600px] rounded-xl">
        <div>
          <div className="mt-4 space-y-2">
            <Logo width="60" />
            <h1 className="text-2xl font-bold">Set a Password</h1>
            <p className="text-gray-500 mt-2">
              Create a strong password to secure your wallet. You’ll need this
              password to unlock your wallet.
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <Input
              type="password"
              placeholder="Enter Password"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {/* Error message */}
            {confirmPassword && password !== confirmPassword && (
              <p className="text-red-500 text-xs mt-0">
                Passwords do not match
              </p>
            )}
          </div>
        </div>
        <Button
          className={`w-full mt-4 ${isFormValid ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-500"}`}
          disabled={!isFormValid}
          onClick={handleSubmit}
          variant="secondary"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default EnterPassword;
