import React from 'react';
import useTimer from './useTimer';

const TimerComponent = () => {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div>
      <h1>Timer: {timer} seconds</h1>
      <button onClick={startTimer} disabled={isRunning}>
        Start Timer
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop Timer
      </button>
      <button onClick={resetTimer}>
        Reset Timer
      </button>
    </div>
  );
};

export default TimerComponent;
