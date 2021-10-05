import React from 'react';

import useInput from '../../hooks/use-input';
import Button from '../../UI/Button/Button';

import Input from '../../UI/Input/Input';

import classes from './LoginForm.module.scss';

const validateName = (value) => value.trim().length > 3;
const validatePassword = (value) => value.trim().length > 8;

const LoginForm = ({ handleSubmit }) => {
  const {
    value: username,
    isValid: nameIsValid,
    hasError: nameError,
    valueChangeHandler: handleNameChange,
    inputBlurHandler: nameBlurHandler,
  } = useInput(validateName);

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordError,
    valueChangeHandler: handlePasswordChange,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(validatePassword);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(username, password);
  };

  return (
    <form onSubmit={handleFormSubmit} className={classes.form}>
      <h2 className={classes['form-title']}>Login</h2>
      <div className={classes['main-section']}>
        <Input
          id="username"
          label="Username"
          onChange={handleNameChange}
          value={username}
          error={nameError}
          onBlur={nameBlurHandler}
        />
        <Input
          id="password"
          type="password"
          label="Password"
          onChange={handlePasswordChange}
          value={password}
          error={passwordError}
          onBlur={passwordBlurHandler}
        />
        <Button
          disabled={!nameIsValid || !passwordIsValid}
          type="submit"
          customStyles={['primary']}
        >
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
