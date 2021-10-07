import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './components/Screens/Login/Login';
import Products from './components/Screens/Products/Products';
import Checkout from './components/Screens/Checkout/Checkout';
import Shop from './components/Screens/Shop/Shop';

import { authActions } from './store/slices/authSlice';

import { ADMIN, PRODUCTS, SHOP, CHECKOUT } from './constants/routes';

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const cartIsEmpty = useSelector((state) => state.cart.cartItems.length === 0);

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    dispatch(authActions.saveToken(savedToken));
  }, []);

  return (
    <Switch>
      <Route path={ADMIN}>
        {isAuthenticated ? <Redirect to={PRODUCTS} /> : <Login />}
      </Route>
      <Route path={PRODUCTS}>
        {isAuthenticated ? <Products /> : <Redirect to={ADMIN} />}
      </Route>
      <Route path={SHOP}>
        <Shop />
      </Route>
      <Route path={CHECKOUT}>
        {cartIsEmpty ? <Redirect to={SHOP} /> : <Checkout />}
      </Route>
      <Route exact path="/">
        {isAuthenticated ? <Redirect to={PRODUCTS} /> : <Redirect to={SHOP} />}
      </Route>
    </Switch>
  );
}

export default App;
