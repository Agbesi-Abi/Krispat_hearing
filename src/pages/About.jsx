import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import doc from "../assets/images/doctor.jpg";
import docs from "../assets/images/docs.jpg";
import doctor from "../assets/images/doc.jpg";
import hero from "../assets/images/hero-1.jpg";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 50,
      once: true, 
    });
  }, []);

  // State to handle the "Read More" functionality
  const [showFullText1, setShowFullText1] = useState(false);
  const [showFullText2, setShowFullText2] = useState(false);
  const [showFullText3, setShowFullText3] = useState(false);

  // Function to toggle the text
  const toggleText = (textNumber) => {
    if (textNumber === 1) setShowFullText1(!showFullText1);
    if (textNumber === 2) setShowFullText2(!showFullText2);
    if (textNumber === 3) setShowFullText3(!showFullText3);
  };

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
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Mission</h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                At Krispat Hearing Centre, our mission is to transform lives through better hearing. 
                We are dedicated to providing exceptional audiology services and cutting-edge hearing solutions 
                tailored to meet the unique needs of every individual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 md:px-17">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 text-center" data-aos="zoom-in">
            Meet Our Team
          </h2>
          <div className="space-y-16">
            {/* Team Member 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center" data-aos="fade-up">
              <div className="flex justify-center">
                <img
                  src={doc}
                  alt="Dr. Jane Doe"
                  className="rounded-lg shadow-lg w-full max-w-xs object-cover border-4 border-green"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Dr. Christian Kweitsu</h3>
                <p className="text-gray-500 mb-4">Lead Audiologist</p>
                <p className="text-gray-600 leading-relaxed">
                  {showFullText1 ? (
                    "Reverend Christian Kwetey Kweitsu is a distinguished audiologist and the CEO of Krispat Hearing Centre Ghana Limited, a leading audiological service provider in Ghana. He founded the center in 2003 alongside his wife, Patience, after completing a course in technical audiology in the United Kingdom. In recognition of his significant contributions to the field of audiology and his dedication to improving hearing health in Ghana, Reverend Kweitsu was conferred with an honorary Doctorate of Philosophy by Vinnytsia State Pedagogical University in Ukraine in April 2019. Krispat Hearing Centre offers a range of services, including computerized hearing tests, digital hearing aids and accessories, ear protection, and primary Ear, Nose, and Throat (ENT) care. The center operates offices in Accra, Kumasi, Takoradi, Tema, and Liberia, serving a broad clientele. Reverend Kweitsu is also a Reverend Minister, combining his passion for audiology with his commitment to community service. "
                  ) : (
                    "Reverend Christian Kwetey Kweitsu is a distinguished audiologist and the CEO of Krispat Hearing Centre Ghana Limited, a leading audiological service provider in Ghana."
                  )}
                </p>
                <button 
                  className="mt-4 bg-green text-white py-2 px-4 rounded-lg hover:bg-green-light transition duration-300"
                  onClick={() => toggleText(1)}
                >
                  {showFullText1 ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center" data-aos="fade-up" data-aos-delay="100">
              <div className="flex justify-center">
                <img
                  src={doctor}
                  alt="John Smith"
                  className="rounded-lg shadow-lg w-full max-w-xs object-cover border-4 border-green"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">John Smith</h3>
                <p className="text-gray-500 mb-4">Hearing Specialist</p>
                <p className="text-gray-600 leading-relaxed">
                  {showFullText2 ? (
                    "John Smith specializes in fitting hearing aids and conducting diagnostic tests. He is dedicated to helping individuals find the best hearing solutions for their unique needs..."
                  ) : (
                    "John Smith specializes in fitting hearing aids and conducting diagnostic tests..."
                  )}
                </p>
                <button 
                  className="mt-4 bg-green text-white py-2 px-4 rounded-lg hover:bg-green-light transition duration-300"
                  onClick={() => toggleText(2)}
                >
                  {showFullText2 ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center" data-aos="fade-up" data-aos-delay="200">
              <div className="flex justify-center">
                <img
                  src={docs}
                  alt="Emily Johnson"
                  className="rounded-lg shadow-lg w-full max-w-xs object-cover border-4 border-green"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Emily Johnson</h3>
                <p className="text-gray-500 mb-4">Customer Care Manager</p>
                <p className="text-gray-600 leading-relaxed">
                  {showFullText3 ? (
                    "Emily Johnson ensures that every patient receives excellent service and support throughout their hearing journey..."
                  ) : (
                    "Emily Johnson ensures that every patient receives excellent service and support throughout their hearing journey."
                  )}
                </p>
                <button 
                  className="mt-4 bg-green text-white py-2 px-4 rounded-lg hover:bg-green-light transition duration-300"
                  onClick={() => toggleText(3)}
                >
                  {showFullText3 ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-green text-white py-16 px-6 md:px-12" data-aos="zoom-in-up">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg md:text-xl mb-6">
            Have questions? Contact us today to schedule an appointment or learn more about our services.
          </p>
          <a
            href="/appointment"
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
