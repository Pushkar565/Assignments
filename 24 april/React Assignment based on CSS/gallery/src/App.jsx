// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Gallery />
    </div>
  );
};

export default App;
