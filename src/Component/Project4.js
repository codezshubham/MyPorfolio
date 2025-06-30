import { useState } from "react";
import resumeRenderImg from "../Assest/Screenshot 2025-06-30 185058.png";

const ResumeRenderProject = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleVisitClick = (e) => {
    e.preventDefault();
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      window.open("https://resumerender.com", "_blank");
    }, 200);
  };

  return (
    <section className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-md relative">
          {/* Project Image */}
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
            <img
              src={resumeRenderImg}
              alt="ResumeRender Screenshot"
              className="rounded-md w-full md:w-80 h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Project Details */}
          <div className="text-left">
            <h3 className="text-2xl font-bold text-white mb-2">ResumeRender – ATS-Friendly Resume Builder</h3>

            <div className="flex flex-row absolute top-0 right-0">
              <span className="ml-3 text-xs lg:text-sm font-bold px-1 rounded-full bg-green-500 text-black animate-pulse">
                Live
              </span>
            </div>

            <ul className="list-disc ml-5 space-y-2 mb-4 text-sm">
              <li>
                Built a full-featured resume builder with customizable templates, live preview, and PDF export.
              </li>
              <li>
                Supported A4-sized printable resume rendering with modern, ATS-compliant layouts.
              </li>
              <li>
                Implemented multi-template support, color themes, and section toggling using React and Zustand.
              </li>
            </ul>

            {/* Technologies Used */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4 text-sm">
              {[
                "Next.js",
                "React",
                "Tailwind CSS",
                "Zustand",
                "TipTap",
                "html2pdf",
                "Shadcn/UI",
              ].map((tech, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className="text-red-400">✅</span>
                  <span className="text-red-400">{tech}</span>
                </div>
              ))}
            </div>

            {/* Live Button */}
            <a
              href="https://resumerender.com"
              onClick={handleVisitClick}
              className={`inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-bold hover:bg-gradient-to-l transition-all duration-300 px-4 py-2 rounded-md ${
                isClicked ? 'transform scale-95' : 'transform scale-100'
              }`}
            >
              ResumeRender.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeRenderProject;
