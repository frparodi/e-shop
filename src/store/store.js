import { createSlice, configureStore } from '@reduxjs/toolkit';

import { setItemAmount } from '../utils/cartUtils';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cartItems = setItemAmount(state.cartItems, action.payload, 'ADD');
    },
    removeItem(state, action) {
      state.cartItems = setItemAmount(
        state.cartItems,
        action.payload,
        'REMOVE'
      );
    },
  },
});

const store = configureStore({ reducer: cartSlice.reducer });

export const cartActions = cartSlice.actions;

export default store;
