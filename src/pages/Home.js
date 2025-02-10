import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Banner from "../components/Banner";
import OurServices from "../components/OurServices";
import Agents from "../components/Agents";
import Testimonials from "../components/Testimonials";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out",
      once: true, // Animation only occurs once
    });
  }, []);

  // 🔹 Banner Data
  const banners = [
    {
      id: 1,
      image: "https://source.unsplash.com/1600x600/?realestate",
      title: "Find Your Dream Home",
      description: "Discover the best properties available in prime locations.",
    },
    {
      id: 2,
      image: "https://source.unsplash.com/1600x600/?house",
      title: "Luxury Living Spaces",
      description: "Experience the finest luxury homes with modern amenities.",
    },
    {
      id: 3,
      image: "https://source.unsplash.com/1600x600/?apartment",
      title: "Apartments for Everyone",
      description: "Affordable and spacious apartments for rent and sale.",
    },
  ];

  // 🔹 Services Data
  const services = [
    {
      title: "Buying & Selling",
      description: "We help you find and sell properties at the best rates.",
      image: "https://source.unsplash.com/300x200/?buy-house",
    },
    {
      title: "Property Management",
      description: "Expert solutions for managing your properties effortlessly.",
      image: "https://source.unsplash.com/300x200/?real-estate-management",
    },
    {
      title: "Home Loans",
      description: "Get the best financing options tailored for you.",
      image: "https://source.unsplash.com/300x200/?home-loan",
    },
  ];

  // 🔹 Agents Data
  const agents = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/8867435/pexels-photo-8867435.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Sushant Chandel",
      experience: "10 Years",
      specialization: "Residential & Luxury Homes",
      location: "New Delhi, India",
      phone: "+91 98765 43210",
      license: "RE-2023-001",
      contact: "sushant@email.com",
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/7709208/pexels-photo-7709208.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Anchal Sharma",
      experience: "8 Years",
      specialization: "Commercial Properties",
      location: "Mumbai, India",
      phone: "+91 98765 67890",
      license: "RE-2023-002",
      contact: "anchal@email.com",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/7682204/pexels-photo-7682204.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Samriti Verma",
      experience: "12 Years",
      specialization: "Luxury Villas & Apartments",
      location: "Bangalore, India",
      phone: "+91 98765 12345",
      license: "RE-2023-003",
      contact: "samriti@email.com",
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/7682103/pexels-photo-7682103.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Masum Raza",
      experience: "7 Years",
      specialization: "Rental & Investment Properties",
      location: "Hyderabad, India",
      phone: "+91 98765 54321",
      license: "RE-2023-004",
      contact: "masum@email.com",
    },
  ];

  // 🔹 Testimonials Data
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      feedback: "Amazing service! Found my dream home effortlessly.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Neha Sharma",
      feedback: "Professional and efficient service. Highly recommended!",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Vikram Patel",
      feedback: "Great experience! Smooth process and friendly agents.",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "arnav Kumar",
      feedback: "Amazing service! Found my dream home effortlessly.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 5,
      name: "aanya Sharma",
      feedback: "Professional and efficient service. Highly recommended!",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    }
  ];

  return (
    <>
      <div data-aos="fade-up">
        <Banner banners={banners} />
      </div>
      <div data-aos="fade-right">
        <OurServices services={services} />
      </div>
      <div data-aos="fade-left">
        <Agents agents={agents} />
      </div>
      <div data-aos="zoom-in">
        <Testimonials testimonials={testimonials} />
      </div>
    </>
  );
};

export default Home;
