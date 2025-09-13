import React, { useState } from "react";
import image from "../Assest/profpic3.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experiences", href: "#experience" },
    { name: "Coding", href: "#coding" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-gray-950 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Profile Image */}
        <img
          src={image}
          alt="Profile"
          className="w-11 h-11 rounded-full border border-pink-500 shadow-md hover:scale-105 transition-transform"
        />

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-300 text-lg font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative hover:text-white transition"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition"
          onClick={toggleMenu}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg shadow-lg absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 text-lg text-gray-200">
          <button
            className="absolute top-6 right-6 text-gray-300 hover:text-white"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={toggleMenu}
              className="hover:text-pink-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
