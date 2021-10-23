import React, { useState } from "react";
import ShoppingCartRow from "../component/shoppingCart/ShoppingCartRow";
import ShoppingCartTotal from "../component/shoppingCart/ShoppingCartTotal";
import { orderItems } from "../mocks/orderItems";

export default function ShoppingCart() {
  return (
    <>
      <div className="d-flex justify-content-evenly ms-5">
        <div className="p-3 ps-0 me-0 mt-5 mb-5" style={{ width: "964px" }}>
          <div className="row">
            <h5 className="col-6">Product</h5>
            <h5 className="col">QTY</h5>
            <h5 className="col">Price</h5>
            <h5 className="col">Total</h5>
          </div>
          {orderItems.map((item) => (
            <ShoppingCartRow
              key={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
              color={item.colorName}
            />
          ))}
        </div>
        <ShoppingCartTotal />
      </div>
    </>
  );
}
