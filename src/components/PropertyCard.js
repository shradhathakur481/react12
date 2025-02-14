import React from "react";
import { useNavigate } from "react-router-dom";
import "./PropertyCard.css";

const PropertyCard = ({ property, onContactAgent }) => {
  const navigate = useNavigate();

  return (
    <div className="property-card">
      <img 
        src={property.image} 
        alt={property.title} 
        className="property-image"
        onClick={() => navigate(`/property/${property.id}`)}
        style={{ cursor: "pointer" }}
      />
      <div className="property-details">
        <h2 onClick={() => navigate(`/property/${property.id}`)} style={{ cursor: "pointer" }}>
          {property.title}
        </h2>
        <p><strong>Price:</strong> {property.price}</p>
        <p><strong>Location:</strong> {property.location}</p>
        <button onClick={() => onContactAgent(property.agent)} className="contact-agent-btn">
          Contact Agent
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
