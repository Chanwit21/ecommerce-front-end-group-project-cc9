import React from "react";
import FilterProduct from "../component/FilterProduct";
import ProductCardList from "../component/ProductCard/ProductCardList";
import { productItems } from "../mocks/productItems";

function AllProduct() {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <h4 className="row fs-bold my-2 py-0 ">ALL PRODUCT</h4>
          <div className="mt-3  col-2">
            <FilterProduct />
          </div>
          <div className="col-10 row my-3 mx-0">
            {productItems.map((item) => (
              <div className="col-4 ">
                <ProductCardList
                  key={item.id}
                  name={item.name}
                  imageUrl={item.imageUrl}
                  price={item.price}
                  width="290px"
                  height="290px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProduct;
