import React, { useState, useCallback } from 'react';

import useInput from '../../hooks/use-input';

import BasicModal from '../../Layout/Modal/BasicModal';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

import classes from './CheckoutForm.module.scss';

const CheckoutForm = () => {
  const [name, setName] = useInput();
  const [phone, setPhone] = useInput();
  const [address, setAddress] = useInput();

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const closeConfirmationModal = useCallback(() => {
    setShowConfirmationModal(false);
  }, []);

  const openConfirmationModal = useCallback(() => {
    setShowConfirmationModal(true);
  }, []);

  return (
    <>
      <form className={classes.form}>
        <h2>Contact form</h2>
        <Input id="name" label="Name" onChange={setName} value={name} />
        <Input id="phone" label="Phone" onChange={setPhone} value={phone} />
        <Input
          id="address"
          label="Address"
          onChange={setAddress}
          value={address}
        />
        <Button
          customStyles={['primary', 'right']}
          onClick={openConfirmationModal}
        >
          Submit
        </Button>
      </form>
      {showConfirmationModal ? (
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
      ) : (
        ''
      )}
    </>
  );
};

export default CheckoutForm;
