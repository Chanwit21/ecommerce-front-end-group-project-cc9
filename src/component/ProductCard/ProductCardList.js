import React from "react";
import { Link } from "react-router-dom";
import { formatePrice } from "../../service/IntlFormatter";

function ProductCardList({ name, imageUrl, price, width, height, alt }) {
  return (
<<<<<<< HEAD
    <Link to={`/productDescription/${name}`} className='nav-link'>
      <div className='d-flex align-items-center flex-column p-3' style={{ color: '#000' }}>
        <img style={{ width, height, objectFit: 'cover' }} src={imageUrl} alt={alt} />
        <h5 className='p-3'>{name}</h5>
        <span className='mt-1 mb-1'>{formatePrice(price)}</span>
        <button style={{ backgroundColor: 'white', cursor: 'pointer' }}>
=======
    <Link to={`/productDescription/${name}`} className="nav-link">
      <div className="d-flex align-items-center flex-column p-3" style={{ color: "#000" }}>
        <img style={{ width, height, objectFit: "cover" }} src={imageUrl} alt={alt} />
        <h5 className="p-3">{name}</h5>
        {/* <div className='mt-1 mb-2'>
          <i className='bi bi-star-fill'></i>
          <i className='bi bi-star-fill'></i>
          <i className='bi bi-star-fill'></i>
          <i className='bi bi-star-half'></i>
        </div> */}
        <span className="mt-1 mb-1">{formatePrice(price)}</span>
        <button style={{ backgroundColor: "white", cursor: "pointer" }}>
>>>>>>> 0e84f2d1a2cbe804af61de2a9d8093ec13fb8349
          <span>select shade</span>
        </button>
      </div>
    </Link>
  );
}

export default ProductCardList;
