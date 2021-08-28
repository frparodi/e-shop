import React from 'react';

import classes from './Button.module.scss';

const Button = ({ type = 'button', onClick, children, customStyles = [] }) => {
  const btnClass = `${classes.button} ${
    customStyles.length > 0
      ? customStyles.map((cs) => classes[cs]).join(' ')
      : ''
  }`;

  return (
    <button type={type} onClick={onClick} className={btnClass}>
      {children}
    </button>
  );
};

export default Button;
