import React from "react";
import productPic1 from "../pic/mocks/Savour-Experience-Perfumes-Kayali-Musk-12b70993cf-b75a-4b4d-b3c1-a075280a430c.jpg";
import productPic2 from "../pic/mocks/vanilla.png";
import productPic3 from "../pic/mocks/musk.webp";
import productPic4 from "../pic/mocks/elixir.png";

export default function ShoppingCart() {
  const productBox = [
    { Name: "Savour", picture: productPic1, qty: 1, Price: "20 bath." },
    { Name: "Vanila", picture: productPic2, qty: 2, Price: "50 bath." },
    { Name: "Elixir", picture: productPic3, qty: 3, Price: "70 bath." },
    { Name: "Musk", picture: productPic4, qty: 4, Price: "100 bath." },
  ];

  return (
    <>
      <div className="d-flex justify-content-evenly ms-5">
        <div className="p-3 ps-0 me-0 mt-5 mb-5" style={{ width: "964px" }}>
          <div className="row">
            <h5 className="col-6">Product</h5>
            <h5 className="col">QTY</h5>
            <h5 className="col">Price</h5>
            <h5 className="col">Total</h5>
          </div>
          {productBox.map((item) => (
            <>
              <div className="row mt-2">
                <div className="col-5 d-inline-flex m-2 ">
                  <img src={item.picture} alt="" key={item.id} style={{ width: "150px", height: "150px" }} />
                  <h6 className="ms-2">{item.Name}</h6>
                  <div style={{ width: "50px", height: "50px", color: "#A52A2A" }}></div>
                </div>
                <div className="col ms-5 ">
                  <div className="border border-dark rounded-3" style={{ width: "90px", height: "40px" }}>
                    <button className="btn">+</button>
                    <span>{item.qty}</span>
                    <button className="btn">-</button>
                  </div>
                </div>
                <h6 className="col">{item.Price}</h6>
                <h6 className="col">{`${item.Price} * ${item.qty}`}</h6>
              </div>
              <hr className="align-self-center mt-0" />
            </>
          ))}
        </div>
        <div className="me-5 ms-0 mt-5 ">
          <h5> TOTAL</h5>
          <h5 className="mt-5">$150</h5>
          <button class="btn btn-dark mt-3" style={{ width: "100%", height: "40px" }}>
            Checkout
          </button>
          <h6 class="btn mt-2 ms-5 ">Secure shopping</h6>
        </div>
      </div>
    </>
  );
}
