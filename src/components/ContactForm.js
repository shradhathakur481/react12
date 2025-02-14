import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h3>Send Us a Message</h3>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
