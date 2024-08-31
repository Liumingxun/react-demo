import { useRef, useState } from 'react';

export const useTimer = (initSeconds: number = 3) => {
  const [seconds, setSeconds] = useState(initSeconds);
  const intervalRef = useRef<number | null>()

  const handleStart = () => {
    if (intervalRef.current) return
    intervalRef.current = setInterval(() => {
      setSeconds((s) => {
        if (s > 0)
          return s - 0.01
        clearInterval(intervalRef.current!)
        intervalRef.current = null
        return 0
      })
    }, 10);
  };

  const handleReset = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setSeconds(initSeconds);
  };

  const handleClear = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setSeconds(0);
  };

  return {
    seconds,
    handleStart,
    handleReset,
    handleClear,
  };
};
