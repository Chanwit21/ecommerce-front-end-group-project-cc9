import React from "react";
import OrderTable from "../component/MyProfile/OrderTable";
import ToShip from "../pic/icons/ToShip.png";
import Deliver from "../pic/icons/deliver.png";
import AdminHeader from "../component/AdminHeader";

function AdminOrder() {
  return (
    <>
      <AdminHeader />
      <h5 className="container fw-bolder my-4">ORDERS</h5>
      <div className="container d-flex  justify-content-between">
        <div className="d-flex justify-content-between ">
          <div
            className="ms-5 me-2 border rounded-3 d-flex justify-content-around"
            style={{ width: "200px", height: "75px" }}
          >
            <div className="mt-2 ms-3">
              <h4 className="fw-bolder ">23</h4>
              <h6 className="fw-light " style={{ fontSize: "15px" }}>
                To ship
              </h6>
            </div>
            <img
              src={ToShip}
              alt=""
              style={{ width: "60px", height: "60px" }}
              className="mt-2"
            />
          </div>
          <div
            className="me-2 border rounded-3 d-flex justify-content-around"
            style={{ width: "200px", height: "75px" }}
          >
            <div className="mt-2 ms-3">
              <h4 className="fw-bolder">23</h4>
              <h6 className="fw-light" style={{ fontSize: "15px" }}>
                Delivery
              </h6>
            </div>
            <img
              src={Deliver}
              alt=""
              style={{ width: "60px", height: "60px" }}
              className="mt-2"
            />
          </div>
        </div>
        <div className="me-5 mt-5  ">
          {/* <nav aria-label="Page navigation example"> */}
          <ul className="pagination">
            <li className="page-item ">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
          {/* </nav> */}
        </div>
      </div>
      <OrderTable isAdminPage={true} />
    </>
  );
}

export default AdminOrder;
