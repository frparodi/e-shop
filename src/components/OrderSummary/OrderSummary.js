import React, { useContext } from 'react';

import CartContext from '../../store/cart-context';

import classes from './OrderSummary.module.scss';
import OrderSummaryItem from './OrderSummaryItem';

const OrderSummary = () => {
  const ctx = useContext(CartContext);
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Order Summary</h2>
      {ctx.cartItems.length > 0 ? (
        <>
          <ul className={classes['items-list']}>
            {ctx.cartItems.map((it) => (
              <OrderSummaryItem key={it.id} item={it} />
            ))}
          </ul>
          <span className={classes.total}>{`Total $${ctx.cartItems.reduce(
            (acc, it) => (acc = acc + it.price * it.amount),
            0
          )}`}</span>
        </>
      ) : (
        <span>Empty cart</span>
      )}
    </div>
  );
};

export default OrderSummary;
