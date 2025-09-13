import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-300 py-20 px-6 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          About <span className="bg-gradient-to-r from-red-400 to-pink-600 bg-clip-text text-transparent">Me</span>
        </h2>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-300">
              I’m{" "}
              <span className="font-bold text-red-400">Shubham Kumar</span>, an
              aspiring{" "}
              <span className="font-bold text-white">Full-Stack Developer</span>{" "}
              currently pursuing my B.Tech in Computer Science & Engineering
              from BPMCE Madhepura.
            </p>
            <p className="text-lg leading-relaxed text-gray-400">
              I have hands-on experience in developing projects using{" "}
              <span className="font-semibold text-red-300">
                Java, JavaScript, Spring Boot, React, Next.js
              </span>
              , and other modern frameworks. My strength lies in problem-solving,
              designing scalable architectures, and building robust APIs.
            </p>
            <ul className="space-y-3 text-lg text-gray-300">
              <li>📚 Strong in Data Structures & Algorithms.</li>
              <li>💻 Built MERN & Java/Spring Boot projects.</li>
              <li>☁️ Passionate about cloud technologies & deployment.</li>
              <li>🎯 Goal: Build impactful apps & contribute to open source.</li>
            </ul>
          </div>

          {/* Right Column - Info Cards */}
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                title: "Education",
                highlight: "B.Tech CSE @ BPMCE Madhepura",
                desc: "Expected 2026",
              },
              {
                title: "Experience",
                highlight: "Backend 60% | Frontend 40%",
                desc: "Hackathons & projects",
              },
              {
                title: "Skills",
                highlight: "Java, Spring Boot, React, Next.js",
                desc: "REST APIs, Git, MySQL",
              },
              {
                title: "Goals",
                highlight: "Cloud Dev + Gen AI",
                desc: "Continuous learning 🚀",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gray-800/70 border border-gray-700 backdrop-blur-sm shadow-md hover:shadow-xl hover:border-red-400 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-red-400">
                  {card.title}
                </h3>
                <p className="text-gray-200 font-medium">{card.highlight}</p>
                <p className="text-sm text-gray-400 mt-1">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-red-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default AboutMe;
