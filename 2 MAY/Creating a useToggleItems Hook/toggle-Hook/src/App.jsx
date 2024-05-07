import React from 'react';
import useToggleItems from './useToggleItems';

function App() {
  const [state, toggleState] = useToggleItems(["A", "B", "C"], 1);

  return (
    <div className="App">
      <h1>Toggle Items</h1>
      <p>Current Item: {state}</p>
      <button onClick={toggleState}>Toggle Item</button>
    </div>
  );
}

export default App;
