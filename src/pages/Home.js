import React from 'react';
import Carousel from '../component/Carousel';
import HomeQuote from '../component/HomeQuote';
import ProductFiltered from '../component/ProductFitered';
import ProductDetail from '../component/productDescription/ProductDetail';

function Home(filtered) {
  return (
    <div>
      <Carousel />
      <ProductFiltered filtered='FEATURED PRODUCT' />
      <HomeQuote />
      {/* <ProductDetail /> */}
      <HomeQuote />
      <ProductFiltered filtered='BEST SELLERS' />
    </div>
  );
}

export default Home;
