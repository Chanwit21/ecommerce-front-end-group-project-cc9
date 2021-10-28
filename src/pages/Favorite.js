import React, { useEffect, useState } from 'react';
import AccountHeader from '../component/AccountHeader';
import ProductCardList from '../component/ProductCard/ProductCardList';
import { productItems as pt } from '../mocks/productItems';
import axios from '../config/axios';

function Favorite() {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    const fetchFavoriteProduct = async () => {
      try {
        const res = await axios.get('/product/favorite/All');
        setProductItems(res.data.favoriteProductList);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchFavoriteProduct();
  }, []);

  return (
    <>
      <AccountHeader />
      <div className='container' style={{ width: '65%' }}>
        <h4 className=' fw-bold d-flex justify-content-center mt-5 '>FAVORITE</h4>
        <div className='d-flex row flex-wrap mt-5 mb-5' style={{ minHeight: '20vw' }}>
          {productItems.map((item, index) => (
            <div className='col-4' key={index}>
              <ProductCardList
                key={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                price={item.price}
                width='290px'
                height='330px'
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Favorite;
