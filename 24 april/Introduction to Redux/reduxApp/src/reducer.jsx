// reducer.jsx
const initialState = {
  theme: 'LIGHT' // Set the initial theme state
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'LIGHT' ? 'DARK' : 'LIGHT'
        
      };
    default:
      return state;
  }
};