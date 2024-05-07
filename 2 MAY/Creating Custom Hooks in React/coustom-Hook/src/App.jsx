import React from 'react';
import FormComponent from './FormComponent';
import useFormHook from './useFormHook';

function App() {
  const { formData, handleChange, resetForm } = useFormHook({
    username: '',
    password: '',
  });

  return (
    <div>
      <FormComponent
        formData={formData}
        handleChange={handleChange}
        resetForm={resetForm}
      />
    </div>
  );
}

export default App;
