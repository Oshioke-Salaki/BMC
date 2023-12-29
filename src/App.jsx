import "./App.css";
import StakeContainer from "./ui/complex/StakeContainer";
import Navbar from "./ui/components/Navbar";
import SelectTokenModal from "./ui/components/SelectTokenModal";

function App() {
  return (
    <div className="relative h-full w-screen">
      <SelectTokenModal />
      <Navbar />
      <div className="flex w-full justify-center pt-[83px]">
        <StakeContainer />
      </div>
    </div>
  );
}

export default App;
