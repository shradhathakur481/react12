import React from "react";
import "./OurServices.css"; 

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

const OurServices = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-description">
          Explore our wide range of real estate services to find the perfect property solution for you.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-text">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
