import React from 'react';

import Navbar from '../../Layout/Navbar/Navbar';
import Sidebar from '../../Layout/Sidebar/Sidebar';

import classes from './Shop.module.scss';

const Shop = () => {
  return (
    <>
      <Navbar />
      <main className={classes.container}>
        <Sidebar />
      </main>
    </>
  );
};

export default Shop;
