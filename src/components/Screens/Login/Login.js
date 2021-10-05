import React from 'react';
import { useDispatch } from 'react-redux';

import { authActions } from '../../../store/slices/authSlice';
import { postLogin } from '../../../api/authApi';

import LoginForm from './LoginForm';

import styles from './Login.module.scss';

const Login = () => {
  const dispatch = useDispatch();

  const submitFormHandler = (username, password) => {
    postLogin(username, password)
      .then((response) => {
        if (response.status === 'ok') {
          localStorage.setItem('token', response.token);
          dispatch(authActions.saveToken(response.token));
        }
      })
      .catch((response) => console.log(response));
  };

  return (
    <div className={styles.background}>
      <LoginForm handleSubmit={submitFormHandler} />
    </div>
  );
};

export default Login;
