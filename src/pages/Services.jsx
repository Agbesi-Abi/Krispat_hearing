import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hero from "../assets/images/hero-1.jpg";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 50,
      once: true, 
    });
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative text-white bg-inherit mt-10"
        data-aos="fade-in"
      >
        <div className="relative">
          {/* Hero Image */}
          <img
            src={hero}
            alt="Hero"
            className="object-cover w-full h-[450px] md:h-[595px]"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="container mx-auto">
          <h2
            className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 text-center"
            data-aos="zoom-in"
          >
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Service 1 */}
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Hearing Tests
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive audiological assessments to diagnose and treat
                hearing issues effectively.
              </p>
            </div>

            {/* Service 2 */}
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Digital Hearing Aids & Accessories
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sale of advanced digital hearing aids and essential accessories
                like batteries and earmolds.
              </p>
            </div>

            {/* Service 3 */}
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Industrial Hearing Conservation Program
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Protecting workers' hearing through custom programs designed for
                industrial environments.
              </p>
            </div>

            {/* Service 4 */}
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Ear Plugs & Hearing Protection
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Custom-made ear plugs and protective devices for noise and water
                protection.
              </p>
            </div>

            {/* Service 5 */}
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Primary Ear-Nose-Throat (ENT) Care
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Basic ENT care services to diagnose and manage ear-related
                conditions.
              </p>
            </div>

            {/* Service 6 */}
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                General Ear & Hearing Care
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive care to maintain optimal ear health and prevent
                hearing loss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="text-gray-900 py-16 px-6 md:px-12"
        data-aos="zoom-in-up"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Ready to Improve Your Hearing?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Contact us today to schedule an appointment or learn more about our
            services.
          </p>
          <a
            href="#contact"
            className="bg-green text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
            data-aos="zoom-in"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
