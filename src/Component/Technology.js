import React from "react";

// Import icons
import javascript from '../Assest/javascript-removebg-preview.png';
import react from '../Assest/react-removebg-preview.png';
import java from '../Assest/java-removebg-preview.png';
import spring from '../Assest/Spring-removebg-preview.png';
import aws from '../Assest/aws-removebg-preview (1).png';

const techStack = [
  { name: "JavaScript", icon: javascript },
  { name: "ReactJS", icon: react },
  { name: "Java", icon: java },
  { name: "Spring Boot", icon: spring },
  { name: "AWS", icon: aws }
];

const Technology = () => {
  return (
    <div className="bg-gray-900 pb-16 px-4">
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-8">Technologies I'm Using</h2>
      <div className="flex flex-wrap justify-center items-center gap-10">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={tech.icon}
              alt={tech.name}
              className="h-16 w-16 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 object-contain transition-transform duration-300 hover:scale-110"
            />
            <p className="text-white text-sm sm:text-base mt-2 font-medium">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
