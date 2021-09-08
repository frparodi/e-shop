import React from 'react';

import classes from './Input.module.scss';

const Input = (props) => {
  const { label, id } = props;
  return (
    <div className={classes.container}>
      {label ? (
        <label htmlFor={id} className={classes.label}>
          {label}
        </label>
      ) : null}
      <input id={id} className={classes.input} {...props} />
    </div>
  );
};

export default Input;
