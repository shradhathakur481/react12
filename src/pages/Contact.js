import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, easing: "ease-in-out", once: true });
  }, []);

  const officeInfo = {
    address: "123 Main Street, City, Country",
    email: "info@homehaven.com",
    phone: "+123 456 7890",
    workingHours: "Mon - Fri: 9:00 AM - 6:00 PM"
  };

  const socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/1234567890"
  };

  return (
    <div className="contact-container">
      <h2 data-aos="fade-down">Contact Us</h2>
      <p data-aos="fade-up">
        Have a question? We'd love to hear from you! Reach out to us through any of the options below.
      </p>

      <div className="contact-content" data-aos="fade-up">
        <ContactDetails officeInfo={officeInfo} />
        <ContactForm />
      </div>

      <SocialLinks links={socialLinks} data-aos="fade-up" />

      {/* Google Map */}
      <div className="map" data-aos="zoom-in">
        <iframe
          title="Google Map"
          src="https://maps.google.com/maps?q=123+Main+Street,+City,+Country&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="300"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* Live Chat */}
      <div className="live-chat" data-aos="fade-up">
        <p>💬 Need instant help? <a href="#">Chat with Us</a></p>
      </div>
    </div>
  );
};

export default Contact;
