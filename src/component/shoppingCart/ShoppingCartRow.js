import React, { useState } from 'react';

function ShoppingCartRow({ imageUrl, name, price, color, quantity }) {
  const [count, setCount] = useState(quantity);
  return (
    <>
      <div className='row '>
        <div className='col-5 d-inline-flex  my-2'>
          <img src={imageUrl} alt='' style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
          <h6 className='mx-3 my-5'>{name}</h6>
          <h6 className='mx-3 my-5'>{color}</h6>
        </div>
        <div className='col ms-2'>
          <div className='border border-dark rounded-3 mx-5 my-5' style={{ width: '90px', height: '40px' }}>
            <button
              className='btn'
              onClick={() => {
                count > 0 ? setCount(count - 1) : setCount(count);
              }}
            >
              -
            </button>
            <span>{count}</span>
            <button
              className='btn '
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
        <h6 className='col mx-5 my-5'>{price}</h6>
        <div className='col d-flex justify-content-between'>
          <h6 className='me-5 my-5'>{count * price}</h6>
          <i class='bi bi-x-lg'></i>
        </div>
        <hr className='align-self-center mt-0' />
      </div>
    </>
  );
}

export default ShoppingCartRow;
