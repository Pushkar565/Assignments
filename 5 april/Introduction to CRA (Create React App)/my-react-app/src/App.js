import logo from './logo.svg';
import './App.css';

import React, {useState} from "react"
function App() {
 const [first, setfirst] = useState(0)  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className='button
        ' onClick={()=> setfirst(first +1)}>Count {first}</button>
      </header>
     
    </div>
  );
}

export default App;
