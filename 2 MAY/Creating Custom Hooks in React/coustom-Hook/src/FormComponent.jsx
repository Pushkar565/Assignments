// FormComponent.js
import React from 'react';
import useFormHook from './useFormHook';

const FormComponent = () => {
  const { formData, handleChange, resetForm } = useFormHook({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission using formData
    console.log(formData);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
