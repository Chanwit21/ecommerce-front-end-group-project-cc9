import React from 'react';
import { Link } from 'react-router-dom';
import FilterProduct from '../component/FilterProduct';

function ProDuctSummary() {
  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-between mb-3'>
        <h2>PRODUCT STOCK</h2>
        <button className='btn btn-outline-dark'>
          <Link className='nav-link' to='/create_product' style={{ color: 'inherit' }}>
            CREATE
          </Link>
        </button>
      </div>
      <div className='row'>
        <div className='col-2'>
          <FilterProduct />
        </div>
        <div className='col-10'>
          <table style={{ width: '100%' }}>
            <thead>
              <tr className='bg-dark'>
                <th className='text-white p-2'>PRODUCT ID</th>
                <th className='text-white p-2'>PRODUCT NAME</th>
                <th className='text-white p-2'>COLOR</th>
                <th className='text-white p-2'>CATEGORY</th>
                <th className='text-white p-2'>STOCK</th>
                <th className='text-white p-2'>BOOKED</th>
                <th className='text-white p-2'>READY TO SELL</th>
                <th className='text-white p-2'>ACTION</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProDuctSummary;
