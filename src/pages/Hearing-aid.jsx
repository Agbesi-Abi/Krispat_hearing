import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HearingAid1 from "../assets/images/hearing-aid-1.jpg";
import HearingAid2 from "../assets/images/hearing-aid-2.jpg";
import HearingAid3 from "../assets/images/earing-aid-1.jpg";

const HearingAid = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 50,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <header className="bg-green-600 text-white py-8 text-center" data-aos="fade-down">
        <h1 className="text-3xl font-bold">Explore Hearing Aids</h1>
        <p className="mt-3 text-base">
          Discover advanced hearing solutions for all your needs.
        </p>
      </header>

      {/* About Section */}
      <section className="py-6 px-4" data-aos="fade-right">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Why Choose Our Hearing Aids?
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Our hearing aids are designed with cutting-edge technology to improve
          your hearing experience. Whether you're looking for discreet in-ear
          solutions or powerful behind-the-ear devices, we have the perfect
          option for you.
        </p>
      </section>

      {/* Product Gallery */}
      <section className="py-6 px-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-5 text-center" data-aos="zoom-in">
          Available Models
        </h2>
        <div className="flex flex-col gap-6">
          {/* Product 1 */}
          <div
            className="bg-white rounded-lg shadow p-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src={HearingAid1}
              alt="Hearing Aid 1"
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-3 text-lg font-bold text-gray-800">Model A</h3>
            <p className="text-sm text-gray-600 mt-2">
              Compact behind-the-ear hearing aid with advanced sound processing.
            </p>
            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
              Learn More
            </button>
          </div>

          {/* Product 2 */}
          <div
            className="bg-white rounded-lg shadow p-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src={HearingAid2}
              alt="Hearing Aid 2"
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-3 text-lg font-bold text-gray-800">Model B</h3>
            <p className="text-sm text-gray-600 mt-2">
              In-ear hearing aid with noise-canceling technology for clear sound.
            </p>
            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
              Learn More
            </button>
          </div>

          {/* Product 3 */}
          <div
            className="bg-white rounded-lg shadow p-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src={HearingAid3}
              alt="Hearing Aid 3"
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-3 text-lg font-bold text-gray-800">Model C</h3>
            <p className="text-sm text-gray-600 mt-2">
              Discreet in-ear hearing aid for seamless everyday use.
            </p>
            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section
        className="bg-green-600 text-white py-8 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-xl font-bold">Enhance Your Hearing Today</h2>
        <p className="mt-3 text-base">
          Schedule an appointment to find the perfect hearing aid for you.
        </p>
        <button className="mt-5 bg-white text-green-600 py-2 px-6 rounded hover:bg-gray-100 transition">
          Book Appointment
        </button>
      </section>
    </div>
  );
};

export default HearingAid;
