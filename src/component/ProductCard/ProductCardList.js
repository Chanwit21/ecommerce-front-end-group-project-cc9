import React from 'react';
import { Link } from 'react-router-dom';
import { formatePrice } from '../../service/IntlFormatter';

function ProductCardList({ name, imageUrl, price, width, height, alt }) {
  return (
    <Link to={`/productDescription/${name}`} className='nav-link'>
      <div className='d-flex align-items-center flex-column p-3' style={{ color: '#000' }}>
        <img style={{ width, height, objectFit: 'cover' }} src={imageUrl} alt={alt} />
        <h5 className='p-3'>{name}</h5>
        <span className='mt-1 mb-1'>{formatePrice(price)}</span>
        <button style={{ backgroundColor: 'white', cursor: 'pointer' }}>
          <span>select shade</span>
        </button>
      </div>
    </Link>
  );
}

export default ProductCardList;
