import React, { useEffect, useState } from 'react';
import Carousel from '../component/Carousel';
import HomeQuote from '../component/HomeQuote';
import ProductFiltered from '../component/ProductFitered';
import ProductDetail from '../component/productDescription/ProductDetail';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';

function Home(filtered) {
  const { state: { user } } = useAuthContext()
  const [product, setProduct] = useState([]);
  const [IsFavorite, setIsFavorite] = useState(false);
  const [productImage, setProductImage] = useState([]);


  useEffect(() => {
    const run = async () => {
      try {
        const { data: { product, productImage } } = await axios.get(`/product/newAvailable/newAvailable`) //input productName
        console.log(`product`, product)
        if (user && product.length) {
          const { data: { IsFavorite } } = await axios.post(`/product/checkFavorite`, { productName: product?.[0]?.name });
          console.log(`IsFavorite`, IsFavorite)
          setIsFavorite(IsFavorite);
        }
        console.log(`productImage`, productImage)
        setProduct(product);
        setProductImage(productImage);
      }
      catch (err) {
        console.log(err.message)
      }
    };
    run();
  }, []);
  return (
    <div>
      <Carousel />
      <ProductFiltered filtered='FEATURED PRODUCT' />
      <HomeQuote />
      {product.length && <ProductDetail product={product} IsFavorite={IsFavorite} productImage={productImage} />}
      <HomeQuote />
      <ProductFiltered filtered='BEST SELLERS' />
    </div>
  );
}

export default Home;
