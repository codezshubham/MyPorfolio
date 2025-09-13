import React from 'react';

import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Technology from './Component/Technology';
import './App.css';
import Experience from './Component/Experience';
import CoursesCarousel from './Component/Courses';
import CodingProfiles from './Component/CodingProfile';
import Projects from './Component/Projects';
import Education from './Component/Education';

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 flex flex-col justify-center ">
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
            <section id="coding">
              <CodingProfiles />
            </section>
            
            <section id="projects">
              <Projects/>
            </section>

            <section id="certifications">
              <CoursesCarousel />
            </section>

            <section id="contact">
              <Contact />
            </section>
      </div>
    </>
  );
}

export default App;
