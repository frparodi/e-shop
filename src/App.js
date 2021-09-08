import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Checkout from './components/Screens/Checkout/Checkout';
import Shop from './components/Screens/Shop/Shop';
import { SHOP, CHECKOUT } from './constants/routes';

function App() {
  return (
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
  );
}

export default App;
