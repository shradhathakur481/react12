import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ServiceDetailPage.css";

const ServiceDetailPage = () => {
  const { serviceTitle } = useParams();
  const location = useLocation();
  const service = location.state?.service;
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (!service) return <h2 className="error-message">Service not found</h2>;

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Your inquiry has been submitted. We'll get back to you soon!");
  };

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="hero-section" data-aos="fade-up">
        <img src={service.image} alt={service.title} className="hero-image" />
        <div className="hero-overlay">
          <h1>{service.title}</h1>
          <p>Your reliable partner in real estate</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview" data-aos="fade-up">
        <h2>Why Choose {service.title}?</h2>
        <p>{service.description}</p>
        <div className="service-features">
          <div className="feature-card">✔ 100% Verified Properties</div>
          <div className="feature-card">✔ Expert Legal Support</div>
          <div className="feature-card">✔ Personalized Assistance</div>
          <div className="feature-card">✔ Secure Transactions</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials" data-aos="fade-up">
        <h2>Client Testimonials</h2>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <p>"Seamless process and great support!"</p>
            <h4>- John Williams</h4>
          </div>
          <div className="testimonial-card">
            <p>"The best real estate service I've ever used!"</p>
            <h4>- Sarah Thompson</h4>
          </div>
          <div className="testimonial-card">
            <p>"Highly professional and reliable!"</p>
            <h4>- Michael Clark</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" data-aos="fade-up">
        <h2>Contact Us</h2>
        <form onSubmit={handleContactSubmit}>
          <input type="text" placeholder="Your Name" required onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} />
          <input type="email" placeholder="Your Email" required onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} />
          <textarea placeholder="Your Message" required onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}></textarea>
          <button type="submit">Send Inquiry</button>
        </form>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
