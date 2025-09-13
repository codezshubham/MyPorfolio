import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import { MdVerified, MdLocationOn } from "react-icons/md";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { Typewriter } from "react-simple-typewriter";
import image from "../Assest/profpic3.jpg";

const HeroAboutSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white py-24 px-6 overflow-hidden">
      {/* 🔲 Grid Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(156, 163, 175, 0.8)" // light gray
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Background glow orbs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Content */}
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side - Profile Image */}
        <div className="flex justify-center">
          <div
            className="relative group w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden 
                  shadow-[0_0_60px_rgba(59,130,246,0.25)] border border-gray-800 
                  hover:shadow-[0_0_80px_rgba(59,130,246,0.4)] transition-all duration-500"
          >
            <img
              src={image}
              alt="Profile"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />

            <div
              className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"
            ></div>

            <div
              className="absolute inset-0 rounded-3xl border-2 border-transparent 
                    group-hover:border-blue-500/50 transition-all duration-700"
            ></div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-8 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              Shubham
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide">
            <Typewriter
              words={[
                "Problem Solver",
                "Aspiring Full Stack Developer",
                "React & Spring Boot Learner",
                "Gen AI Enthusiast",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg max-w-xl mx-auto md:mx-0">
            Currently learning and building expertise in{" "}
            <span className="text-blue-400 font-semibold">
              Java Full Stack Development
            </span>{" "}
            with{" "}
            <span className="text-green-400 font-semibold">Spring Boot</span> and{" "}
            <span className="text-sky-400 font-semibold">React</span>. Passionate
            about{" "}
            <span className="text-purple-400 font-semibold">Generative AI</span>,{" "}
            <span className="text-orange-400 font-semibold">problem-solving</span>
            , and developing{" "}
            <span className="text-pink-400 font-semibold">
              modern web solutions
            </span>.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-8 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2 hover:text-blue-400 transition">
              <FiCode className="text-blue-400 text-lg" />
              <span>5+ Projects</span>
            </div>
            <div className="flex items-center gap-2 hover:text-green-400 transition">
              <MdVerified className="text-green-400 text-lg" />
              <span>Grind Leetcode</span>
            </div>
            <div className="flex items-center gap-2 hover:text-pink-400 transition">
              <MdLocationOn className="text-pink-400 text-lg" />
              <span>India</span>
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-6 pt-4">
            <a
              href="https://github.com/codezshubham"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-gray-800/60 hover:bg-gray-700 transition-colors shadow hover:shadow-blue-500/30"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/shubhamkumar441/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-gray-800/60 hover:bg-gray-700 transition-colors shadow hover:shadow-blue-500/30"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="mailto:kumarshubhamgupta478@gmail.com"
              className="p-3 rounded-xl bg-gray-800/60 hover:bg-gray-700 transition-colors shadow hover:shadow-blue-500/30"
            >
              <FaEnvelope size={22} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-6">
            <a
              href="#projects"
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-sky-400 text-black font-semibold shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-transform"
            >
              <FiCode size={20} /> My Work
            </a>
            <a
              href="/Shubham_Kumar_Resume_Software_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gray-800 text-white font-semibold shadow-lg hover:bg-gray-700 hover:scale-105 transition-transform"
            >
              <HiDocumentArrowDown size={20} /> Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAboutSection;
