import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import doc from "../assets/images/doc.jpg";
import docs from "../assets/images/docs.jpg";
import hero from "../assets/images/hero-1.jpg";

const AboutUs = () => {
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
      <section className="relative text-black bg-inherit mt-10" data-aos="fade-in">
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

      {/* Team Section */}
      <section className="py-24 px-6 md:px-17">
        <div className="container mx-auto">
          <h2
            className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 text-center"
            data-aos="zoom-in"
          >
            Meet Our Team
          </h2>
          <div className="space-y-16">
            {/* Team Member 1 */}
            <div
              className="grid md:grid-cols-2 gap-8 items-center"
              data-aos="fade-up"
            >
              {/* Left Image */}
              <div className="flex justify-center">
                <img
                  src={docs}
                  alt="Dr. Jane Doe"
                  className="rounded-lg shadow-lg w-full max-w-xs object-cover border-4 border-green"
                />
              </div>
              {/* Right Bio */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Dr. Jane Doe
                </h3>
                <p className="text-gray-500 mb-4">Lead Audiologist</p>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Jane Doe has over 15 years of experience in audiology and
                  hearing healthcare. She is passionate about providing
                  individualized care and the latest in hearing technology to
                  improve her patients' lives.
                </p>
                <button className="mt-4 bg-green text-white py-2 px-4 rounded-lg hover:bg-green-light transition duration-300">
                  Read More
                </button>
              </div>
            </div>

            {/* Team Member 2 */}
            <div
              className="grid md:grid-cols-2 gap-8 items-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex justify-center">
                <img
                  src={doc}
                  alt="John Smith"
                  className="rounded-lg shadow-lg w-full max-w-xs object-cover border-4 border-green"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  John Smith
                </h3>
                <p className="text-gray-500 mb-4">Hearing Specialist</p>
                <p className="text-gray-600 leading-relaxed">
                  John Smith specializes in fitting hearing aids and conducting
                  diagnostic tests. He is dedicated to helping individuals find
                  the best hearing solutions for their unique needs.
                </p>
                <button className="mt-4 bg-green text-white py-2 px-4 rounded-lg hover:bg-green-light transition duration-300">
                  Read More
                </button>
              </div>
            </div>

            {/* Team Member 3 */}
            <div
              className="grid md:grid-cols-2 gap-8 items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex justify-center">
                <img
                  src={docs}
                  alt="Emily Johnson"
                  className="rounded-lg shadow-lg w-full max-w-xs object-cover border-4 border-green"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Emily Johnson
                </h3>
                <p className="text-gray-500 mb-4">Customer Care Manager</p>
                <p className="text-gray-600 leading-relaxed">
                  Emily Johnson ensures that every patient receives excellent
                  service and support throughout their hearing journey. Her
                  dedication to customer care is unmatched.
                </p>
                <button className="mt-4 bg-green text-white py-2 px-4 rounded-lg hover:bg-green-light transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="bg-green text-white py-16 px-6 md:px-12"
        data-aos="zoom-in-up"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg md:text-xl mb-6">
            Have questions? Contact us today to schedule an appointment or learn
            more about our services.
          </p>
          <a
            href="#contact"
            className="bg-white text-green py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
