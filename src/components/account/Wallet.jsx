import React, { useEffect, useState } from "react";
import BottomNavigation from "../layout/BottomNavigation";
import { getPublicAddress } from "../../utils/get_public_address";
import { getPrivateKeyFromStorage } from "../../utils/get_private_key_from_storage";
import { shortenAddress } from "../../utils/shorten_address";
import { FiCopy, FiDownload, FiSend } from "react-icons/fi"; // Copy icon
import { AiOutlineCheck } from "react-icons/ai";
import { Account, constants, ec, json, stark, RpcProvider, hash, CallData } from 'starknet';

const provider = new RpcProvider({ nodeUrl: `${import.meta.env.NODE_RPC_URL}` });

const Wallet = () => {
  const [publicAddress, setPublicAddress] = useState();
  const [copied, setCopied] = useState(false);

  const getAndSetAddress = async () => {
    const key = await getPrivateKeyFromStorage();
    const public_addr = await getPublicAddress(key);
    setPublicAddress(public_addr);
    getBalance(public_addr);
  };

  const getBalance = async (public_addr) => {
    console.log("publicAddress", public_addr);
    const { abi: testAbi } = await provider.getClassAt(public_addr);
    if (testAbi === undefined) {
      throw new Error('no abi.');
    }
    const myTestContract = new Contract(testAbi, public_addr, provider);

    // Interaction with the contract with call
    const bal1 = await myTestContract.get_balance();
    console.log('Initial balance =', bal1); 
        // Handle balance display logic here
  };

  const handleCopy = () => {
    if (publicAddress) {
      navigator.clipboard.writeText(publicAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    getAndSetAddress();
  }, []);

  return (
    <div className="flex flex-col justify-between h-screen bg-white">
      <div className="flex flex-col p-3">
        <div className="bg-primary p-6 rounded-xl bg-[url('/img/bg.svg')] bg-contain bg-center">
          <div className="flex items-center justify-center">
            <span className="text-white text-sm">
              {shortenAddress(publicAddress)}
            </span>
            <button
              onClick={handleCopy}
              className="ml-2 text-white hover:text-gray-300"
            >
              {copied ? (
                <AiOutlineCheck size={14} className="text-green-400" />
              ) : (
                <FiCopy size={14} />
              )}
            </button>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-sm text-white">Total Balance</h1>
            <p className="text-white text-[40px] font-bold">$4,000</p>
          </div>

          <div className="flex justify-center mt-2 space-x-4">
            <div className="flex flex-col items-center bg-white px-5 py-3 rounded-lg shadow-md w-1/2">
              <button className="flex flex-col items-center">
                <FiSend size={20} className="text-primary" />
                <span className="text-xs font-medium text-primary mt-1">
                  Send
                </span>
              </button>
            </div>
            <div className="flex flex-col items-center bg-white px-5 py-3 rounded-lg shadow-md w-1/2">
              <button className="flex flex-col items-center">
                <FiDownload size={20} className="text-primary" />
                <span className="text-xs font-medium text-primary mt-1">
                  Receive
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-4 space-y-4">
            {/* StarkNet Balance */}
            <div className="flex items-center justify-between bg-white px-4 py-3 rounded-lg shadow-md">
              <div className="flex items-center space-x-3">
                <img
                  src="https://dv3jj1unlp2jl.cloudfront.net/128/color/strk.png"
                  alt="StarkNet"
                  className="w-8 h-8"
                />
                <div>
                  <h2 className="text-sm font-medium">StarkNet</h2>
                  <p className="text-xs text-gray-500">$0.00</p>
                </div>
              </div>
              <div>
                <p className="text-sm">2,000 STRK</p>
              </div>
            </div>

            {/* Ethereum Balance */}
            <div className="flex items-center justify-between bg-white px-4 py-3 rounded-lg shadow-md">
              <div className="flex items-center space-x-3">
                <img
                  src="https://dv3jj1unlp2jl.cloudfront.net/128/color/eth.png"
                  alt="Ethereum"
                  className="w-8 h-8"
                />
                <div>
                  <h2 className="text-sm font-medium">Ethereum</h2>
                  <p className="text-xs text-gray-500">$0.00</p>
                </div>
              </div>
              <div>
                <p className="text-sm">2.5 ETH</p>
              </div>
            </div>
          </div>

      </div>
      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Wallet;
