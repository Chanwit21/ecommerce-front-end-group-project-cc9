import axios from '../config/axios';
import React, { useEffect, useState } from 'react';
import AccountHeader from '../component/AccountHeader';
import OrderTable from '../component/MyProfile/OrderTable';

function MyProfileOrder() {
  const [onPage, setOnPage] = useState(1);
  const [orderData, setOrderData] = useState([]);
  const [countDelivery, setCountDelivery] = useState(0);
  const [countToShip, setCountToShip] = useState(0);

  useEffect(() => {
    const fetchOrderItem = async () => {
      try {
        const res = await axios.get(`/orders?offset=${7 * (onPage - 1)}`);
        setCountDelivery(res.data.count[0].count);
        setCountToShip(res.data.count[1].count);
        setOrderData(res.data.orderItems);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchOrderItem();
  }, []);
  return (
    <>
      <AccountHeader />
      <OrderTable isAdminOrder={false} orderData={orderData} />
    </>
  );
}

export default MyProfileOrder;
