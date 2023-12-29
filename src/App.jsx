import "./App.css";
import StakeContainer from "./ui/complex/StakeContainer";
import Navbar from "./ui/components/Navbar";

function App() {
  return (
    <div className="h-full w-screen">
      <Navbar />
      <div className="flex w-full justify-center pt-[83px]">
        <StakeContainer />
      </div>
    </div>
  );
}

export default App;
