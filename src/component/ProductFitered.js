import React from "react";
import { orderItems } from "../mocks/orderItems";
import ProductCardList from "./ProductCard/ProductCardList";

function ProductFiltered({ filtered }) {
  return (
    <>
      <div className=" container  d-flex flex-column mt-5">
        <div className="d-flex justify-content-between">
          <h5>{filtered}</h5>
          <h6>VIEW ALL</h6>
        </div>

        <hr className="align-self-center" />
      </div>
      <div
        style={{ width: "100%", height: "495px" }}
        className="d-inline-flex justify-content-center align-items-center mb-5 "
      >
        {orderItems.map((item) => (
          <>
            <ProductCardList
              key={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
              width="330px"
              height="330px"
            />
          </>
        ))}
      </div>
    </>
  );
}
export default ProductFiltered;
