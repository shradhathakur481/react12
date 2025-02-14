import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutSection from "../components/AboutSection";
import "../pages/About.css";


const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, easing: "ease-in-out", once: false });
  }, []);

  // Data to pass as props
  const aboutData = {
    title: "About HomeHaven",
    description: "Your Trusted Partner in Real Estate",
    image: "https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg?ga=GA1.1.2040041463.1738843645&semt=ais_hybrid",
    listItems: [
      "🏡 Wide range of premium properties",
      "🔍 Expert guidance and market insights",
      "📜 Hassle-free legal and financial support",
      "💼 Personalized solutions for every client",
    ],
    buttonText: "Learn More",
  };

  return <AboutSection {...aboutData} />;
};

export default About;
