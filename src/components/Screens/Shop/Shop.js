import React from 'react';
import { withRouter } from 'react-router';
import { useSelector } from 'react-redux';

import Sidebar from '../../Layout/Sidebar/Sidebar';
import BasicModal from '../../Layout/Modal/BasicModal';
import Button from '../../UI/Button/Button';
import OrderSummary from '../../OrderSummary/OrderSummary';
import useModal from '../../hooks/use-modal';

import { CATEGORIES, PRODUCTS } from '../../../constants/dummyData';
import { CHECKOUT } from '../../../constants/routes';

import ProductSection from './ProductSection';
import classes from './Shop.module.scss';

const Shop = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleConfirmCart = () => {
    props.history.push(CHECKOUT);
  };

  const [isCartModalOpen, openCartModal, closeCartModal] = useModal();
  const [
    isConfirmationModalOpen,
    openConfirmationModal,
    closeConfirmationModal,
  ] = useModal();

  return (
    <main className={classes.container}>
      <Sidebar>
        <ul className={classes.list}>
          {CATEGORIES.map((cat) => (
            <li key={cat.id} className={classes['list-item']}>
              <a href={`/#${cat.name}`}>{cat.name}</a>
            </li>
          ))}
        </ul>
      </Sidebar>
      <div className={classes['product-catalog']}>
        {CATEGORIES.map((cat) => (
          <ProductSection
            key={cat.id}
            id={cat.id}
            sectionName={cat.name}
            products={PRODUCTS.filter((p) => p.categoryId === cat.id)}
          />
        ))}
      </div>
      <Sidebar position="right">
        {cartItems.length > 0 ? (
          <Button onClick={openCartModal} customStyles={['text']}>
            {`<< Edit cart`}
          </Button>
        ) : (
          ''
        )}
        <h2 className={classes['order-summary-title']}>Order Summary</h2>
        <OrderSummary showEditButton={true} />
        <Button
          onClick={openConfirmationModal}
          customStyles={['primary', 'margin']}
          disabled={cartItems.length === 0}
        >
          Checkout
        </Button>
      </Sidebar>
      {isCartModalOpen && (
        <BasicModal
          title="Cart items"
          primaryButtonLabel="OK"
          primaryButtonHandler={closeCartModal}
          handleCloseModal={closeCartModal}
        >
          <OrderSummary allowEdit="true" />
        </BasicModal>
      )}
      {isConfirmationModalOpen && (
        <BasicModal
          title="Confirm cart items"
          primaryButtonLabel="Submit"
          primaryButtonHandler={handleConfirmCart}
          secondaryButtonLabel="Close"
          secondaryButtonHandler={closeConfirmationModal}
          handleCloseModal={closeConfirmationModal}
        >
          <p>Do you want to confirm your cart, and go to checkout page?</p>
        </BasicModal>
      )}
    </main>
  );
};

export default withRouter(Shop);
