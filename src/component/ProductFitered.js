import React from "react";
import { productItems } from "../mocks/productItems";
import ProductCardList from "./ProductCard/ProductCardList";

function ProductFiltered({ filtered }) {
  const limitFeatured = productItems.filter((item) => item.id < 5);

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
        {limitFeatured.map((item) => (
          <div key={item.id}>
            <ProductCardList
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
              width="330px"
              height="330px"
            />
          </div>
        ))}
      </div>
    </>
  );
}
export default ProductFiltered;
