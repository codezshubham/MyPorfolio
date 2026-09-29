import React from 'react';
import {
  FaArrowRight,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaExternalLinkAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiRedux,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import { Link } from 'react-router-dom';
// Import all project images
import dashhostImg from '../Assest/DashHost.png';
import resumeRenderImg from '../Assest/ResumeRender.png';
import AcadElevateImg from '../Assest/AcadElevate.png';
import lan2sqlImg from '../Assest/Lang2SQL.png';
import healthChainImg from '../Assest/HealthChain.png';
import RojgarSyncImg from '../Assest/RojgarSync.png';
import rateLimiterImg from '../Assest/RateLimiter.png';

// Project data
export const projects = [
  {
    title: "Distributed Rate Limiter",
    image: rateLimiterImg,
    status: "Completed",
    statusColor: "bg-red-500",
    urlLabel: "GitHub source code",
    github: "https://github.com/codezshubham/Distributed-Rate-Limiter",
    description: [
      "A distributed API rate-limiting system built with Spring Boot to protect backend services from excessive traffic.",
      "Uses configurable token-bucket and sliding-window algorithms with Redis-backed atomic state management."
    ],
    summary: "A Spring Boot rate-limiting layer with configurable algorithms, distributed Redis state, database-backed rules, and operational monitoring.",
    timeline: "Personal Project",
    role: "Backend Developer & System Designer",
    team: "Solo",
    architecture: [
      { title: "Request interception layer", description: "RateLimiterFilter identifies the client, resolves the applicable rule, runs the algorithm, and either forwards the request or returns 429 Too Many Requests." },
      { title: "Configurable algorithms", description: "Token Bucket supports controlled bursts, while Sliding Window enforces rolling request limits for sensitive endpoints." },
      { title: "Redis-backed distributed state", description: "Atomic Redis Lua operations handle token-bucket refill and consumption without race conditions across application instances." },
      { title: "Database-driven rules", description: "PostgreSQL stores production rate-limit rules, with H2 available for lightweight local development." },
      { title: "Failure strategy and headers", description: "Non-sensitive endpoints fail open and sensitive endpoints fail closed when Redis is unavailable; responses expose remaining, reset, and Retry-After metadata." },
      { title: "Observability and load testing", description: "Actuator, Prometheus, Grafana, Docker Compose, Postman, and k6 provide operational visibility and reproducible validation." },
    ],
    challenges: ["Maintaining consistent shared state across instances", "Implementing atomic token-bucket Lua operations", "Supporting multiple algorithms behind one pipeline", "Handling Redis failures by endpoint sensitivity", "Identifying clients through forwarded IPs", "Observing behavior under load", "Providing useful rate-limit metadata"],
    outcomes: ["Token-bucket and sliding-window protection", "Distributed Redis operations using Lua", "Configurable fail-open and fail-closed behavior", "PostgreSQL/H2 rule configuration", "Prometheus and Grafana monitoring", "Docker Compose environment", "Postman and k6 validation flows", "429, Retry-After, and rate-limit headers"],
    outcome: "A configurable and observable distributed service for protecting APIs from excessive traffic.",
    tech: ["Java", "Spring Boot", "Spring Web", "Redis", "Redis Lua Scripts", "PostgreSQL", "H2", "Prometheus", "Grafana", "JUnit", "Postman", "k6", "Docker", "Docker Compose", "Maven"]
  },
  {
    title: "ResumeRender",
    image: resumeRenderImg,
    status: "Deployed",
    statusColor: "bg-green-500",
    url: "https://resumerender.vercel.app",
    urlLabel: "resumerender.vercel.app",
    github: "https://github.com/codezshubham/ResumeRender",
    description: [
      "A free, browser-based resume builder for creating professional, ATS-friendly resumes with customizable templates, live preview, and PDF export.",
      "Includes an integrated ATS score checker for job-description matching."
    ],
    summary: "A no-signup resume builder with live editing, ATS-friendly templates, client-side PDF export, and job-description analysis.",
    timeline: "Personal Project",
    role: "Full Stack Developer — Frontend, State Management & PDF/ATS Features",
    team: "Solo",
    architecture: [
      { title: "Next.js application architecture", description: "Dedicated routes cover resume creation, templates, preview, ATS analysis, about, and contact while reusable components separate forms, previews, ATS functionality, and common UI." },
      { title: "Resume builder and templates", description: "Guided forms collect personal information, education, experience, skills, and other details across multiple ATS-friendly templates with customizable sections, typography, and colors." },
      { title: "Centralized state management", description: "Zustand synchronizes resume data and application state across the builder and preview without requiring a backend database." },
      { title: "Real-time resume preview", description: "Editor changes immediately flow into reusable preview components that keep resume rendering separate from input forms." },
      { title: "Client-side PDF generation", description: "react-to-print and html2pdf.js export consistent A4-oriented documents directly in the browser without an account or PDF service." },
      { title: "ATS score checker", description: "PDF.js extracts text from uploaded resumes, then keyword analysis compares it with a job description to provide matching insights." },
      { title: "Privacy-friendly workflow", description: "Client-side editing and preview let users start building immediately without authentication or account creation." },
      { title: "Modular component structure", description: "Routes, components, hooks, utilities, state, types, and static data are separated to support future templates and ATS features." },
    ],
    challenges: ["Synchronizing form editing with the live preview", "Keeping reusable templates ATS-friendly", "Generating consistent PDFs from dynamic React components", "Extracting usable text from uploaded PDFs", "Performing job-description keyword analysis without authentication", "Managing complex state across editor sections and previews"],
    outcomes: ["A complete browser-based resume workflow", "Reusable customizable templates with live preview", "Client-side PDF rendering and printing", "An ATS score checker", "A modular Next.js architecture", "A no-signup resume-building experience"],
    outcome: "A private, accessible resume workflow that turns structured input into polished, exportable documents and ATS insights.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Tiptap", "Framer Motion", "Lucide React", "Zustand", "react-to-print", "html2pdf.js", "PDF.js", "Natural Language Processing", "DOMPurify", "Compromise", "Stemmer", "React Toastify", "Vercel"]
  },
  {
    title: "Job Post Platform",
    image: RojgarSyncImg,
    status: "Deployed",
    statusColor: "bg-green-500",
    url: "https://job-board-ivory-beta.vercel.app/",
    urlLabel: "job-board-ivory-beta.vercel.app",
    github: "https://github.com/codezshubham/job-board",
    description: [
      "A modern job-posting web application designed for discovering and presenting job opportunities through a clean, responsive interface.",
      "Built with a component-driven Next.js architecture using the App Router, TypeScript, Tailwind CSS, and shadcn/ui."
    ],
    summary: "A modern job-posting frontend for discovering and presenting opportunities through a clean, responsive, component-driven interface.",
    timeline: "Personal Project",
    role: "Frontend Developer",
    team: "Solo",
    architecture: [
      { title: "Next.js App Router", description: "Organizes the application around modern file-based routing and server/client component patterns." },
      { title: "Component-driven UI", description: "Reusable interface components and customizable shadcn/ui primitives keep the experience modular and maintainable." },
      { title: "Type-safe development", description: "TypeScript provides compile-time checking and clearer contracts as the application grows." },
      { title: "Responsive styling", description: "Tailwind CSS utility classes create layouts that adapt across different screen sizes." },
      { title: "Vercel deployment", description: "The application is configured for a straightforward production deployment workflow on Vercel." },
    ],
    challenges: ["Designing a clean job-posting interface for different screen sizes", "Structuring reusable components with the Next.js App Router", "Maintaining type safety across the frontend", "Creating a consistent Tailwind and shadcn/ui visual system", "Leaving room for future job-board functionality"],
    outcomes: ["A modern job-posting frontend", "A reusable component architecture", "Responsive Tailwind CSS interfaces", "A Next.js App Router foundation", "Public deployment on Vercel"],
    outcome: "A responsive, extensible foundation for discovering and presenting job opportunities.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vercel"]
  },
  {
    title: "Database AI Agent",
    image: lan2sqlImg,
    status: "Completed",
    statusColor: "bg-red-500",
    url: "https://database-agent-coral.vercel.app/",
    urlLabel: "database-agent-coral.vercel.app",
    github: "https://github.com/codezshubham/DatabaseAgentF",
    description: [
      "An AI-powered database assistant that converts natural-language questions into SQL queries and executes safe read-only queries against MySQL.",
      "Results are presented through an interactive interface with tables and charts."
    ],
    summary: "A full-stack database assistant that combines Gemini, schema-aware SQL generation, SELECT-only validation, MySQL execution, and result visualization.",
    timeline: "Sep 2025 – Oct 2025",
    role: "Full-Stack Developer & AI Integration",
    team: "Solo",
    architecture: [
      { title: "Natural language to SQL pipeline", description: "The backend gathers database schema context, sends a structured prompt to Gemini, and converts the generated response into an executable query." },
      { title: "Schema-aware prompting", description: "Table and column metadata gives the LLM the context needed to generate SQL that matches the actual database structure." },
      { title: "SQL safety validation", description: "A validation layer restricts generated statements to read-only SELECT queries and blocks INSERT, UPDATE, DELETE, and other modifying operations." },
      { title: "Express REST API", description: "The backend coordinates natural-language questions, LLM processing, SQL validation, database execution, and structured results." },
      { title: "MySQL integration", description: "Schema metadata supports query generation while validated SQL executes against the target database for live results." },
      { title: "Result visualization", description: "Returned data is rendered in structured tables and interactive charts for direct retrieval and exploratory analysis." },
      { title: "Full-stack separation", description: "The React frontend communicates with Express, which keeps Gemini integration and database credentials on the backend." },
    ],
    challenges: ["Translating ambiguous questions into schema-correct SQL", "Providing enough schema context without oversized prompts", "Preventing unauthorized database modifications", "Handling invalid generated SQL", "Connecting an LLM workflow with REST and MySQL", "Presenting results to technical and non-technical users", "Supporting tables and visualizations"],
    outcomes: ["A full-stack natural-language database app", "Google Gemini SQL generation", "Schema-aware prompting", "SELECT-only SQL validation", "MySQL execution through Express", "REST APIs across AI and database layers", "Interactive tables and charts", "Approximately 90% query translation accuracy", "Approximately 75% less manual SQL writing for supported queries"],
    outcome: "An approachable database assistant that shortens the path from a question to safe, inspectable data exploration.",
    tech: ["React", "JavaScript", "Node.js", "Express.js", "MySQL", "Google Gemini API", "REST APIs", "Interactive Tables", "Charts"]
  },
  {
    title: "AcadElevate",
    image: AcadElevateImg,
    status: "Completed",
    statusColor: "bg-red-500",
    url: "https://acad-elevate.vercel.app/",
    urlLabel: "acad-elevate.vercel.app",
    github: "https://github.com/codezshubham/AcadElevate",
    description: [
      "A full-stack academic management and faculty appraisal platform that centralizes research, projects, lectures, events, documents, and performance evaluation.",
      "Includes secure role-based dashboards and AI-assisted career recommendations."
    ],
    summary: "A full-stack faculty management platform with role-based dashboards, academic activity workflows, appraisal review, analytics, and career recommendations.",
    timeline: "Oct 2024 – Jan 2025",
    role: "Full-Stack Developer — Backend/API Integration & Application Development",
    team: "Solo",
    architecture: [
      { title: "Full-stack architecture", description: "A React frontend communicates with a Spring Boot REST API while the backend handles business logic, authorization, persistence, and API operations." },
      { title: "Role-based authentication", description: "JWT authentication protects separate ROLE_USER and ROLE_ADMIN workflows, with administrative APIs restricted to authorized users." },
      { title: "Faculty management dashboard", description: "Faculty maintain centralized records for research, projects, lectures, events, documents, and appraisal information." },
      { title: "Academic workflow APIs", description: "REST APIs support appraisals, publications, projects, events, lectures, RSVP, attendance, feedback, statistics, documents, and OTP password recovery." },
      { title: "AI-assisted recommendations", description: "Faculty can upload a resume and receive career recommendations covering potential paths, strengths, and areas for improvement." },
      { title: "Redux and analytics", description: "Redux Toolkit centralizes frontend state while Recharts presents activity statistics through dashboards." },
      { title: "Layered backend", description: "Controllers, DTOs, services, repositories, entities, configuration, and exception handling keep API concerns modular." },
    ],
    challenges: ["Unifying research, projects, events, lectures, documents, and appraisals", "Securing JWT authentication for faculty and administrators", "Structuring the layered Spring Boot backend", "Managing complex frontend dashboard state", "Supporting review, ratings, and peer feedback", "Integrating OTP password recovery", "Handling varied academic files through one API", "Adding AI recommendations to an existing workflow"],
    outcomes: ["A complete academic management platform", "JWT and role-based authorization", "REST APIs across academic workflows", "A digital appraisal workflow", "RSVP, attendance, feedback, and statistics", "AI-assisted career recommendations", "Centralized Redux state", "Recharts analytics dashboards", "Layered Spring Boot architecture"],
    outcome: "A structured academic platform that gives faculty and administrators one clearer view of activity and progress.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "Material UI", "Java", "Spring Boot", "Spring Security", "MySQL", "MariaDB", "JWT", "REST APIs", "Axios", "Recharts", "Maven", "Vercel"]
  },
  {
    title: "HealthChain",
    image: healthChainImg,
    status: "Completed",
    statusColor: "bg-red-500",
    urlLabel: "GitHub source code",
    github: "https://github.com/codezshubham/HealthChain",
    description: [
      "A blockchain-powered Electronic Health Record platform that gives patients control over medical data while enabling permission-based doctor access.",
      "The system also supports privacy-aware healthcare analytics for government authorities."
    ],
    summary: "A decentralized healthcare record platform combining role-based access, MongoDB workflows, Ethereum contracts, and IPFS storage.",
    timeline: "Personal / Academic Project",
    role: "Full-Stack Developer & Blockchain Developer",
    team: "Solo",
    architecture: [
      { title: "Full-stack and blockchain architecture", description: "Next.js, Express, MongoDB, Ethereum smart contracts, and IPFS separate conventional application data from blockchain-managed permissions and audit information." },
      { title: "Role-based healthcare access", description: "Patients, doctors, and government authorities receive separate capabilities for records, access, clinical workflows, and anonymized analytics." },
      { title: "Patient data ownership", description: "Patients cryptographically authorize selected doctors to access their information through a permission-based sharing model." },
      { title: "Blockchain access control", description: "AccessControl.sol and MedicalRecord.sol maintain tamper-resistant records of permissions and medical-record activity." },
      { title: "IPFS off-chain storage", description: "Medical documents remain in decentralized storage while the blockchain stores references and access-related information." },
      { title: "Conventional backend layer", description: "Express handles application operations, MongoDB persistence, controllers, routes, middleware, and JWT authentication." },
      { title: "Healthcare analytics", description: "Government users receive anonymized health statistics rather than direct personal medical information." },
      { title: "Modular project structure", description: "Client, server, blockchain, IPFS, and shared modules keep frontend, backend, contracts, storage utilities, and common types separate." },
    ],
    challenges: ["Combining web technologies with blockchain and decentralized storage", "Separating sensitive files from blockchain data", "Implementing permission-based patient and doctor access", "Designing access-control and medical-record contracts", "Coordinating frontend, API, database, IPFS, and Ethereum", "Supporting distinct patient, doctor, and government workflows", "Providing analytics while reducing PII exposure"],
    outcomes: ["A decentralized healthcare record platform", "Patient, doctor, and government workflows", "Ethereum access-control and audit operations", "IPFS off-chain healthcare storage", "JWT and MongoDB application data", "Patient-controlled doctor sharing", "Anonymized healthcare analytics", "Independent frontend, backend, blockchain, IPFS, and shared modules"],
    outcome: "A permission-based healthcare platform that gives patients more control while keeping record activity verifiable.",
    tech: ["Next.js", "React", "Tailwind CSS", "Recharts", "Lucide", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Ethereum", "Solidity", "Hardhat", "Ethers.js", "IPFS", "MetaMask", "Ethereum RPC"]
  },

  {
    title: "DashHost",
    image: dashhostImg,
    status: "Completed",
    statusColor: "bg-red-500",
    url: "https://dashhost.vercel.app/",
    urlLabel: "dashhost.vercel.app",
    github: "https://github.com/codezshubham/DashHost",
    description: [
      "A full-stack domain and hosting credential management platform that centralizes domain records, hosting credentials, renewal schedules, and automated reminders.",
      "The secure role-based dashboard connects a React frontend to a Spring Boot REST API."
    ],
    summary: "A secure role-based dashboard for managing domain and hosting records, credentials, renewals, and automated email reminders.",
    timeline: "Salesforce Internship Project / Personal Extension",
    role: "Full-Stack Developer",
    team: "Solo",
    architecture: [
      { title: "Full-stack dashboard architecture", description: "The React dashboard communicates with a Spring Boot REST API, whose services handle authentication, authorization, credentials, renewals, and scheduled notifications." },
      { title: "JWT authentication", description: "Authenticated requests carry a token that the backend validates before processing protected operations." },
      { title: "Role-based access control", description: "RBAC separates access according to user permissions for protected credential-management operations." },
      { title: "Domain and hosting management", description: "Users manage domain records, hosting details, credentials, and renewal information in one centralized application." },
      { title: "Secure credential storage", description: "Sensitive credentials are handled through controlled backend operations rather than exposed in frontend application logic." },
      { title: "Renewal tracking", description: "Renewal schedules associated with domains and hosting resources are stored for systematic monitoring." },
      { title: "Automated email reminders", description: "Spring Scheduler evaluates renewal information and triggers email notifications for upcoming expirations." },
      { title: "Database persistence", description: "MySQL stores user accounts, domain information, hosting records, credentials, and renewal data." },
    ],
    challenges: ["Securing sensitive domain and hosting credentials", "Implementing JWT and role-based authorization", "Keeping frontend state synchronized with REST APIs", "Connecting domains, hosting, credentials, and renewals", "Running scheduled renewal processing", "Sending reminders at the right time", "Separating authentication, business logic, persistence, and notifications"],
    outcomes: ["A full-stack domain and hosting platform", "JWT authentication and RBAC", "REST APIs for resource management", "Centralized credentials and renewal information", "Spring Scheduler renewal tracking", "Automated email notifications", "MySQL persistence", "Modular frontend and backend architecture"],
    outcome: "A centralized workspace for keeping hosting operations organized, secure, and easier to maintain.",
    tech: ["React", "JavaScript", "Java", "Spring Boot", "MySQL", "JWT", "Role-Based Access Control", "REST APIs", "Spring Scheduler", "Automated Email Notifications", "Maven"]
  },
];

