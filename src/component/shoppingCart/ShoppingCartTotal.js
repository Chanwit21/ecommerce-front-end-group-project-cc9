import React from "react";

function ShoppingCartTotal() {
  return (
    <>
      <div className="me-5 mt-4">
        <h5 className="mt-5"> TOTAL</h5>
        <h5 className="mt-5">$150</h5>
        <button class="rounded-3 btn-dark mt-3" style={{ width: "250px", height: "40px" }}>
          Checkout
        </button>
        <h6 class="mt-2 ms-5 ps-3 fs-6 fw-light">Secure shopping</h6>
      </div>
    </>
  );
}

export default ShoppingCartTotal;
