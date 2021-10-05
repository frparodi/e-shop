import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { authActions } from '../../../store/slices/authSlice';

import Button from '../../UI/Button/Button';

import classes from './Navbar.module.scss';

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const goToLogin = () => {
    history.push('/admin');
  };

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(authActions.clearSession());
  };

  return (
    <nav className={classes.navbar}>
      <h1>React e-shop</h1>
      {!isAuthenticated && (
        <Button customStyles={['text', 'white']} onClick={goToLogin}>
          Log In
        </Button>
      )}
      {isAuthenticated && (
        <Button customStyles={['text', 'white']} onClick={logout}>
          Log Out
        </Button>
      )}
    </nav>
  );
};

export default Navbar;
