import React, { useState, useEffect } from "react";
import "../assets/css/HeroSection.css";
import hero1 from "../assets/images/hero-1.jpg";
import hero2 from "../assets/images/family-1.png";
import hero3 from "../assets/images/hero-2.jpg";
import hero4 from "../assets/images/male-audiologist-.jpg";

function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [hero1, hero2, hero3, hero4];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Handlers for manual navigation
  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="hero-section relative inset-0 z-0">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-25 z-10"></div>

      {/* Image Slider */}
      <div className="slider relative">
        {/* Image */}
        <img
          src={images[currentImage]}
          alt="Hero"
          className="hero-image w-full h-[50vh] sm:h-[70vh] md:h-[90vh] object-cover mt-20"
        />
      </div>

      {/* Hero Title */}
      <h2 className="absolute inset-0 flex justify-center items-center text-white text-2xl sm:text-3xl md:text-6xl font-bold z-20 text-center px-4 italic font-serif">
        Hearing well is not a Previledge 
      </h2>
      <span className="bg-gradient-to-r from-green via-green to-blue bg-clip-text text-black font-bold ">
         but your RIGHT
      </span>

      {/* Next and Previous Buttons */}
     
      
    </div>
  );
}

export default HeroSection;
