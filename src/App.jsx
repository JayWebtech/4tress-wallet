import { useState } from "react";
import Button from "./components/form/Button";
import BottomSheet from "./components/modal/BottomSheet";
import Logo from "./components/reusable/Logo";

function App() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  return (
    <>
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 bg-[url('/img/bg.svg')] bg-cover bg-center"></div>

        <div className="relative z-10 h-screen flex flex-col items-center justify-between p-6">
          <div></div>
          <Logo />
          <div className="space-y-4">
            <h1 className="text-white text-3xl font-bold">
              Crypto at the speed of light
            </h1>
            <Button
              className="w-full"
              onClick={() => setIsBottomSheetOpen(true)}
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
      />
    </>
  );
}

export default App;
