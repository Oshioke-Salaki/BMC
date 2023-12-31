import { useState } from "react";
import RequestModalControl from "./RequestModalControl";
import WaitingForConfirmationModal from "../components/WaitingForConfirmationModal";

function FaucetRequestModal() {
  const [step, setStep] = useState(1);
  return (
    <div className="bg-overlayPrimary absolute inset-0 z-[200] flex justify-center pt-[140px]">
      <div className=" shadow-shadowPrimary h-fit rounded-[5px] bg-white px-[45px] py-[27px]">
        <RequestModalControl step={step} setStep={setStep} />
        <WaitingForConfirmationModal />
      </div>
    </div>
  );
}

export default FaucetRequestModal;
