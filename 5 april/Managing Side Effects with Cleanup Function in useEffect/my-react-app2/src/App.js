import logo from './logo.svg';
import './App.css';
import React ,{useState ,useEffect} from "react";

function App() {
  const [Timer, setTimer] = useState(0)

  useEffect(()=>{
    const interval = setInterval(()=>{
      setTimer((prevTimer)=> prevTimer + 1);
    },1000)

    return()=>{
     clearInterval(interval)
    }
  },[])

  const handleReset = () => {
    setTimer(0); 
  };
 

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
        <h1>Timer {Timer}</h1>
        <button className='button' onClick={()=> setTimer(0)}>Start</button>
        
        <button className='button' onClick={handleReset}>Reset</button>
      </header>
    </div>
  );
}

export default App;
