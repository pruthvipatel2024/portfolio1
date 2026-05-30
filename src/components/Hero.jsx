import React, { useEffect, useRef, useState } from 'react';
import { m, useInView } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Code2, Globe, Server, Database } from 'lucide-react';

// Animated counter
const Counter = ({ end, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const techBadges = [
  { icon: <Code2 size={14} />, label: 'React 19', color: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/20', top: '12%', right: '-5%' },
  { icon: <Server size={14} />, label: 'Node.js', color: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/20', top: '55%', right: '-8%' },
  { icon: <Database size={14} />, label: 'MySQL', color: 'from-orange-500/20 to-yellow-500/20', border: 'border-orange-500/20', bottom: '15%', right: '-2%' },
  { icon: <Globe size={14} />, label: 'PHP & Hack', color: 'from-purple-500/20 to-indigo-500/20', border: 'border-purple-500/20', top: '30%', left: '-10%' },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)] pointer-events-none" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10 w-full">
        <m.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20"
        >
          {/* Left – Text Column */}
          <div className="lg:w-[58%] text-center lg:text-left order-2 lg:order-1">
            {/* Availability badge */}
            <m.div variants={fadeUp} className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs font-semibold text-slate-300 tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Available for new projects
            </m.div>

            {/* Heading */}
            <m.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-[-0.03em] leading-[0.95] mb-6">
              Pruthvi<br />
              <span className="text-gradient">Surati</span>
            </m.h1>

            {/* Title line */}
            <m.p variants={fadeUp} className="text-lg sm:text-xl text-slate-400 font-medium mb-6 max-w-lg mx-auto lg:mx-0">
              Fullstack Developer — crafting scalable, immersive digital products with modern tech.
            </m.p>

            {/* Description */}
            <m.p variants={fadeUp} className="text-sm sm:text-base text-slate-500 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              I specialize in building robust enterprise systems with <span className="text-slate-300">PHP & MySQL</span> and modern web experiences with <span className="text-slate-300">React & Node.js</span>.
            </m.p>

            {/* CTAs */}
            <m.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-14">
              <a href="#projects" onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('projects');
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
              }} className="btn-primary">
                View Projects <ArrowRight size={16} />
              </a>
              <a href="/resume.pdf" download className="btn-outline">
                <Download size={16} /> Download Resume
              </a>
            </m.div>

            {/* Stats */}
            <m.div variants={fadeUp} className="flex items-center gap-8 sm:gap-12 justify-center lg:justify-start">
              {[
                { value: 1, suffix: '+', label: 'Years Experience' },
                { value: 20, suffix: '+', label: 'Projects Built' },
                { value: 5, suffix: '+', label: 'Technologies' },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-3xl sm:text-4xl font-black text-white tabular-nums">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-slate-600 font-medium mt-1 whitespace-nowrap">{stat.label}</div>
                </div>
              ))}
              <div className="hidden sm:block w-px h-10 bg-white/5" />
              <div className="hidden sm:flex items-center gap-3">
                <a href="https://github.com/pruthvipatel2024" target="_blank" rel="noopener noreferrer" className="p-2.5 glass rounded-xl text-slate-500 hover:text-white transition-all hover:scale-105">
                  <Github size={16} />
                </a>
                <a href="https://www.linkedin.com/in/pruthvi-patel--/" target="_blank" rel="noopener noreferrer" className="p-2.5 glass rounded-xl text-slate-500 hover:text-white transition-all hover:scale-105">
                  <Linkedin size={16} />
                </a>
              </div>
            </m.div>
          </div>

          {/* Right – Visual Column */}
          <m.div
            variants={fadeUp}
            className="lg:w-[42%] order-1 lg:order-2 relative flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-secondary/10 to-accent/20 blur-2xl animate-pulse" />
              
              {/* Profile circle */}
              <div className="relative w-full h-full rounded-full border border-white/10 glass overflow-hidden shadow-2xl shadow-black/40">
                <img
                  src="/profile.png"
                  alt="Pruthvi Surati – Fullstack Developer"
                  className="w-full h-full object-cover object-top opacity-100"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              {/* Rotating dashed ring */}
              <m.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full border border-dashed border-white/5"
              />
              <m.div
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 rounded-full border border-dashed border-white/[0.03]"
              />

              {/* Tech badges */}
              {techBadges.map((b, i) => (
                <m.div
                  key={i}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
                  className={`absolute px-3 py-2 rounded-xl border ${b.border} bg-gradient-to-br ${b.color} backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-white whitespace-nowrap shadow-lg`}
                  style={{ top: b.top, right: b.right, bottom: b.bottom, left: b.left }}
                >
                  <span className="opacity-70">{b.icon}</span>
                  {b.label}
                </m.div>
              ))}
            </div>
          </m.div>
        </m.div>

        {/* Scroll indicator */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <m.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-1.5 bg-white/30 rounded-full" />
          </m.div>
        </m.div>
      </div>
    </section>
  );
};

export default Hero;
