import React, { useState } from 'react';
import image from '../Assest/profpic3.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-950 p-6 sticky top-0 z-50 shadow-md">
      <div className="w-full h-3 container mx-auto flex justify-between items-center pl-6">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={image}
            alt="Profile"
            className="rounded-full w-8 h-8 object-cover"
          />
        </div>

        {/* Navbar Links */}
        <ul className="hidden md:flex justify-end items-end space-x-8 text-gray-300 uppercase text-base ml-auto">
          <li className="hover:text-white hover:border-b-2">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-white hover:border-b-2">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-white hover:border-b-2">
            <a href="#experience">Experiences</a>
          </li>
          <li className="hover:text-white hover:border-b-2">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-white hover:border-b-2">
            <a href="#contact">Contact</a>
          </li>
        </ul>

         {/* Mobile Menu Button */}
         <div className="md:hidden text-white">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Slide-up from bottom) */}
        <div
          className={`md:hidden fixed bottom-0 left-0 w-full h-full bg-gray-700 text-white transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-y-0' : 'translate-y-full'
          } z-40 flex flex-col justify-center items-center`}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="flex flex-col space-y-8 text-center uppercase text-xl">
            <li className="hover:text-gray-400">
              <a href="#home" onClick={toggleMenu}>Home</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#about" onClick={toggleMenu}>About</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#experience" onClick={toggleMenu}>Experiences</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#projects" onClick={toggleMenu}>Projects</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#contact" onClick={toggleMenu}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
