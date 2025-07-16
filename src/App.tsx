import { useEffect, useState } from "react";
import ControlButton from "./components/ControlButton";
import PresetSelector from "./components/PresetSelector";
import TimeInput from "./components/TimeInput";
import TimerDisplay from "./components/TimerDisplay";
import "./index.css";

function App() {
  const [time, setTime] = useState(120);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    if (time === 0) {
      setIsRunning(false);
      return;
    }
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, time]);

  return (
    <div className="max-w-[852px] mx-auto px-4">
      <h1 className="text-center text-6xl mt-16 mb-10">Tea Timer</h1>
      <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
        <div className="md:w-1/2">
          <TimerDisplay time={time} />
        </div>

        <div className="md:w-1/2">
          <TimeInput
            setTime={setTime}
            time={time}
            setIsRunning={setIsRunning}
          />
          <ControlButton isRunning={isRunning} setIsRunning={setIsRunning} />
        </div>
      </div>

      <PresetSelector setTime={setTime} setIsRunning={setIsRunning} />
    </div>
  );
}

export default App;
