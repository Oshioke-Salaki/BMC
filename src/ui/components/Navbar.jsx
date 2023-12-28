import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import WalletConnector from "./WalletConnector";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-20 py-[25px] border-b-[0.3px] border-b-white border-b-solid">
      <Logo />
      <NavigationLinks />
      <WalletConnector />
    </nav>
  );
}

export default Navbar;
