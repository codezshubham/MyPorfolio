import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiBriefcase, FiCode, FiMapPin } from "react-icons/fi";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { useTypewriter } from "react-simple-typewriter";
import image from "../Assest/ProfilePic.png";

const rotatingRoles = [
  "Problem Solver",
  "Aspiring full-stack developer",
  "Java and Spring Boot builder",
  "Microservices enthusiast",
  "Generative AI explorer",
];

const HeroAboutSection = () => {
  const [role] = useTypewriter({
    words: rotatingRoles,
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 45,
    delaySpeed: 1800,
  });

  return (
    <section className="site-hero home-hero section-surface relative overflow-hidden bg-black px-6 py-20 text-white md:py-28">
        <div className="home-hero-layout relative mx-auto w-full max-w-6xl">
      <div className="home-hero-copy">
        <p className="home-hero-kicker">
          <span className="availability-indicator" aria-hidden="true" />
          Available for new opportunities
        </p>
        <h1>
          Hi, I&apos;m <span className="hero-highlight">Shubham</span>
          </h1>
        <p className="home-hero-role" aria-live="polite">
          {role}<span className="home-hero-role-cursor" aria-hidden="true">|</span>
        </p>
        <p className="home-hero-description">
          I build reliable Java and Spring Boot services, explore microservices architecture, and turn practical ideas into useful products with React and generative AI.
        </p>

        <div className="home-hero-stats" aria-label="Portfolio highlights">
          <div><FiBriefcase aria-hidden="true" /><span>7+ Projects shipped</span></div>
          <div><FiCode aria-hidden="true" /><span>Grind LeetCode</span></div>
          <div><FiMapPin aria-hidden="true" /><span>Bengaluru, Karnataka, India</span></div>
        </div>

        <div className="home-hero-actions">
          <Link to="/#projects" className="home-hero-primary-action">
            View my work <FiArrowUpRight aria-hidden="true" />
          </Link>
          <a
            href="https://drive.google.com/file/d/1wdZKCimD-SPlPp31IpbctlagpLnQbp7y/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="home-hero-secondary-action"
          >
            <HiDocumentArrowDown size={20} aria-hidden="true" /> Resume
          </a>
        </div>

      </div>

      <div className="home-hero-visual">
        <div className="relative aspect-square w-full max-w-[24rem] overflow-hidden rounded-full border-4 border-[var(--accent)] bg-[var(--paper-deep)] p-2 shadow-[0.75rem_0.75rem_0_var(--accent)] transition duration-300 hover:-translate-x-1 hover:-translate-y-1">
          <img src={image} alt="Shubham Kumar" className="home-hero-image block h-full w-full rounded-full object-cover transition duration-300 hover:scale-[1.02]" />
        </div>
      </div>
    </div>
    </section>
  );
};

export default HeroAboutSection;
