import React from "react";
import "./PropertyModal.css";

const PropertyModal = ({ property, onClose }) => {
  if (!property) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <img src={property.image} alt={property.title} />
        <h2>{property.title}</h2>
        <p className="modal-location">{property.location}</p>
        <p className="modal-description">{property.description}</p>
        <ul className="modal-details">
          <li><strong>Price:</strong> {property.price}</li>
          <li><strong>Bedrooms:</strong> {property.bedrooms}</li>
          <li><strong>Bathrooms:</strong> {property.bathrooms}</li>
          <li><strong>Area:</strong> {property.area}</li>
        </ul>
        <button className="close-modal-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PropertyModal;
