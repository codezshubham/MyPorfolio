import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';


const Contact = () => {
    return (
      <section className="py-3">
        <div className="flex justify-start space-x-8">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shubhamkumar441/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <FaLinkedin size={30} />
          </a>
          
          {/* Twitter */}
          <a
            href="https://x.com/its_Shubham441"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <FaTwitter size={30} />
          </a>
          
          {/* GitHub */}
          <a
            href="https://github.com/codezshubham"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <FaGithub size={30} />
          </a>
          
          {/* Email */}
          <a
            href="mailto:kumarshubhamgupta478@gmail.com"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <HiOutlineMail size={36} />
          </a>
        </div>
      </section>
    );
  };
  
  export default Contact;
  