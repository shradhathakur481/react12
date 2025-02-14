import React from "react";
import { useNavigate } from "react-router-dom";
import "./Agents.css";

const Agents = ({ searchTerm }) => {
  const navigate = useNavigate();

  const agents = [
    { id: 1, name: "Arnav", email: "arnav@example.com", phone: "123-456-7890", address: "123 Main St, New York", image: "https://img.freepik.com/free-photo/handsome-businessman-offering-handshake_144627-28925.jpg?ga=GA1.1.2050145430.1739001747&semt=ais_hybrid" },
    { id: 2, name: "Animesh Smith", email: "Animesh@example.com", phone: "987-654-3210", address: "456 Oak St", image: "https://img.freepik.com/free-photo/image-handsome-businessman-black-suit-holding-document-pointing-finger-camera-praising-good-job-standing-against-white-background_1258-65190.jpg?ga=GA1.1.2050145430.1739001747&semt=ais_hybrid" },
    { id: 3, name: "Michael Johnson", email: "michael@example.com", phone: "555-678-1234", address: "789 Pine St, Chicago, IL", image: "https://img.freepik.com/free-photo/handsome-telemarketer-man-with-thumb-up_1368-7226.jpg?ga=GA1.1.2050145430.1739001747&semt=ais_hybrid" },
    { id: 4, name: "Sarah Williams", email: "sarah@example.com", phone: "444-789-2222", address: "321 Cedar St, Miami", image: "https://img.freepik.com/free-photo/smiling-business-woman-record-voice-message-speaking-into-microphone-mobile-phone-sitting-near-fo_1258-118565.jpg?ga=GA1.1.2050145430.1739001747&semt=ais_hybrid" },
  ];

  // ✅ Filter agents based on searchTerm
  const filteredAgents = agents.filter((agent) =>
    agent?.name?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
  );

  // ✅ Function to navigate to AgentContactPage
  const handleViewContact = (agentId) => {
    navigate(`/agent/${agentId}`);
  };

  return (
    <div className="agents-container">
      <h2 className="agents-heading">Meet Our Trusted Agents</h2>
      <p className="agents-subtext">Find the best agents to help you with your property needs.</p>
      
      <div className="agents-list">
        {filteredAgents.map((agent) => (
          <div key={agent.id} className="agent-card">
            <img src={agent.image} alt={agent.name} className="agent-photo" />
            <h3>{agent.name}</h3>
            <p><strong>Email:</strong> {agent.email}</p>
            <p><strong>Phone:</strong> {agent.phone}</p>
            <p><strong>Address:</strong> {agent.address}</p>
            <button className="view-contact-btn" onClick={() => handleViewContact(agent.id)}>
              View Contact
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
