import  { useRef, useEffect, useState } from 'react';

const FocusableInputField = () => {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = () => {
    setInputValue(inputRef.current.value);
  };

  const colorChange = () => {
    buttonRef.current.style.backgroundColor = 'red';
    buttonRef.current.innerText = 'Color Changed refresh page';
    
  };

  return (
    <>
      <h3>Focusable Input Field</h3>
      <input type="text" ref={inputRef} onChange={handleChange} />
      <h3>{inputValue}</h3>
      <button ref={buttonRef} onClick={colorChange}>
        Click me to change color
      </button>
    </>
  );
};

export default FocusableInputField;
