import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Rocket, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-slate-900/20">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden glass border border-white/10 aspect-square max-w-md mx-auto shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000" 
                alt="Pruthvi Surati working" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>
            
            {/* Stats floating on image */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 md:right-0 glass p-6 rounded-3xl border border-white/10 shadow-2xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
                  <BookOpen size={24} />
                </div>
                <div>
                  <div className="text-xl font-black text-white">Self-Taught</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Developer Journey</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="eyebrow text-primary mb-4">About Me</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8">Crafting Logic, <br /><span className="text-gradient">Building Experience.</span></h3>
              
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  My journey as a <strong>Fullstack Developer</strong> began with a simple curiosity: how do complex systems manage vast amounts of data seamlessly? As a <strong>self-taught developer</strong>, I didn't follow the traditional classroom route. Instead, I dove head-first into documentation, open-source projects, and late-night debugging sessions. This unconventional path has instilled in me a "project-first" mindset that defines my professional approach today.
                </p>
                
                <p>
                  I specialized early on in <strong>PHP and MySQL</strong>, recognizing their power in building robust <strong>management systems</strong>. From inventory trackers to lecturers' payment management suites, I learned to architect databases that are both performant and scalable. My early projects were focused on solving real-world business bottlenecks, ensuring that every line of code served a functional purpose.
                </p>
                
                <p>
                  As the web evolved, so did I. I transitioned into the modern frontend ecosystem, mastering <strong>React</strong> and the <strong>Vite</strong> build tool. This allowed me to bridge the gap between heavy backend logic and immersive, interactive user experiences. Today, I combine the reliability of PHP-based architectures with the fluid performance of React and Tailwind CSS to create full-stack applications that look premium and run flawlessly.
                </p>
                
                <p>
                  I am deeply committed to <strong>continuous learning</strong>. Whether it's optimizing Core Web Vitals for better SEO or implementing advanced Framer Motion animations for high-end UI/UX, I treat every project as an opportunity to push the boundaries of what's possible on the web. My goal isn't just to build websites—it's to build digital legacies that provide lasting value to users and businesses alike.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary">
                    <Rocket size={18} />
                  </div>
                  <span className="text-sm font-bold text-white uppercase tracking-wider">Fast Learner</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary">
                    <Award size={18} />
                  </div>
                  <span className="text-sm font-bold text-white uppercase tracking-wider">Problem Solver</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
