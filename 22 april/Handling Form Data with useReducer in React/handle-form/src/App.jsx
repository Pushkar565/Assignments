import React, { useReducer } from 'react';

const initialState = {
  email: '',
  password: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    case 'reset':
      return initialState;
    default:
      throw new Error('Invalid action type');
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any submission logic with the form data
    console.log('Submitted:', state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={state.email}
          onChange={(e) => dispatch({ type: 'email', payload: e.target.value })}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={state.password}
          onChange={(e) => dispatch({ type: 'password', payload: e.target.value })}
        />

        <button type="submit">Submit</button>
        <button type="button" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </form>

      {(state.email || state.password) ? (
        <div>
          <div>User Email: {state.email}</div>
          <div>User Password: {state.password}</div>
        </div>
      ) : (
        <div>No details found</div>
      )}
    </div>
  );
};

export default Form;
