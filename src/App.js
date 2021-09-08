import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Frame from './components/Layout/Frame/Frame';
import Checkout from './components/Screens/Checkout/Checkout';
import Shop from './components/Screens/Shop/Shop';
import { SHOP, CHECKOUT } from './constants/routes';

function App() {
  return (
    <Switch>
      <Route path={SHOP}>
        <Frame>
          <Shop />
        </Frame>
      </Route>
      <Route path={CHECKOUT}>
        <Frame>
          <Checkout />
        </Frame>
      </Route>
      <Route exact path="/">
        <Frame>
          <Shop />
        </Frame>
      </Route>
    </Switch>
  );
}

export default App;
