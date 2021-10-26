import React from 'react';
import { formatePrice } from '../../service/IntlFormatter';

function ProductCardList({ name, imageUrl, price, width, height, alt }) {
  return (
    <>
      <div className='d-flex align-items-center flex-column p-3' style={{ color: '#000' }}>
        <i className='bi bi-suit-heart-fill align-self-end p-2' style={{ position: 'absolute', cursor: 'pointer' }}></i>
        <img style={{ width, height, objectFit: 'cover' }} src={imageUrl} alt={alt} />
        <h5 className='p-3'>{name}</h5>
        <div className='mt-1 mb-2'>
          <i className='bi bi-star-fill'></i>
          <i className='bi bi-star-fill'></i>
          <i className='bi bi-star-fill'></i>
          <i className='bi bi-star-half'></i>
        </div>
        <span className='mt-1 mb-1'>{formatePrice(price)}</span>
        <button style={{ backgroundColor: 'white', cursor: 'pointer' }}>
          <span>select shade</span>
        </button>
      </div>
    </>
  );
}

export default ProductCardList;
