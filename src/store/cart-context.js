import React, { useState, useCallback } from 'react';

const CartContext = React.createContext({
  openCartModal: () => {},
  closeCartModal: () => {},
  isCartModalOpen: false,
});

export const CartContextProvider = ({ children }) => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const handleOpenCart = useCallback(() => {
    setIsCartModalOpen(true);
  }, []);

  const handleCloseCart = useCallback(() => {
    console.log('asoifjasoifj');
    setIsCartModalOpen(false);
  }, []);

  const cartContextValues = {
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
