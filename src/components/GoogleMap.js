import React from "react";
import PropTypes from "prop-types";
import "./GoogleMap.css";  // ✅ New CSS file

const GoogleMap = ({ location }) => {
  const encodedLocation = encodeURIComponent(location);
  const mapSrc = `https://maps.google.com/maps?q=${encodedLocation}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="map-container" data-aos="zoom-in">
      <iframe
        title="Google Map"
        src={mapSrc}
        width="100%"
        height="300"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

GoogleMap.propTypes = {
  location: PropTypes.string.isRequired,
};

export default GoogleMap;
