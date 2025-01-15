import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hero from "../assets/images/hero-1.jpg";

const Reviews = () => {
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

      {/* Reviews Section */}
      <section
        className="py-16 px-6 md:px-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="container mx-auto">
          <h2
            className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 text-center"
            data-aos="zoom-in"
          >
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Review 1 */}
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              data-aos="flip-left"
            >
              <p className="text-gray-600 leading-relaxed italic mb-4">
                "The team at Kripat Hearing Centre was incredibly professional and kind.
                They took the time to explain my options and made sure I was comfortable
                throughout the process."
              </p>
              <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
              <p className="text-gray-500">Verified Customer</p>
            </div>

            {/* Review 2 */}
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              data-aos="flip-right"
            >
              <p className="text-gray-600 leading-relaxed italic mb-4">
                "Excellent service! My new hearing aids have changed my life, and I can't
                thank the staff enough for their help."
              </p>
              <h3 className="text-xl font-bold text-gray-800">Jane Smith</h3>
              <p className="text-gray-500">Verified Customer</p>
            </div>

            {/* Review 3 */}
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p className="text-gray-600 leading-relaxed italic mb-4">
                "From the hearing test to the fitting of my new devices, everything was
                handled with great care and expertise."
              </p>
              <h3 className="text-xl font-bold text-gray-800">Emily Johnson</h3>
              <p className="text-gray-500">Verified Customer</p>
            </div>

            {/* Review 4 */}
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p className="text-gray-600 leading-relaxed italic mb-4">
                "Highly recommend! Their customer service is outstanding, and the staff
                genuinely cares about their patients."
              </p>
              <h3 className="text-xl font-bold text-gray-800">Michael Brown</h3>
              <p className="text-gray-500">Verified Customer</p>
            </div>

            {/* Review 5 */}
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p className="text-gray-600 leading-relaxed italic mb-4">
                "I was impressed with their industrial hearing conservation program.
                Our team feels much safer now."
              </p>
              <h3 className="text-xl font-bold text-gray-800">Sarah Lee</h3>
              <p className="text-gray-500">Verified Customer</p>
            </div>

            {/* Review 6 */}
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p className="text-gray-600 leading-relaxed italic mb-4">
                "Their dedication to providing personalized care is remarkable. I felt
                like more than just a customer."
              </p>
              <h3 className="text-xl font-bold text-gray-800">David Wilson</h3>
              <p className="text-gray-500">Verified Customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section
        className="bg-green text-white py-16 px-6 md:px-12"
        data-aos="zoom-in-up"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">We Value Your Feedback</h2>
          <p className="text-lg md:text-xl mb-6">
            Share your experience with us and help others make an informed decision.
          </p>
          <a
            href="#leave-review"
            className="bg-white text-green py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
            data-aos="zoom-in"
          >
            Leave a Review
          </a>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
