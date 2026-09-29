import React from 'react';

import Home from '../Component/Home';
import About from '../Component/About';
import Contact from '../Component/Contact';
import Technology from '../Component/Technology';
import Experience from '../Component/Experience';
import Education from '../Component/Education';
import CodingProfile from '../Component/CodingProfile';
import Projects from '../Component/Projects';

export default function LandingPage() {
  return (
    <div className="landing-page flex flex-col justify-center">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="technology">
        <Technology />
      </section>
      <section id="experience">
        <Experience />
      </section>

      <CodingProfile />
      <Projects />

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
