import React from 'react';
import { useDispatch } from 'react-redux';

const MyComponent = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'ACTION_TYPE', payload: 'Hello, World!' });
  };

  return (
    <div>
      <button onClick={handleClick}>Dispatch Action</button>
    </div>
  );
};

export default MyComponent;