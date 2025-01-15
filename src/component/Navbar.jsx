import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-30 text-black">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/home">
            <img
              src="/src/assets/images/logo.png"
              alt="Logo"
              className="h-12 w-auto"
            />
          </a>
          <span className="font-bold ml-2 text-green">Krispat</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="hidden md:flex space-x-8 font-semibold text-gray-800 text-sm">
            <li><a href="/home" className="hover:text-green transition duration-300">HOME</a></li>
            <li><a href="/about" className="hover:text-green transition duration-300">ABOUT US</a></li>
            <li><a href="/reviews" className="hover:text-green transition duration-300">REVIEWS</a></li>
            <li><a href="/services" className="hover:text-green transition duration-300">SERVICES</a></li>
            <li><a href="/hearing-aid" className="hover:text-green transition duration-300">HEARING AIDS</a></li>
            <li><a href="/contact" className="hover:text-green transition duration-300">CONTACT</a></li>
          
          </ul>
          {/* Call to Action Buttons */}
          <div className="flex space-x-4">
            <a
              href="/contact"
              className="bg-green text-white py-2 px-4 rounded-md shadow hover:bg-green transition duration-300"
            >
              Schedule Appointment
            </a>
            <a
              href="tel:+1234567890"
              className="bg-green text-white py-2 px-4 rounded-md shadow hover:bg-blue-300 transition duration-300"
            >
              Call Us
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="space-y-4 font-medium text-gray-700 px-6 py-4">
            <li><a href="/home" className="block hover:text-green transition duration-300">HOME</a></li>
            <li><a href="/about" className="block hover:text-green transition duration-300">ABOUT US</a></li>
            <li><a href="/reviews" className="block hover:text-green transition duration-300">REVIEWS</a></li>
            <li><a href="/services" className="block hover:text-green transition duration-300">SERVICES</a></li>
            <li><a href="/hearing-aids" className="block hover:text-green transition duration-300">HEARING AIDS</a></li>
            <li><a href="/contact" className="block hover:text-green transition duration-300">CONTACT US</a></li>
            {/* CTA Buttons 
            <li>
              <a
                href="/about"
                className="block bg-green text-white py-2 px-4 rounded-md shadow hover:bg-gray-700 transition duration-300"
              >
                Schedule Appointment
              </a>
            </li>
            <li>
              <a
                href="tel:+1234567890"
                className="block bg-green text-white py-2 px-4 rounded-md shadow hover:bg-gray-700 transition duration-300"
              >
                Call Us
              </a>
            </li>*/}
            <li>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
