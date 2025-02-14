import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Banner.css"; 

const Banner = ({ banners }) => {
  return (
    <div id="realEstateCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {banners.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#realEstateCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {banners.map((banner, index) => (
          <div key={banner.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img src={banner.image} className="d-block w-100" alt={banner.title} />
            <div className="carousel-caption d-none d-md-block">
              <h3>{banner.title}</h3>
              <p>{banner.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#realEstateCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#realEstateCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
