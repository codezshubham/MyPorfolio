import { useState } from 'react';
import youtubeCloneImg from '../Assest/Screenshot 2025-05-19 164928.png'; // Update path to your YouTube clone screenshot

const YouTubeCloneProject = () => {
  const [isLinkClicked, setIsLinkClicked] = useState(false);

  const handleLinkClick = (e) => {
    e.preventDefault();
    setIsLinkClicked(true);
    setTimeout(() => {
      setIsLinkClicked(false);
      window.open('https://youtube-clone-lac-beta.vercel.app/', '_blank'); // Replace with your actual URL
    }, 200);
  };

  return (
    <section className="bg-gray-900 text-gray-300 my-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-md relative">

          {/* Project Image */}
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
            <img
              src={youtubeCloneImg}
              alt="YouTube Clone Screenshot"
              className="rounded-md w-full md:w-80 h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Project Details */}
          <div className="text-left">
            <h3 className="text-2xl font-bold text-white mb-2">YouTube Clone</h3>

            {/* Status Badge */}
            <div className="flex flex-row absolute top-0 right-0">
              <span className="ml-3 text-xs lg:text-sm font-bold px-1 rounded-full bg-red-500 text-black animate-pulse transition duration-0">
                Completed
              </span>
            </div>

            {/* Description */}
            <ul className="list-disc ml-5 space-y-2 mb-4">
              <li>Developed a fully functional YouTube clone featuring playback, recommendations, and user authentication using JavaScript and React.</li>
              <li>Integrated YouTube Data API for fetching video data and implemented responsive UI with Tailwind CSS for an immersive user experience.</li>
            </ul>

            {/* Technologies Used */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4 text-sm">
              {['HTML', 'CSS', 'React', 'Tailwind CSS', 'YouTube Data API', 'JavaScript', 'React Router'].map((tech, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-green-400">✅</span>
                  <span className="text-red-400">{tech}</span>
                </div>
              ))}
            </div>

            {/* Project Link */}
            <a
              href="https://youtube-clone-lac-beta.vercel.app/"
              onClick={handleLinkClick}
              className={`inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-bold px-4 py-2 rounded-md transition-transform duration-300 ${isLinkClicked ? 'scale-95' : 'scale-100'}`}
            >
              YouTubeClone.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeCloneProject;
