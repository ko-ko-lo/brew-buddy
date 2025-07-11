import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-citrus p-6 rounded text-center text-5xl">
        Tailwind is working!
      </h1>
      <div className="bg-porcelain text-text-dark font-body">
        All custom styles work now ✅
      </div>

      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
