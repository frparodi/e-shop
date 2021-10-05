import React from 'react';

import Navbar from '../Navbar/Navbar';

import classes from './Frame.module.scss';

const Frame = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default Frame;
