import React, { useState } from "react";
import "./Properties.css"; // Import CSS for styling

const Properties = () => {
  const properties = [
    {
      id: 1,
      image: "https://img.freepik.com/free-photo/urban-city-architecture_649448-5343.jpg",
      title: "Modern Luxury Villa",
      price: "$850,000",
      location: "Los Angeles, CA",
      description: "A stunning villa with modern architecture, spacious rooms, and a private pool.",
      bedrooms: 4,
      bathrooms: 3,
      area: "3,500 sqft",
    },
    {
      id: 2,
      image: "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg",
      title: "Downtown Apartment",
      price: "$450,000",
      location: "New York, NY",
      description: "A luxurious apartment in the heart of NYC with stunning skyline views.",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200 sqft",
    },
    {
      id: 3,
      image: "https://th.bing.com/th/id/OIP.c3-f252VmlCzxKBGC_aIWQHaFe?w=247&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      title: "Cozy Country Cottage",
      price: "$320,000",
      location: "Austin, TX",
      description: "A charming cottage surrounded by nature, perfect for a peaceful retreat.",
      bedrooms: 3,
      bathrooms: 2,
      area: "2,000 sqft",
    },
    {
      id: 4,
      image: "https://th.bing.com/th/id/OIP.UUXnEovOvNOOD-1AoXvNswHaEK?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      title: "Elegant Mansion",
      price: "$1,500,000",
      location: "Miami, FL",
      description: "A grand mansion with a beachfront view, private garden, and high-end interiors.",
      bedrooms: 6,
      bathrooms: 5,
      area: "6,000 sqft",
    },
    {
      id: 5,
      image: "https://th.bing.com/th/id/OIP.tQ2xwVRvxmbFvKTLgqOlhAHaFZ?w=223&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      title: "Family Home",
      price: "$600,000",
      location: "San Diego, CA",
      description: "A spacious family home with a large backyard and modern amenities.",
      bedrooms: 4,
      bathrooms: 3,
      area: "3,000 sqft",
    },
    {
      id: 6,
      image: "https://th.bing.com/th/id/OIP.0xldTn2ZXlVRF8zQkELFcQHaEK?w=293&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      title: "Luxury Penthouse",
      price: "$950,000",
      location: "Chicago, IL",
      description: "A high-rise penthouse with breathtaking city views and premium facilities.",
      bedrooms: 3,
      bathrooms: 3,
      area: "2,500 sqft",
    },
    {
      id: 7,
      image: "https://th.bing.com/th/id/OIP.pyDC7h2A7fGIw6UmveCe5QHaDK?w=334&h=149&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      title: "Suburban Retreat",
      price: "$500,000",
      location: "Dallas, TX",
      description: "A peaceful suburban home with a garden and spacious living areas.",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,800 sqft",
    },
    {
      id: 8,
      image: "https://th.bing.com/th/id/OIP.1G9ez6yWcUyP-Qik3A4QAgHaDM?w=324&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      title: "Beachfront Villa",
      price: "$1,200,000",
      location: "Malibu, CA",
      description: "A stunning beachfront villa with a private pool and ocean views.",
      bedrooms: 5,
      bathrooms: 4,
      area: "4,500 sqft",
    },
    {
      id: 9,
      image: "https://th.bing.com/th/id/OIP.fIMrRGpQAs9WN3PA9Q_SPAHaEK?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      title: "Ultra-Modern Smart Home",
      price: "$1,000,000",
      location: "Seattle, WA",
      description: "A tech-savvy smart home with automated features and a minimalist design.",
      bedrooms: 4,
      bathrooms: 4,
      area: "3,800 sqft",
    },
    {
      id: 10,
      image: "https://th.bing.com/th/id/OIP.MhMaQp_HEFDZydTyDfLLkAHaEo?w=292&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      title: "Rural Countryside House",
      price: "$450,000",
      location: "Nashville, TN",
      description: "A cozy rural home with a large farm area and scenic surroundings.",
      bedrooms: 3,
      bathrooms: 2,
      area: "2,200 sqft",
    },
    {
      id: 11,
      image: "https://th.bing.com/th/id/OIP.MqJEETRfjC-r9DTvx5CROgHaEN?w=323&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      title: "City Condo",
      price: "$650,000",
      location: "Boston, MA",
      description: "A modern city condo with all the luxurious amenities in a prime location.",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,500 sqft",
    },
    {
      id: 12,
      image: "https://th.bing.com/th/id/OIP.c3-f252VmlCzxKBGC_aIWQHaFe?w=247&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      title: "Mountain Chalet",
      price: "$750,000",
      location: "Denver, CO",
      description: "A cozy wooden chalet with a fireplace and a beautiful mountain view.",
      bedrooms: 4,
      bathrooms: 3,
      area: "3,200 sqft",
    },
  ];

  const [selectedProperty, setSelectedProperty] = useState(null);

  const openModal = (property) => {
    setSelectedProperty(property);
  };

  const closeModal = () => {
    setSelectedProperty(null);
  };

  return (
    <section className="properties-container">
      <h1>Featured Properties</h1>
      <p className="properties-subtitle">Explore the best properties in prime locations.</p>
      <div className="properties-grid">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} />
            <h2>{property.title}</h2>
            <p>{property.location}</p>
            <span className="price">{property.price}</span>
            <button className="details-btn" onClick={() => openModal(property)}>View Details</button>
          </div>
        ))}
      </div>

      {/* Modal for Property Details */}
      {selectedProperty && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <img src={selectedProperty.image} alt={selectedProperty.title} />
            <h2>{selectedProperty.title}</h2>
            <p className="modal-location">{selectedProperty.location}</p>
            <p className="modal-description">{selectedProperty.description}</p>
            <ul className="modal-details">
              <li><strong>Price:</strong> {selectedProperty.price}</li>
              <li><strong>Bedrooms:</strong> {selectedProperty.bedrooms}</li>
              <li><strong>Bathrooms:</strong> {selectedProperty.bathrooms}</li>
              <li><strong>Area:</strong> {selectedProperty.area}</li>
            </ul>
            <button className="close-modal-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Properties;
