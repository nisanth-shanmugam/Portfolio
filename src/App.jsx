import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';

export default function App() {
  const [activeNav, setActiveNav] = useState('Home');

  return (
    <div className="app">
      <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />
      <main className="main">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
