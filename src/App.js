import React from 'react';

import Shop from './components/Screens/Shop/Shop';
import { CartContextProvider } from './store/cart-context';

function App() {
  return (
    <CartContextProvider>
      <Shop />
    </CartContextProvider>
  );
}

export default App;
