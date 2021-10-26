import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import FilterProduct from '../component/FilterProduct';
import ProductCardList from '../component/ProductCard/ProductCardList';
import { productItems } from '../mocks/productItems';
import axios from '../config/axios';
import { Link } from 'react-router-dom';

function AllProduct() {
  const [product, setProduct] = useState([]);
  const [filterValue, setFilterValue] = useState({ FACE: {}, SHEEK: {}, LIPS: {}, EYES: {}, BODY: {} });
  const [allowFilter, setAllowFilter] = useState('');
  const params = useParams();

  const isFirstRender = useRef(true);

  useEffect(() => {
    const fetchProductByCategory = async () => {
      try {
        const res = await axios.get(`/product/all_product/products?category=${params.category}`);
        setProduct(res.data.products);
      } catch (err) {
        console.dir(err);
      }
    };
    if (isFirstRender.current) {
      setAllowFilter(
        params.category === 'All Product'
          ? ['FACE', 'SHEEK', 'LIPS', 'EYES', 'BODY']
          : ['FACE', 'SHEEK', 'LIPS', 'EYES', 'BODY'].filter((item) => item.toLowerCase() === params.category)
      );
    }
    fetchProductByCategory();
  }, [params]);

  return (
    <>
      <div className='container'>
        <div className='row my-5'>
          <h4 className='fs-bold my-2 py-0 '>{params.category.toUpperCase()}</h4>
          <div className='mt-3  col-2'>
            <FilterProduct allowFilter={allowFilter} filterValue={filterValue} setFilterValue={setFilterValue} />
          </div>
          <div className='col-10 row my-3 mx-0'>
            {product.map((item) => (
              <div className='col-4 '>
                <Link to={`/productDescription/${item.name}`} className='nav-link'>
                  <ProductCardList
                    key={item.id}
                    name={item.name}
                    imageUrl={item.imageUrl}
                    price={item.price}
                    width='290px'
                    height='290px'
                    alt={item.name}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProduct;
