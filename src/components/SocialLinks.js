import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const SocialLinks = ({ links }) => {
  return (
    <div className="social-links">
      <h3>🌍 Connect With Us</h3>
      <a href={links.facebook} className="social-icon"><FaFacebook /></a>
      <a href={links.twitter} className="social-icon"><FaTwitter /></a>
      <a href={links.instagram} className="social-icon"><FaInstagram /></a>
      <a href={links.whatsapp} className="social-icon"><FaWhatsapp /></a>
    </div>
  );
};

export default SocialLinks;
