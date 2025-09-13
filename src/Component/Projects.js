import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
// Import all project images
import projectImg from '../Assest/Project.png';
import dashhostImg from '../Assest/Screenshot 2025-05-18 201528.png';
import hotelManageImg from '../Assest/Screenshot 2025-05-19 163206.png';
import youtubeCloneImg from '../Assest/Screenshot 2025-05-19 164928.png';
import resumeRenderImg from '../Assest/Screenshot 2025-06-30 185058.png';
import currentProjectImg from '../Assest/Screenshot 2025-05-02 202906.png';
import lan2sqlImg from '../Assest/Screenshot 2025-08-29 182350.png';

// Project data
const projects = [
  {
    title: "Automated Faculty Appraisal System",
    image: currentProjectImg,
    status: "Working",
    statusColor: "bg-yellow-500",
    url: "https://acad-elevate.vercel.app/",
    urlLabel: "AcadElevate.com",
    github: "https://github.com/codezshubham/AcadElevate",
    description: [
      "Developed an automated system for faculty self-appraisal and career development with real-time activity logging.",
      "Integrated an admin panel with performance analytics, including charts, graphs, and a leaderboard."
    ],
    tech: ["HTML", "Tailwind CSS", "Javascript", "React", "Java", "SpringBoot", "MySQL"]
  },
  {
    title: "ResumeRender – ATS-Friendly Resume Builder",
    image: resumeRenderImg,
    status: "Live",
    statusColor: "bg-green-500",
    url: "https://resumerender.com",
    urlLabel: "ResumeRender.com",
    github: "https://github.com/codezshubham/ResumeRender",
    description: [
      "Built a full-featured resume builder with customizable templates, live preview, and PDF export.",
      "Supported A4-sized printable resume rendering with modern, ATS-compliant layouts.",
      "Implemented multi-template support, color themes, and section toggling using React and Zustand."
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Zustand", "TipTap", "html2pdf", "Shadcn/UI"]
  },
  {
    title: "Lan2SQL - Database AI Agent",
    image: lan2sqlImg,
    status: "Working",
    statusColor: "bg-yellow-500",
    url: "https://database-agent-coral.vercel.app/",
    urlLabel: "Lan2SQL.com",
    github: "https://github.com/codezshubham/DatabaseAgentF",
    description: [
      "Built an AI agent with an LLM-powered interface to convert natural language queries into optimized SQL commands.",
      "Integrated MySQL for real-time query execution, schema understanding, and dynamic result visualization."
    ],
    tech: ["React", "Tailwind CSS", "JavaScript", "Node.js", "Express", "LLM", "MySQL"]
  },

  {
    title: "DashHost – Web Hosting Manager",
    image: dashhostImg,
    status: "Completed",
    statusColor: "bg-red-500",
    url: "https://dashhost.vercel.app",
    urlLabel: "DashHost.com",
    github: "https://github.com/codezshubham/DashHost",
    description: [
      "Built a centralized platform for managing domain credentials, hosting access, and renewal schedules with a responsive UI using React and Tailwind CSS.",
      "Implemented secure JWT-based authentication, role-based access control, encrypted data storage, and automated email reminders using Spring Boot, MySQL, and Spring Scheduler."
    ],
    tech: ["HTML", "Tailwind CSS", "React", "Javascript", "Spring Boot", "MySQL", "JavaMailSender", "Redux Toolkit"]
  },
  {
    title: "E-commerce Web Application",
    image: projectImg,
    status: "Completed",
    statusColor: "bg-red-500",
    url: "https://codezshubhamechoecom.vercel.app",
    urlLabel: "EchoEcom.com",
    github: "https://github.com/codezshubham/echoEcom",
    description: [
      "Implemented product search, filtering, shopping cart management, and order placement with secure payment processing through Razorpay.",
      "Developed an interactive admin panel for managing users, products, and order statuses with full CRUD operations."
    ],
    tech: ["HTML", "Tailwind CSS", "Javascript", "React", "React-Redux", "Java", "SpringBoot", "MySQL"]
  },
  {
    title: "Hotel Management System",
    image: hotelManageImg,
    status: "Completed",
    statusColor: "bg-red-500",
    url: "https://shubham-innmanage.vercel.app/",
    urlLabel: "InnManage.com",
    github: "https://github.com/codezshubham/InnManage-Frontend",
    description: [
      "Built a hotel management system with responsive UI, room booking, billing, and guest management using React and Tailwind CSS.",
      "Secured with JWT auth, integrated Spring Boot, MySQL, and automated emails using JavaMailSender and Spring Scheduler."
    ],
    tech: ["HTML", "Tailwind CSS", "React", "JavaScript", "Redux Toolkit", "Spring Boot", "JavaMailSender", "MySQL"]
  },
  {
    title: "YouTube Clone",
    image: youtubeCloneImg,
    status: "Completed",
    statusColor: "bg-red-500",
    url: "https://youtube-clone-lac-beta.vercel.app/",
    urlLabel: "YouTubeClone.com",
    github: "https://github.com/codezshubham/YouTube-Clone-Using-React",
    description: [
      "Developed a fully functional YouTube clone featuring playback, recommendations, and user authentication using JavaScript and React.",
      "Integrated YouTube Data API for fetching video data and implemented responsive UI with Tailwind CSS for an immersive user experience."
    ],
    tech: ["HTML", "CSS", "React", "Tailwind CSS", "YouTube Data API", "JavaScript", "React Router"]
  },


];

const Project = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleProjectLinkClick = (e, url, idx) => {
    e.preventDefault();
    setClickedIndex(idx);
    setTimeout(() => {
      setClickedIndex(null);
      window.open(url, '_blank');
    }, 200);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white py-20 px-6 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent 
    bg-gradient-to-r from-blue-400 via-sky-500 to-blue-600 inline-block relative pb-12">
            Projects
          </h2>
        </div>



        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((proj, idx) => (
            <div
              key={proj.title}
              className="relative bg-gray-800/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Status Badge */}
              <span
                className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full ${proj.statusColor} text-black shadow`}
              >
                {proj.status}
              </span>

              {/* Project Image */}
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">{proj.title}</h3>
                <ul className="list-disc ml-5 space-y-2 text-sm text-gray-300 flex-1">
                  {proj.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4 mb-6">
                  {proj.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-700/70 backdrop-blur-sm rounded-md text-blue-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  {/* Live Demo */}
                  <a
                    href={proj.url}
                    onClick={(e) => handleProjectLinkClick(e, proj.url, idx)}
                    className={`flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-sky-400 text-black font-semibold px-4 py-2 rounded-xl shadow-lg transition-transform duration-300 ${clickedIndex === idx ? "scale-95" : "hover:scale-105"
                      }`}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>

                  {/* GitHub */}
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-800/60 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
