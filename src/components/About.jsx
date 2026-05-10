import React from 'react';
import { m } from 'framer-motion';
import { BookOpen, Rocket, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-36 relative overflow-hidden bg-slate-900/10">
      {/* Visual Accents */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Visual Column */}
          <m.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[3rem] sm:rounded-[3.5rem] overflow-hidden glass border border-white/10 aspect-square max-w-md mx-auto shadow-2xl group">
              <m.img 
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000" 
                alt="Pruthvi Surati working" 
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            </div>
            
            {/* Dynamic Interactive Stat */}
            <m.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-2 sm:-bottom-8 sm:-right-8 md:right-0 glass p-4 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/20 shadow-2xl z-20"
            >
              <div className="flex items-center gap-3 sm:gap-5">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-primary/20 rounded-xl sm:rounded-2xl flex items-center justify-center text-primary shadow-lg shadow-primary/20">
                  <BookOpen size={24} className="sm:hidden" />
                  <BookOpen size={28} className="hidden sm:block" />
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-black text-white leading-tight">Self-Taught</div>
                  <div className="text-[8px] sm:text-[10px] font-black text-slate-500 uppercase tracking-widest">Growth Journey</div>
                </div>
              </div>
            </m.div>
          </m.div>

          {/* Text Column */}
          <div className="lg:w-1/2">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="eyebrow text-primary mb-5">About Me</h2>
              <h3 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight">
                Architecting <span className="text-gradient">Digital Legacies.</span>
              </h3>
              
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  As a <span className="text-white font-semibold">self-taught Fullstack Developer</span>, I built my career through a "project-first" mindset, diving into <span className="text-white font-semibold">PHP and MySQL</span> early on to architect complex management systems. This unconventional path has instilled in me a relentless drive for problem-solving.
                </p>
                
                <p>
                  I specialized in building robust architectures—from inventory trackers to lecturers' payment suites—learning to architect databases that are both performant and scalable. My work has always focused on solving real-world business bottlenecks.
                </p>
                
                <p>
                  Today, I bridge the gap between heavy backend logic and immersive user experiences using <span className="text-white font-semibold">React</span> and <span className="text-white font-semibold">Tailwind CSS</span>. My goal is to build digital legacies that provide lasting value through clean, premium code.
                </p>
              </div>

              {/* Status Badges */}
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-secondary shadow-lg">
                    <Rocket size={22} />
                  </div>
                  <span className="text-xs font-black text-white uppercase tracking-wider">Fast Learner</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-accent shadow-lg">
                    <Award size={22} />
                  </div>
                  <span className="text-xs font-black text-white uppercase tracking-wider">Quality Driven</span>
                </div>
              </div>
            </m.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
