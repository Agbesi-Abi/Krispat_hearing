import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hero from "../assets/images/hero-1.jpg";

const Reviews = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 50,
      once: true,
    });
  }, []);

  const handleToggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

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
            {/* Example Reviews */}
            {/* Repeat review blocks as needed */}
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              data-aos="flip-left"
            >
              <p className="text-gray-600 leading-relaxed italic mb-4">
                "The team at Kripat Hearing Centre was incredibly professional and kind."
              </p>
              <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
              <p className="text-gray-500">Verified Customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leave a Review Section */}
      <section
        className="py-16 px-6 md:px-12 bg-gray-100"
        data-aos="fade-up"
      >
        <div className="container mx-auto text-center">
          <h2
            className="text-2xl md:text-4xl font-bold text-gray-800 mb-8"
          >
            Leave a Review
          </h2>
          {/* Button to Toggle the Review Form */}
          <button
            onClick={handleToggleForm}
            className="bg-green text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-500 transition duration-300"
          >
            {showForm ? "Cancel" : "Leave a Review"}
          </button>
        </div>

        {/* Review Form (Hidden Initially) */}
        {showForm && (
          <div className="container mx-auto mt-12">
            <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6">
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
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
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
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="review"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Your Review
                </label>
                <textarea
                  id="review"
                  rows="5"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
                  placeholder="Share your experience..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green text-white py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300"
              >
                Submit Review
              </button>
            </form>
          </div>
        )}
      </section>
    </div>
  );
};

export default Reviews;
