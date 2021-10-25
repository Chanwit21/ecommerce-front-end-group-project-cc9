import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import FilterProduct from '../component/FilterProduct';
import ProductCardList from '../component/ProductCard/ProductCardList';
import { productItems } from '../mocks/productItems';
import axios from '../config/axios';

function AllProduct() {
  const [product, setProduct] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchProductByCategory = async () => {
      try {
        const res = await axios.get(`/product/all_product/products?category=${params.category}`);
        setProduct(res.data.products);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchProductByCategory();
  }, [params]);

  return (
    <>
      <div className='container'>
        <div className='row my-5'>
          <h4 className='row fs-bold my-2 py-0 '>ALL PRODUCT</h4>
          <div className='mt-3  col-2'>
            <FilterProduct />
          </div>
          <div className='col-10 row my-3 mx-0'>
            {product.map((item) => (
              <div className='col-4 '>
                <ProductCardList
                  key={item.id}
                  name={item.name}
                  imageUrl={item.imageUrl}
                  price={item.price}
                  width='290px'
                  height='290px'
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
