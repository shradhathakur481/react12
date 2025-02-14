import React from "react";
import PropTypes from "prop-types";

const ContactDetails = ({ officeInfo }) => {
  return (
    <div className="contact-details">
      <h3>Our Office</h3>
      <p><strong>Address:</strong> {officeInfo.address}</p>
      <p><strong>Email:</strong> {officeInfo.email}</p>
      <p><strong>Phone:</strong> {officeInfo.phone}</p>
      <p><strong>Working Hours:</strong> {officeInfo.workingHours}</p>
    </div>
  );
};

ContactDetails.propTypes = {
  officeInfo: PropTypes.object.isRequired,
};

export default ContactDetails;
