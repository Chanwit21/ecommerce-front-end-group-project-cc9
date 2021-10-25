import React from "react";

function AccountHeader() {
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#FEF3F5",
        }}
      >
        <div
          style={{
            height: "160px",
          }}
          className=" container d-flex flex-column justify-content-between "
        >
          <h3 className="fw-bold mt-5">MY PROFILE</h3>
          <div className=" ">
            <button
              className="btn me-3"
              style={{
                width: "160PX",
                height: "45px",
                backgroundColor: "#FFD6DC",
              }}
            >
              <span className="fw-bold">MY ACCOUNT</span>
            </button>
            <button
              className="btn me-3"
              style={{
                width: "160PX",
                height: "45px",
                backgroundColor: "#FFD6DC",
              }}
            >
              <span className="fw-bold">MY ORDERS</span>
            </button>
            <button
              className="btn me-3"
              style={{
                width: "160PX",
                height: "45px",
                backgroundColor: "#FFD6DC",
              }}
            >
              <span className="fw-bold">MY ADDRESS</span>
            </button>
            <button
              className="btn me-3"
              style={{
                width: "160PX",
                height: "45px",
                backgroundColor: "#FFD6DC",
              }}
            >
              <span className="fw-bold">PAYMENT</span>
            </button>
            <button
              className="btn me-3"
              style={{
                width: "160PX",
                height: "45px",
                backgroundColor: "#FFD6DC",
              }}
            >
              <span className="fw-bold">FAVORITE ITEMS</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountHeader;
