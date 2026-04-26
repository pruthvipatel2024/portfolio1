import React from 'react';
import { Globe, Terminal, Layers, Database, Code2, Layout } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const SkillCard = ({ cat, i }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="group glass p-10 rounded-[2.5rem] relative overflow-hidden transition-all h-full"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity`} 
      />
      
      <div 
        style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }}
        className="relative z-10"
      >
        <div 
          style={{ transform: "translateZ(40px)" }}
          className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform"
        >
          {cat.icon}
        </div>
        <h4 
          style={{ transform: "translateZ(30px)" }}
          className="text-2xl font-bold mb-4"
        >
          {cat.title}
        </h4>
        <p 
          style={{ transform: "translateZ(20px)" }}
          className="text-slate-400 text-sm mb-8 leading-relaxed"
        >
          {cat.desc}
        </p>
        
        <div 
          style={{ transform: "translateZ(10px)" }}
          className="flex flex-wrap gap-3"
        >
          {cat.skills.map(skill => (
            <span 
              key={skill} 
              className="px-4 py-1.5 glass rounded-full text-xs font-medium text-slate-300 border border-white/5 group-hover:border-white/20 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="text-blue-400" />,
      desc: 'Crafting responsive and interactive user interfaces.',
      skills: ['React 19', 'Tailwind CSS 4', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Framer Motion'],
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Backend & Systems',
      icon: <Database className="text-emerald-400" />,
      desc: 'Building robust APIs and server-side logic.',
      skills: ['PHP', 'Hack', 'Node.js', 'RESTful APIs', 'MySQL'],
      color: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      title: 'Architecture & Tools',
      icon: <Layers className="text-purple-400" />,
      desc: 'Managing project lifecycles and deployments.',
      skills: ['Git/GitHub', 'System Design', 'Project Management', 'Vite', 'Postman'],
      color: 'from-purple-500/20 to-pink-500/20'
    }
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Core Competencies</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-6">My Technical <span className="text-gradient">Arsenal.</span></h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                A versatile stack focused on building scalable management systems and high-performance retail solutions.
              </p>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="glass p-6 rounded-3xl flex items-center gap-6">
                <div className="text-right">
                  <div className="text-2xl font-black text-white">3+</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Years Exp.</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-right">
                  <div className="text-2xl font-black text-white">20+</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Projects</div>
                </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

