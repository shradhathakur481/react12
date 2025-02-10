import React, { useEffect } from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
      
        {/* About Section with Fade-in Effect */}
        <div className="footer-about" data-aos="fade-up">
          <h2>HomeHaven</h2>
          <p>Your dream home is just a step away. Find the best properties with us.</p>
        </div>

        {/* Quick Links with Slide-in Animation */}
        <div className="footer-links" data-aos="fade-right">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Properties</a></li>
            <li><a href="#">Agents</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section with Slide-in Animation */}
        <div className="footer-contact" data-aos="fade-left">
          <h3>Contact Us</h3>
          <p>📍 123 Main Street, New York, NY</p>
          <p>📞 +1 123 456 7890</p>
          <p>✉ info@homehaven.com</p>

          {/* Social Media Icons with Zoom-in Effect */}
          <div className="social-icons" data-aos="zoom-in">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom with Fade-up Effect */}
      <div className="footer-bottom" data-aos="fade-up">
        <p>&copy; 2025 HomeHaven. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
