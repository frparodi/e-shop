import React from 'react';

import classes from './Card.module.scss';

const Card = ({ children, customStyles }) => {
  const styles = `${classes.card} ${
    customStyles ? customStyles.map((cs) => classes[cs]).join(' ') : null
  }`;
  return <div className={styles}>{children}</div>;
};

export default Card;
