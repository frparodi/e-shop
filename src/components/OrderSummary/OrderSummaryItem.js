import React from 'react';
import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/store';
import Button from '../UI/Button/Button';

import classes from './OrderSummaryItem.module.scss';

const OrderSummaryItem = ({ item, allowEdit }) => {
  const dispatch = useDispatch();

  return (
    <li className={classes.container}>
      <div className={classes.block}>
        <span className={classes.name}>{`${item.amount} x ${item.name}`}</span>
        {allowEdit && (
          <div className={classes['buttons-container']}>
            <Button
              customStyles={['primary', 'square']}
              onClick={() => {
                dispatch(cartActions.removeItem(item));
              }}
            >
              -
            </Button>
            <Button
              customStyles={['primary', 'square']}
              onClick={() => {
                dispatch(cartActions.addItem(item));
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
