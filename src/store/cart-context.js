import React, { useState, useReducer, useCallback } from 'react';

const CartContext = React.createContext({
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  handleOpenCart: () => {},
  handleCloseCart: () => {},
  isCartModalOpen: false,
});

const setItemAmount = (array, item, operation) => {
  console.log(array, item, operation);
  const newArray = array.map((obj) => ({ ...obj }));
  let product = newArray.find((it) => it.id === item.id);
  console.log(product);
  switch (operation) {
    case 'ADD':
      if (product !== undefined && product.amount) {
        product.amount = product.amount + 1;
        console.log(newArray);
      } else {
        const productModel = { ...item };
        productModel.amount = 1;
        newArray.push(productModel);
      }
      break;
    case 'REMOVE':
      if (product !== undefined && product.amount && product.amount === 1) {
        return newArray.filter((it) => it.id !== item.id);
      }
      if (product !== undefined && product.amount && product.amount > 1) {
        product.amount = product.amount - 1;
      }
      break;
    default:
      break;
  }
  return newArray;
};

const cartReducer = (state, action) => {
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
      return { cartItems: [] };
  }
};

export const CartContextProvider = ({ children }) => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  const handleOpenCart = useCallback(() => {
    setIsCartModalOpen(true);
  }, []);

  const handleCloseCart = useCallback(() => {
    setIsCartModalOpen(false);
  }, []);

  const addItemToCart = useCallback((item) => {
    dispatch({ type: 'ADD_ITEM', item });
  }, []);

  const removeItemFromCart = useCallback((item) => {
    dispatch({ type: 'REMOVE_ITEM', item });
  }, []);

  const cartContextValues = {
    cartItems: state.cartItems,
    addItemToCart: addItemToCart,
    removeItemFromCart: removeItemFromCart,
    openCartModal: handleOpenCart,
    closeCartModal: handleCloseCart,
    isCartModalOpen,
  };

  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
