import { useTimer } from "../hooks/useTimer";

export const Timer = () => {
  const { clear, seconds, reset, start } = useTimer();
  return (
    <>
      <div>
        <button onClick={start}>start</button>
        <button onClick={clear}>clear</button>
        <button onClick={reset}>reset</button>
        <span>
          remaining: {seconds} sec
        </span>
      </div>
    </>
  );
};
