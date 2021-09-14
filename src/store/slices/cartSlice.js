import { createSlice } from '@reduxjs/toolkit';

import { setItemAmount } from '../../utils/cartUtils';

const cartInitialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: cartInitialState,
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

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
