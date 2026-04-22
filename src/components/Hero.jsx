import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Terminal, Globe, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-3/5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs font-bold tracking-widest text-primary mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                AVAILABLE FOR NEW PROJECTS
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight">
                Building <br />
                <span className="text-gradient">Digital Legacy.</span>
              </h1>
              
              <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Hi, I'm <span className="text-white font-semibold">Pruthvi Patel</span>. A Fullstack Developer dedicated to crafting high-performance management systems and immersive web experiences with pixel-perfect precision.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <motion.a 
                  href="#projects" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center gap-3"
                >
                  Explore Work <ChevronRight size={20} />
                </motion.a>
                <motion.a 
                  href="#contact" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline"
                >
                  Get In Touch
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-20"
            >
              <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
                {/* Main Visual */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full animate-pulse blur-3xl" />
                <div className="relative h-full w-full rounded-full glass border border-white/20 flex items-center justify-center overflow-hidden shadow-2xl shadow-primary/20">
                  <Terminal size={180} className="text-slate-700/50 absolute -bottom-10 -right-10 rotate-12" />
                  <Cpu size={120} className="text-primary/20 absolute top-10 left-10 -rotate-12" />
                  
                  <div className="z-10 text-center">
                     <motion.div 
                       animate={{ 
                         rotateY: [0, 360],
                       }}
                       transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                       className="w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center"
                     >
                        <Globe size={100} className="text-gradient" />
                     </motion.div>
                  </div>

                  {/* Floating Tech Badges */}
                  <motion.div 
                    animate={{ y: [0, -15, 0] }} 
                    transition={{ duration: 4, repeat: Infinity }} 
                    className="absolute top-20 right-0 glass px-5 py-3 rounded-2xl text-xs font-bold flex items-center gap-3 shadow-xl"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" /> 
                    PHP/React Pro
                  </motion.div>
                  
                  <motion.div 
                    animate={{ y: [0, 15, 0] }} 
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }} 
                    className="absolute bottom-20 left-0 glass px-5 py-3 rounded-2xl text-xs font-bold flex items-center gap-3 shadow-xl"
                  >
                    <Globe size={16} className="text-primary" /> 
                    Fullstack Architecture
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
