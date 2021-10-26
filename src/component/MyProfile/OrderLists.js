import React, { useState } from "react";
import editButton from "../../pic/icons/edit.png";
import saveButton from "../../pic/icons/save.png";

function OrderLists({ isAdminPage, id, customerName, date, amount, trackingNumber }) {
  const [save, setSave] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [editTrackingNumber, setEditTrackingNumber] = useState("");
  const handleEdit = () => {
    setIsReadOnly(false);
    setSave(true);
  };
  const handleEditTracking = (e) => {
    setIsReadOnly(false);
    setEditTrackingNumber(e.target.value);
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
          <select style={{ backgroundColor: "#F4F4F4", color: "#000000", border: "none" }}>
            <option style={{ backgroundColor: "#F4F4F4", color: "#000000", border: "none" }}>To ship</option>
            <option>Delivery</option>
          </select>
        </div>
        <div className="col-2 d-flex justify-content-between">
          <input
            type="text"
            className="fs-bold"
            defaultValue={trackingNumber}
            value={isAdminPage ? editTrackingNumber : trackingNumber}
            style={{ width: "100px", height: "30px", border: "none" }}
            onChange={handleEditTracking}
          />
          {isAdminPage ? (
            <>
              {!save ? (
                <img className="pt-0" src={editButton} alt="" onClick={handleEdit} />
              ) : (
                <img className="pt-0" src={saveButton} alt="" />
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
