import React from 'react';

import Navbar from '../../Layout/Navbar/Navbar';
import Sidebar from '../../Layout/Sidebar/Sidebar';

import { PRODUCTS } from '../../../constants/dummyData';
import ProductItem from './ProductItem';

import classes from './Shop.module.scss';

const Shop = () => {
  return (
    <>
      <Navbar />
      <main className={classes.container}>
        <Sidebar />
        <div className={classes['product-catalog']}>
          {PRODUCTS.map((pr) => (
            <ProductItem
              key={pr.id}
              name={pr.name}
              price={pr.price}
              description={pr.description}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Shop;
