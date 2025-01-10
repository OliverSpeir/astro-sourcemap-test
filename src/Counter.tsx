import { useState } from "react";

const Counter: React.FC = () => {
  // State to hold the counter value
  const [count, setCount] = useState<number>(0);

  // Increment function
  const increment = () => setCount((prev) => prev + 1);

  // Decrement function
  const decrement = () => setCount((prev) => prev - 1);

  // Reset function
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Counter</h1>
      <p style={{ fontSize: "2rem" }}>{count}</p>
      <div>
        <button onClick={increment} style={{ margin: "0 5px" }}>
          Increment
        </button>
        <button onClick={decrement} style={{ margin: "0 5px" }}>
          Decrement
        </button>
        <button onClick={reset} style={{ margin: "0 5px" }}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
