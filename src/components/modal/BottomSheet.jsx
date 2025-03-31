import Button from "../form/Button";

function BottomSheet({ isOpen, onClose }) {
  const openFullscreen = (path) => {
    const url = chrome.runtime.getURL(`index.html#/${path}`);
    window.open(url, "_blank");
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />
          <div className="absolute bottom-0 w-full bg-white rounded-t-xl p-6 space-y-4">
            <h2 className="text-xl font-semibold text-center mb-6">
              Choose an Option
            </h2>
            <Button
              className="w-full"
              onClick={() => openFullscreen("create-wallet")}
              variant="secondary"
            >
              Create New Wallet
            </Button>
            <Button
              className="w-full"
              onClick={() => openFullscreen("/import-wallet")}
            >
              Import Wallet
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default BottomSheet;
