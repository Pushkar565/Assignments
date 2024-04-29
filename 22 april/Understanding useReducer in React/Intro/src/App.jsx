import React, { useReducer } from 'react';
import './theme.css'; // Import the CSS file directly

const initialState = {
  theme: 'LIGHT',
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'LIGHT':
      return { theme: 'LIGHT' };
    case 'DARK':
      return { theme: 'DARK' };
    default:
      throw new Error('Unhandled action type');
  }
};

const Theme = () => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <div className={state.theme === 'LIGHT' ? 'light-theme' : 'dark-theme'}>
      <button onClick={() => dispatch({ type: 'LIGHT' })}>Light Theme</button>
      <button onClick={() => dispatch({ type: 'DARK' })}>Dark Theme</button>
    </div>
  );
};

export default Theme;

