import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from 'react'
import { connect, disconnect } from 'starknetkit'

function AppLayout() {
    const [connection, setConnection] = useState("");
    const [provider, setProvider] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
    
        const connectToStarknet = async () => {
        
        const connection = await connect( { modalMode: "neverAsk" } )
        
        if (connection && connection.isConnected) {
            setConnection(connection);
            setProvider(connection.account);
            setAddress(connection.selectedAddress);
        }
        };
        
        connectToStarknet();
    }, [])

    const connectWallet = async() => {
        const connection = await connect();
    
        if(connection && connection.isConnected) {
            setConnection(connection)
            setProvider(connection.account)
            setAddress(connection.selectedAddress)
        }
    }

    const disconnectWallet = async () => {
    
        await disconnect();
        
        setConnection(undefined);
        setProvider(undefined);
        setAddress('');
    }

  return (
    <div className="flex flex-col w-full">
      <Navbar connection={connection} connectWallet={connectWallet} disconnectWallet={disconnectWallet} />
      <Outlet />
    </div>
  );
}

export default AppLayout;
