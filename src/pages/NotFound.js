import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; 

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="home-link">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
