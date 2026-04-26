import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseFollower from './components/MouseFollower';

const App = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <MouseFollower />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
