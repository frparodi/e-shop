import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice';
import contactReducer from './slices/contactSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    contact: contactReducer,
  },
});

export default store;
