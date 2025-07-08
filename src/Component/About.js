import React, { useState } from 'react';
import image from '../Assest/profpic3.jpg';

const About = () => {
  const [isGithubClicked, setIsGithubClicked] = useState(false);
  const [isLinkedinClicked, setIsLinkedinClicked] = useState(false);

  const handleGithubClick = (e) => {
    e.preventDefault();
    setIsGithubClicked(true);
    setTimeout(() => {
      setIsGithubClicked(false);
      // Navigate to GitHub
      window.open('https://github.com/codezshubham', '_blank');
    }, 200); // Allow time for animation
  };

  const handleLinkedinClick = (e) => {
    e.preventDefault();
    setIsLinkedinClicked(true);
    setTimeout(() => {
      setIsLinkedinClicked(false);
      // Navigate to LinkedIn
      window.open('https://www.linkedin.com/in/shubhamkumar441/', '_blank');
    }, 200); // Allow time for animation
  };

  return (
    <section className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-12">
        {/* Profile Image */}
        <div className="flex-shrink-0 mb-8 md:mb-0">
          <img
            src={image}
            alt="Profile"
            className="rounded-full opacity-100 w-80 h-80 object-cover border-4 border-gray-800"
          />
        </div>
        {/* About Content */}
        <div className="text-left">
          <h1 className="text-3xl font-bold text-white mb-4">I am Shubham Kumar</h1>
          <ul className="list-disc ml-5 space-y-2 mb-4">
            <li>
              Completing my graduation from BPMCE Madhepura with a Bachelor of Technology in Computer Science & Engineering.
            </li>
            <li>
              Worked on various projects as a Full Stack Developer with a 60% backend and 40% frontend development bandwidth.
            </li>
            <li>
              My portfolio boasts extensive expertise in data structures and algorithms, object-oriented programming,
              functional programming, RESTful APIs, problem-solving prowess, proficient programming skills,
              effective leadership qualities, effective communication skills and comprehensive software development proficiency.
            </li>
          </ul>

          {/* Technologies */}
          <h3 className="text-lg text-white font-semibold mb-2">
            My Preferred Tools and Technologies are <span className="emoji">👇</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="text-red-400">✅</span>
                <span>Java, Spring-Boot, Spring Data-JPA, Spring-Rest</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-red-400">✅</span>
                <span>DS & Algo, Oops, Computer Networks</span>
              </li>
            </ul>
            
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="text-red-400">✅</span>
                <span>Javascript, ReactJS, Redux-Toolkit, Tailwind CSS</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-red-400">✅</span>
                <span>Git, Github, Maven, Postman, IntelliJ Idea</span>
              </li>
            </ul>

            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="text-red-400">✅</span>
                <span>SQL, MySQL, MySQL Workbench Server</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-red-400">✅</span>
                <span>AWS (EC2 instance & S3 bucket, Amplify)</span>
              </li>
            </ul>
          </div>


          {/* Social Links with Animation */}
          <div className="mt-6">
            <a
              href="https://github.com/codezshubham"
              onClick={handleGithubClick}
              className={`inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-bold hover:bg-gradient-to-l transition-all duration-200 px-4 py-2 rounded-md mr-4 ${
                isGithubClicked ? 'transform scale-95' : 'transform scale-100'
              }`}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shubhamkumar441/"
              onClick={handleLinkedinClick}
              className={`inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-bold hover:bg-gradient-to-l transition-all duration-200 px-4 py-2 rounded-md ${
                isLinkedinClicked ? 'transform scale-95' : 'transform scale-100'
              }`}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
