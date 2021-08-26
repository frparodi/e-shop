import React from 'react';

import classes from './OrderSummaryItem.module.scss';

const OrderSummaryItem = ({ item }) => {
  return (
    <li className={classes.container}>
      <span className={classes.name}>{`${item.amount} x ${item.name}`}</span>
      <span className={classes.price}>{`$${item.price * item.amount}`}</span>
    </li>
  );
};

export default OrderSummaryItem;
