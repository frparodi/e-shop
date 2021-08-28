import React, { useContext } from 'react';

import CartContext from '../../store/cart-context';
import Button from '../UI/Button/Button';
import OrderSummaryItem from './OrderSummaryItem';

import classes from './OrderSummary.module.scss';

const OrderSummary = ({ showEditButton = false, allowEdit = false }) => {
  const ctx = useContext(CartContext);
  return (
    <div className={classes.container}>
      {showEditButton && ctx.cartItems.length > 0 && (
        <Button onClick={ctx.openCartModal} customStyles={['text']}>
          {`<< Edit cart`}
        </Button>
      )}
      <h2 className={classes.title}>Order Summary</h2>
      {ctx.cartItems.length > 0 ? (
        <>
          <ul>
            {ctx.cartItems.map((it) => (
              <OrderSummaryItem key={it.id} item={it} allowEdit={allowEdit} />
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
