import React, { useState } from 'react';

const FullStackExperience = () => {
  const [isCertificateClicked, setIsCertificateClicked] = useState(false);

  const handleCertificateClick = (e) => {
    e.preventDefault();
    setIsCertificateClicked(true);
    setTimeout(() => {
      setIsCertificateClicked(false);
      // Replace with your actual PDF path if available
      window.open('/AagaazCertificate.pdf', '_blank');
    }, 200);
  };

  return (
    <section className="bg-gray-900 text-white pt-2 pb-6 px-4">
      <div className="container mx-auto">
        {/* Full Stack Developer Intern */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Full Stack Developer Intern</h3>
          <p className="text-lg text-gray-400 mb-4">
            Aagaaz Training Centre, Patna — Jun 2025
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>
              Built a centralized platform to manage domain credentials, access, and renewal charges using React and Tailwind CSS.
            </li>
            <li>
              Implemented JWT-based login, role access control, and encrypted MySQL storage with Spring Boot.
            </li>
            <li>
              Automated email reminders for renewals using Java and Spring Scheduler.
            </li>
          </ul>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 text-sm mt-4">
            {[
              'React',
              'Tailwind CSS',
              'JWT Auth',
              'Spring Boot',
              'MySQL',
              'Java',
              'Spring Scheduler',
              'REST API',
            ].map((skill) => (
              <div key={skill} className="flex items-center space-x-2">
                <span className="text-red-400">✅</span>
                <span className="text-red-400">{skill}</span>
              </div>
            ))}
          </div>

          {/* Optional Certificate Button */}
          <div className="mt-4">
            <a
              href="/AagaazCertificate.pdf"
              onClick={handleCertificateClick}
              className={`inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-bold hover:bg-gradient-to-l transition-all duration-300 py-2 px-4 rounded-full ${
                isCertificateClicked ? 'transform scale-95' : 'transform scale-100'
              }`}
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullStackExperience;
