import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./About.css"; // Ensure you create this CSS file

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, easing: "ease-in-out", once: false });
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero" data-aos="fade-down">
        <h1>About HomeHaven</h1>
        <p>Your Trusted Partner in Real Estate</p>
      </div>

      {/* About Content */}
      <div className="about-content">
        {/* Text Section */}
        <div className="about-text" data-aos="fade-right">
          <h2>Who We Are</h2>
          <p>
            At <strong>HomeHaven</strong>, we believe in making dreams come true. Whether you’re 
            buying, selling, or renting, our expert team ensures a smooth and 
            stress-free experience. With years of experience, we have built a 
            reputation for trust, transparency, and top-tier service.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li data-aos="fade-up">🏡 Wide range of premium properties</li>
            <li data-aos="fade-up" data-aos-delay="200">🔍 Expert guidance and market insights</li>
            <li data-aos="fade-up" data-aos-delay="400">📜 Hassle-free legal and financial support</li>
            <li data-aos="fade-up" data-aos-delay="600">💼 Personalized solutions for every client</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="about-image" data-aos="zoom-in">
          <img
            src="https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg?ga=GA1.1.2040041463.1738843645&semt=ais_hybrid"
            alt="Real Estate"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
