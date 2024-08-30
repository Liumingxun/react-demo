import { useState } from "react";

export function Counter({ initValue = 0 }) {
  const [count, setCount] = useState(initValue);

  const reset = () => setCount(initValue);
  const increase = () => setCount((v) => v + 1);
  const decrease = () => setCount((v) => v - 1);

  return (
    <div>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={reset}>reset</button>
      <span>{count}</span>
    </div>
  );
}
