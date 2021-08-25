import React from 'react';

import { CATEGORIES } from '../../../constants/dummyData';

import classes from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <aside className={classes.container}>
      <ul className={classes.list}>
        {CATEGORIES.map((cat) => (
          <li key={cat} className={classes['list-item']}>
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
