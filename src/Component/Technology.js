import React from "react";

// Skill data with categories
const skills = [
  {
    category: "Programming Languages",
    color: "from-blue-500 to-blue-700",
    items: [
      { name: "Java", level: "Academic", proficiency: 90 },
      { name: "Python", level: "Academic", proficiency: 75 },
      { name: "JavaScript", level: "Projects", proficiency: 80 },
    ],
  },
  {
    category: "Frontend Development",
    color: "from-pink-500 to-pink-700",
    items: [
      { name: "ReactJS", level: "Projects", proficiency: 85 },
      { name: "HTML5", level: "Academic", proficiency: 90 },
      { name: "CSS3", level: "Academic", proficiency: 75 },
    ],
  },
  {
    category: "Backend & Database",
    color: "from-green-500 to-green-700",
    items: [
      { name: "Node.js", level: "Projects", proficiency: 60 },
      { name: "Spring Boot", level: "Learning", proficiency: 80 },
      { name: "MongoDB", level: "Projects", proficiency: 65 },
      { name: "MySQL", level: "Academic", proficiency: 78 },
    ],
  },
  {
    category: "Development Tools",
    color: "from-purple-500 to-purple-700",
    items: [
      { name: "VS Code", level: "Daily Use", proficiency: 90 },
      { name: "Git", level: "Projects", proficiency: 83 },
      { name: "GitHub", level: "Projects", proficiency: 88 },
      { name: "Maven", level: "Learning", proficiency: 60 },
    ],
  },
  {
    category: "Frontend Frameworks",
    color: "from-yellow-500 to-yellow-600",
    items: [
      { name: "Tailwind CSS", level: "Projects", proficiency: 92 },
      { name: "Bootstrap", level: "Academic", proficiency: 85 },
      { name: "Redux Toolkit", level: "Projects", proficiency: 70 },
    ],
  },
  {
    category: "AWS Cloud Services",
    color: "from-orange-500 to-yellow-600",
    items: [
      { name: "EC2", level: "Projects", proficiency: 75 },
      { name: "S3", level: "Projects", proficiency: 80 },
      { name: "Lambda", level: "Learning", proficiency: 65 },
      { name: "RDS", level: "Academic", proficiency: 70 },
    ],
  },
];

const Technology = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-950 via-black to-gray-950 py-20 px-6 overflow-hidden" id="skills">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-6 
        bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive showcase of my technical expertise, proficiency levels, and hands-on
          experience across various technologies.
        </p>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl shadow-lg p-6 w-full md:w-[45%] lg:w-[30%] hover:-translate-y-2 transition-transform duration-300 hover:shadow-purple-500/20"
            >
              {/* Category Title */}
              <h3
                className={`text-lg font-semibold mb-4 text-white bg-gradient-to-r ${skillGroup.color} px-3 py-1 rounded-md inline-block`}
              >
                {skillGroup.category}
              </h3>

              {/* Skills List */}
              <div className="space-y-4">
                {skillGroup.items.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-400 text-xs">{skill.proficiency}% Proficiency</span>
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
