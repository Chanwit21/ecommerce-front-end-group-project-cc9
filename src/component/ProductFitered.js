import React from 'react';
import { Link } from 'react-router-dom';
import ProductCardList from './ProductCard/ProductCardList';

function ProductFiltered({ filtered, product }) {
  return (
    <>
      <div className=' container  d-flex flex-column mt-5'>
        <div className='d-flex justify-content-between'>
          <h5>{filtered}</h5>
          <button className='btn'>
            <Link to='/allProduct/All Product' className='nav-link p-0 m-0' style={{ color: 'inherit' }}>
              VIEW ALL
            </Link>
          </button>
        </div>

        <hr className='align-self-center' />
      </div>
      <div
        style={{ width: '100%', height: '495px' }}
        className='d-inline-flex justify-content-center align-items-center mb-5'
      >
<<<<<<< HEAD
        {product.map((item) => (
          <>
=======
        {limitFeatured.map((item) => (
          <div key={item.id}>
>>>>>>> 0e84f2d1a2cbe804af61de2a9d8093ec13fb8349
            <ProductCardList
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
              width='330px'
              height='330px'
            />
          </div>
        ))}
      </div>
    </>
  );
}
export default ProductFiltered;
