import React from "react";
import { orderItems } from "../mocks/orderItems";
import AccountHeader from "../component/AccountHeader";
import ProductCardList from "../component/ProductCard/ProductCardList";

function Favorite() {
  return (
    <>
      <AccountHeader />
      <h4 className="container fw-bold d-flex justify-content-center mt-3 ">FAVORITE</h4>
      <div className="container d-flex flex-row flex-wrap">
        {orderItems.map((item) => (
          <div className="col me-3" style={{ width: "290px", height: "495px" }}>
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
    </>
  );
}

export default Favorite;
