import React, { useState } from "react";

const AgentModal = ({ onClose }) => {
  const demoAgent = {
    name: "John Doe",
    phone: "+91 98765 43210",
    email: "johndoe@example.com",
    whatsapp: "https://wa.me/919876543210",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your message has been sent to ${demoAgent.name}!`);
    setFormData({ name: "", email: "", phone: "", message: "" });
    onClose();
  };

  // Handle click outside the modal
  const handleBackgroundClick = (e) => {
    if (e.target.id === "modal-background") {
      onClose();
    }
  };

  return (
    <div
      id="modal-background"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={handleBackgroundClick} // Close when clicking outside
    >
      <div
        style={{
          position: "relative",
          background: "#fff",
          width: "320px",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
        }}
      >
        {/* Close Button */}
        <span
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            fontSize: "18px",
            fontWeight: "bold",
            color: "#555",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          &times;
        </span>

        {/* Agent Details */}
        <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>
          Contact {demoAgent.name}
        </h3>
        <p style={{ fontSize: "14px", color: "#555", marginBottom: "10px" }}>
          <strong>Phone:</strong> {demoAgent.phone}
        </p>
        <p style={{ fontSize: "14px", color: "#555", marginBottom: "10px" }}>
          <strong>Email:</strong> {demoAgent.email}
        </p>

        {/* WhatsApp Button */}
        <a
          href={demoAgent.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            width: "100%",
            background: "#25d366",
            color: "white",
            padding: "8px",
            borderRadius: "5px",
            fontSize: "14px",
            fontWeight: "bold",
            textDecoration: "none",
            marginBottom: "10px",
          }}
        >
          Chat on WhatsApp
        </a>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "14px",
              outline: "none",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "14px",
              outline: "none",
            }}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "14px",
              outline: "none",
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "14px",
              height: "60px",
              resize: "none",
              outline: "none",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              background: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "14px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgentModal;
