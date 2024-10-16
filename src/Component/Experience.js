import React, { useState } from 'react';

const Experience = () => {
  const [isCertificateClicked, setIsCertificateClicked] = useState(false);

  const handleCertificateClick = (e) => {
    e.preventDefault();
    setIsCertificateClicked(true);
    setTimeout(() => {
      setIsCertificateClicked(false);
      // Open certificate PDF in a new tab
      window.open('/SalesforceCertificate.pdf', '_blank');
    }, 200); // Delay for animation
  };

  return (
    <section id="experience" className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-8 text-start">Experience</h2>
        <div className="space-y-6">
          
          {/* Internship Experience */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Salesforce Developer Intern</h3>
            <p className="text-lg text-gray-400 mb-4">Salesforce - Jan 2023 to Feb 2023</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Developed custom applications using Salesforce Lightning, Apex, and Visualforce, and integrated third-party APIs to extend platform functionality.</li>
              <li>Automated business workflows and optimized data integrity through Apex Triggers, Validation Rules, and SOQL queries, enhancing business process efficiency.</li>
              <li>Collaborated with cross-functional teams to implement new CRM features, troubleshoot production issues, and improve data analysis with Reports and Dashboards.</li>
            </ul>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 text-sm mt-4">
              <div className="flex items-center space-x-2">
                <span className="text-red-400">✅</span>
                <span className="text-red-400">Salesforce Lightning</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-400">✅</span>
                <span className="text-red-400">Apex</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-400">✅</span>
                <span className="text-red-400">Visualforce</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-400">✅</span>
                <span className="text-red-400">SOQL</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-400">✅</span>
                <span className="text-red-400">JavaScript</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-400">✅</span>
                <span className="text-red-400">HTML/CSS</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-400">✅</span>
                <span className="text-red-400">REST API</span>
              </div>
            </div>


            {/* Certificate Link with Click Animation */}
            <div className="mt-4">
              <a 
                href="/SalesforceCertificate.pdf" 
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
      </div>
    </section>
  );
};

export default Experience;
