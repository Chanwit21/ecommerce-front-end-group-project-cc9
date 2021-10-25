import React from "react";
import Avartar from "../../pic/mocks/soft-pink.jpg";

function Profile({ button }) {
  return (
    <>
      <div className="container">
        <div className="row my-5 mx-1 p-0">
          <div className="col-5" style={{ width: "175px", height: "175px" }}>
            <img src={Avartar} alt="avartar" className="rounded-circle ms-1" />
            <h6 className="ms-4 my-3" style={{ width: "120px", cursor: "pointer" }}>
              Change picture
            </h6>
          </div>
          <div className="col-5 col mt-2 ms-5">
            <div className="row mb-2">
              <label className="col fw-bold">FISRTNAME</label>
              <input
                className="col rounded"
                style={{ backgroundColor: "#FEF3F5", border: "1px solid #FFD6DC", width: "500px" }}
              />
            </div>
            <div className="row mb-2">
              <label className="col fw-bold">LASTNAME</label>
              <input
                className="col rounded"
                style={{ backgroundColor: "#FEF3F5", border: "1px solid #FFD6DC", width: "500px" }}
              />
            </div>
            <div className="row mb-2">
              <label className="col fw-bold">PHONE</label>
              <input
                className="col rounded"
                style={{ backgroundColor: "#FEF3F5", border: "1px solid #FFD6DC", width: "500px" }}
              />
            </div>
            <div className="row mb-2">
              <label className="col fw-bold">EMAIL</label>
              <input
                className="col rounded"
                style={{ backgroundColor: "#FEF3F5", border: "1px solid #FFD6DC", width: "500px" }}
              />
            </div>
            <div className="row mb-2 ">
              <label className="col fw-bold">BIRTHDATE</label>
              <input
                className="col rounded"
                style={{ backgroundColor: "#FEF3F5", border: "1px solid #FFD6DC", width: "500px" }}
              />
            </div>
            <div className="row mb-2">
              <label className="col fw-bold">GENDER</label>
              <input
                className="col rounded"
                style={{ backgroundColor: "#FEF3F5", border: "1px solid #FFD6DC", width: "500px" }}
              />
            </div>
            <button className="btn btn-dark d-flex justify-content-center mt-5" style={{ cursor: "pointer" }}>
              {button}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
