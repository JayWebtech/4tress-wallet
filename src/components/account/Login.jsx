import React, { useState } from "react";
import Button from "../form/Button";
import Logo from "../layout/Logo";
import Input from "../form/Input";
import { useNavigate } from "react-router";
import { getPrivateKeyFromPassword } from "../../utils/get_private_key_from_password";
import { setLastActivity } from "../../utils/user_activity";
import sha256 from 'js-sha256';

const Login = () => {

  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  
  const handleSubmit = async () => {
    const response = await getPrivateKeyFromPassword(sha256(password));
    if (response) {
      setLastActivity();
      navigate("/wallet");
    }
  };


  return (
    <div className="flex justify-center h-screen items-center bg-white md:bg-transparent py-6">
      <div className="flex flex-col justify-between rounded-xl md:h-[600px] md:p-6 lg:bg-white">
        <div>
          <div className="mt-4 space-y-2">
            <Logo width="60" />
            <h1 className="text-2xl font-bold">Enter your Password</h1>
          </div>
          <div className="mt-6 space-y-4">
            <Input
              type="password"
              placeholder="Enter Password"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <Button
          className={`w-full mt-4 ${password !== "" ? "text-white" : "bg-gray-300 text-gray-500"}`}
          disabled={password !== "" ? false : true}
          onClick={handleSubmit}
          variant="secondary"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Login;
