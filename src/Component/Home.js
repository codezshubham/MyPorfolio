import React, { useState, useEffect, useRef } from "react";

const Home = () => {
  const fullText = "H i 👋, I am Shubham Kumar";
  const [typedText, setTypedText] = useState("");
  const [isContactClicked, setIsContactClicked] = useState(false);
  const [isResumeClicked, setIsResumeClicked] = useState(false);

  const indexRef = useRef(0);
  const fullTextRef = useRef(fullText); // Avoid reinitializing

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < fullTextRef.current.length) {
        setTypedText(
          (prev) => prev + fullTextRef.current.charAt(indexRef.current)
        );
        indexRef.current += 1;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleContactClick = () => {
    setIsContactClicked(true);
    setTimeout(() => setIsContactClicked(false), 200);
  };

  const handleResumeClick = (e) => {
    e.preventDefault();
    setIsResumeClicked(true);
    setTimeout(() => {
      setIsResumeClicked(false);
      window.open(
        "/Shubham_Kumar_Resume_Software_Engineer.pdf",
        "_blank",
        "noopener,noreferrer"
      );
    }, 400);
  };

  return (
    <div className="bg-gray-900 text-white flex items-center justify-center py-10 px-4">
      <div className="text-center space-y-4">
        <p className="text-3xl md:text-5xl md:mt-0 font-mono min-h-[1.5rem]">
          {typedText}
          <span className="animate-pulse">|</span>
        </p>
        <p className="text-red-500 text-xl font-semibold">
          Software Engineer / Full Stack Developer
        </p>
        <p className="text-gray-300 text-lg max-w-5xl mx-auto leading-relaxed">
          An Aspiring <span className="font-bold">Full-Stack developer</span>{" "}
          with hands-on experience building web applications and solving
          real-world problems. Passionate about{" "}
          <span className="font-bold">learning new tools and technologies</span>{" "}
          and eager to contribute to dynamic projects in the tech industry.
        </p>
        <p className="text-gray-400">
          Currently, I am working with{" "}
          <span className="font-bold">ReactJS</span> and
          <span className="font-bold"> Spring Boot (Java)</span> to build
          full-stack applications.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 py-7">
          <a
            href="mailto:kumarshubhamgupta478@gmail.com"
            className={`inline-block text-sm md:text-base px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-bold hover:bg-gradient-to-l transition-all duration-200 ${
              isContactClicked ? "transform scale-95" : "transform scale-100"
            }`}
            onClick={handleContactClick}
          >
            Contact Me
          </a>
          <a
            href="/Shubham_Kumar_Resume_Software_Engineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block text-sm md:text-base px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-bold hover:bg-gradient-to-l transition-all duration-200 ${
              isResumeClicked ? "transform scale-95" : "transform scale-100"
            }`}
            onClick={handleResumeClick}
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
