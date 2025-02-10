// src/components/BannerItem.js
import React from 'react';
import './BannerItem.css'; // Optional: Create this file if you want custom styles for each item

const BannerItem = ({ banner, isActive }) => {
  return (
    <div className={`carousel-item ${isActive ? 'active' : ''}`}>
      <img src={banner.image} className="d-block w-100" alt={banner.alt} />
      <div className="carousel-caption d-none d-md-block">
        <h3>{banner.heading}</h3>
        <p>{banner.text}</p>
      </div>
    </div>
  );
};

export default BannerItem;
