import React, { useState } from 'react';
import dashhostImg from '../Assest/Screenshot 2025-05-18 201528.png'; // Make sure the image exists at this path

const DashHostProject = () => {
    const [isLinkClicked, setIsLinkClicked] = useState(false);

    const handleLinkClick = (e) => {
        e.preventDefault();
        setIsLinkClicked(true);
        setTimeout(() => {
            setIsLinkClicked(false);
            window.open('https://dashhost.vercel.app', '_blank');
        }, 200);
    };

    return (
        <section className="bg-gray-900 text-gray-300 my-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-md relative">

                    {/* Project Image */}
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                        <img
                            src={dashhostImg}
                            alt="DashHost Screenshot"
                            className="rounded-md w-full md:w-80 h-auto object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Project Details */}
                    <div className="text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">DashHost – Web Hosting Landing Page</h3>

                        {/* Status Badge */}
                        <div className="flex flex-row absolute top-0 right-0">
                            <span className="ml-3 text-xs lg:text-sm font-bold px-1 rounded-full bg-red-500 text-black animate-pulse transition duration-0">
                                Completed
                            </span>
                        </div>

                        {/* Description */}
                        <ul className="list-disc ml-5 space-y-2 mb-4">
                            <li>Built a centralized platform for managing domain credentials, hosting access, and renewal schedules with a responsive UI using React and Tailwind CSS.</li>
                            <li>Implemented secure JWT-based authentication, role-based access control, encrypted data storage, and automated email reminders using Spring Boot, MySQL, and Spring Scheduler.</li>
                        </ul>

                        {/* Technologies Used */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4 text-sm">
                            {['HTML', 'Tailwind CSS', 'React', 'Javascript', 'Spring Boot', 'MySQL', 'JavaMailSender', 'Redux Toolkit'].map((tech, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <span className="text-green-400">✅</span>
                                    <span className="text-red-400">{tech}</span>
                                </div>
                            ))}
                        </div>

                        {/* Project Link */}
                        <a
                            href="https://dashhost.vercel.app"
                            onClick={handleLinkClick}
                            className={`inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-bold px-4 py-2 rounded-md transition-transform duration-300 ${isLinkClicked ? 'scale-95' : 'scale-100'
                                }`}
                        >
                            DashHost.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashHostProject;
