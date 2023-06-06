//eslint-disable-next-line
import React, { useState } from 'react';

const SideNavbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="flex">
      {/* Button for unfolding the navbar */}
      <button
        className="lg:hidden fixed z-10 bottom-5 right-5 bg-gray-500 text-white rounded-full p-2"
        onClick={toggleNavbar}
      >
        {isNavbarOpen ? 'Close' : 'Open'}
      </button>

      {/* Side Navbar */}
      <nav
        className={`${
          isNavbarOpen ? 'f w-full h-full bg-gray-200' : 'hidden'
        } lg:block md:w-[100%] lg:bg-gray-200 lg:px-4 lg:py-8 overflow-hidden transition-transform duration-300 ease-in-out transform ${
          isNavbarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Navbar content */}
        <ul className="space-y-4">
          <li>
            <a className="text-gray-700 hover:text-gray-900" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-gray-900" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-gray-900" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-gray-900" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNavbar;
