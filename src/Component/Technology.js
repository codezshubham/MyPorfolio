import React from "react";
import { FaJava } from "react-icons/fa";
import {
  SiAmazonec2,
  SiAmazons3,
  SiAmazonrds,
  SiAwslambda,
  SiApachemaven,
  SiCss3,
  SiGit,
  SiGithub,
  SiGrafana,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiApachekafka,
  SiDocker,
  SiKubernetes,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiRedis,
  SiRedux,
  SiSpringboot,
  SiTailwindcss,
  SiVisualstudiocode,
} from "react-icons/si";

// Skill data with categories
const skills = [
  {
    category: "Programming Language",
    items: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    category: "Frontend Technologies",
    items: [
      { name: "ReactJS", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Redux Toolkit", icon: SiRedux },
    ],
  },
  {
    category: "Backend Technologies",
    items: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    category: "Development Tools",
    items: [
      { name: "VS Code", icon: SiVisualstudiocode },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Maven", icon: SiApachemaven },
    ],
  },
  {
    category: "Microservices",
    items: [
      { name: "Redis", icon: SiRedis },
      { name: "Kafka", icon: SiApachekafka },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Grafana", icon: SiGrafana },
    ],
  },
  {
    category: "AWS Cloud Services",
    items: [
      { name: "EC2", icon: SiAmazonec2 },
      { name: "S3", icon: SiAmazons3 },
      { name: "Lambda", icon: SiAwslambda },
      { name: "RDS", icon: SiAmazonrds },
    ],
  },
];

const Technology = () => {
  return (
    <section className="section-surface technology-section relative bg-black py-24 px-6 overflow-hidden" id="skills">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="technology-heading-row">
          <div>
            <h2 className="section-heading text-3xl md:text-5xl font-extrabold">
          Technical <span className="section-heading-highlight">Skills</span>
            </h2>
          </div>

        </div>

        <div className="technology-list">
          {skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="technology-group"
            >
              <div className="technology-group-index">0{idx + 1}</div>
              <div className="technology-group-content">
                <h3>{skillGroup.category}</h3>
              </div>
              <div className="technology-icon-grid">
                {skillGroup.items.map(({ name, icon: Icon }) => (
                  <div className="technology-icon-item" key={name} data-skill={name} aria-label={name} tabIndex="0">
                    <Icon aria-hidden="true" className="technology-icon" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
