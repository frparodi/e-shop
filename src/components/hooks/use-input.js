import { useState } from 'react';

const useInput = (validateValue, initialValue) => {
  const [enteredValue, setEnteredValue] = useState(
    initialValue ? initialValue : ''
  );
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue ? validateValue(enteredValue) : true;
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
