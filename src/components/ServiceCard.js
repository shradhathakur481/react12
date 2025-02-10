import React from "react";
import "./ServiceCard.css"; // Import CSS for styling

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-image" />
      <div className="service-content">
        <h3 className="service-title">{title}</h3>
        <p className="service-text">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
