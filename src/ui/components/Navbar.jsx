import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import WalletConnector from "./WalletConnector";

function Navbar({connection, disconnectWallet, connectWallet}) {
  return (
    <nav className="flex items-center justify-between px-20 py-[25px] border-b-[0.3px] border-b-white border-b-solid">
      <Logo />
      <NavigationLinks />
      <WalletConnector connection={connection} disconnectWallet={disconnectWallet} connectWallet={connectWallet} />
    </nav>
  );
}

export default Navbar;
