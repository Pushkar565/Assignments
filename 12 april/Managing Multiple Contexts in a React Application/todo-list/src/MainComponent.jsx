// MainComponent.js

import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { UserContext } from './UserContext';

const MainComponent = () => {
  const { themeMode, toggleTheme } = useContext(ThemeContext);
  const { user, authenticated, login, logout } = useContext(UserContext);

  return (
    <div>
      <h2>Theme Mode: {themeMode}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>

      {authenticated ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login({ name: 'John Doe' })}>Login</button>
      )}
    </div>
  );
};

export default MainComponent;
