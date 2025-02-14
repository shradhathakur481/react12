import React, { useState, useEffect } from "react";
import "./ContactModal.css";

const ContactModal = ({ agent, onClose }) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (agent) {
      setTimeout(() => setVisible(true), 10);
    }
  }, [agent]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => onClose(), 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent to ${agent.name}: ${message}`);
    setMessage("");
    handleClose();
  };

  if (!agent) return null; // Prevents rendering if agent is undefined

  return (
    <div className={`modal-overlay ${visible ? "show" : ""}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={handleClose}>&times;</span>
        <img src={agent.image} alt={agent.name} className="modal-image" />
        <h2>Contact {agent.name}</h2>
        <p><strong>Specialization:</strong> {agent.specialization}</p>
        <p><strong>Location:</strong> {agent.location}</p>
        <p><strong>Phone:</strong> {agent.phone}</p>
        <p><strong>License:</strong> {agent.license}</p>
        <p><strong>Email:</strong> <a href={`mailto:${agent.contact}`}>{agent.contact}</a></p>
        <p>
          <strong>WhatsApp:</strong> 
          <a href={`https://wa.me/${agent.phone.replace("+", "")}`} target="_blank" rel="noopener noreferrer">
            {agent.phone}
          </a>
        </p>
        
        <form onSubmit={handleSubmit}>
          <label>Your Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Type your message here..."
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
