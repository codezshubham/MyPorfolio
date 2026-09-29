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
            className="section-surface education-section relative bg-black py-24 px-6 overflow-hidden"
        >
            <div className="relative container mx-auto max-w-6xl">
                <div className="education-intro">
                    <h2 className="section-heading text-4xl md:text-6xl font-extrabold">
                        <span className="section-heading-highlight">Education</span>
                    </h2>
                    <p className="education-summary">A steady progression from strong fundamentals to building systems that solve real problems.</p>
                </div>

                <div className="education-list">
                    {education.map((edu, idx) => (
                        <details className="education-entry" key={edu.title}>
                            <summary className="education-entry-summary">
                                <span className="education-index">0{idx + 1}</span>
                                <span className="education-period">{edu.duration}</span>
                                <span className="education-entry-heading">
                                    <span className="education-entry-title">{edu.title}</span>
                                    <span className="education-institute">{edu.institute}</span>
                                </span>
                            </summary>
                            <div className="education-entry-details">
                                <ul className="education-description">
                                    {edu.description.map((desc) => <li key={desc}>{desc}</li>)}
                                </ul>
                                <div className="education-achievements">
                                    <span>Notable outcomes</span>
                                    <ul>
                                        {edu.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
