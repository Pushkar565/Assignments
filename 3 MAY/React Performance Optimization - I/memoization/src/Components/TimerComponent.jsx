import React, { useEffect } from 'react';

const TimerComponent = ({ timer, isRunning, startTimer, stopTimer, pauseTimer }) => {
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        // Increment timer every second
        console.log('Timer running');
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      <h2>Timer: {timer}</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={pauseTimer}>Pause</button>
    </div>
  );
};

export default TimerComponent;
