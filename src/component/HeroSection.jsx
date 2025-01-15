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
          className="hero-image w-full sm:h-[90vh] object-cover mt-20"
        />
      </div>

      {/* Next and Previous Buttons */}
      <button
        onClick={handlePrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none z-20"
        aria-label="Previous Image"
      >
        &larr;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none z-20"
        aria-label="Next Image"
      >
        &rarr;
      </button>
    </div>
  );
}

export default HeroSection;
