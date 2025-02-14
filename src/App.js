import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import Properties from "./pages/Properties";
import AgentsPage from "./pages/AgentsPage";
import AgentContactPage from "./pages/AgentContactPage";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import PropertyDetail from "./pages/PropertyDetail";

const navbarLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Properties", path: "/properties" },
  { name: "Agents", path: "/agents" },
  { name: "Contact", path: "/contact" },
];

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });

    const refreshAOS = () => AOS.refresh();
    window.addEventListener("load", refreshAOS);
    
    return () => window.removeEventListener("load", refreshAOS);
  }, []);

  const footerData = {
    companyName: "HomeHaven",
    links: navbarLinks,
    contact: {
      address: "789 Elm Street, Los Angeles, CA",
      phone: "+1 987 654 3210",
      email: "support@HomeHaven.com",
    },
    socialMedia: {
      facebook: "https://facebook.com/myrealestate",
      twitter: "https://twitter.com/myrealestate",
      instagram: "https://instagram.com/myrealestate",
      linkedin: "https://linkedin.com/company/myrealestate",
    },
  };

  return (
    <Router>
      <Navbar brandName="HomeHaven" links={navbarLinks} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/agent/:agentId" element={<AgentContactPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer {...footerData} />
    </Router>
  );
}

export default App;
