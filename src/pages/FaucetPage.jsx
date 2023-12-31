import { createPortal } from "react-dom";
import FaucetRequestContainer from "../ui/components/FaucetRequestContainer";
import FaucetRequestModal from "../ui/complex/FaucetRequestModal";

function FaucetPage() {
  return (
    <div className="px-[324px] text-white">
      <h1 className="text-2xl font-bold">Request testnet tokens</h1>
      <p className="mb-5 mt-3 text-lg font-medium">
        This Faucet sends small amounts of Bwc to an account address on Starknet
        Bwc You can use it to pay transaction fee in Starknet.
      </p>
      <FaucetRequestContainer />

      {createPortal(<FaucetRequestModal />, document.body)}
    </div>
  );
}

export default FaucetPage;
