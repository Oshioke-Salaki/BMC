import "./App.css";
import StakeContainer from "./ui/complex/StakeContainer";
import Navbar from "./ui/components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-center pt-[83px]">
        <StakeContainer />
      </div>
    </div>
  );
}

export default App;
