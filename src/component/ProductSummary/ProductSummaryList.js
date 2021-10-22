import React from 'react';

function ProductSummaryList({ product }) {
  return (
    <tr className='border border-dark'>
      <th className='text-dark p-2 text-center' colSpan='1'>
        {product.id}
      </th>
      <th className='text-dark p-2 text-center' colSpan='2'>
        {product.name}
      </th>
      <th className='p-2' colSpan='1'>
        <div className='d-flex justify-content-center align-items-center ' style={{ width: '100%', height: '100%' }}>
          <div style={{ backgroundColor: product.color, width: '1vw', height: '1vw' }}></div>
        </div>
      </th>
      <th className='text-dark p-2 text-center' colSpan='1'>
        {product.category}
      </th>
      <th className='text-dark p-2 text-center' colSpan='1'>
        {product.countStock}
      </th>
      <th className='text-dark p-2 text-center' colSpan='1'>
        {product.booked}
      </th>
      <th className='text-dark p-2 text-center' colSpan='1'>
        {+product.countStock - +product.booked}
      </th>
      <th className='text-dark p-2 text-center' colSpan='2'>
        <button className='btn btn-outline-primary m-1'>
          <i className='bi bi-pencil-square'></i>
        </button>
        <button className='btn btn-outline-danger m-1'>
          <i className='bi bi-trash'></i>
        </button>
      </th>
    </tr>
  );
}

export default ProductSummaryList;
