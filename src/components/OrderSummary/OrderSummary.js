import React from 'react';
import { useSelector } from 'react-redux';

import OrderSummaryItem from './OrderSummaryItem';

import classes from './OrderSummary.module.scss';

const OrderSummary = ({ allowEdit = false }) => {
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <div className={classes.container}>
      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((it) => (
              <OrderSummaryItem key={it.id} item={it} allowEdit={allowEdit} />
            ))}
          </ul>
          <span className={classes.total}>{`Total $${cartItems.reduce(
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
