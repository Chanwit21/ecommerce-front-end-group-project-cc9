import axios from "axios";
import React, { useState, useEffect } from "react";
import { orderData as orderMock } from "../../mocks/orderData";
import OrderLists from "./OrderLists";

function OrderTable({ isAdminPage }) {
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    const fetchOrderItem = async () => {
      try {
        const res = await axios.get("/orders/");
        setOrderData(res.data.orderItems);
        // console.log(res);
        // console.log(res.data.orderItems);
      } catch (err) {
        console.log(err);
      }
    };
    fetchOrderItem();
  }, []);
  console.log(orderData);

  // amount: "150.00"
  // date: "2021-10-26T00:00:00.000Z"
  // firstname: "Nat"
  // ordertId: "1"
  // shippingStatus: "To Ship"
  // shippingTrackingId: "-"

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
              key={item.orderId}
              id={item.orderId}
              customerName={item.firstname}
              date={new Date(item.date).toLocaleDateString("en-US")}
              amount={new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(item.amount)}
              status={item.shippingStatus}
              trackingNumber={item.shippingTrackingId}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default OrderTable;
