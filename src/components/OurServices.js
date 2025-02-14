import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Services.css";
import ServiceCard from "./ServiceCard"; // Import the ServiceCard component

const OurServices = ({ services }) => {
  const navigate = useNavigate();

  const handleServiceClick = (service) => {
    navigate(`/services/${encodeURIComponent(service.title)}`, { state: { service } });
  };

  return (
    <section className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-list">
        {services.length > 0 ? (
          services.map((service, index) => (
            <div key={index} className="service-item" onClick={() => handleServiceClick(service)}>
              <ServiceCard service={service} />
            </div>
          ))
        ) : (
          <p>No services available.</p>
        )}
      </div>
    </section>
  );
};

export default OurServices;
