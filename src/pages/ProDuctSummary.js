import axios from '../config/axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FilterProduct from '../component/FilterProduct';
import ProductSummaryList from '../component/ProductSummary/ProductSummaryList';

function ProductSummary() {
  const [products, setProducts] = useState([])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    const run = async () => {
      const { data: { products } } = await axios.get('/product')
      products.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      console.log(`products`, products)
      setProducts(products)
    }
    run()
  }, [refresh])

  const productsTableBody = products?.map((product) => {
    return <ProductSummaryList key={product.id} product={product} setRefresh={setRefresh} />;
  });

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
              <tr className='bg-dark border border-dark'>
                <th className='text-white p-2 text-center' colSpan='1'>
                  PRODUCT ID
                </th>
                <th className='text-white p-2 text-center' colSpan='2'>
                  PRODUCT NAME
                </th>
                <th className='text-white p-2 text-center' colSpan='1'>
                  COLOR
                </th>
                <th className='text-white p-2 text-center' colSpan='1'>
                  CATEGORY
                </th>
                <th className='text-white p-2 text-center' colSpan='1'>
                  STOCK
                </th>
                <th className='text-white p-2 text-center' colSpan='1'>
                  READY TO SHIP
                </th>
                <th className='text-white p-2 text-center' colSpan='2'>
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>{productsTableBody}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductSummary;