export const slugify = (title) => title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

const techIcons = {
  "Next.js": SiNextdotjs,
  React: FaReact,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "shadcn/ui": FaCode,
  Vercel: SiVercel,
  Java: FaJava,
  "Spring Boot": SiSpringboot,
  "Spring Web": SiSpringboot,
  Redis: SiRedis,
  "Redis Lua Scripts": FaCode,
  PostgreSQL: SiPostgresql,
  H2: FaDatabase,
  Prometheus: FaCode,
  Grafana: FaCode,
  JUnit: FaCode,
  Postman: FaCode,
  k6: FaCode,
  Docker: FaDocker,
  "Docker Compose": FaDocker,
  Maven: FaCode,
  "Redux Toolkit": SiRedux,
  "Material UI": FaCode,
  MySQL: FaDatabase,
  MariaDB: FaDatabase,
  JWT: FaCode,
  "REST APIs": FaCode,
  Axios: FaCode,
  Recharts: FaCode,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  Mongoose: SiMongodb,
  "Ethereum": FaCode,
  Solidity: FaCode,
  Hardhat: FaCode,
  "Ethers.js": FaCode,
  IPFS: FaCode,
  MetaMask: FaCode,
  "Ethereum RPC": FaCode,
  JavaScript: FaJs,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  Python: FaPython,
  Tiptap: FaCode,
};

