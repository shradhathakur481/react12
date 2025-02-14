import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";
import GoogleMap from "../components/GoogleMap";  // ✅ Google Maps API Integration
import WhatsAppChat from "../components/WhatsAppChat";  // ✅ WhatsApp Chat Support
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, easing: "ease-in-out", once: true });
  }, []);

  const officeInfo = {
    address: "123 Main Street, City, Country",
    email: "info@homehaven.com",
    phone: "+123 456 7890",
    workingHours: "Mon - Fri: 9:00 AM - 6:00 PM",
    latitude: 37.7749, // Example coordinates
    longitude: -122.4194,
  };

  const socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/1234567890",
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
      
      {/* ✅ Google Maps API Integrated */}
      <GoogleMap latitude={officeInfo.latitude} longitude={officeInfo.longitude} />
      
      {/* ✅ WhatsApp Chat Support */}
      <WhatsAppChat phoneNumber="8091300437" message="Hello! I need help with HomeHaven." />
    </div>
  );
};

export default Contact;