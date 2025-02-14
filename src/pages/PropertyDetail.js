import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PropertyDetail.css"; // Ensure this file exists

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

const PropertyDetails = () => {
  const { id } = useParams(); // Get property ID from URL
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${apiUrl}/properties/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Property Data:", data);
        setProperty(data);
      })
      .catch((error) => {
        console.error("Error fetching property details:", error);
        setError(error.message);

        // ✅ Mock Data in case of an API failure
        setProperty({
          title: "Sample Property",
          location: "Unknown Location",
          price: "N/A",
          description: "No details available",
          image: "https://placehold.co/600x400",
        });
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="loading-message">Loading property details...</p>;
  }

  if (!property) {
    return <p className="error-message">Property not found.</p>;
  }

  return (
    <section className="property-details-page">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      <h1>{property.title}</h1>
      <img 
        src={property.image || "https://placehold.co/600x400"} 
        alt={property.title} 
        className="property-image"
      />
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Price:</strong> {property.price}</p>
      <p><strong>Description:</strong> {property.description}</p>
    </section>
  );
};

export default PropertyDetails;
