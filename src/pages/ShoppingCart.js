import React from 'react';
import ShoppingCartRow from '../component/shoppingCart/ShoppingCartRow';
import ShoppingCartTotal from '../component/shoppingCart/ShoppingCartTotal';
import { useCartContext } from '../context/CartContext';

export default function ShoppingCart() {
  const {
    state: { carts },
  } = useCartContext();

  const totalPrice = carts.reduce((acc, cur) => {
    return acc + cur.quality * cur.price;
  }, 0);
  return (
    <>
      <div className='d-flex justify-content-evenly ms-5'>
        <div className='p-3 ps-0 me-0 mt-5 mb-5' style={{ width: '964px' }}>
          <div className='row border-bottom pb-1'>
            <div className='col-6'>
              <h5>Product</h5>
            </div>
            <div className='col-2 text-center'>
              <h5>QTY</h5>
            </div>
            <div className='col-2 text-center'>
              <h5>Price</h5>
            </div>
            <div className='col-2 text-center'>
              <div className='d-flex justify-content-center align-items-center' style={{ width: '85%' }}>
                <h5>Total</h5>
              </div>
            </div>
          </div>
          {carts.map((item) => (
            <ShoppingCartRow
              key={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
              color={item.colorName}
              quantity={item.quality}
              cartItem={item}
            />
          ))}
        </div>
        <ShoppingCartTotal total_price={totalPrice} />
      </div>
    </>
  );
}
