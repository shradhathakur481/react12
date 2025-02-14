
const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <img src={service.image} alt={service.title} className="service-image" />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceCard;
