import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function HearingAid() {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      offset: 50, 
      once: true, 
    });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen mt-9">
      {/* Header Section */}
      <header className="bg-green text-white py-10 text-center" data-aos="fade-down">
        <h1 className="text-4xl font-bold">Hearing Aids</h1>
        <p className="mt-2 text-lg">
          Discover our range of advanced hearing aids designed for your needs.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="py-10 px-6 md:px-20" data-aos="fade-right">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Our Hearing Aids</h2>
        <p className="text-gray-600">
          Our hearing aids are designed with cutting-edge technology to enhance
          your hearing experience. Whether you're looking for discreet in-ear
          solutions or powerful behind-the-ear devices, we have something to
          suit everyone.
        </p>
      </section>

      {/* Product Gallery */}
      <section className="py-10 px-6 md:px-20">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4" data-aos="zoom-in">
          Available Models
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product Card 1 */}
          <div className="bg-white shadow-md rounded-md p-4" data-aos="fade-up">
            <img
              src="/src/assets/images/hearing-aid-1.jpg"
              alt="Hearing Aid 1"
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-bold mt-4">Model A</h3>
            <p className="text-sm text-gray-600 mt-2">
              A compact, behind-the-ear hearing aid with advanced sound
              processing.
            </p>
            <button className="mt-4 bg-green text-white py-2 px-4 rounded-md hover:bg-green transition">
              Learn More
            </button>
          </div>
          {/* Product Card 2 */}
          <div className="bg-white shadow-md rounded-md p-4" data-aos="fade-up" data-aos-delay="100">
            <img
              src="/src/assets/images/hearing-aid-2.jpg"
              alt="Hearing Aid 2"
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-bold mt-4">Model B</h3>
            <p className="text-sm text-gray-600 mt-2">
              In-ear hearing aid with noise-canceling technology.
            </p>
            <button className="mt-4 bg-green text-white py-2 px-4 rounded-md hover:bg-green transition">
              Learn More
            </button>
          </div>
          {/* Product Card 3 */}
          <div className="bg-white shadow-md rounded-md p-4" data-aos="fade-up" data-aos-delay="200">
            <img
              src="/src/assets/images/hearing-aid-4.jpg"
              alt="Hearing Aid 3"
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-bold mt-4">Model C</h3>
            <p className="text-sm text-gray-600 mt-2">
              Discreet in-ear hearing aid for everyday use.
            </p>
            <button className="mt-4 bg-green text-white py-2 px-4 rounded-md hover:bg-green transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green text-white py-10 text-center" data-aos="fade-up">
        <h2 className="text-2xl font-semibold">Ready to Improve Your Hearing?</h2>
        <p className="mt-2 text-lg">
          Schedule an appointment today and find the perfect hearing aid for
          you.
        </p>
        <button className="mt-4 bg-white text-green py-2 px-6 rounded-md hover:bg-gray-100 transition">
          Schedule Appointment
        </button>
      </section>
    </div>
  );
}

export default HearingAid;
