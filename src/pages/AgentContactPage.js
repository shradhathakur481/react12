import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const agents = [
  {
    id: 1,
    name: "Arnav",
    email: "arnav@example.com",
    phone: "123-456-7890",
    whatsapp: "+11234567890",
    address: "123 Main St, New York",
    image: "https://img.freepik.com/free-photo/handsome-businessman-offering-handshake_144627-28925.jpg?ga=GA1.1.2050145430.1739001747&semt=ais_hybrid"
  },
  {
    id: 2,
    name: "Animesh Smith",
    email: "Animesh@example.com",
    phone: "987-654-3210",
    whatsapp: "+19876543210",
    address: "456 Oak St",
    image: "https://img.freepik.com/free-photo/image-handsome-businessman-black-suit-holding-document-pointing-finger-camera-praising-good-job-standing-against-white-background_1258-65190.jpg?ga=GA1.1.2050145430.1739001747&semt=ais_hybrid"
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael@example.com",
    phone: "555-678-1234",
    whatsapp: "+15556781234",
    address: "789 Pine St, Chicago, IL",
    image: "https://img.freepik.com/free-photo/handsome-telemarketer-man-with-thumb-up_1368-7226.jpg?ga=GA1.1.2050145430.1739001747&semt=ais_hybrid"
  },
  {
    id: 4,
    name: "Sarah Williams",
    email: "sarah@example.com",
    phone: "444-789-2222",
    whatsapp: "+14447892222",
    address: "321 Cedar St, Miami",
    image: "https://img.freepik.com/free-photo/smiling-business-woman-record-voice-message-speaking-into-microphone-mobile-phone-sitting-near-fo_1258-118565.jpg?ga=GA1.1.2050145430.1739001747&semt=ais_hybrid"
  }
];

const AgentContactPage = () => {
  const { agentId } = useParams();
  const navigate = useNavigate();
  const agent = agents.find((a) => a.id === parseInt(agentId));

  if (!agent) {
    return <h2 style={{ textAlign: "center", marginTop: "50px", color: "red" }}>Agent not found</h2>;
  }

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", backgroundColor: "#f9f9f9" }}>
      <button 
        onClick={() => navigate(-1)}
        style={{
          display: "block",
          marginBottom: "15px",
          padding: "8px 12px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
          borderRadius: "5px"
        }}
      >
        ← Go Back
      </button>

      <div style={{ textAlign: "center" }}>
        <img 
          src={agent.image} 
          alt={agent.name} 
          style={{ width: "150px", height: "150px", borderRadius: "50%", marginBottom: "15px" }} 
        />
        <h2 style={{ marginBottom: "5px" }}>{agent.name}</h2>
        <p><strong>Email:</strong> {agent.email}</p>
        <p><strong>Phone:</strong> {agent.phone}</p>
        <p><strong>WhatsApp:</strong> <a href={`https://wa.me/${agent.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ color: "#007bff" }}>Chat Now</a></p>
        <p><strong>Address:</strong> {agent.address}</p>
      </div>

      {/* Contact Form */}
      <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "white", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)" }}>
        <h3 style={{ textAlign: "center", marginBottom: "10px" }}>Contact {agent.name}</h3>
        <form>
          <input 
            type="text" 
            placeholder="Your Name" 
            required 
            style={{ width: "100%", padding: "10px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            required 
            style={{ width: "100%", padding: "10px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
          />
          <textarea 
            placeholder="Your Message" 
            required 
            style={{ width: "100%", padding: "10px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "5px", height: "80px" }}
          ></textarea>
          <button 
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgentContactPage;
