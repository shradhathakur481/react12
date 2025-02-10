import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Properties from "./pages/Properties";
import AgentsPage from "./pages/AgentsPage"; 
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Define the Navbar data (brand name and links)
const navbarLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Properties", path: "/properties" },
  { name: "Agents", path: "/agents" },
  { name: "Contact", path: "/contact" },
];

function App() {
  // Initialize AOS on mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (1s)
      offset: 100, // Offset before animation starts
      easing: "ease-in-out", // Smooth easing
      once: false, // Animation happens every time it enters viewport
      mirror: true, // Animates again when scrolling up
    });

    // Refresh AOS when navigating between pages
    window.addEventListener("load", () => AOS.refresh());
  }, []);

  return (
    <Router>
      {/* Pass the brandName and links as props to Navbar */}
      <Navbar brandName="HomeHaven" links={navbarLinks} />
      
      {/* Apply animation to the whole content */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
