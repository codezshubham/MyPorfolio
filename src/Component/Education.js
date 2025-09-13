import React from "react";

const education = [
    {
        title: "Secondary School",
        institute: "Sri H. K. Jain Gyan Asthali, Ara",
        duration: "2019 – 2020",
        description: [
            "Completed Class 10 with a good foundation in Science and Mathematics.",
            "Developed strong communication skills and actively participated in extracurricular activities."
        ],
        achievements: [
            "Scored 95% in BSEB Board Exams",
            "Secured 1st rank in district and 3rd rank in state."
        ]
    },
    {
        title: "Senior Secondary (Science)",
        institute: "Maharaja College, Ara",
        duration: "2020 – 2022",
        description: [
            "Focused on Physics, Chemistry, and Mathematics.",
            "Developed strong problem-solving and analytical thinking skills."
        ],
        achievements: [
            "Scored 88% in BSEB Board Exams",
            "Appeared for JEE Mains and JEE Advanced 2022"
        ]
    },
    {
        title: "Graduation (B.Tech – Computer Science)",
        institute: "B.P. Mandal College of Engineering, Madhepura",
        duration: "2022 – 2026",
        description: [
            "Pursuing Bachelor of Technology in Computer Science Engineering.",
            "Worked on multiple academic and personal projects including Faculty Appraisal System and Lan2SQL AI Agent."
        ],
        achievements: [
            "Participated in Smart India Hackathon 2024",
            "Specialization in Full-Stack Development and Gen AI Enthusiast"
        ]
    }
];

const Education = () => {
    return (
        <section
            id="education"
            className="relative bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white py-24 px-6 overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-0 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

            <div className="relative container mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center pb-16 
        bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-500 to-blue-600">
                    Education
                </h2>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full 
          bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

                    {education.map((edu, idx) => {
                        const isLeft = idx % 2 === 0;
                        return (
                            <div
                                key={edu.title}
                                className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-20 
                  ${isLeft ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 
                bg-blue-500 rounded-full border-2 border-gray-900 shadow-lg animate-pulse z-10"></div>

                                {/* Card */}
                                <div
                                    className={`bg-gray-800/80 backdrop-blur-md p-8 rounded-3xl shadow-lg 
                  hover:shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-2 
                  transition-all duration-300 w-full md:w-5/12 ${isLeft ? "md:mr-8" : "md:ml-8"}`}
                                >
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{edu.title}</h3>
                                    <p className="text-gray-400 text-lg mb-4">
                                        {edu.institute} — {edu.duration}
                                    </p>

                                    <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                                        {edu.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>

                                    {/* Achievements */}
                                    <div className="mb-2">
                                        <p className="text-blue-400 font-semibold mb-2">Achievements:</p>
                                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                                            {edu.achievements.map((ach, i) => (
                                                <li key={i}>{ach}</li>
                                            ))}
                                        </ul>
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

export default Education;
