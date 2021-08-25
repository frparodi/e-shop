import React from 'react';

import Card from '../../UI/Card/Card';

import classes from './ProductItem.module.scss';

const ProductItem = ({ name, price, description }) => (
  <Card>
    <div className={classes['product-container']}>
      <div className={classes.column}>
        <h2 className={classes.title}>{name}</h2>
        <p className={classes.description}>{description}</p>
        <span className={classes.price}>{`$${price}`}</span>
      </div>
      <div className={classes.picture}>Picture</div>
      <button className={classes.button}>+</button>
    </div>
  </Card>
);

export default ProductItem;
