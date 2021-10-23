import React, { useState } from "react";

function ShoppingCartRow({ imageUrl, name, price, color }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="row mt-2">
        <div className="col-5 d-inline-flex m-2 ">
          <img src={imageUrl} alt="" style={{ width: "150px", height: "150px" }} />
          <h6 className="ms-2">{name}</h6>
          <h6 className="ms-5 ">{color}</h6>
        </div>
        <div className="col ms-5 ">
          <div className="border border-dark rounded-3" style={{ width: "90px", height: "40px" }}>
            <button
              className="btn"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
            <span>{count}</span>
            <button
              className="btn"
              onClick={() => {
                count > 0 ? setCount(count - 1) : setCount(count);
              }}
            >
              -
            </button>
          </div>
        </div>
        <h6 className="col">{price}</h6>
        <h6 className="col">{count * price}</h6>
        <hr className="align-self-center mt-0" />
      </div>
    </>
  );
}

export default ShoppingCartRow;
