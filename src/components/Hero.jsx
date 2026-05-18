import React from 'react';
import { m, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ChevronRight, Terminal, Globe, Cpu, MousePointer2 } from 'lucide-react';

// Optimized particles with fixed positions to prevent layout thrashing
const particles = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  top: [15, 72, 38, 88, 25, 60][i],
  left: [10, 85, 45, 20, 70, 55][i],
  duration: [5, 7, 6, 8, 5.5, 9][i],
  delay: [0, 1.2, 2.5, 0.8, 3.1, 1.8][i],
  xOffset: [15, -20, 10, -15, 25, -10][i],
}));

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  };

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ['-10deg', '10deg']);
  const moveX = useTransform(smoothX, [-0.5, 0.5], ['-30px', '30px']);
  const moveY = useTransform(smoothY, [-0.5, 0.5], ['-30px', '30px']);

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Deep Space Background Orbs - Restored Richness */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/25 rounded-full blur-[140px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[140px] animate-pulse delay-700 pointer-events-none" />

      {/* Optimized Parallax Grid */}
      <m.div
        style={{ x: moveX, y: moveY, willChange: 'transform' }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 py-8 lg:py-0">

          {/* Text Column */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Premium Available Badge */}
              <m.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs font-bold tracking-widest text-primary mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                AVAILABLE FOR NEW PROJECTS
              </m.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-[1.2] md:leading-[1.1] lg:leading-[0.98] tracking-tight">
                Pruthvi Surati <br />
                <span className="text-gradient">Fullstack Developer</span>
              </h1>

              <p className="text-slate-300/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Hi, I'm <span className="text-white font-bold">Pruthvi Surati</span>. A passionate developer building <span className="text-white italic">immersive digital experiences</span> that bridge the gap between design and technology.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
                <m.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center justify-center gap-3 py-4 px-10"
                >
                  Explore Work <ChevronRight size={20} />
                </m.a>
                <m.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline flex items-center justify-center py-4 px-10"
                >
                  Get In Touch
                </m.a>
              </div>
            </m.div>
          </div>

          {/* 3D Visual Column - Restored Depth */}
          <div className="lg:w-2/5 flex justify-center mt-12 lg:mt-0">
            <m.div
              style={{ rotateX, rotateY, perspective: 1000, transformStyle: 'preserve-3d', willChange: 'transform' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20 group"
            >
              <div
                style={{ transform: 'translateZ(80px)' }}
                className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]"
              >
                {/* Visual Glow Layers */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full animate-pulse blur-3xl opacity-60" />

                {/* Main Orb */}
                <div className="relative h-full w-full rounded-full glass border border-white/20 flex items-center justify-center overflow-hidden shadow-2xl shadow-primary/20 backdrop-blur-3xl">
                  <Terminal size={180} className="text-slate-700/30 absolute -bottom-10 -right-10 rotate-12 pointer-events-none" />
                  <Cpu size={120} className="text-primary/10 absolute top-10 left-10 -rotate-12 pointer-events-none" />

                  <div className="z-10">
                    <m.div
                      animate={{ rotateY: [0, 360] }}
                      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                      className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center"
                    >
                      <Globe size={110} className="text-primary opacity-80" />
                    </m.div>
                  </div>

                  {/* Floating Badges */}
                  <m.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-12 sm:top-20 -right-4 glass px-4 py-2.5 rounded-2xl text-[10px] sm:text-xs font-bold flex items-center gap-2 shadow-xl border border-white/20"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                    React / Vite
                  </m.div>

                  <m.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-12 sm:bottom-20 -left-4 glass px-4 py-2.5 rounded-2xl text-[10px] sm:text-xs font-bold flex items-center gap-2 shadow-xl border border-white/20"
                  >
                    <MousePointer2 size={13} className="text-primary" />
                    Interactive
                  </m.div>
                </div>
              </div>
            </m.div>
          </div>

        </div>
      </div>

      {/* Premium Particles - Optimized Animation */}
      {particles.map((p) => (
        <m.div
          key={p.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0], y: [0, -120, 0], x: [0, p.xOffset, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
          className="absolute w-2 h-2 bg-white/15 rounded-full blur-sm pointer-events-none"
          style={{ top: `${p.top}%`, left: `${p.left}%` }}
        />
      ))}
    </section>
  );
};

export default Hero;
