import React, { useState, useEffect } from "react";
import { FaCopy } from "react-icons/fa";
import Button from "../form/Button";
import Logo from "../layout/Logo";
import { useNavigate } from "react-router";
import { Wallet } from "ethers";

const CreateWallet = () => {
  const [mnemonic, setMnemonic] = useState();
  const [isRevealed, setIsRevealed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const navigate = useNavigate();

  const generateMnemonic = () => {
    const _mnemonic = Wallet.createRandom().mnemonic.phrase;
    const mnemonicWords = _mnemonic.trim().split(' ');
    return mnemonicWords;
  };

  useEffect(() => {
    setMnemonic(generateMnemonic());
  }, []);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const handleNext = () => {
    navigate("/password", { state: { mnemonic } });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(mnemonic.join(" "));
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="flex justify-center h-screen items-center py-6">
      <div className="p-6 bg-white flex flex-col justify-between h-[600px] rounded-xl">
        <div>
          <div className="mt-4 space-y-2">
            <Logo width="60" />
            <h1 className="text-2xl font-bold">Write Down Your Seed Phrase</h1>
            <p className="text-gray-500 text-sm mt-2">
              This is your seed phrase. Write it down on a paper and keep it in
              a safe place. You'll be asked to re-enter this phrase (in order)
              on the next step.
            </p>
          </div>

          <div className="mt-6 bg-gray-100 p-4 rounded-lg relative">
            {!isRevealed ? (
              <div
                className="flex flex-col items-center justify-center h-32 rounded-lg cursor-pointer"
                onClick={handleReveal}
              >
                <span className="text-gray-500">
                  Tap to reveal your seed phrase
                </span>
                <span className="text-sm text-gray-400">
                  Make sure no one is watching your screen.
                </span>
              </div>
            ) : (
              <div>
                <div className="flex justify-end mb-2">
                  <button
                    className="flex items-center space-x-1 text-primary"
                    onClick={handleCopy}
                  >
                    <FaCopy />
                    <span className="text-sm">
                      {isCopied ? "Copied!" : "Copy"}
                    </span>
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {mnemonic.map((word, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-300 rounded-lg p-2 text-center text-gray-700"
                    >
                      {index + 1}. {word}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <Button
          className={`w-full mt-4 ${!isRevealed ? "bg-gray-300 text-gray-500" : ""}`}
          variant="secondary"
          disabled={!isRevealed}
          onClick={handleNext}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CreateWallet;
