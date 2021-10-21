import React, { useState } from "react";
import test1 from "../pic/mocks/pexels-karolina-grabowska-4202325.jpg";
import test2 from "../pic/mocks/pexels-karolina-grabowska-4239013.jpg";
import test3 from "../pic/mocks/pexels-michelle-leman-6798761.jpg";

function Carousel() {
  const [imagesPromo, setImagesPromo] = useState([
    {
      image: test1,
      header: "First slide label",
      title: "Some representative placeholder content for the first slide.",
    },
    {
      image: test2,
      header: "Second slide label",
      title: "Some representative placeholder content for the second slide.",
    },
    {
      image: test3,
      header: "Third slide label",
      title: "Some representative placeholder content for the third slide.",
    },
  ]);

  const buttonCarousel = imagesPromo.map((item, index) => {
    return (
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={index}
        className={`${index === 0 ? "active" : ""}`}
        aria-current="true"
        aria-label={`Slide ${index}`}
      ></button>
    );
  });

  const imagesCarousel = imagesPromo.map((item, index) => {
    return (
      <div className={`carousel-item${index === 0 ? " active" : ""}`}>
        <img src={item.image} className="d-block w-100" alt="..." style={{ height: "80vh", objectFit: "cover" }} />
        <div className="carousel-caption d-none d-md-block" style={{ color: "#000" }}>
          <h3>{item.header}</h3>
          <p>{item.title}</p>
        </div>
      </div>
    );
  });

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
      <div className="carousel-indicators">{buttonCarousel}</div>
      <div className="carousel-inner">{imagesCarousel}</div>
    </div>
  );
}

export default Carousel;
