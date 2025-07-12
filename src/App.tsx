import ControlButton from "./components/ControlButton";
import PresetSelector from "./components/PresetSelector";
import TimeInput from "./components/TimeInput";
import TimerDisplay from "./components/TimerDisplay";
import "./index.css";

function App() {
  return (
    <div className="max-w-[852px] mx-auto px-4">
      <h1 className="text-center text-6xl mt-16 mb-10">Tea Timer</h1>
      <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
        <div className="md:w-1/2">
          <TimerDisplay />
        </div>

        <div className="md:w-1/2">
          <TimeInput />
          <ControlButton />
        </div>
      </div>

      <PresetSelector />
    </div>
  );
}

export default App;
