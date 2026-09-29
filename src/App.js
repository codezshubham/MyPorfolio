import React, { useEffect, useRef, useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import Navbar from './Component/Navbar';
import './App.css';
import ScrollToHashElement from './Component/ScrollToHashElement';
import LandingPage from './Pages/LandingPage';
import CodingProfilePage from './Pages/CodingProfilePage';
import ProjectDetailsPage from './Pages/ProjectDetailsPage';
import CertificationsPage from './Pages/CertificationsPage';
import PortfolioProgress from './Component/PortfolioProgress';
import SectionNavigator from './Component/SectionNavigator';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
  const [isCurtainTransitioning, setIsCurtainTransitioning] = useState(false);
  const curtainTimeout = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => () => window.clearTimeout(curtainTimeout.current), []);

  const toggleTheme = () => {
    window.clearTimeout(curtainTimeout.current);
    setIsCurtainTransitioning(false);
    requestAnimationFrame(() => setIsCurtainTransitioning(true));
    setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark');
    curtainTimeout.current = window.setTimeout(() => {
      setIsCurtainTransitioning(false);
    }, 700);
  };

  return (
    <div className={`site-shell theme-${theme} min-h-screen`}>
      <div
        className={`theme-curtain ${isCurtainTransitioning ? 'is-active' : ''} theme-curtain-${theme}`}
        aria-hidden="true"
      >
        <span className="theme-curtain-panel" />
      </div>
      <ScrollToHashElement />
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <PortfolioProgress />
      <SectionNavigator />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/codingProfile" element={<CodingProfilePage />} />
          <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
