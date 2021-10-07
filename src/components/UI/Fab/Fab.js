import React from 'react';

import Button from '../Button/Button';

import classes from './Fab.module.scss';

const Fab = ({ children, ...props }) => {
  return (
    <Button externalClasses={[classes.fab]} {...props}>
      {children}
    </Button>
  );
};

export default Fab;
