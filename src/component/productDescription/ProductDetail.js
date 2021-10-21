import React from "react";

function ProductDetail() {
  return (
    <div>
      <div
        className="card p-4"
        style={{
          backgroundImage: `linear-gradient(180deg, #FEF3F5 13.02%, rgba(251, 243, 245, 0) 100%)`,
        }}
      >
        <div className=" container">
          <div className="row my-5">
            <div className="col-1">
              <img
                className="mb-2"
                style={{ width: "100%" }}
                src="https://cdn.shopify.com/s/files/1/0450/5069/1744/products/Porcelain_400x.jpg?v=1626851297"
                alt=""
              />
              <img
                className="mb-2"
                style={{ width: "100%" }}
                src="https://cdn.shopify.com/s/files/1/0450/5069/1744/products/Porcelain_400x.jpg?v=1626851297"
                alt=""
              />
              <img
                className="mb-2"
                style={{ width: "100%" }}
                src="https://cdn.shopify.com/s/files/1/0450/5069/1744/products/Porcelain_400x.jpg?v=1626851297"
                alt=""
              />
              <img
                className="mb-2"
                style={{ width: "100%" }}
                src="https://cdn.shopify.com/s/files/1/0450/5069/1744/products/Porcelain_400x.jpg?v=1626851297"
                alt=""
              />
              <img
                className="mb-2"
                style={{ width: "100%" }}
                src="https://cdn.shopify.com/s/files/1/0450/5069/1744/products/Porcelain_400x.jpg?v=1626851297"
                alt=""
              />
            </div>
            <div className="col-5">
              <img
                style={{ width: "100%" }}
                src="https://cdn.shopify.com/s/files/1/0450/5069/1744/products/Porcelain_400x.jpg?v=1626851297"
                alt=""
              />
            </div>
            <div className="col-6">
              <h4>Seal the Deal Concealer</h4>
              <hr className="m-0" />
              <div className="m-0">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
              </div>
              <p className="mt-4 fw-bold">$50</p>
              <p>Color Shade Name</p>
              <div className="d-flex">
                <div
                  className="me-2"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#F6C5B1",
                  }}
                ></div>
                <div
                  className="me-2"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#A85E5B",
                  }}
                ></div>
                <div
                  className="me-2"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#703840",
                  }}
                ></div>
              </div>
              <div className="d-flex align-items-center my-4">
                <div className="border border-dark">
                  <button className="btn">-</button>
                  <span>1</span>
                  <button className="btn">+</button>
                </div>
                <button className="btn btn-dark mx-2 w-50">ADD TO CART</button>
                <button className="btn border border-dark mx-2">
                  <i className="bi bi-heart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
