import React from 'react';

import Navbar from '../../Layout/Navbar/Navbar';
import Sidebar from '../../Layout/Sidebar/Sidebar';
import OrderSummary from '../../OrderSummary/OrderSummary';

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
            <ProductItem key={pr.id} product={pr} />
          ))}
        </div>
        <aside className={classes.aside}>
          <OrderSummary />
        </aside>
      </main>
    </>
  );
};

export default Shop;
