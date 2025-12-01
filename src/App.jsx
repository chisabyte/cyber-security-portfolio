import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import Analytics from './components/Analytics';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import LabsAndChallenges from './components/LabsAndChallenges';
import CurrentlyLearning from './components/CurrentlyLearning';
import GovernanceRiskCompliance from './components/GovernanceRiskCompliance';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Analytics />
        <div className="App">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <LabsAndChallenges />
        <CurrentlyLearning />
        <GovernanceRiskCompliance />
        <Blog />
        <Contact />
        <Footer />
      </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;

