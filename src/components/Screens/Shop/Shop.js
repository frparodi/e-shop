import React from 'react';
import { withRouter } from 'react-router';
import { useSelector } from 'react-redux';

import Frame from '../../Layout/Frame/Frame';
import Sidebar from '../../Layout/Sidebar/Sidebar';
import BasicModal from '../../Layout/Modal/BasicModal';
import Button from '../../UI/Button/Button';
import Fab from '../../UI/Fab/Fab';
import OrderSummary from '../../OrderSummary/OrderSummary';
import useModal from '../../hooks/use-modal';

import { CATEGORIES, PRODUCTS } from '../../../constants/dummyData';
import { CHECKOUT } from '../../../constants/routes';

import ProductSection from './ProductSection';
import ShowCartMobileButton from './ShowCartMobileButton';

import classes from './Shop.module.scss';
import {
  getCartSummarizedData,
  formatToCurrency,
} from '../../../utils/cartUtils';
import CategoriesList from './CategoriesList';

const Shop = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [isCartModalOpen, openCartModal, closeCartModal] = useModal();

  const [cartSize, cartCost] = getCartSummarizedData(cartItems);

  const handleConfirmCart = () => {
    props.history.push(CHECKOUT);
  };

  return (
    <Frame>
      <main className={classes.container}>
        <CategoriesList />
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
        <Sidebar>
          <h2 className={classes['order-summary-title']}>Order Summary</h2>
          <OrderSummary />
          <Button
            onClick={openCartModal}
            customStyles={['primary', 'margin-top']}
            disabled={cartItems.length === 0}
          >
            Checkout
          </Button>
        </Sidebar>
        {cartItems.length > 0 && (
          <Fab onClick={openCartModal}>
            <ShowCartMobileButton
              cartSize={cartSize}
              cartCost={formatToCurrency(cartCost)}
            />
          </Fab>
        )}

        {isCartModalOpen && (
          <BasicModal
            title="Cart items"
            handleCloseModal={closeCartModal}
            primaryButtonLabel="Confirm"
            primaryButtonHandler={
              cartItems.length > 0 ? handleConfirmCart : null
            }
            secondaryButtonLabel="Continue shopping"
            secondaryButtonHandler={closeCartModal}
          >
            <OrderSummary allowEdit="true" />
          </BasicModal>
        )}
      </main>
    </Frame>
  );
};

export default withRouter(Shop);
