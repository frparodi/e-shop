import React from 'react';

import { CATEGORIES } from '../../../constants/dummyData';

import classes from './CategoriesList.module.scss';

const CategoriesList = () => {
  return (
    <ul className={classes.list}>
      {CATEGORIES.map((cat) => (
        <li key={cat.id} className={classes['list-item']}>
          <a href={`/#${cat.name}`}>{cat.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
