import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div className={`testimonial-card ${isActive ? "active" : ""}`}>
      <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
      <h3>{testimonial.name}</h3>
      <p className="testimonial-feedback">"{testimonial.feedback}"</p>
      <div className="testimonial-rating">
        {"⭐".repeat(testimonial.rating)}
      </div>
    </div>
  );
};

export default TestimonialCard;
