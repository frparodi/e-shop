import React, { useContext } from 'react';

import CartContext from '../../../store/cart-context';
import Card from '../../UI/Card/Card';

import classes from './ProductItem.module.scss';

const DESCRIPTION_LENGTH = 100;

const ProductItem = ({ product }) => {
  const { name, price, description } = product;

  const ctx = useContext(CartContext);

  return (
    <Card>
      <div
        onClick={() => {
          ctx.addItemToCart(product);
        }}
        className={classes['product-container']}
      >
        <div className={classes.column}>
          <h2 className={classes.title}>{name}</h2>
          <p className={classes.description}>
            {description.length < DESCRIPTION_LENGTH
              ? description
              : `${description.slice(0, DESCRIPTION_LENGTH)}...`}
          </p>
          <span className={classes.price}>{`$${price}`}</span>
        </div>
        <div className={classes.picture}>Picture</div>
        <button type="button" className={classes.button}>
          +
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
