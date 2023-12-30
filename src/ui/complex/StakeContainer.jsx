import { useState } from "react";
import walletIcon from "../../assets/walletIcon.svg";
import CryptoInput from "../components/CryptoInput";
import DataROw from "../components/DataROw";
// import FlexContainer from "../layout/FlexContainer";

import {RpcProvider, Contract} from 'starknet';
import { bwcAbi } from "../../utils";
import { feltToString } from "../../helpers";
import { useOutletContext } from "react-router-dom";


function StakeContainer() {

  const [symbol, setSymbol] = useState('')
  const [balance, setBalance] = useState('')
  const [amount, setAmount] = useState(0)

  const [provider, address] = useOutletContext();

  const bwcContractAddress = '0x7bcdcc132a6030b1a98c0b4a438f555c834ec7abd33f3d1a9803160d0be85cd';

  const rpcProvider = new RpcProvider({
    nodeUrl: 'https://starknet-goerli.infura.io/v3/c61b0457e5004368ac942e464b8d1f62',
  });

  const getSymbol = async () => {
    try {
        const readContract = new Contract(bwcAbi, bwcContractAddress, rpcProvider); 

        const symbol = await readContract.get_symbol();

        setSymbol(feltToString(symbol))

    } catch (error) {
        alert(error.message)
    }
  }

  const getBalance = async () => {
    try {
        const readContract = new Contract(bwcAbi, bwcContractAddress, provider); 

        const balance = await readContract.balance_of(address);

        setBalance(balance.toString())

    } catch (error) {
        alert(error.message)
    }
  }


  return (
    <div className="bg-white w-[550px] rounded-[20px] p-6 text-[#3a3a3a] mx-auto md:mt-12">
      <div className="flex justify-between mb-[21px] items-center font-medium">
        <h1 className="text-xl">Deposit</h1>
        <div className="flex items-center text-xs">
          <img src={walletIcon} alt="" className="mr-1 h-5 w-5" />
          <h5
          onLoad={getBalance()} 
            className="text-sm"
          >
            {balance}
          </h5>
          <div className="gap-x-[10px] flex items-center ml-[10px]">
            <div onClick={()=>{setAmount(balance)}} className="py-[2px] px-[11px] cursor-pointer rounded-[50px] border-[1px] border-solid border-[#c4c4c4]">
              Max
            </div>
            <div onClick={()=>{setAmount(balance / 2)}} className="py-[2px] px-[11px] rounded-[50px] border-[1px] cursor-pointer border-solid border-[#c4c4c4]">
              Half
            </div>
          </div>
        </div>
      </div>
      <CryptoInput symbol={symbol} getSymbol={getSymbol} amount={amount} setAmount={setAmount}/>
      <div className="flex justify-between items-center mt-[21px] text-sm font-medium text-[#3a3a3a]">
        <h3 className="text-black">You will receive</h3>
        <h3>{amount}.00 RBCW</h3>
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
