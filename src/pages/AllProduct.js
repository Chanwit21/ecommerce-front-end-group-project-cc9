import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import FilterProduct from '../component/FilterProduct';
import ProductCardList from '../component/ProductCard/ProductCardList';
import axios from '../config/axios';
import Pagination from '../component/Pagination';

const genObjectToFilter = (filterValue) => {
  const obj = {};
  for (let key in filterValue) {
    const result = [];
    for (let key1 in filterValue[key]) {
      if (filterValue[key][key1]) {
        result.push(key1);
      }
    }
    obj[key] = result;
  }
  return obj;
};

function AllProduct() {
  const [product, setProduct] = useState([]);
  const [filterValue, setFilterValue] = useState({ FACE: {}, SHEEK: {}, LIPS: {}, EYES: {}, BODY: {} });
  const [allowFilter, setAllowFilter] = useState([]);
  const [countProduct, setCountProduct] = useState(0);
  const [onPage, setOnPage] = useState(1);
  const params = useParams();

  useEffect(() => {
    const fetchProductByCategory = async () => {
      try {
        const res = await axios.get(
          `/product/all_product/products?category=${params.category}&offset=${9 * (onPage - 1)}&filter=${JSON.stringify(
            { FACE: {}, SHEEK: {}, LIPS: {}, EYES: {}, BODY: {} }
          )}`
        );
        setProduct(res.data.products);
        setCountProduct(res.data.count);
      } catch (err) {
        console.dir(err);
      }
    };
    setAllowFilter(
      params.category === 'All Product'
        ? ['FACE', 'SHEEK', 'LIPS', 'EYES', 'BODY']
        : ['FACE', 'SHEEK', 'LIPS', 'EYES', 'BODY'].filter((item) => item.toLowerCase() === params.category)
    );

    fetchProductByCategory();
  }, [params]);

  useEffect(() => {
    setOnPage(1);
    setFilterValue({ FACE: {}, SHEEK: {}, LIPS: {}, EYES: {}, BODY: {} });
  }, [params]);

  useEffect(() => {
    const fetchProductByCategoryFilter = async () => {
      try {
        const res = await axios.get(
          `/product/all_product/products?category=${params.category}&offset=${9 * (onPage - 1)}&filter=${JSON.stringify(
            genObjectToFilter(filterValue)
          )}`
        );
        setProduct(res.data.products);
        setCountProduct(res.data.count);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchProductByCategoryFilter();
  }, [filterValue, onPage]);

  return (
    <>
      <div className='container'>
        <div className='row my-5'>
          <div className='col-9'>
            <h4 className='fs-bold my-2 py-0 '>{params.category.toUpperCase()}</h4>
          </div>
          <div className='col-3 d-flex justify-content-end'>
            {Math.ceil(countProduct / 9) === 0 ? null : (
              <Pagination countPage={Math.ceil(countProduct / 9)} onPage={onPage} setOnPage={setOnPage} />
            )}
          </div>
          <div className='mt-3  col-2'>
            <FilterProduct allowFilter={allowFilter} filterValue={filterValue} setFilterValue={setFilterValue} />
          </div>
          <div className='col-10 row my-3 mx-0'>
            {product.map((item) => (
              <div className='col-4'>
                <ProductCardList
                  key={item.id}
                  name={item.name}
                  imageUrl={item.imageUrl}
                  price={item.price}
                  width='290px'
                  height='290px'
                  alt={item.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProduct;
