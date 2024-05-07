import { useState } from 'react';

const useToggleItems = (initialValue, initialPosition = 0) => {
  const [position, setPosition] = useState(initialPosition);
  const [items, setItems] = useState(initialValue);

  const toggleState = () => {
    setPosition((prevPosition) => (prevPosition + 1) % items.length);
  };

  return [items[position], toggleState];
};

export default useToggleItems;
