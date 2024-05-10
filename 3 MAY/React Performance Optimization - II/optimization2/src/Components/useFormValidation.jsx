import { useState } from 'react';

export const useFormValidation = (formData) => {
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        // Validation logic here

        setErrors(newErrors);
        return valid;
    };

    return { errors, validateForm };
};
