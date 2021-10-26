import React, { useState } from "react";
import { orderData } from "../../mocks/orderData";
import OrderLists from "./OrderLists";

function OrderTable({ isAdminPage }) {
  return (
    <>
      <div className={`container mb-5 ${isAdminPage ? "" : "mt-5"}`}>
        <div className="border rounded-3 px-5 py-2 my-3 mx-5">
          <div className="row py-3">
            <div className="col-2 ">
              <h6 className="fs-bold">Order ID</h6>
            </div>
            <div className="col-2">
              <h6 className="fs-bold">Customer Name</h6>
            </div>
            <div className="col-2">
              <h6 className="fs-bold">Date</h6>
            </div>
            <div className="col-2">
              <h6 className="fs-bold">Amount</h6>
            </div>
            <div className="col-2">
              <h6 className="fs-bold">Status</h6>
            </div>
            <div className="col-2">
              <h6 className="fs-bold">Tracking Number</h6>
            </div>
          </div>
          {orderData.map((item) => (
            <OrderLists
              isAdminPage={isAdminPage}
              key={item.id}
              id={item.id}
              customerName={item.customerName}
              date={item.date}
              amount={item.amount}
              trackingNumber={item.trackingNumber}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default OrderTable;
