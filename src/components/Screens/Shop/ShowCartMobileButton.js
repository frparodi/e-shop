import React from 'react';

import classes from './ShowCartMobileButton.module.scss';

const ShowCartMobileButton = ({ cartSize, cartCost }) => {
  return (
    <div className={classes['show-cart-mobile']}>
      <span className={classes.badge}>{cartSize}</span>
      <span className={classes.label}>Show Cart</span>
      <span className={classes.cost}>{cartCost}</span>
    </div>
  );
};

export default ShowCartMobileButton;
