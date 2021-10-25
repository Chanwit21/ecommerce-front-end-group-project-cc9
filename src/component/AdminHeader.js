import React from "react";

function AdminHeader() {
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
          <h3 className="fw-bold mt-5">MY ACCOUNT</h3>
          <div className=" ">
            <button
              className="btn me-3"
              style={{
                width: "160PX",
                height: "45px",
                backgroundColor: "#FFD6DC",
              }}
            >
              <span className="fw-bold">MY PROFILE</span>
            </button>
            <button
              className="btn me-3"
              style={{
                width: "160PX",
                height: "45px",
                backgroundColor: "#FFD6DC",
              }}
            >
              <span className="fw-bold">DASHBOARD</span>
            </button>
            <button
              className="btn me-3"
              style={{
                width: "160PX",
                height: "45px",
                backgroundColor: "#FFD6DC",
              }}
            >
              <span className="fw-bold">PRODUCTS</span>
            </button>
            <button
              className="btn me-3"
              style={{
                width: "160PX",
                height: "45px",
                backgroundColor: "#FFD6DC",
              }}
            >
              <span className="fw-bold">SHIPPING</span>
            </button>
            <button
              className="btn me-3"
              style={{
                width: "160PX",
                height: "45px",
                backgroundColor: "#FFD6DC",
              }}
            >
              <span className="fw-bold">INBOX</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminHeader;
