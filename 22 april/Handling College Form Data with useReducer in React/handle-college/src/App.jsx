import React, { useReducer } from 'react';

const initialState = {
  name: '',
  establishment_year: '',
  address: {
    building: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    landmark: '',
  },
  courses_offered: '',
  error: null,
  submitted: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return { ...state, [action.field]: action.value };
    case 'submit':
      return { ...state, submitted: true };
    case 'reset':
      return initialState;
    default:
      throw new Error('Invalid action type');
  }
};

const FormComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (field, value) => {
    dispatch({ type: 'update', field, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.name || !state.establishment_year || !state.courses_offered) {
      dispatch({ type: 'submit' }); // Just to trigger the error display
      return dispatch({ type: 'update', field: 'error', value: new Error('Please fill all required fields.') });
    }
    // Handle form submission logic here (e.g., API call, state update, etc.)
    console.log('Form submitted:', state);
    dispatch({ type: 'reset' });
  };

  return (
    <div>
      <h1>Add College</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">College Name:</label>
        <input
          type="text"
          id="name"
          value={state.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />

        <label htmlFor="establishment_year">Establishment Year:</label>
        <input
          type="number"
          id="establishment_year"
          value={state.establishment_year}
          onChange={(e) => handleInputChange('establishment_year', e.target.value)}
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          placeholder="Building"
          value={state.address.building}
          onChange={(e) => handleInputChange('address.building', e.target.value)}
        />
        {/* Repeat for other address fields */}

        <label htmlFor="courses_offered">Courses Offered:</label>
        <textarea
          id="courses_offered"
          value={state.courses_offered}
          onChange={(e) => handleInputChange('courses_offered', e.target.value)}
        />

        <button type="submit">Submit</button>
        <button type="button" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </form>

      {state.error && <div style={{ color: 'red' }}>{state.error.message}</div>}
      {state.submitted && (
        <div>
          <h2>Submitted College Details:</h2>
          <div>Name: {state.name}</div>
          <div>Establishment Year: {state.establishment_year}</div>
          {/* Display other details here */}
        </div>
      )}
    </div>
  );
};

export default FormComponent;
