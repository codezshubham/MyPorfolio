import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Navbar from './Component/Navbar';
import './App.css';
import ScrollToHashElement from './Component/ScrollToHashElement';
import LandingPage from './Pages/LandingPage';
import CodingProfilePage from './Pages/CodingProfilePage';
import ProjectsPage from './Pages/ProjectsPage';
import CertificationsPage from './Pages/CertificationsPage';

function App() {
  return (
    <>
      <ScrollToHashElement />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/codingProfile" element={<CodingProfilePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
      </Routes>
    </>
  );
}

export default App;
