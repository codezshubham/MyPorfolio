import React from 'react';
import projectImg from '../Assest/CurrentProject.png'
const CurrentProject = () => {
  return (
    <section className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 ">
            <h2 className="text-4xl font-semibold text-gray-100 mb-8">
            Projects
            </h2>
        <div className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-md relative">
          {/* Project Image */}
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
            <img
              src={projectImg}
              alt="Project Screenshot"
              className="rounded-md w-full md:w-80 h-auto object-cover"
            />
          </div>
          {/* Project Details */}
          <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Automated faculty Appraisal System
                </h3>
                <div className='flex flex-row absolute top-0 right-0'>
                  <span className="ml-3 text-xs lg:text-sm font-bold px-1 rounded-full bg-green-500 text-black animate-pulse transition duration-0">
                      Working
                  </span>
                </div>
            
                <ul className="list-disc ml-5 space-y-2 mb-4">
                    <li>
                    Developed an automated system for faculty self-appraisal and career development with real-time activity logging.
                    </li>
                    <li>
                    Integrated an admin panel with performance analytics, including charts, graphs, and a leaderboard.
                    </li>
                </ul>

            {/* Technologies */}
            <div className="flex flex-wrap space-x-4 mb-4 text-sm">
              <span className="inline-block text-red-400">✅ HTML</span>
              <span className="inline-block text-red-400">✅ Tailwind CSS</span>
              <span className="inline-block text-red-400">✅ Javascript</span>
              <span className="inline-block text-red-400">✅ React</span>
              <span className="inline-block text-red-400">✅ Java</span>
              <span className="inline-block text-red-400">✅ SpringBoot</span>
              <span className="inline-block text-red-400">✅ MySQL</span>
            </div>

            {/* Project Link */}
            <a
              href=""
              className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-bold hover:bg-gradient-to-l transition-all duration-300 px-4 py-2 rounded-md"
            >
              AcadElevate.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentProject;
