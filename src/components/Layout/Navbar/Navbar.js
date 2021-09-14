import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authActions } from '../../../store/slices/authSlice';

import classes from './Navbar.module.scss';

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const login = () => {
    dispatch(authActions.login());
  };

  const logout = () => {
    dispatch(authActions.logout());
  };

  return (
    <nav className={classes.navbar}>
      <h1>React e-shop</h1>
      {!isAuthenticated && <button onClick={login}>Login</button>}
      {isAuthenticated && <button onClick={logout}>Logout</button>}
    </nav>
  );
};

export default Navbar;
