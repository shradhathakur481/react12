import React from "react";
import PropTypes from "prop-types";
import "./WhatsAppChat.css"; // Ensure you create this CSS file

const WhatsAppChat = ({ phoneNumber, message }) => {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="whatsapp-chat">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        💬 Chat with us on WhatsApp
      </a>
    </div>
  );
};

WhatsAppChat.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default WhatsAppChat;
