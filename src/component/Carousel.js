import React from 'react';
import image_slide_1 from '../pic/carousel/image-slide-nont-1.jpeg';
import image_slide_2 from '../pic/carousel/image-slide-nont-2.jpeg';
import image_slide_3 from '../pic/carousel/image-slide-nont-3.jpeg';

function Carousel() {
  const imagesPromo = [
    {
      id: '1',
      image: image_slide_1,
      header: 'STICK BLUSH',
      title: 'AN ULTRA-LIGHT CREAM BLUSH THAT MELTS INTO SKIN AND CREATE RADIANT, NATURAL-LOOKING COLOR',
    },
    {
      id: '2',
      image: image_slide_2,
      header: 'Second slide label',
      title: 'Some representative placeholder content for the second slide.',
    },
    {
      id: '3',
      image: image_slide_3,
      header: 'Third slide label',
      title: 'Some representative placeholder content for the third slide.',
    },
  ];

  const buttonCarousel = imagesPromo.map((item, index) => {
    return (
      <button
        key={item.id}
        type='button'
        data-bs-target='#carouselExampleIndicators'
        data-bs-slide-to={index}
        className={`${index === 0 ? 'active' : ''}`}
        aria-current='true'
        aria-label={`Slide ${index}`}
      ></button>
    );
  });

  const imagesCarousel = imagesPromo.map((item, index) => {
    return (
      <div key={item.id} className={`carousel-item${index === 0 ? ' active' : ''}`}>
        <img
          src={item.image}
          className='d-block w-100'
          alt='...'
          style={{ height: '80vh', objectFit: 'cover', objectPosition: 'center -1vw' }}
        />
        <div className='carousel-caption d-none d-md-block' style={{ color: '#000' }}>
          <h5>{item.header}</h5>
          <p>{item.title}</p>
        </div>
      </div>
    );
  });

  return (
    <div id='carouselExampleIndicators' className='carousel slide' data-bs-ride='carousel' data-bs-interval='2000'>
      <div className='carousel-indicators'>{buttonCarousel}</div>
      <div className='carousel-inner'>{imagesCarousel}</div>
    </div>
  );
}

export default Carousel;
