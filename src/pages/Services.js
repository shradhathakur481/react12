import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import OurServices from "../components/OurServices"; // Import OurServices
import "./Services.css";

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, easing: "ease-in-out", once: true });
  }, []);

  const navigate = useNavigate();

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

  return (
    <div className="services-container">
      {/* Pass the services data as props */}
      <OurServices services={services} />
    </div>
  );
};

export default ServicesPage;
