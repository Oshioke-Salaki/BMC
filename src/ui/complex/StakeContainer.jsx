import walletIcon from "../../assets/walletIcon.svg";
import CryptoInput from "../components/CryptoInput";
import DataROw from "../components/DataROw";
// import FlexContainer from "../layout/FlexContainer";
function StakeContainer() {
  return (
    <div className="bg-white w-[550px] rounded-[20px] p-6 text-[#3a3a3a] mx-auto md:mt-12">
      <div className="flex justify-between mb-[21px] items-center font-medium">
        <h1 className="text-xl">Deposit</h1>
        <div className="flex items-center text-xs">
          <img src={walletIcon} alt="" className="mr-1 h-5 w-5" />
          <h5 className="text-sm">10.00</h5>
          <div className="gap-x-[10px] flex items-center ml-[10px]">
            <div className="py-[2px] px-[11px] rounded-[50px] border-[1px] border-solid border-[#c4c4c4]">
              Max
            </div>
            <div className="py-[2px] px-[11px] rounded-[50px] border-[1px] border-solid border-[#c4c4c4]">
              Half
            </div>
          </div>
        </div>
      </div>
      <CryptoInput />
      <div className="flex justify-between items-center mt-[21px] text-sm font-medium text-[#3a3a3a]">
        <h3 className="text-black">You will receive</h3>
        <h3>1900.00 RBCW</h3>
      </div>
      <button className="mt-[48px] w-full py-[10px] text-center rounded-[50px] bg-[#430F5D] text-white text-base font-black">
        Stake
      </button>
      <div className="flex flex-col gap-y-4 mt-[23px]">
        <DataROw title={"Current price"} value={"1BWC = 1RBWC"} />
        <DataROw title={"Commission"} value={"10%"} />
        <DataROw title={"Reward"} value={"200TC"} />
      </div>
    </div>
  );
}

export default StakeContainer;
