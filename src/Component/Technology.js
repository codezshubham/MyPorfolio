import React from "react";

// Example: Import your icons here (assuming you have stored them locally)
import javascript from '../Assest/javascript-removebg-preview.png';
import react from '../Assest/react-removebg-preview.png';
import java from '../Assest/java-removebg-preview.png';
import spring from '../Assest/Spring-removebg-preview.png';
import aws from '../Assest/aws-removebg-preview (1).png';

const Technology = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 py-6 bg-gray-900">
      <img
        src={javascript}
        alt="Javascript"
        className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain"
      />
      <img
        src={react}
        alt="React"
        className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain"
      />
      <img
        src={java}
        alt="Java"
        className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain"
      />
      <img
        src={spring}
        alt="SpringBoot"
        className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain ml-4"
      />
      <img
        src={aws}
        alt="AWS"
        className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain ml-4"
      />
    </div>
  );
};

export default Technology;
