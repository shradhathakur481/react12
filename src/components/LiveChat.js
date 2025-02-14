import React from "react";
import PropTypes from "prop-types";
import "./LiveChat.css";  // ✅ New CSS file

const LiveChat = ({ chatLink, text }) => {
  return (
    <div className="live-chat" data-aos="fade-up">
      <p>
        💬 Need instant help? <a href={chatLink} target="_blank" rel="noopener noreferrer">{text}</a>
      </p>
    </div>
  );
};

LiveChat.propTypes = {
  chatLink: PropTypes.string.isRequired,
  text: PropTypes.string,
};

LiveChat.defaultProps = {
  text: "Chat with Us",
};

export default LiveChat;
