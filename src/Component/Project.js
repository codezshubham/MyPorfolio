import React, { useState } from 'react';
import projectImg from '../Assest/Project.png';

const Project = () => {
  const [isProjectLinkClicked, setIsProjectLinkClicked] = useState(false);

  const handleProjectLinkClick = (e) => {
    e.preventDefault();
    setIsProjectLinkClicked(true);
    setTimeout(() => {
      setIsProjectLinkClicked(false);
      // Navigate to project URL
      window.open('https://codezshubhamechoecom.vercel.app', '_blank');
    }, 200); // Allow time for animation
  };

  return (
    <section className="bg-gray-900 text-gray-300 mt-0 mb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-md relative">
          {/* Project Image with Zoom Effect */}
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
            <img
              src={projectImg}
              alt="Project Screenshot"
              className="rounded-md w-full md:w-80 h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Project Details */}
          <div className="text-left">
            <h3 className="text-2xl font-bold text-white mb-2">E-commerce Web Application</h3>
            <div className="flex flex-row absolute top-0 right-0">
              <span className="ml-3 text-xs lg:text-sm font-bold px-1 rounded-full bg-red-500 text-black animate-pulse transition duration-0">
                Completed
              </span>
            </div>

            <ul className="list-disc ml-5 space-y-2 mb-4">
              <li>
                Implemented product search, filtering, shopping cart management, and order placement with secure payment processing through Razorpay.
              </li>
              <li>
                Developed an interactive admin panel for managing users, products, and order statuses with full CRUD operations.
              </li>
            </ul>

            {/* Technologies */}
            <div className="flex flex-wrap space-x-4 mb-4 text-sm">
              <span className="inline-block text-red-400">✅ ReactJs</span>
              <span className="inline-block text-red-400">✅ JavaScript</span>
              <span className="inline-block text-red-400">✅ SpringBoot</span>
              <span className="inline-block text-red-400">✅ Java</span>
              <span className="inline-block text-red-400">✅ Tailwind CSS</span>
            </div>

            {/* Project Link with Click Animation */}
            <a
              href="https://codezshubhamechoecom.vercel.app"
              onClick={handleProjectLinkClick}
              className={`inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-bold hover:bg-gradient-to-l transition-all duration-300 px-4 py-2 rounded-md ${
                isProjectLinkClicked ? 'transform scale-95' : 'transform scale-100'
              }`}
            >
              EchoEcom.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
