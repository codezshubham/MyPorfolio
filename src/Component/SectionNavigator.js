import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "technology", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "leetcode", label: "LeetCode" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function SectionNavigator() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (location.pathname !== "/") return undefined;

    const elements = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -50%", threshold: [0.1, 0.35, 0.7] }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname]);

  if (location.pathname !== "/") return null;

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="section-navigator" aria-label="Portfolio sections">
      <span className="section-navigator-line" aria-hidden="true" />
      {sections.map((section, index) => (
        <button
          key={section.id}
          type="button"
          className={`section-navigator-item ${activeSection === section.id ? "is-active" : ""}`}
          onClick={() => scrollToSection(section.id)}
          aria-label={`Go to ${section.label}`}
          aria-current={activeSection === section.id ? "location" : undefined}
        >
          <span className="section-navigator-label">{section.label}</span>
          <span className="section-navigator-dot">{String(index + 1).padStart(2, "0")}</span>
        </button>
      ))}
    </nav>
  );
}
