import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import HeroSection from './component/HeroSection';
import Reviews from './pages/Reviews';
import HearingAid from './pages/Hearing-aid';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset:50,
      once:true,
    });
  },[]);

  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/hearing-aid" element={<HearingAid />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;