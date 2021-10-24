import React from "react";
import AccountHeader from "../component/AccountHeader";

function AddNewAddress() {
  return (
    <>
      <AccountHeader />
      <div className="container " style={{ width: "35vw", height: "55vh" }}>
        <h6 className=" fw-bold d-flex justify-content-center mt-5"> ADD NEW ADDRESS</h6>
        <div className="d-flex justify-content-between mb-3 my-5" style={{ width: "684px" }}>
          <input
            type="text"
            placeholder="Firstname*"
            className=" border border-dark"
            style={{ width: "335px", height: "37px" }}
          />
          <input
            type="text"
            placeholder="Lastname*"
            className=" border border-dark"
            style={{ width: "335px", height: "37px" }}
          />
        </div>
        <input
          type="text"
          placeholder="Address1*"
          className=" border border-dark mb-3"
          style={{ width: "684px", height: "37px" }}
        />
        <input
          type="text"
          placeholder="Address2"
          className="border border-dark mb-3"
          style={{ width: "684px", height: "37px" }}
        />
        <div className="d-flex justify-content-between mb-3" style={{ width: "684px" }}>
          <div style={{ width: "335px" }}>
            <select class="form-select border border-dark">
              <option selected>Province*</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div style={{ width: "335px" }}>
            <select class="form-select  border border-dark" aria-label="Default select example">
              <option selected>District*</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="d-flex justify-content-between mb-3" style={{ width: "684px" }}>
          <div style={{ width: "335px" }}>
            <select class="form-select  border border-dark" aria-label="Default select example">
              <option selected>Sub District</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Postal Code*"
            className=" border border-dark"
            style={{ width: "335px", height: "37px" }}
          />
        </div>
        <input
          type="text"
          placeholder="Phone*"
          className="border border-dark mb-3"
          style={{ width: "335px", height: "37px" }}
        />
        <div clasName="d-flex justify-content-center" style={{ width: "684px", height: "37px" }}>
          <button className="btn btn-dark mt-1">ADD ADDRESS</button>
        </div>
      </div>
    </>
  );
}

export default AddNewAddress;
