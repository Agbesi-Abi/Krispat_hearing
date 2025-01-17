import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HearingAid1 from "../assets/images/hearing-aid-1.jpg";
import HearingAid2 from "../assets/images/hearing-aid-2.jpg";
import HearingAid3 from "../assets/images/earing-aid-1.jpg";

const HearingAid = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
      once: true,
      
    });
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <header className="bg-green-600 text-white py-12 text-center" data-aos="fade-down">
        <h1 className="text-4xl font-bold">Explore Hearing Aids</h1>
        <p className="mt-4 text-lg">
          Discover advanced hearing solutions for all your needs.
        </p>
      </header>

      {/* About Section */}
      <section className="py-10 px-4 sm:px-8 lg:px-20" data-aos="fade-right">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Choose Our Hearing Aids?
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Our hearing aids are designed with cutting-edge technology to improve
          your hearing experience. Whether you're looking for discreet in-ear
          solutions or powerful behind-the-ear devices, we have the perfect
          option for you.
        </p>
      </section>

      {/* Product Gallery */}
      <section className="py-10 px-4 sm:px-8 lg:px-20">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center" >
          Available Models
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product 1 */}
          <div
            className="bg-white rounded-lg shadow-md p-4"
             data-aos="fade-up"
            data-aos-delay="300"
            
          >
            <img
  src={HearingAid1}
  alt="Hearing Aid 1"
  className="w-full h-auto object-contain border border-red-500"
/>

            <h3 className="mt-4 text-lg font-bold text-gray-800">Model A</h3>
            <p className="text-gray-600 text-sm mt-2">
              A compact, behind-the-ear hearing aid with superior sound
              processing.
            </p>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
              Learn More
            </button>
          </div>

          {/* Product 2 */}
          <div
            className="bg-white rounded-lg shadow-md p-4"
             data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src={HearingAid2}
              alt="Hearing Aid 2"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg font-bold text-gray-800">Model B</h3>
            <p className="text-gray-600 text-sm mt-2">
              In-ear hearing aid with noise-canceling technology for clear sound.
            </p>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
              Learn More
            </button>
          </div>

          {/* Product 3 */}
          <div
            className="bg-white rounded-lg shadow-md p-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src={HearingAid3}
              alt="Hearing Aid 3"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg font-bold text-gray-800">Model C</h3>
            <p className="text-gray-600 text-sm mt-2">
              Discreet in-ear hearing aid for seamless everyday use.
            </p>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section
        className="bg-green text-white py-12 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-bold">Enhance Your Hearing Today</h2>
        <p className="mt-4">
          Schedule an appointment to find the perfect hearing aid for you.
        </p>
        <button className="mt-6 bg-white text-gray-800 py-2 px-6 rounded hover:bg-red-700 transition">
          Book Appointment
        </button>
      </section>
    </div>
  );
};

export default HearingAid;
