import React from 'react';

import Button from '../../UI/Button/Button';

import Modal from './Modal';

import classes from './BasicModal.module.scss';

const BasicModal = (props) => {
  const {
    title,
    children,
    primaryButtonLabel,
    primaryButtonHandler,
    secondaryButtonLabel,
    secondaryButtonHandler,
    handleCloseModal,
  } = props;
  return (
    <Modal handleCloseModal={handleCloseModal}>
      <div className={classes.container}>
        <h2 className={classes.title}>{title}</h2>
        {children}
        <div className={classes['buttons-row']}>
          {secondaryButtonLabel ? (
            <Button
              onClick={secondaryButtonHandler}
              customStyles={['outlined']}
            >
              {secondaryButtonLabel}
            </Button>
          ) : (
            ''
          )}
          <Button onClick={primaryButtonHandler} customStyles={['primary']}>
            {primaryButtonLabel}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default BasicModal;
