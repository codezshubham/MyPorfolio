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
import Project1 from './Component/Project1';
import Project2 from './Component/Project2';
import Project3 from './Component/Project3';

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
              <Project1/>
              <Project />
              <Project2/>
              <Project3/>
            </section>

            <section id="contact">
              <Contact />
            </section>
      </div>
    </>
  );
}

export default App;
