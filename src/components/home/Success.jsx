import React from "react";

const Success = () => {
  return (
    <div className="flex justify-center h-screen items-center py-6">
      <div className="p-6 bg-white flex flex-col justify-between  rounded-xl">
        <div>
          <div className="mt-4 space-y-2 text-center flex flex-col items-center">
            <img
              src="/img/success.gif"
              alt="wallet logo"
              className="w-[60px]"
            />
            <h1 className="text-2xl font-bold text-primary">
              Wallet Created Successfully
            </h1>
            <p className="text-gray-500 mt-2">
              Your wallet has been created successfully. You can now access your
              wallet and start managing your crypto assets.
              <br></br>
              Close this tab and open the extension to get started
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
