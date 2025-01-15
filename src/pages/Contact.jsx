import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hero from '../assets/images/hero-1.jpg';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: true, 
    });
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white bg-inherit mt-10" data-aos="fade-in">
        <div className="relative">
          <img
            src={hero}
            alt="Hero"
            className="object-cover w-full h-[450px] md:h-[595px]"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 md:px-12" data-aos="fade-up">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <form className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-6" data-aos="fade-left">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
              Contact Information
            </h2>
            <p className="text-gray-600">
              Reach out to us through any of the following channels:
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-blue-600">
                  <i className="fas fa-phone-alt"></i>
                </span>
                <p className="text-gray-600">+123 456 7890</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-600">
                  <i className="fas fa-envelope"></i>
                </span>
                <p className="text-gray-600">info@krispat.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-600">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <p className="text-gray-600">123 Main Street, Accra, Ghana</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-12" data-aos="zoom-in">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
            Visit Us
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8379555896074!2d-122.41941568468176!3d37.77492927975967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818c5f1c6c8b%3A0x1d4235a9bd7c6c37!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094131%2C%20USA!5e0!3m2!1sen!2sgh!4v1617779471778!5m2!1sen!2sgh"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg border-0"
            title="Google Maps"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
