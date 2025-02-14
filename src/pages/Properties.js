import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Properties.css"; 
import AgentModal from "../components/AgentModal"; // ✅ Ensure correct path

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

const Properties = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]); 
  const [selectedAgent, setSelectedAgent] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    fetch(`${apiUrl}/properties`)
      .then((response) => response.json())
      .then((data) => {
        const updatedProperties = data.map((property) => ({
          ...property,
          agent: property.agent || { name: "Unknown Agent", phone: "N/A", email: "N/A" },
        }));
        setProperties(updatedProperties); 
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
        setProperties([]); 
      });
  }, []);

  const handlePropertyClick = (id) => {
    navigate(`/property/${id}`);
  };

  const handleContactAgent = (agent) => {
    console.log("Selected Agent:", agent); // ✅ Debugging
    setSelectedAgent(agent);
    setIsModalOpen(true);
  };

  return (
    <div className="properties-container">
      <h2 className="properties-heading">Explore Our Properties</h2> 
      
      <div className="properties-list">
        {properties.length > 0 ? (
          properties.map((property) => (
            <div key={property.id} className="property-item">
              <img
                src={property.image || "https://placehold.co/400x300?text=No+Image"}
                alt={property.title}
                className="property-image"
                onClick={() => handlePropertyClick(property.id)}
              />
              <div className="property-details">
                <h3 onClick={() => handlePropertyClick(property.id)}>{property.title}</h3>
                <p>{property.location}</p>
                <p>{property.price}</p>
                <button 
                  className="contact-agent-btn"
                  onClick={() => handleContactAgent(property.agent)}
                >
                  Contact Agent
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No properties available.</p>
        )}
      </div>

      {isModalOpen && selectedAgent && (
        <AgentModal agent={selectedAgent} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default Properties;
