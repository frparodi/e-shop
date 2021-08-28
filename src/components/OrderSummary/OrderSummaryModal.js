import React, { useContext } from 'react';

import CartContext from '../../store/cart-context';
import Button from '../UI/Button/Button';
import Modal from '../Layout/Modal/Modal';
import OrderSummary from './OrderSummary';

import classes from './OrderSummaryModal.module.scss';

const OrderSummaryModal = () => {
  const ctx = useContext(CartContext);
  return (
    <Modal handleCloseModal={ctx.closeCartModal}>
      <div className={classes.container}>
        <OrderSummary allowEdit={true} />
        <Button
          type="button"
          onClick={ctx.closeCartModal}
          customStyles={['primary']}
        >
          OK
        </Button>
      </div>
    </Modal>
  );
};

export default OrderSummaryModal;
