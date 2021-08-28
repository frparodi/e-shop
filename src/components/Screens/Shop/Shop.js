import React, { useContext } from 'react';

import Navbar from '../../Layout/Navbar/Navbar';
import Sidebar from '../../Layout/Sidebar/Sidebar';
import OrderSummary from '../../OrderSummary/OrderSummary';
import OrderSummaryModal from '../../OrderSummary/OrderSummaryModal';
import CartContext from '../../../store/cart-context';
import { CATEGORIES, PRODUCTS } from '../../../constants/dummyData';

import ProductSection from './ProductSection';

import classes from './Shop.module.scss';

const Shop = () => {
  const ctx = useContext(CartContext);
  return (
    <>
      <Navbar />
      <main className={classes.container}>
        <Sidebar>
          <ul className={classes.list}>
            {CATEGORIES.map((cat) => (
              <li key={cat.id} className={classes['list-item']}>
                {cat.name}
              </li>
            ))}
          </ul>
        </Sidebar>
        <div className={classes['product-catalog']}>
          {CATEGORIES.map((cat) => (
            <ProductSection
              key={cat.id}
              sectionName={cat.name}
              products={PRODUCTS.filter((p) => p.categoryId === cat.id)}
            />
          ))}
        </div>
        <Sidebar position="right">
          <OrderSummary showEditButton={true} />
        </Sidebar>
        {ctx.isCartModalOpen && <OrderSummaryModal />}
      </main>
    </>
  );
};

export default Shop;
