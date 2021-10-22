import React from 'react';
import { formatePrice } from '../service/IntlFormatter';
import OrderItemList from './orderSummary/OrderItemList';

function OrderSummary({ orderItems }) {
  const orderItemsShow = orderItems.map((item) => {
    return (
      <OrderItemList
        imageUrl={item.imageUrl}
        name={item.name}
        color={item.colorName}
        quality={item.quality}
        totalPrice={item.price * item.quality}
      />
    );
  });

  const subTotal = orderItems.reduce((acc, cur) => {
    return acc + cur.quality * cur.price;
  }, 0);

  const shipping = 0;

  return (
    <>
      <h2 className='pb-3' style={{ borderBottom: '1px solid #0003' }}>
        ORDER SUMMARY
      </h2>
      {orderItemsShow}
      <div
        className='d-flex align-items-end'
        style={{ width: '100%', borderBottom: '1px solid #0003', height: '7.291666666666667vw' }}
      >
        <div className='row px-0 mx-0' style={{ width: '100%' }}>
          <div className='col-6'>
            <h5>SUBTOTAL</h5>
          </div>
          <div className='col-6 d-flex justify-content-end p-0'>
            <p>{formatePrice(subTotal)}</p>
          </div>
          <div className='col-6'>
            <h5>SHIPPING</h5>
          </div>
          <div className='col-6 d-flex justify-content-end p-0'>
            <p>{formatePrice(shipping)}</p>
          </div>
        </div>
      </div>
      <div className='row mt-3 px-0 mx-0' style={{ width: '100%' }}>
        <div className='col-6'>
          <h5>TOTAL</h5>
        </div>
        <div className='col-6 d-flex justify-content-end p-0'>
          <p>{formatePrice(subTotal - shipping)}</p>
        </div>
      </div>
    </>
  );
}

export default OrderSummary;