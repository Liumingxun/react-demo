import { useState, useEffect } from 'react';

export const useTimer = (initSeconds: number = 10) => {
  const [seconds, setSeconds] = useState(initSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timeout: number;

    if (isActive) {
      timeout = setTimeout(() => {
        if (seconds > 0)
          setSeconds((r) => r - 1);
      }, 1000);
    }

    return () => clearTimeout(timeout); // Cleanup interval on unmount or when isActive changes
  }, [isActive, seconds]);

  const start = () => {
    setIsActive(true);
  };

  const reset = () => {
    setSeconds(initSeconds);
    setIsActive(false);
  };

  const clear = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return {
    seconds,
    isActive,
    start,
    reset,
    clear,
  };
};
