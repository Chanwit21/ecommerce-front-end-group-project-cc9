import React from 'react';
import Carousel from '../component/Carousel';
import HomeQuote from '../component/HomeQuote';
import ProductFiltered from '../component/ProductFitered';
import ProductDetail from '../component/productDescription/ProductDetail';

function Home(filtered) {
  // const { state: { user } } = useAuthContext()
  // const [product, setProduct] = useState([]);
  // const [IsFavorite, setIsFavorite] = useState(false);
  // const [productImage, setProductImage] = useState([]);


  // useEffect(() => {
  //   const run = async () => {
  //     const { data: { product, productImage } } = await axios.get(`/product/${'productName'}`) //input productName
  //     if (user) {
  //       const { data: { IsFavorite }} = await axios.post(`/product/checkFavorite`, { productName: product?.[0]?.name });
  //       setIsFavorite(IsFavorite);
  //     }
  //     setProduct(product);
  //     setProductImage(productImage);
  //   };
  //   run();
  // }, []);
  return (
    <div>
      <Carousel />
      <ProductFiltered filtered='FEATURED PRODUCT' />
      <HomeQuote />
      {/* <ProductDetail product={product} IsFavorite={IsFavorite} productImage={productImage}/> */}
      <HomeQuote />
      <ProductFiltered filtered='BEST SELLERS' />
    </div>
  );
}

export default Home;
