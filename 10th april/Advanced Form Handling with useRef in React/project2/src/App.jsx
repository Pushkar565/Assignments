import  { useRef, useState } from 'react';

const App = () => {
  const inputRefs = useRef([]);

  const handleInputFocus = (index) => {
    inputRefs.current[index].focus();
  };

  const [validationState, setValidationState] = useState({
    username: false,
    email: false,
    password: false,
  });

  const validateInput = (name, value) => {
    const validationRules = {
      username: value.length >= 3,
      email: /^\S+@\S+\.\S+$/.test(value),
      password: value.length >= 6,
    };

    setValidationState((prevState) => ({
      ...prevState,
      [name]: validationRules[name],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Perform custom processing or validation
    console.log('Form Data:', data);

    // Reset form and validation state
    e.target.reset();
    setValidationState({
      username: false,
      email: false,
      password: false,
    });
  };

  const addToRefs = (el) => {
    if (el && !inputRefs.current.includes(el)) {
      inputRefs.current.push(el);
    }
  };

  return (
    <div>
      <h1>Dynamic Form Input Focus</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          ref={addToRefs}
          onChange={(e) => validateInput('username', e.target.value)}
          style={{
            borderColor: validationState.username ? 'green' : 'red',
          }}
        />
        {!validationState.username && (
          <span style={{ color: 'red' }}>Username must be at least 3 characters long.</span>
        )}
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          ref={addToRefs}
          onChange={(e) => validateInput('email', e.target.value)}
          style={{
            borderColor: validationState.email ? 'green' : 'red',
          }}
        />
        {!validationState.email && (
          <span style={{ color: 'red' }}>Please enter a valid email address.</span>
        )}
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={addToRefs}
          onChange={(e) => validateInput('password', e.target.value)}
          style={{
            borderColor: validationState.password ? 'green' : 'red',
          }}
        />
        {!validationState.password && (
          <span style={{ color: 'red' }}>Password must be at least 6 characters long.</span>
        )}
        <br />
        <button type="button" onClick={() => handleInputFocus(0)}>
          Focus on Username
        </button>
        <button type="button" onClick={() => handleInputFocus(1)}>
          Focus on Email
        </button>
        <button type="button" onClick={() => handleInputFocus(2)}>
          Focus on Password
        </button>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;