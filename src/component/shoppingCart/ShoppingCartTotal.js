import React from "react";

function ShoppingCartTotal() {
  return (
    <>
      <div className="me-5 ms-0 mt-5 ">
        <h5> TOTAL</h5>
        <h5 className="mt-5">$150</h5>
        <button class="btn btn-dark mt-3" style={{ width: "100%", height: "40px" }}>
          Checkout
        </button>
        <h6 class="btn mt-2 ms-5 ">Secure shopping</h6>
      </div>
    </>
  );
}

export default ShoppingCartTotal;
