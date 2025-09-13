import React, { useState } from "react";
import { FaExternalLinkAlt } from 'react-icons/fa';
const experiences = [
  {
    title: "Salesforce Developer Intern",
    company: "Salesforce",
    duration: "Jan 2023 to Feb 2023",
    description: [
      "Developed custom applications using Salesforce Lightning, Apex, and Visualforce, and integrated third-party APIs to extend platform functionality.",
      "Automated business workflows and optimized data integrity through Apex Triggers, Validation Rules, and SOQL queries, enhancing business process efficiency.",
      "Collaborated with cross-functional teams to implement new CRM features, troubleshoot production issues, and improve data analysis with Reports and Dashboards."
    ],
    skills: [
      "Salesforce Lightning",
      "Apex",
      "Visualforce",
      "SOQL",
      "JavaScript",
      "HTML/CSS",
      "REST API"
    ],
    certificate: {
      label: "View Certificate",
      file: "/SalesforceCertificate.pdf"
    }
  },
  {
    title: "Full Stack Developer Intern",
    company: "Aagaaz Training Centre, Patna",
    duration: "Jun 2025",
    description: [
      "Built a centralized platform to manage domain credentials, access, and renewal charges using React and Tailwind CSS.",
      "Implemented JWT-based login, role access control, and encrypted MySQL storage with Spring Boot.",
      "Automated email reminders for renewals using Java and Spring Scheduler."
    ],
    skills: [
      "React",
      "Tailwind CSS",
      "JWT Auth",
      "Spring Boot",
      "MySQL",
      "Java",
      "Spring Scheduler",
      "REST API"
    ],
    certificate: {
      label: "View Certificate",
      file: "/AagaazCertificate.pdf"
    }
  }
];

const Experience = () => {
  const [clickedIdx, setClickedIdx] = useState(null);

  const handleCertificateClick = (e, idx, file) => {
    e.preventDefault();
    setClickedIdx(idx);
    setTimeout(() => {
      setClickedIdx(null);
      window.open(file, "_blank");
    }, 200);
  };

  return (
    <section
      id="experience"
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white py-24 px-6 overflow-hidden"
    >
      {/* Background Glow Orbs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative container mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center pb-16 
  bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-500 to-blue-600">
          Experience
        </h2>



        {/* Timeline wrapper */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-20 ${isLeft ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full border-2 border-gray-900 shadow-lg animate-pulse z-10"></div>

                {/* Card */}
                <div
                  className={`bg-gray-800/80 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-2xl 
              hover:shadow-blue-500/30 transform hover:-translate-y-2 transition-all duration-300 
              w-full md:w-5/12 ${isLeft ? "md:mr-8" : "md:ml-8"}`}
                >

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-gray-400 text-lg mb-4">
                    {exp.company} — {exp.duration}
                  </p>

                  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-700/70 backdrop-blur-sm rounded-md text-blue-300 text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Certificate Button */}
                  <div>
                    <a
                      href={exp.certificate.file}
                      onClick={(e) => handleCertificateClick(e, idx, exp.certificate.file)}
                      className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-sky-400 text-black font-semibold text-sm px-4 py-2 rounded-lg shadow-md transition-transform duration-300 ${clickedIdx === idx ? "transform scale-95" : "transform scale-100"
                        }`}
                    >
                      <FaExternalLinkAlt className="text-sm" /> {exp.certificate.label}
                    </a>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;



