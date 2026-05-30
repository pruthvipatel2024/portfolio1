import React, { Suspense, lazy, useState } from 'react';
import { LazyMotion, domAnimation, AnimatePresence, m } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import MouseFollower from './components/MouseFollower';
import SkeletonLoader from './components/SkeletonLoader';
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
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LazyMotion features={domAnimation} strict>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <m.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              y: -80,
              filter: 'blur(10px)',
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
            }}
            className="fixed inset-0 z-50 bg-[#020617]"
          >
            <SkeletonLoader onComplete={() => setIsLoading(false)} />
          </m.div>
        ) : (
          <m.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen text-slate-100 selection:bg-primary/30 selection:text-white overflow-x-hidden"
          >
            {/* Deep Space Background Overlay */}
            <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
            
            <MouseFollower />
            <Navbar />
            
            <m.main
              initial={{ opacity: 0, filter: 'blur(8px)', y: 40 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Critical Path Sections - Loaded Instantly */}
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Achievements />
              
              <Suspense fallback={<SectionLoading />}>
                <Contact />
              </Suspense>
            </m.main>
            
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
            
            <SpeedInsights />
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};

export default App;
