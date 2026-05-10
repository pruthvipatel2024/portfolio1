import React, { Suspense, lazy } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import MouseFollower from './components/MouseFollower';
import { SpeedInsights } from "@vercel/speed-insights/react";

// Only lazy load the bottom-most sections for extreme balance
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const SectionLoading = () => (
  <div className="h-[40vh] w-full flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);

const App = () => {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="min-h-screen text-slate-100 selection:bg-primary/30 selection:text-white overflow-x-hidden">
        {/* Deep Space Background Overlay */}
        <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        
        <MouseFollower />
        <Navbar />
        
        <main>
          {/* Critical Path Sections - Loaded Instantly */}
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          
          <Suspense fallback={<SectionLoading />}>
            <Contact />
          </Suspense>
        </main>
        
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        
        <SpeedInsights />
      </div>
    </LazyMotion>
  );
};

export default App;
