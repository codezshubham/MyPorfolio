import React, { useState } from "react";
import { FaExternalLinkAlt } from 'react-icons/fa';
const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Salesforce",
    duration: "Dec 2023 to Jan 2024",
    description: [
      "Built a centralized platform to manage domain credentials, access, and renewal charges using React and Tailwind CSS.",
      "Implemented JWT-based login, role access control, and encrypted MySQL storage with Spring Boot.",
      "Automated email reminders for renewals using Java and Spring Scheduler."
    ],
    skills: [
      "React",
      "Tailwind CSS",
      "Spring Boot",
      "JWT Auth",
      "MySQL",
      "Java",
      "Spring Scheduler"
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
      "Developed an interactive PDF Question & Answer chatbot using Groq LLM, LangChain, and Streamlit.",
      "Enabled users to upload PDF documents and ask questions in natural language, returning accurate answers via Retrieval-Augmented Generation (RAG).",
      "Implemented session-based conversational memory to support follow-up questions and multi-turn context."
    ],
    skills: [
      "Groq LLM",
      "LangChain",
      "Streamlit",
      "Retrieval-Augmented Generation (RAG)",
      "Conversational Memory",
      "Vector Search",
      "PDF Processing",
      "Python"
    ],
    certificate: {
      label: "View Certificate",
      file: "/AagaazCertificate.pdf"
    }
  },
  {
    title: "Web Dev Lead",
    company: "Google Developer Groups (GDG)",
    duration: "Sep 2025 - May 2026",
    description: [
      "Led and coordinated the Web Development team, planning learning tracks and weekly goals.",
      "Organized hands-on workshops/sessions on frontend fundamentals and modern React development.",
      "Mentored members through mini-projects, reviewed code, and helped standardize best practices for team projects."
    ],
    skills: [
      "Leadership",
      "Community Building",
      "Workshop Facilitation",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Team Collaboration",
      "Project Planning"
    ]
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
      className="section-surface experience-section relative bg-black text-white py-24 px-6 overflow-hidden"
    >
      <div className="relative container mx-auto max-w-6xl">
        <div className="experience-heading-row">
          <div>
            <h2 className="section-heading text-4xl md:text-6xl font-extrabold"><span className="section-heading-highlight">Experience</span></h2>
          </div>
          <p className="experience-summary">Roles, collaborations, and the work behind the projects.</p>
        </div>

        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <details className="experience-entry" key={exp.title}>
              <summary className="experience-entry-summary">
                <span className="experience-number">0{idx + 1}</span>
                <span className="experience-duration">{exp.duration}</span>
                <span className="experience-entry-heading">
                  <span className="experience-entry-title">{exp.title}</span>
                  <span className="experience-company">{exp.company}</span>
                </span>
              </summary>
              <div className="experience-entry-details">
                <ul className="experience-description">
                  {exp.description.map((desc) => <li key={desc}>{desc}</li>)}
                </ul>
                <div className="experience-footer">
                  <div className="experience-skills">
                    {exp.skills.map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                  {exp.certificate && (
                    <a
                      href={exp.certificate.file}
                      onClick={(e) => handleCertificateClick(e, idx, exp.certificate.file)}
                      className={`experience-certificate ${clickedIdx === idx ? "is-clicked" : ""}`}
                    >
                      <FaExternalLinkAlt /> {exp.certificate.label}
                    </a>
                  )}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;



