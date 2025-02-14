import React, { useEffect } from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = ({ 
  companyName = "HomeHaven", 
  links = [
    { name: "Home", url: "/" },
    { name: "Properties", url: "/properties" },
    { name: "Agents", url: "/agents" },
    { name: "Testimonials", url: "/testimonials" },
    { name: "Contact", url: "/contact" }
  ], 
  contact = {
    address: "123 Main Street, New York, NY",
    phone: "+1 123 456 7890",
    email: "info@homehaven.com"
  },
  socialMedia = {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#"
  }
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
      
        {/* About Section */}
        <div className="footer-about" data-aos="fade-up">
          <h2>{companyName}</h2>
          <p>Your dream home is just a step away. Find the best properties with us.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links" data-aos="fade-right">
          <h3>Quick Links</h3>
          <ul>
            {links.map((link, index) => (
              <li key={index}><a href={link.url}>{link.name}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact" data-aos="fade-left">
          <h3>Contact Us</h3>
          <p>📍 {contact.address}</p>
          <p>📞 {contact.phone}</p>
          <p>✉ {contact.email}</p>

          {/* Social Media Icons */}
          <div className="social-icons" data-aos="zoom-in">
            <a href={socialMedia.facebook}><FaFacebookF /></a>
            <a href={socialMedia.twitter}><FaTwitter /></a>
            <a href={socialMedia.instagram}><FaInstagram /></a>
            <a href={socialMedia.linkedin}><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom" data-aos="fade-up">
        <p>&copy; 2025 {companyName}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
