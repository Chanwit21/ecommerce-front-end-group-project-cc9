import React from 'react';
import productPic1 from '../pic/mocks/Savour-Experience-Perfumes-Kayali-Musk-12b70993cf-b75a-4b4d-b3c1-a075280a430c.jpg';
import productPic2 from '../pic/mocks/vanilla.png';
import productPic3 from '../pic/mocks/musk.webp';
import productPic4 from '../pic/mocks/elixir.png';

function ProductFiltered({ filtered }) {
  const productBox = [
    { id: 1, Name: 'Savour', picture: productPic1, Rate: '4.5', Price: '$250 ' },
    { id: 2, Name: 'Vanila', picture: productPic2, Rate: '4.5', Price: '$250 ' },
    { id: 3, Name: 'Elixir', picture: productPic3, Rate: '4.5', Price: '$250' },
    { id: 4, Name: 'Musk', picture: productPic4, Rate: '4.5', Price: '$250 ' },
  ];

  return (
    <>
      <div className=' container  d-flex flex-column mt-5'>
        <div className='d-flex justify-content-between'>
          <h5>{filtered}</h5>
          <h6>VIEW ALL</h6>
        </div>

        <hr className='align-self-center' />
      </div>
      <div
        style={{ width: '100%', height: '495px' }}
        className='d-inline-flex justify-content-center align-items-center mb-5 '
      >
        {productBox.map((item) => (
          <div key={item.id} className='d-flex align-items-center flex-column p-3'>
            <i
              className='bi bi-suit-heart-fill align-self-end p-2'
              style={{ position: 'absolute', cursor: 'pointer' }}
            ></i>
            <img style={{ width: '330px', height: '330px' }} src={item.picture} key={item.id} alt='test' />
            <h5 className='p-3'>{item.Name}</h5>
            <div className='mt-1 mb-2'>
              <i className='bi bi-star-fill'></i>
              <i className='bi bi-star-fill'></i>
              <i className='bi bi-star-fill'></i>
              <i className='bi bi-star-half'></i>
            </div>
            <span className='mt-1 mb-1'>{item.Price}</span>
            <button style={{ backgroundColor: 'white', cursor: 'pointer' }}>
              <span>select shade</span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
export default ProductFiltered;
