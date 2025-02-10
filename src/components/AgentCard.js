import React from "react";
import "./Agents.css"; 

const AgentCard = ({ agent, onViewContact }) => {
  return (
    <div className="agent-card">
      <img src={agent.image} alt={agent.name} className="agent-image" />
      <h2>{agent.name}</h2>
      <p>
        <strong>Experience:</strong> {agent.experience}
      </p>
      <button className="contact-btn" onClick={() => onViewContact(agent)}>
        View Contact
      </button>
    </div>
  );
};

export default AgentCard;
