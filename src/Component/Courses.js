"use client";

import React from "react";
import { FaExternalLinkAlt } from 'react-icons/fa';

const courses = [
  {
    title: "Java Fundamentals",
    provider: "LinkedIn Learning",
    date: "May 2025",
    link: "https://www.linkedin.com/learning/certificates/6725a633a2cbb0caaee6e89932dbc24689ab1e849981a0fd77181d19f8ae7675",
    image: "/oracle_Java.jpg",
  },
  {
    title: "Java 8 Essential Training",
    provider: "LinkedIn Learning",
    date: "Jun 2025",
    link: "https://www.linkedin.com/learning/certificates/a820723c85fe672803e11f696970000f3379762352945bb83b1fe79beb69c71b",
    image: "/Java8.jpg",
  },
  {
    title: "JavaScript Essentials 1",
    provider: "Cisco Networking Academy",
    date: "Dec 2024",
    link: "https://www.credly.com/badges/f4701f83-f3af-49e1-bf57-f70c0292fa66",
    image: "/JavaScript_Essentials_1.jpg",
  },
  {
    title: "JSP, Servlets and JDBC for Beginners",
    provider: "Udemy",
    date: "Oct 2024",
    link: "https://www.udemy.com/certificate/UC-1165ba76-53d4-4c3e-9b39-194b62df2f7b/",
    image: "/jsp_servlet_jdbc.jpg",
  },
  {
    title: "Python Essentials 2",
    provider: "Cisco Networking Academy",
    date: "June 2025",
    link: "https://coursera.org/verify/ml-cert-id",
    image: "/Python Essential 2.jpg",
  },
  {
    title: "Spring Boot 3 Essentials",
    provider: "LinkedIn Learning",
    date: "Jun 2025",
    link: "https://www.linkedin.com/learning/certificates/ce00bd06b391d3ba68e8f163afd65b3b0715a2a265cfdbbb5b443dbbbada57fa",
    image: "/SpringBoot3.jpg",
  },
  {
    title: "Python Essentials 1",
    provider: "Cisco Networking Academy",
    date: "June 2025",
    link: "https://www.credly.com/badges/41b92360-b269-484f-ab06-18d08747d3bf",
    image: "/Python Essential 1.jpg",
  },
  {
    title: "Soft Skill Development",
    provider: "NPTEL",
    date: "Jan 2025",
    image: "/Soft Skill Development.jpg",
  },
];

export default function CoursesCards() {
  return (
    <section
      id="certifications"
      className="relative px-6 py-20 bg-gray-950 overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center 
               bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-500 to-blue-600 
               drop-shadow-lg">
          Courses & Certifications
        </h2>


        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-800/70 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-blue-500/40 hover:scale-105 transform transition-all duration-300 overflow-hidden"
            >
              {/* Certificate Image */}
              <div className="bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-1">
                <div className="bg-gray-900 aspect-[16/11] flex items-center justify-center overflow-hidden rounded-2xl">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="object-contain w-full h-full p-6"
                  />
                </div>
              </div>

              {/* Course Details */}
              <div className="p-6 text-center">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-300 mb-1">{course.provider}</p>
                <p className="text-sm text-gray-400 mb-4">{course.date}</p>

                {course.link && (
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-sky-400 text-black font-semibold px-4 py-2 rounded-xl shadow-lg transition-transform duration-300"
                  >
                    <FaExternalLinkAlt />View Certificate
                  </a>

                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
