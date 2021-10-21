import React from "react";

function AccountHeader() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "200px",
          backgroundColor: "#FEF3F5",
        }}
        className=" container d-flex flex-column "
      >
        <h3>MY ACCOUNT</h3>
        <div>
          <button
            className="btn"
            style={{
              backgroundColor: "#FFD6DC",
            }}
          ></button>
          <button
            className="btn"
            style={{
              backgroundColor: "#FFD6DC",
            }}
          ></button>
          <button
            className="btn"
            style={{
              backgroundColor: "#FFD6DC",
            }}
          ></button>
          <button
            className="btn"
            style={{
              backgroundColor: "#FFD6DC",
            }}
          ></button>
        </div>
      </div>
    </>
  );
}

export default AccountHeader;
