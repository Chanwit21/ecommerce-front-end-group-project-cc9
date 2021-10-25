import React, { useState } from "react";
import AccountHeader from "../component/AccountHeader";
import { customerAddress } from "../mocks/customerAddress";

function MyAddress() {
  const [addAddress, setAddAddress] = useState(false);
  const handleAddAddress = () => {
    setAddAddress(true);
  };
  return (
    <>
      <AccountHeader />
      <div className="container " style={{ height: "55vh" }}>
        <h6 className=" fw-bold d-flex justify-content-center mt-5">SHIPPING ADDRESS</h6>
        {customerAddress.map((item) => (
          <div key={item.id} className="d-flex flex-row justify-content-center mx-0 my-5 ">
            <div className="flex-start border border-dark border-end-0 px-5 py-3" style={{ width: "35vw" }}>
              <h6>
                {`${item.firstName}
              ${item.lastName}
              `}
              </h6>
              <h6>{item.phone}</h6>
              <h6>
                {`${item.address1},
              ${item.address2},
              ${item.district},
              ${item.province},
              ${item.postalCode}`}
              </h6>
            </div>
            <div className="flex-end d-flex">
              <div
                clasName=" flex-start  me-5 border-end-0"
                style={{
                  backgroundColor: "#FFD6DC",
                  border: "1px solid #000000",
                  borderRight: "none",
                  width: "50px",
                }}
              >
                <i
                  class="bi bi-pencil-square fs-4 d-flex justify-content-center mt-5"
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <div
                clasName=" flex-end"
                style={{ backgroundColor: "#FFD6DC", border: "1px solid #000000", width: "50px" }}
              >
                <i class="bi bi-trash fs-4 d-flex justify-content-center mt-5" style={{ cursor: "pointer" }}></i>
              </div>
            </div>
          </div>
        ))}
        <h6 className="d-flex justify-content-center mt-5" style={{ cursor: "pointer" }} onClick={handleAddAddress}>
          ADD NEW
        </h6>
      </div>
    </>
  );
}

export default MyAddress;
