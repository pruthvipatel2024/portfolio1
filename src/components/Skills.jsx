import React, { memo } from 'react';
import { Globe, Terminal, Layers, Database, Layout } from 'lucide-react';
import { m } from 'framer-motion';

const SkillCard = memo(({ cat, i }) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: i * 0.1, 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="group relative h-full"
    >
      {/* Premium Visual Depth Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[2.5rem] blur-xl`} />
      
      <div className="relative glass p-10 rounded-[2.5rem] border border-white/10 group-hover:border-white/25 transition-all duration-500 h-full overflow-hidden flex flex-col shadow-2xl">
        {/* Animated Shine Sweep */}
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/[0.05] group-hover:animate-[shine_1.2s_ease-in-out]" />

        <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-black/20 text-white">
          {cat.icon}
        </div>
        
        <h4 className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors">{cat.title}</h4>
        <p className="text-slate-400 text-sm mb-10 leading-relaxed font-medium">
          {cat.desc}
        </p>
        
        <div className="mt-auto flex flex-wrap gap-2.5">
          {cat.skills.map(skill => (
            <span 
              key={skill} 
              className="px-4 py-1.5 glass rounded-full text-[11px] font-bold text-slate-300 border border-white/5 group-hover:border-white/20 transition-colors uppercase tracking-widest"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </m.div>
  );
});

SkillCard.displayName = 'SkillCard';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="text-blue-400" size={30} />,
      desc: 'Crafting responsive and interactive user interfaces with modern React ecosystems.',
      skills: ['React 19', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'Vite'],
      color: 'from-blue-500/15 to-cyan-500/15'
    },
    {
      title: 'Backend & Systems',
      icon: <Database className="text-emerald-400" size={30} />,
      desc: 'Building robust APIs and server-side logic for enterprise management systems.',
      skills: ['PHP', 'Hack', 'Node.js', 'MySQL', 'REST APIs'],
      color: 'from-emerald-500/15 to-teal-500/15'
    },
    {
      title: 'Architecture & Tools',
      icon: <Layers className="text-purple-400" size={30} />,
      desc: 'Managing project lifecycles, deployments, and scalable system architectures.',
      skills: ['Git/GitHub', 'System Design', 'Postman', 'Vercel', 'CI/CD'],
      color: 'from-purple-500/15 to-pink-500/15'
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-36 relative overflow-hidden">
      {/* Background Cinematic Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
          <div className="md:w-3/5">
            <m.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="eyebrow text-primary mb-5">Technical Mastery</h2>
              <h3 className="text-4xl md:text-6xl font-black mb-8 leading-[1.3] md:leading-[1.2] tracking-tight">
                My Digital <br /><span className="text-gradient">Powerhouse.</span>
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-xl font-medium">
                A versatile tech stack engineered for building high-performance management systems and cinematic digital experiences.
              </p>
            </m.div>
          </div>
          
          <m.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex glass p-8 rounded-[2.5rem] items-center gap-10 border border-white/10 shadow-2xl"
          >
            <div className="text-center">
              <div className="text-4xl font-black text-white">3+</div>
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Years XP</div>
            </div>
            <div className="w-px h-16 bg-white/10" />
            <div className="text-center">
              <div className="text-4xl font-black text-white">20+</div>
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Deployments</div>
            </div>
          </m.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
