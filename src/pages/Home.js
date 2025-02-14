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
      image:"/images/banner1.jpg",
      description: "Discover the best properties available in prime locations.",
    },
    {
      id: 2,
      image: "/images/banner2.jpg",
      title: "Luxury Living Spaces",
      description: "Experience the finest luxury homes with modern amenities.",
    },
    {
      id: 3,
      image: "/images/banner.jpg",
      title: "Apartments for Everyone",
      description: "Affordable and spacious apartments for rent and sale.",
    },
  ];
  

  // 🔹 Services Data
  const services = [
    {
      title: "Property Buying",
      description: "Find your dream home with our expert guidance.",
      image: "https://media.istockphoto.com/id/494486063/photo/house-spring-grey-exterior-with-entrance-porch.jpg?s=612x612&w=0&k=20&c=1AtXgzySzlf78h65-8lWsXO-R_CfQkC5bpOJwIuKU14=",
    },
    {
      title: "Property Selling",
      description: "Sell your property quickly with our trusted services.",
      image: "https://media.istockphoto.com/id/477097705/photo/big-house-with-beautiful-curb-appeal.jpg?s=612x612&w=0&k=20&c=UygnP8RM3TOP7Uf1nTeEsm88OL7ipnKZvE6W7uaby0w=",
    },
    {
      title: "Rental Services",
      description: "Explore the best rental properties in your area.",
      image: "https://media.istockphoto.com/id/547512238/photo/back-yard-green-american-house-with-porch-and-patio-area.jpg?s=612x612&w=0&k=20&c=WFQ61WcuE7D3423w6cZYW3w1svqiiyqjKtkcYoJtj-k=",
    },
    {
      title: "Property Management",
      description: "We manage your property for hassle-free ownership.",
      image: "https://media.istockphoto.com/id/470157775/photo/pretty-shingle-siding-house.jpg?s=612x612&w=0&k=20&c=ShLPrFX5UdZmDRYiCOkAPaLaQmlY8kooY3pvwnfpujg=",
    },
    {
      title: "Legal Assistance",
      description: "Expert legal support for property transactions.",
      image: "https://media.istockphoto.com/id/2152778112/photo/springtime-home.jpg?s=612x612&w=0&k=20&c=gR_Iw0xK-ThUEs9qOzoUFxbMBeI9HveVxQMrpFN_Gec=",
    },
    {
      title: "Investment Advisory",
      description: "Maximize your returns with real estate investments.",
      image: "https://media.istockphoto.com/id/470230845/photo/american-yellow-siding-house.jpg?s=612x612&w=0&k=20&c=qrkIl172GKuSpZ8I5BZ--5vmbuQSdOXUCVO6aMzkGVY=",
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
