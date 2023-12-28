import coinLogo from "../../assets/solanaLogo.png";

function CryptoInput() {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 bg-transparent py-[9px] px-[7px]">
        <div className="py-[9px] h-full text-white text-sm font-bold pl-[12px] pr-[30px] rounded-[50px] bg-[#430f5d] border-[0.5px] border-solid border-[#c4c4c4] w-[126px] flex items-center gap-x-1">
          <img src={coinLogo} alt="" />
          BWC
        </div>
      </div>
      <input
        type="text"
        className="px-6 py-[19px] text-base font-bold placeholder:text-[#3a3a3a] text-black rounded-[50px] bg-white border-[0.5px] w-full border-solid outline-none border-[#c4c4c4] text-right"
        placeholder="0"
      />
    </div>
  );
}

export default CryptoInput;
