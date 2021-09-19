import React from 'react';

import classes from './Input.module.scss';

const Input = ({ label, id, error, errorMessage, ...props }) => {
  const style = !error
    ? classes.container
    : `${classes.container} ${classes.error}`;

  return (
    <div className={style}>
      {label ? (
        <label htmlFor={id} className={classes.label}>
          {label}
        </label>
      ) : null}
      <input id={id} className={classes.input} {...props} />
      <div className={classes['error-container']}>
        {error && (
          <p className={classes.error}>
            {errorMessage ? errorMessage : `Please, enter a valid ${id} field.`}
          </p>
        )}
      </div>
    </div>
  );
};

export default Input;
