import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.scss';

const Backdrop = ({ handleCloseModal }) => (
  <div onClick={handleCloseModal} className={classes.backdrop}></div>
);

const ModalOverlay = ({ children }) => (
  <div className={classes.modal}>{children}</div>
);

const Modal = ({ handleCloseModal, children }) => (
  <>
    {ReactDOM.createPortal(
      <Backdrop handleCloseModal={handleCloseModal} />,
      document.getElementById('backdrop-root')
    )}
    {ReactDOM.createPortal(
      <ModalOverlay>{children}</ModalOverlay>,
      document.getElementById('modal-root')
    )}
  </>
);

export default Modal;
