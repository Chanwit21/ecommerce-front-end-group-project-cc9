import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ProductDetail({ product, IsFavorite, productImage }) {
  const [numberOfProduct, setNumberOfProduct] = useState(1);
  const [checkFavorite, setCheckFavorite] = useState(IsFavorite); //IsFavorite from database
  const [selectedColor, setSelectedColor] = useState(product?.[0]?.color);
  const [selectedImg, setSelectedImg] = useState('')

  useEffect(() => {
    setSelectedColor(product?.[0]?.color);
  }, [product]);

  useEffect(() => {
    setCheckFavorite(IsFavorite);
  }, [IsFavorite]);

  //* check color idx

  let imageIdx = productImage.findIndex((item => item.id === selectedImg))
  if (imageIdx === -1) imageIdx = 0;

  const handleClickFavorite = async () => {
    if (!checkFavorite) {
      setCheckFavorite(true);
      await axios.post('/product/favorite', { productId: productImage[imageIdx].Product.id, productName: productImage[imageIdx].Product.name });
    }
    if (checkFavorite) {
      await axios.delete(`/product/favorite/${product[0].id}`);
      setCheckFavorite(false);
    }
  };

  const handleAddToCart = async () => {
    await axios.post('/product/cart', { quality: numberOfProduct, productId: productImage[imageIdx].Product.id });
    alert('add to cart successful');
  };

  return (
    <div>
      <div
        className=' p-4'
        style={{
          backgroundImage: `linear-gradient(180deg, #FEF3F5 13.02%, rgba(251, 243, 245, 0) 100%)`,
        }}
      >
        <div className='container'>
          <div className='row my-5'>
            <div className='col-1'>
              {productImage.map((item, index) => (
                <div className='mb-2'>
                  <img
                    className={`${index === imageIdx ? 'border border-dark' : ''}`}
                    style={{ width: '4vw', height: '4vw' }}
                    src={item?.imageUrl}
                    alt=''
                    onClick={() => {
                      setSelectedImg(item.id);
                    }}
                  />
                </div>
              ))}
            </div>
            <div className='col-5'>
              <img
                className='border'
                style={{ width: '33.6vw', height: '33.6vw' }}
                src={productImage?.[imageIdx]?.imageUrl}
                alt=''
              />
            </div>
            <div className='col-6 ms-5' style={{ width: '28.75vw' }}>
              <h4 style={{ fontSize: '24px' }}>{productImage?.[imageIdx]?.Product?.name}</h4> {/*name*/}
              <hr className='m-0' />
              <p className='mt-4 fw-bold' style={{ fontSize: '20px' }}>{`$${productImage?.[imageIdx]?.Product?.price}`}</p> {/*price*/}
              <p style={{ fontSize: '18px' }}>{productImage?.[imageIdx]?.Product?.colorName}</p> {/*colorName*/}
              <div className='d-flex'>
                {product.map((item, index) => (
                  <div
                    className={`me-2 ${item.color === productImage[imageIdx]?.Product?.color ? 'border border-dark border-2' : ''}`}
                    onClick={() => setSelectedImg(productImage.find(itemP => itemP.Product.color === item.color).id)}
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: item?.color,
                    }}
                  ></div>
                ))}
              </div>
              <div className='d-flex align-items-center my-4'>
                <div className='border border-dark d-flex flex-nowrap align-items-center'>
                  <button onClick={() => setNumberOfProduct((cur) => (cur > 1 ? cur - 1 : cur))} className='btn'>
                    -
                  </button>
                  <span>{numberOfProduct}</span>
                  <button
                    onClick={() => setNumberOfProduct((cur) => (cur < product[0].countStock ? cur + 1 : cur))}
                    className='btn'
                  >
                    +
                  </button>
                </div>
                <div className='d-flex flex-nowrap'>
                  <button onClick={handleAddToCart} className='btn btn-dark mx-2' style={{ width: '18vw' }}>
                    ADD TO CART
                  </button>
                </div>
                {checkFavorite ? (
                  <button onClick={handleClickFavorite} className='btn border border-dark mx-2'>
                    <i style={{ color: 'black' }} className='bi bi-heart-fill'></i>
                  </button>
                ) : (
                  <button onClick={handleClickFavorite} className='btn border border-dark mx-2'>
                    <i className='bi bi-heart'></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
