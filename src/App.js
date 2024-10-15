import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Project from './Component/Project';
import Contact from './Component/Contact';
import Technology from './Component/Technology';
import './App.css';
import Experience from './Component/Experience';
import CurrentProject from './Component/CurrentProject';

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 flex flex-col justify-center px-4">
            <section id="home">
              <Home />
            </section>

            <section id="technology" className="pt-8">
              <Technology />
            </section>

            <section id="about" className="my-6">
              <About />
            </section>

            <section id="experience">
              <Experience />
            </section>
          
            <section id="projects">
              <CurrentProject />
              <Project />
            </section>

            <section id="contact">
              <Contact />
            </section>
      </div>
    </>
  );
}

export default App;
