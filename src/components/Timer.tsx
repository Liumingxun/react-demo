import { useTimer } from "../hooks/useTimer";

export const Timer = () => {
  const { seconds, ...handler } = useTimer();
  return (
    <>
      <div>
        <button onClick={handler.handleStart}>start</button>
        <button onClick={handler.handleClear}>clear</button>
        <button onClick={handler.handleReset}>reset</button>
        <span>
          remaining: {seconds.toFixed(2)} sec
        </span>
      </div>
    </>
  );
};
