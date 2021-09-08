import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Checkout from './components/Screens/Checkout/Checkout';
import Shop from './components/Screens/Shop/Shop';
import { SHOP, CHECKOUT } from './constants/routes';

import { CartContextProvider } from './store/cart-context';

function App() {
  return (
    <CartContextProvider>
      <Switch>
        <Route path={SHOP}>
          <Shop />
        </Route>
        <Route path={CHECKOUT}>
          <Checkout />
        </Route>
        <Route exact path="/">
          <Shop />
        </Route>
      </Switch>
    </CartContextProvider>
  );
}

export default App;
