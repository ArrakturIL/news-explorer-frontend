import { useState, useCallback } from 'react';

export function useInputsAndValidation() {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (e) => {
    const { target } = e;
    const { value, name, validationMessage } = target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: validationMessage,
    });
    setIsValid(target.closest('form')?.checkValidity() || false);
  };

  const resetForm = useCallback(
    (newInputs = {}, newErrors = {}, newIsValid = false) => {
      setInputs(newInputs);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setInputs, setErrors, setIsValid]
  );
  return {
    inputs,
    setInputs,
    errors,
    setErrors,
    isValid,
    setIsValid,
    handleInputChange,
    resetForm,
  };
}
