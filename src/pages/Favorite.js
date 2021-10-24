import React from "react";
import { productItems } from "../mocks/productItems";
import AccountHeader from "../component/AccountHeader";
import ProductCardList from "../component/ProductCard/ProductCardList";

function Favorite() {
  return (
    <>
      <AccountHeader />
      <div className="container ">
        <h4 className=" fw-bold d-flex justify-content-center mt-5 ">FAVORITE</h4>
        <div className=" d-flex row flex-wrap mt-5 mb-5">
          {productItems.map((item) => (
            <div className="col-3">
              <ProductCardList
                key={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                price={item.price}
                width="290px"
                height="330px"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Favorite;
