import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Agents from "../components/Agents";
import "./AgentsPage.css";

const AgentsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Initialize AOS on mount
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, easing: "ease-in-out", once: false });
  }, []);

  return (
    <div className="agents-page">
      {/* Hero Section */}
      <div className="agents-hero" data-aos="fade-down">
        <h1>Meet Our Professional HomeHaven Agents</h1>
        <p>
          Our highly skilled real estate professionals are here to guide you 
          through buying, selling, or renting properties with expertise and care.
        </p>
      </div>

      {/* Search Bar */}
      <div className="search-container" data-aos="fade-up">
        <input
          type="text"
          placeholder="Search agents by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>🔍 Search</button>
      </div>

      {/* Agents List */}
      <div data-aos="fade-up" data-aos-delay="200">
        <Agents searchTerm={searchTerm} />
      </div>

      {/* Contact Agents Section */}
      <div className="contact-agents" data-aos="zoom-in">
        <h2>Contact Our Agents Today!</h2>
        <p>Have any questions? Our agents are ready to assist you.</p>
        <button className="contact-btn" onClick={() => navigate("/contact")}>
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default AgentsPage;
