import React from 'react';

import Navbar from '../Navbar/Navbar';

import classes from './Frame.module.scss';

const Frame = ({ children }) => {
  return (
    <div className={classes.frame}>
      <Navbar />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Frame;
