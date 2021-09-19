import React, { useState, useCallback } from 'react';

import useInput from '../../hooks/use-input';

import BasicModal from '../../Layout/Modal/BasicModal';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

import classes from './CheckoutForm.module.scss';

const validateName = (value) => value.trim().length > 3;
const validateAddress = (value) => value.trim().length > 5;
const validatePhone = (value) => value.trim().length >= 10;

const CheckoutForm = () => {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameError,
    valueChangeHandler: handleNameChange,
    inputBlurHandler: nameBlurHandler,
  } = useInput(validateName);

  const {
    value: address,
    isValid: addressIsValid,
    hasError: addressError,
    valueChangeHandler: handleAddressChange,
    inputBlurHandler: addressBlurHandler,
  } = useInput(validateAddress);

  const {
    value: phone,
    isValid: phoneIsValid,
    hasError: phoneError,
    valueChangeHandler: handlePhoneChange,
    inputBlurHandler: phoneBlurHandler,
  } = useInput(validatePhone);

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const closeConfirmationModal = useCallback(() => {
    setShowConfirmationModal(false);
  }, []);

  const openConfirmationModal = useCallback(() => {
    setShowConfirmationModal(true);
  }, []);

  const formIsValid = nameIsValid && phoneIsValid && addressIsValid;

  return (
    <>
      <form className={classes.form}>
        <h2 className={classes['form-title']}>Contact form</h2>
        <Input
          id="name"
          label="Name"
          onChange={handleNameChange}
          value={name}
          error={nameError}
          onBlur={nameBlurHandler}
        />
        <Input
          id="phone"
          type="number"
          label="Phone"
          onChange={handlePhoneChange}
          value={phone}
          error={phoneError}
          onBlur={phoneBlurHandler}
        />
        <Input
          id="address"
          label="Address"
          onChange={handleAddressChange}
          value={address}
          error={addressError}
          onBlur={addressBlurHandler}
        />
        <Button
          customStyles={['primary', 'right']}
          onClick={openConfirmationModal}
          disabled={!formIsValid}
        >
          Submit
        </Button>
      </form>
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
    </>
  );
};

export default CheckoutForm;
