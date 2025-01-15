import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green text-wrap text-white py-8">
      
      <div className="container mx-auto px-4">
        {/* Grid Layout for Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">About Krispat Hearing Centre</h4>
            <p className="text-sm">
              At Krispat Hearing Centre, we are committed to enhancing lives through better hearing. 
              Visit us for the latest in audiology solutions and personalized care.
            </p>
          </div>
          

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/home" className="hover:text-gray-400">Home</a></li>
              <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
              <li><a href="/services" className="hover:text-gray-400">Services</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="text-sm space-y-2">
              <li>Phone: +233 123 456 789</li>
              <li>Email: info@krispathearing.com</li>
              <li>Address: 123 Hearing Lane, Accra, Ghana</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green my-6"></div>

        {/* Social Media & Copyright */}
        <div className="flex justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm">
            &copy; 2025 Krispat Hearing Centre. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
