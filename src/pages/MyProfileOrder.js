import React from "react";
import AccountHeader from "../component/AccountHeader";
import OrderTable from "../component/MyProfile/OrderTable";

function MyProfileOrder() {
  return (
    <>
      <AccountHeader />
      <OrderTable isAdminOrder={false} />
    </>
  );
}

export default MyProfileOrder;
