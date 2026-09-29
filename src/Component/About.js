import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="section-surface about-section relative bg-black text-gray-300 py-24 px-6 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="about-heading-row">
          <div>
            <h2 className="section-heading text-4xl md:text-6xl font-extrabold">A builder at <span className="section-heading-highlight">heart.</span></h2>
          </div>
          <span className="about-mark">SK<br />/ 26</span>
        </div>

        <div className="about-layout">
          <div className="about-copy">
            <p className="about-lead">
              I&apos;m <span className="about-highlight">Shubham Kumar</span>, an aspiring <strong>Java and Full-Stack Developer</strong> currently pursuing my B.Tech in Computer Science &amp; Engineering.
            </p>
            <p>
              I build backend systems with Java and Spring Boot, design REST APIs and microservices, and create interfaces with React. My strength lies in problem solving, scalable architecture, and exploring generative AI to turn complex ideas into useful products.
            </p>
            <ul className="about-principles">
              <li><span>01</span>Strong in Data Structures &amp; Algorithms.</li>
              <li><span>02</span>Built Java, Spring Boot, and microservices projects.</li>
              <li><span>03</span>Interested in generative AI and intelligent applications.</li>
              <li><span>04</span>Working toward scalable products and open source.</li>
            </ul>
          </div>

          <div className="about-index">
            {[
              {
                title: "Education",
                highlight: "B.Tech CSE @ BPMCE Madhepura",
                desc: "Expected 2026",
              },
              {
                title: "Experience",
                highlight: "Java Backend | Microservices",
                desc: "Hackathons & projects",
              },
              {
                title: "Skills",
                highlight: "Java, Spring Boot, Microservices",
                desc: "REST APIs, React, Git, MySQL",
              },
              {
                title: "Goals",
                highlight: "Cloud Dev + Generative AI",
                desc: "Continuous problem solving",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="about-index-item"
              >
                <span>{card.title}</span>
                <strong>{card.highlight}</strong>
                <small>{card.desc}</small>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutMe;
