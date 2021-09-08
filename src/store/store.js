import { createStore } from 'redux';

import { setItemAmount } from '../utils/cartUtils';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cartItems: setItemAmount(state.cartItems, action.item, 'ADD'),
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: setItemAmount(state.cartItems, action.item, 'REMOVE'),
      };
    default:
      return state;
  }
};

const store = createStore(cartReducer);

export default store;
