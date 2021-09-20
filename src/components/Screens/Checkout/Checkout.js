import React, { useState } from 'react';
import { withRouter } from 'react-router';

import BasicModal from '../../Layout/Modal/BasicModal';

import useModal from '../../hooks/use-modal';

import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import OrderSummary from '../../OrderSummary/OrderSummary';

import CheckoutForm from './CheckoutForm';
import classes from './Checkout.module.scss';

const Checkout = (props) => {
  const [showConfirmationModal, openConfirmationModal, closeConfirmationModal] =
    useModal();

  const [formIsValid, setFormIsValid] = useState(false);

  const handleGoBackButton = () => {
    props.history.push('/shop');
  };

  const handleFormValidity = (value) => {
    setFormIsValid(value);
  };

  return (
    <main className={classes.container}>
      <Button
        customStyles={['text']}
        onClick={handleGoBackButton}
      >{`< Go back`}</Button>
      <div className={classes['cards-container']}>
        <div className={classes['form-container']}>
          <Card customStyles={['padding-h1', 'padding-v2']}>
            <CheckoutForm handleFormValidity={handleFormValidity} />
          </Card>
          <Button
            customStyles={['primary', 'right']}
            onClick={openConfirmationModal}
            disabled={!formIsValid}
          >
            Submit
          </Button>
        </div>
        <Card customStyles={['padding-h1', 'padding-v2', 'min-300']}>
          <OrderSummary />
        </Card>
      </div>

      {showConfirmationModal && (
        <BasicModal
          title="Confirm purchase"
          primaryButtonLabel="Confirm"
          primaryButtonHandle={null}
          secondaryButtonLabel="Go back"
          secondaryButtonHandler={closeConfirmationModal}
          handleCloseModal={closeConfirmationModal}
        >
          <p>Do you want to confirm your purchase?</p>
        </BasicModal>
      )}
    </main>
  );
};

export default withRouter(Checkout);
