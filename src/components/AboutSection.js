import React from "react";
import PropTypes from "prop-types"; // For type validation
import AOS from "aos";
import "aos/dist/aos.css";
import "../pages/About.css";


const AboutSection = ({ title, description, image, listItems, buttonText }) => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero" data-aos="fade-down">
        <h1>{title}</h1>
        <p>{description}</p>
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
            {listItems.map((item, index) => (
              <li key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                {item}
              </li>
            ))}
          </ul>

          {/* Dynamic CTA Button */}
          {buttonText && (
            <button className="about-button" data-aos="fade-up">
              {buttonText}
            </button>
          )}
        </div>

        {/* Image Section */}
        <div className="about-image" data-aos="zoom-in">
          <img src={image} alt="Real Estate" />
        </div>
      </div>
    </div>
  );
};

// Props Validation
AboutSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonText: PropTypes.string,
};

export default AboutSection;
