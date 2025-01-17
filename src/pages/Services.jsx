import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hero from "../assets/images/patient.jpg";
import {
  PhoneIcon,
  SearchIcon,
  ShieldCheckIcon,
  UserIcon,
  ClipboardIcon,
  HeartIcon,
} from "@heroicons/react/outline";

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
      <section className="relative">
        <div className="relative">
          <img
            src={hero}
            alt="Patient"
            className="object-cover w-full h-[450px] md:h-[600px]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
            <h1
              className="text-3xl md:text-5xl font-bold mb-4"
              data-aos="fade-down"
            >
              Professional Hearing Care Services
            </h1>
            <p className="text-lg md:text-xl" data-aos="fade-up">
              Your trusted partner in hearing health and wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="container mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center"
            data-aos="zoom-in"
          >
            Explore Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Service Items */}
            {[
              {
                Icon: SearchIcon,
                title: "Hearing Tests",
                description:
                  "Comprehensive audiological assessments to diagnose and treat hearing issues effectively.",
              },
              {
                Icon: PhoneIcon,
                title: "Digital Hearing Aids & Accessories",
                description:
                  "Offering advanced hearing aids and essential accessories for a seamless experience.",
              },
              {
                Icon: ShieldCheckIcon,
                title: "Industrial Hearing Conservation",
                description:
                  "Custom programs to protect workers' hearing in noisy environments.",
              },
              {
                Icon: UserIcon,
                title: "Custom Ear Plugs",
                description:
                  "Tailored ear protection for noise reduction and water safety.",
              },
              {
                Icon: ClipboardIcon,
                title: "Primary ENT Care",
                description:
                  "Expert care for ear, nose, and throat health to enhance your well-being.",
              },
              {
                Icon: HeartIcon,
                title: "General Hearing Care",
                description:
                  "Comprehensive support for maintaining ear health and preventing hearing loss.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center mb-4">
                  <service.Icon className="w-8 h-8 text-green-600 mr-4" />
                  <h3 className="text-xl font-bold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-green text-white py-16 px-6 md:px-12">
        <div className="container mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            data-aos="fade-down"
          >
            Ready to Improve Your Hearing?
          </h2>
          <p className="text-lg md:text-xl mb-6" data-aos="fade-up">
            Contact us today to schedule your appointment or learn more about
            our services.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-green py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
            data-aos="zoom-in"
          >
            SCHEDULE TODAY
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
