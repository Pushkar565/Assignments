// App.js

import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { UserProvider } from './UserContext';
import MainComponent from './MainComponent';

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="App">
          <h1>My App</h1>
          <MainComponent />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
