import React, { useEffect } from 'react';
import HeroSection from '../component/HeroSection';
import Services from './Services';
import AOS from 'aos';
import 'aos/dist/aos.css';
import docImage from '../assets/images/doctor.jpg';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 50,
      once: true,
    });
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div data-aos="fade-up">
        <HeroSection />
      </div>

      {/* Welcome Section */}
      <section
        className="relative bg-inherit rounded-lg px-4 md:px-9 py-8 md:py-12 -mt-10 shadow-lg"
        data-aos="fade-right"
      >
        <div className="max-w-screen-lg mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Text */}
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-2xl md:text-4xl font-bold text-green">
              Welcome to KRISPAT Hearing Centre!
            </h1>
            <h2 className="text-green font-bold text-xl">A Note From Dr. Kweitsu</h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Empowering lives through sound: Our mission at Krispat Hearing Centre is to
              provide unparalleled care, support, and solutions for individuals experiencing
              hearing challenges.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              We are dedicated to enhancing quality of life by delivering innovative hearing
              healthcare services with compassion, expertise, and integrity.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Through personalized attention and cutting-edge technology, we strive to enable
              everyone to reconnect with the world of sound, fostering independence,
              confidence, and wellbeing.
            </p>
            <a
              href="/about"
              className="inline-block bg-green text-white py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              LEARN MORE
            </a>
          </div>

          {/* Right Image */}
          <div className="flex justify-center" data-aos="zoom-in">
            <img
              src={docImage}
              alt="Welcome to Krispat Hearing Centre"
              className="rounded-lg shadow-lg w-full max-w-xs md:max-w-md object-cover border-4 border-green"
            />
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section
        className="py-16 px-6 md:px-12 bg-white text-center"
        data-aos="fade-up"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green mb-6">
            Our Featured Services
          </h2>
          <p className="text-gray-700 text-lg mb-10">
            Discover the comprehensive hearing care services we offer to meet your unique
            needs.
          </p>
          <Services />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section
        className="bg-green text-white py-16 px-6 md:px-12 text-center"
        data-aos="flip-up"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Hear Better?</h2>
          <p className="text-lg md:text-xl mb-6">
            Schedule an appointment today and take the first step toward improving your
            hearing.
          </p>
          <a
            href="/appointment"
            className="bg-white text-black py-3 px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
            data-aos="fade-down"
          >
            SCHEDULE NOW
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
