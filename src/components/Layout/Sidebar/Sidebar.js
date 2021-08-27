import React from 'react';

import classes from './Sidebar.module.scss';

const Sidebar = ({ children, position = 'left' }) => {
  return (
    <nav className={`${classes.container} ${classes[position]}`}>
      {children}
    </nav>
  );
};

export default Sidebar;
