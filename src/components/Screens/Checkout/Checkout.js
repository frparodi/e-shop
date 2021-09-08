import React from 'react';
import { withRouter } from 'react-router';

import Navbar from '../../Layout/Navbar/Navbar';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import OrderSummary from '../../OrderSummary/OrderSummary';

import CheckoutForm from './CheckoutForm';
import classes from './Checkout.module.scss';

const Checkout = (props) => {
  const handleGoBackButton = () => {
    props.history.push('/shop');
  };

  return (
    <>
      <Navbar />
      <main className={classes.container}>
        <Button
          customStyles={['text']}
          onClick={handleGoBackButton}
        >{`< Go back`}</Button>
        <Card>
          <CheckoutForm />
        </Card>
        <Card>
          <OrderSummary />
        </Card>
      </main>
    </>
  );
};

export default withRouter(Checkout);
