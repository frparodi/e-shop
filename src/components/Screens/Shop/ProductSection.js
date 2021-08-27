import React from 'react';

import ProductItem from './ProductItem';

import classes from './ProductSection.module.scss';

const ProductSection = ({ sectionName, products }) => (
  <div className={classes.container}>
    <h3 className={classes.name}>{sectionName}</h3>
    <div className={classes['products-container']}>
      {products.length > 0 ? (
        products.map((pr) => <ProductItem key={pr.id} product={pr} />)
      ) : (
        <span>Empty category</span>
      )}
    </div>
  </div>
);

export default ProductSection;
