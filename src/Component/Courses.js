"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const courses = [
  {
    title: "Java Fundamentals",
    provider: "LinkedIn Learning",
    date: "May 2025",
    link: "https://www.linkedin.com/learning/certificates/6725a633a2cbb0caaee6e89932dbc24689ab1e849981a0fd77181d19f8ae7675",
    image: "/oracle_Java.jpg",
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

export default function CoursesCarousel() {
  return (
    <section
      id="certifications"
      className="px-6 py-20 bg-gray-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8 text-center text-white">
          Courses & Certifications
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="pb-16"
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <div className=" bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-3xl overflow-hidden mx-auto max-w-2xl transform transition duration-300">
                
                {/* Certificate Image */}
                <div className="bg-gray-700 aspect-[16/11] flex items-center justify-center">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="object-contain w-full h-full p-6"
                  />
                </div>

                {/* Course Details */}
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-1">
                    {course.provider}
                  </p>
                  <p className="text-sm text-gray-400 mb-4">
                    {course.date}
                  </p>

                  {course.link && (
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2 mt-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
