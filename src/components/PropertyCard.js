import React from "react";
import "./PropertyCard.css";

const PropertyCard = ({ property, onViewDetails }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <h2>{property.title}</h2>
      <p>{property.location}</p>
      <span className="price">{property.price}</span>
      <button className="details-btn" onClick={() => onViewDetails(property)}>
        View Details
      </button>
    </div>
  );
};

export default PropertyCard;
