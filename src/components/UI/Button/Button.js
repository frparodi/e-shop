import React from 'react';

import classes from './Button.module.scss';

const Button = ({
  type = 'button',
  onClick,
  children,
  customStyles = [],
  externalClasses = [],
  buttonRef,
  autoFocus = false,
  ...props
}) => {
  const btnClass = `${classes.button} ${
    customStyles.length > 0
      ? customStyles.map((cs) => classes[cs]).join(' ')
      : ''
  }`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${btnClass} ${externalClasses.join(' ')}`}
      autoFocus={autoFocus}
      ref={buttonRef}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
