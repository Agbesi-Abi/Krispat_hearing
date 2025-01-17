import React, { useState } from 'react';
import backgroundImage from '../assets/images/working-1.jpeg'; 

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  send to an API or email or whatever
    alert('Appointment submitted successfully!');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      preferredDate: '',
      message: ''
    });
  };

  return (
    <section
      className="appointment-section py-16 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Set the background image here
    >
      <div className="container mx-auto bg-opacity-70 bg-black p-8 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          Schedule an Appointment
        </h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-lg font-medium text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-white"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-lg font-medium text-white"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="preferredDate"
              className="block text-lg font-medium text-white"
            >
              Preferred Appointment Date
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-white"
            >
              Additional Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
              rows="4"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green transition duration-300"
            >
              Submit Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
