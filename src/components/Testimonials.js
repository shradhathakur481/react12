import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import "./Testimonials.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = ({ testimonials, autoPlay = true, intervalTime = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [testimonials.length, autoPlay, intervalTime]);

  return (
    <section className="testimonials" data-aos="fade-up">
      <h2 className="testimonials-title" data-aos="fade-down">What Our Clients Say</h2>
      <div className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            isActive={index === currentIndex}
            data-aos="zoom-in"
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
