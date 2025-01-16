import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import acacia from '../assets/images/acacia.png';
import apex from '../assets/images/apex.png';
import cosmopolitan from '../assets/images/cosmopolitan.png';
import liberty from '../assets/images/liberty.png';
import universal from '../assets/images/universal-healthcare.jpeg';
import premier from '../assets/images/premierhealth.png';
import nation from '../assets/images/nationwide.png';
import glico from '../assets/images/glico.png';
import vitality from '../assets/images/vitality.png';
import metro from '../assets/images/metro.png';

const Footer = () => {
  // Slider settings for testimonials
  const testimonialSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Slider settings for insurance logos
  const logoSliderSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <footer className="bg-white text-gray-200 py-6">
      {/* Testimonial Slider */}
      <div className="bg-green py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-4">
            Hear from Our Clients
          </h2>
          <Slider {...testimonialSliderSettings}>
            <div className="text-center">
              <p className="text-lg italic">
                "Krispat Hearing Centre changed my life. The care and technology are unmatched."
              </p>
              <p className="mt-2 font-bold">- John Doe</p>
            </div>
            <div className="text-center">
              <p className="text-lg italic">
                "I highly recommend Krispat. Their services are truly exceptional."
              </p>
              <p className="mt-2 font-bold">- Jane Smith</p>
            </div>
          </Slider>
        </div>
      </div>

      <div className="bg-gray-50 py-6 text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-xl font-bold mb-4">Health Insurance Providers We Serve</h2>
          <Slider {...logoSliderSettings}>
            <div className="p-2">
              <img
                src={glico}
                alt="Insurance Logo 1"
                className="mx-auto h-20 w-20 object-contain"
              />
            </div>
            <div className="p-2">
              <img
                src={acacia}
                alt="Insurance Logo 2"
                className="mx-auto h-20 w-20 object-contain"
              />
            </div>
            <div className="p-2">
              <img
                src={apex}
                alt="Insurance Logo 3"
                className="mx-auto h-20 w-20 object-contain"
              />
            </div>
            <div className="p-2">
              <img
                src={universal}
                alt="Insurance Logo 4"
                className="mx-auto h-20 w-20 object-contain"
              />
            </div>
            <div className="p-2">
              <img
                src={cosmopolitan}
                alt="Insurance Logo 5"
                className="mx-auto h-20 w-20 object-contain"
              />
            </div>
            <div className="p-2">
              <img
                src={liberty}
                alt="Insurance Logo 6"
                className="mx-auto h-20 w-20 object-contain"
              />
            </div>
            <div className="p-2">
              <img
                src={premier}
                alt="Insurance Logo 7"
                className="mx-auto h-20 w-20 object-contain"
              />
            </div>
            <div className="p-2">
              <img
                src={nation}
                alt="Insurance Logo 8"
                className="mx-auto h-20 w-20 object-contain"
              />
            </div>
            <div className="p-2">
              <img
                src={vitality}
                alt="Insurance Logo 9"
                className="mx-auto h-20 w-20 object-contain"
              />
            </div>
            <div className="p-2">
              <img
                src={metro}
                alt="Insurance Logo 10"
                className="mx-auto h-20 w-20 object-contain"
              />
            </div>
          </Slider>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-6 bg-green">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h4 className="text-sm md:text-base font-bold mb-2">About Krispat Hearing Centre</h4>
            <p className="text-xs md:text-sm">
              Enhancing lives through better hearing. Visit us for the latest in audiology solutions.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-sm md:text-base font-bold mb-2">Contact</h4>
            <ul className="text-xs md:text-sm space-y-1">
              <li>Phone: +233 123 456 789</li>
              <li>Email: info@krispathearing.com</li>
              <li>Address: 123 Hearing Lane, Accra, Ghana</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-end md:justify-end items-center space-x-4 pt-4">
            <a href="#" className="text-white hover:text-red-400 text-lg">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-red-400 text-lg">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-red-400 text-lg">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 my-4"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs md:text-sm">
            &copy; 2025 Krispat Hearing Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
