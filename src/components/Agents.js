import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Agents.css"; // Import CSS

const Agents = ({ searchTerm = "" }) => {
  const [selectedAgent, setSelectedAgent] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out",
      once: true, // Ensures animation happens once
    });
  }, []);

  const agents = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/8867435/pexels-photo-8867435.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Sushant Chandel",
      experience: "10 Years",
      specialization: "Residential & Luxury Homes",
      location: "New Delhi, India",
      phone: "+91 98765 43210",
      license: "RE-2023-001",
      contact: "sushant@email.com",
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/7709208/pexels-photo-7709208.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Anchal Sharma",
      experience: "8 Years",
      specialization: "Commercial Properties",
      location: "Mumbai, India",
      phone: "+91 98765 67890",
      license: "RE-2023-002",
      contact: "anchal@email.com",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/7682204/pexels-photo-7682204.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Samriti Verma",
      experience: "12 Years",
      specialization: "Luxury Villas & Apartments",
      location: "Bangalore, India",
      phone: "+91 98765 12345",
      license: "RE-2023-003",
      contact: "samriti@email.com",
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/7682103/pexels-photo-7682103.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Masum Raza",
      experience: "7 Years",
      specialization: "Rental & Investment Properties",
      location: "Hyderabad, India",
      phone: "+91 98765 54321",
      license: "RE-2023-004",
      contact: "masum@email.com",
    },
  ];

  const filteredAgents = agents.filter((agent) =>
    agent.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="agents-container" data-aos="fade-up">
      <h1 className="agents-heading" data-aos="fade-right">Our Agents</h1>

      {filteredAgents.length === 0 ? (
        <p className="no-results" data-aos="zoom-in">⚠ No agents found for "{searchTerm}"</p>
      ) : (
        <div className="agents-grid">
          {filteredAgents.map((agent, index) => (
            <div key={agent.id} className="agent-card" data-aos="flip-left" data-aos-delay={index * 100}>
              <img src={agent.image} alt={agent.name} className="agent-image" />
              <h2>{agent.name}</h2>
              <p>
                <strong>Experience:</strong> {agent.experience}
              </p>
              <button
                className="contact-btn"
                onClick={() => setSelectedAgent(agent)}
                data-aos="fade-up"
              >
                View Contact
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedAgent && (
        <div className="modal-overlay" onClick={() => setSelectedAgent(null)} data-aos="zoom-in">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelectedAgent(null)}>
              &times;
            </span>
            <img
              src={selectedAgent.image}
              alt={selectedAgent.name}
              className="modal-image"
              data-aos="zoom-in"
            />
            <h2>{selectedAgent.name}</h2>
            <p>
              <strong>Specialization:</strong> {selectedAgent.specialization}
            </p>
            <p>
              <strong>Location:</strong> {selectedAgent.location}
            </p>
            <p>
              <strong>Phone:</strong> {selectedAgent.phone}
            </p>
            <p>
              <strong>License:</strong> {selectedAgent.license}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${selectedAgent.contact}`}>
                {selectedAgent.contact}
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Agents;
