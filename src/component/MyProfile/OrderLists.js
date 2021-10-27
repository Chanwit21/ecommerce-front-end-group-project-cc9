import React, { useState } from "react";
import editButton from "../../pic/icons/edit.png";
import saveButton from "../../pic/icons/save.png";

function OrderLists({ isAdminPage, id, customerName, date, amount, status, trackingNumber }) {
  const [save, setSave] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editTrackingNumber, setEditTrackingNumber] = useState("");
  const handleEdit = () => {
    setSave(true);
    setEdit(true);
  };
  const handleEditTracking = (e) => {
    setEditTrackingNumber(e.target.value);
  };

  const handleSave = () => {
    setEdit(false);
    setSave(false);
  };

  return (
    <>
      <div className="row ">
        <div className="col-2">
          <h6 className="fs-bold">{id}</h6>
        </div>
        <div className="col-2">
          <h6 className="fs-bold">{customerName}</h6>
        </div>
        <div className="col-2">
          <h6 className="fs-bold">{date}</h6>
        </div>
        <div className="col-2">
          <h6 className="fs-bold">{amount}</h6>
        </div>
        <div className="col-2">
          {isAdminPage ? (
            <>
              <select style={{ backgroundColor: "#F4F4F4", color: "#000000", border: "none" }}>
                <option className="fw-bold rounded-3 " style={{ backgroundColor: "#E5F7EA", color: "#05B535" }}>
                  To ship
                </option>
                <option className="fw-bold rounded-3" style={{ backgroundColor: "#FDF6E9", color: "#EDB543" }}>
                  Delivery
                </option>
              </select>
            </>
          ) : (
            <>
              <span
                className="fw-bold rounded-3"
                style={{
                  width: "70px",
                  height: "30px",
                  backgroundColor: `${status === "To ship" ? "#E5F7EA" : "#FDF6E9"}`,
                  color: `${status === "To ship" ? "#05B535" : "#EDB543"}`,
                  border: "none",
                }}
              >
                {status}
              </span>
            </>
          )}
        </div>
        <div className="col-2 d-flex justify-content-between">
          {isAdminPage ? (
            edit ? (
              <input
                type="text"
                className="fs-bold"
                value={editTrackingNumber}
                style={{ width: "100px", height: "30px", border: "none" }}
                onChange={handleEditTracking}
              />
            ) : (
              <span style={{ width: "100px", height: "30px", border: "none" }}>{editTrackingNumber}</span>
            )
          ) : (
            <span style={{ width: "100px", height: "30px", border: "none" }}>{trackingNumber}</span>
          )}
          {isAdminPage ? (
            <>
              {!save ? (
                <img className="pt-0" src={editButton} alt="" onClick={handleEdit} />
              ) : (
                <img className="pt-0" src={saveButton} alt="" onClick={handleSave} />
              )}
            </>
          ) : (
            ""
          )}
        </div>
        <hr className="mt-2" />
      </div>
    </>
  );
}

export default OrderLists;
