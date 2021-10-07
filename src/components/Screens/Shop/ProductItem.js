import React from 'react';
import { useDispatch } from 'react-redux';

import { cartActions } from '../../../store/slices/cartSlice';

import classes from './ProductItem.module.scss';

const DESCRIPTION_LENGTH = 100;

const ProductItem = ({ product }) => {
  const { name, price, description } = product;
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(cartActions.addItem(product));
  };

  return (
    <div onClick={addItemToCart} className={classes.container}>
      <div className={classes['first-column']}>
        <div className={classes['text-block']}>
          <h2 className={classes.title}>{name}</h2>
          <p className={classes.description}>
            {description.length < DESCRIPTION_LENGTH
              ? description
              : `${description.slice(0, DESCRIPTION_LENGTH)}...`}
          </p>
        </div>
        <span className={classes.price}>{`$${price}`}</span>
      </div>
      <div className={classes['picture-container']}>Picture</div>
    </div>
  );
};

export default ProductItem;
