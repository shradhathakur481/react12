import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactDetails = ({ officeInfo }) => {
  return (
    <div className="contact-details">
      <h3>📍 Our Office</h3>
      <p><FaMapMarkerAlt /> {officeInfo.address}</p>
      <p><FaEnvelope /> Email: <a href={`mailto:${officeInfo.email}`}>{officeInfo.email}</a></p>
      <p><FaPhone /> Phone: <a href={`tel:${officeInfo.phone}`}>{officeInfo.phone}</a></p>
      <p><strong>Working Hours:</strong> {officeInfo.workingHours}</p>
    </div>
  );
};

export default ContactDetails;
