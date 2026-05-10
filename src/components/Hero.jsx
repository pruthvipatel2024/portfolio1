import React from 'react';
import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ChevronRight, Terminal, Globe, Cpu, MousePointer2 } from 'lucide-react';

// Pre-computed random positions to avoid re-render changes
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
      {/* Dynamic Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[140px] animate-pulse delay-700 pointer-events-none" />

      {/* Parallax Grid */}
      <motion.div
        style={{ x: moveX, y: moveY }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 py-8 lg:py-0">

          {/* Text Column */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Available Badge */}
              <motion.div
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
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-[0.98] tracking-[-0.06em]">
                Pruthvi Surati <br />
                <span className="text-gradient">Fullstack Developer Portfolio</span>
              </h1>

              <p className="text-slate-300/90 text-base md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Hi, I'm <span className="text-white font-semibold">Pruthvi Surati</span>. A passionate Fullstack Developer. I specialize in building{' '}
                <span className="text-white font-medium italic">immersive digital experiences</span>{' '}
                that bridge the gap between design and technology.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center justify-center gap-3"
                >
                  Explore Work <ChevronRight size={20} />
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline flex items-center justify-center"
                >
                  Get In Touch
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* 3D Visual Column */}
          <div className="lg:w-2/5 flex justify-center">
            <motion.div
              style={{ rotateX, rotateY, perspective: 1000, transformStyle: 'preserve-3d' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative z-20 group"
            >
              <div
                style={{ transform: 'translateZ(100px)' }}
                className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[430px] lg:h-[430px]"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full animate-pulse blur-3xl" />

                {/* Main Circle */}
                <div className="relative h-full w-full rounded-full glass border border-white/20 flex items-center justify-center overflow-hidden shadow-2xl shadow-primary/20 backdrop-blur-3xl">
                  <Terminal size={180} className="text-slate-700/30 absolute -bottom-10 -right-10 rotate-12 pointer-events-none" />
                  <Cpu size={120} className="text-primary/10 absolute top-10 left-10 -rotate-12 pointer-events-none" />

                  <div className="z-10 text-center">
                    <motion.div
                      animate={{ rotateY: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center"
                    >
                      <Globe size={120} className="text-primary" />
                    </motion.div>
                  </div>

                  {/* Badge: React/Vite */}
                  <motion.div
                    style={{ transform: 'translateZ(80px)' }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-8 sm:top-16 -right-2 sm:right-2 glass px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-[9px] sm:text-xs font-bold flex items-center gap-2 shadow-xl border border-white/10"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                    React/Vite
                  </motion.div>

                  {/* Badge: Interactive */}
                  <motion.div
                    style={{ transform: 'translateZ(120px)' }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-12 sm:bottom-16 -left-2 sm:left-2 glass px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-[9px] sm:text-xs font-bold flex items-center gap-2 shadow-xl border border-white/10"
                  >
                    <MousePointer2 size={11} className="text-primary" />
                    Interactive
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Background Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0], y: [0, -100, 0], x: [0, p.xOffset, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
          className="absolute w-2 h-2 bg-white/10 rounded-full blur-sm pointer-events-none"
          style={{ top: `${p.top}%`, left: `${p.left}%` }}
        />
      ))}
    </section>
  );
};

export default Hero;
