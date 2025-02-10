import React from "react";

const AboutDetails = ({ details }) => {
  return (
    <div className="about-details">
      {details?.map((item, index) => (
        <div key={index} className="about-card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutDetails;
