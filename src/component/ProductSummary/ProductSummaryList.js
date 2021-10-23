import React from 'react';

function ProductSummaryList({ product }) {
  return (
    <tr className='border border-dark'>
      <td className='text-dark p-2 text-center' colSpan='1'>
        {product.id}
      </td>
      <td className='text-dark p-2 text-center' colSpan='2'>
        {product.name}
      </td>
      <td className='p-2' colSpan='1'>
        <div className='d-flex justify-content-center align-items-center ' style={{ width: '100%', height: '100%' }}>
          <div style={{ backgroundColor: product.color, width: '1vw', height: '1vw' }}></div>
        </div>
      </td>
      <td className='text-dark p-2 text-center' colSpan='1'>
        {product.category}
      </td>
      <td className='text-dark p-2 text-center' colSpan='1'>
        {product.countStock}
      </td>
      <td className='text-dark p-2 text-center' colSpan='1'>
        {product.readyToShip}
      </td>
      <td className='text-dark p-2 text-center' colSpan='2'>
        <button className='btn btn-outline-primary m-1'>
          <i className='bi bi-pencil-square'></i>
        </button>
        <button className='btn btn-outline-danger m-1'>
          <i className='bi bi-trash'></i>
        </button>
      </td>
    </tr>
  );
}

export default ProductSummaryList;
