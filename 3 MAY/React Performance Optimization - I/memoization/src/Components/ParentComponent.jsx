import React, { useState, useCallback } from 'react';
import CounterComponent from './CounterComponent';
import TimerComponent from './TimerComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrementCount = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  const startTimer = useCallback(() => {
    setIsRunning(true);
  }, []);

  const stopTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  const pauseTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  return (
    <div>
      <CounterComponent count={count} increment={incrementCount} decrement={decrementCount} />
      <TimerComponent timer={timer} isRunning={isRunning} startTimer={startTimer} stopTimer={stopTimer} pauseTimer={pauseTimer} />
    </div>
  );
};

export default ParentComponent;
