import React, { useState, useEffect } from 'react';

const useTimer = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000); // increment timer every 1000ms (1 second)
    }

    return () => clearInterval(intervalId); // cleanup on unmount or isRunning change
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTimer(0);
    setIsRunning(false);
  };

  return { timer, isRunning, startTimer, stopTimer, resetTimer };
};

export default useTimer;
