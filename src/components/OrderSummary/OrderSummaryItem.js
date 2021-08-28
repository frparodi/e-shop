import React, { useContext } from 'react';

import Button from '../UI/Button/Button';
import CartContext from '../../store/cart-context';

import classes from './OrderSummaryItem.module.scss';

const OrderSummaryItem = ({ item, allowEdit }) => {
  const ctx = useContext(CartContext);

  return (
    <li className={classes.container}>
      <div className={classes.block}>
        <span className={classes.name}>{`${item.amount} x ${item.name}`}</span>
        {allowEdit && (
          <div className={classes['buttons-container']}>
            <Button
              customStyles={['text']}
              onClick={() => {
                ctx.removeItemFromCart(item);
              }}
            >
              -
            </Button>
            <Button
              customStyles={['text']}
              onClick={() => {
                ctx.addItemToCart(item);
              }}
            >
              +
            </Button>
          </div>
        )}
      </div>
      <span className={classes.price}>{`$${item.price * item.amount}`}</span>
    </li>
  );
};

export default OrderSummaryItem;