const TechIcon = ({ tech }) => {
  const Icon = techIcons[tech] || FaCode;
  return <Icon aria-hidden="true" focusable="false" />;
};

const Project = () => {
  return (
    <section id="projects" className="section-surface projects-section relative bg-black text-white py-24 px-6 overflow-hidden">
      <div className="relative container mx-auto max-w-6xl">
        <div className="projects-heading-row">
          <div>
            <h2 className="section-heading text-4xl md:text-6xl font-extrabold"><span className="section-heading-highlight">Projects</span></h2>
          </div>
          <p className="projects-summary">A selection of interfaces, systems, and experiments built from curiosity.</p>
        </div>

        <div className="projects-list">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="project-entry"
            >
              <div className="project-image-frame">
                <img src={proj.image} alt={proj.title} />
                <span className={`project-status ${proj.statusColor}`}>{proj.status}</span>
              </div>
              <div className="project-content">
                <div className="project-title-row">
                  <h3>{proj.title}</h3>
                  <div className="project-icon-links">
                    {proj.url && (
                      <a href={proj.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${proj.title} live demo`}>
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noopener noreferrer" aria-label={`Open ${proj.title} source code`}>
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
                <p className="project-description">{proj.description[0]}</p>

                <p className="project-tech-label">Tech Stack</p>
                <div className="project-card-footer">
                  <div className="project-tech project-card-tech" aria-label={`${proj.title} technologies`}>
                    {proj.tech.slice(0, 5).map((tech, i) => (
                      <span key={i} data-tech={tech} aria-label={tech} tabIndex="0">
                        <TechIcon tech={tech} />
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <Link
                      to={`/projects/${slugify(proj.title)}`}
                      className="project-details-link"
                    >
                      <span>View Details</span>
                      <FaArrowRight aria-hidden="true" focusable="false" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export function ProjectDetails({ project, isPage = false }) {
  const projectIndex = projects.findIndex((item) => item.title === project.title);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const content = (
    <article
      className={`project-details-modal ${isPage ? 'project-details-page' : ''}`}
      role={isPage ? undefined : 'dialog'}
      aria-modal={isPage ? undefined : 'true'}
      aria-labelledby="project-details-title"
    >
      {!isPage && (
        <Link to="/#projects" className="project-details-close" aria-label="Back to projects">
          &times;
        </Link>
      )}
      {isPage && (
        <Link to="/#projects" className="project-details-page-back">
          <span aria-hidden="true">&#8592;</span> Back to Projects
        </Link>
      )}
      <div className="project-details-hero project-details-hero-layout">
        <img src={project.image} alt={project.title} />
        <div className="project-details-hero-copy">
          <p className="project-type">Case study / {project.urlLabel}</p>
          <h2 id="project-details-title">{project.title}</h2>
          <p>{project.summary}</p>
          <div className="project-details-actions">
            {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-live-link"><FaExternalLinkAlt /> Live Demo</a>}
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-github-link"><FaGithub /> Source Code</a>}
          </div>
        </div>
      </div>

      <div className="project-details-meta">
        <div><span>Timeline</span><strong>{project.timeline}</strong></div>
        <div><span>Role</span><strong>{project.role}</strong></div>
        <div><span>Team</span><strong>{project.team}</strong></div>
        <div><span>Status</span><strong>{project.status}</strong></div>
      </div>

      <div className="project-details-body">
        <div>
          <p className="project-details-kicker">Architecture highlights</p>
          <div className="project-details-architecture">
            {project.architecture.map((section) => (
              <section key={section.title}>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </section>
            ))}
          </div>
        </div>
        <aside>
          <p className="project-details-kicker">Stack</p>
          <div className="project-tech">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
          <p className="project-details-kicker project-outcome-kicker">Key outcomes</p>
          <ul className="project-outcomes">
            {project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
          </ul>
        </aside>
      </div>

      <div className="project-details-challenges">
        <p className="project-details-kicker">Challenges</p>
        <div className="project-challenge-grid">
          {project.challenges.map((challenge) => <p key={challenge}>{challenge}</p>)}
        </div>
      </div>

      <div className="project-details-navigation">
        <Link to="/#projects" className="project-back-link">← Back to Projects</Link>
        <Link to={`/projects/${slugify(nextProject.title)}`} className="project-next-link">
          <span>Next Project</span>
          <strong>{nextProject.title}</strong>
        </Link>
      </div>
    </article>
  );

  if (isPage) {
    return (
      <section className="project-details-route">
        <div className="project-details-route-inner">{content}</div>
      </section>
    );
  }

  return (
    <div className="project-details-backdrop">
      <div onClick={(event) => event.stopPropagation()}>
        {content}
      </div>
    </div>
  );
}

export default Project;
