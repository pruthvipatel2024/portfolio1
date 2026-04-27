import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, i }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center relative z-10 group`}
    >
      {/* Image Side */}
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="lg:w-3/5 w-full"
      >
        <div className="group relative rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden glass border border-white/10 aspect-[4/3] sm:aspect-video shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors duration-500" />
          <div className="absolute top-6 left-6">
            <span className="px-4 py-2 glass rounded-full text-[10px] font-black uppercase tracking-widest text-white">
              {project.category}
            </span>
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div 
        style={{ transform: "translateZ(70px)" }}
        className="lg:w-2/5 w-full text-left"
      >
        <h4 className="text-3xl font-black mb-6 hover:text-primary transition-colors">{project.title}</h4>
        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map(tag => (
            <span key={tag} className="px-4 py-1 bg-white/5 rounded-full text-xs font-semibold text-slate-500 border border-white/5">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors group/link"
          >
            <Github size={20} className="group-hover/link:rotate-12 transition-transform" />
            Source Code
          </a>
          <a
            href={project.demo}
            className="flex items-center gap-2 text-sm font-bold text-white hover:text-secondary transition-colors group/link"
          >
            Live Demo
            <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Enterprise E-Commerce',
      category: 'Retail Architecture',
      desc: 'A high-performance shopping platform built with Hack (HHVM). Features advanced caching and a sophisticated database schema for handling large traffic.',
      tags: ['Hack', 'PHP', 'Database Design', 'Caching'],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1200',
      github: 'https://github.com/pruthvipatel2024/E-Commerce',
      demo: '#'
    },
    {
      title: 'Camera Store Marketplace',
      category: 'E-Commerce Solution',
      desc: 'A specialized online store for photography gear with integrated payment gateways and a robust inventory management dashboard.',
      tags: ['PHP', 'JavaScript', 'Tailwind CSS', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1200',
      github: 'https://github.com/pruthvipatel2024/camera-store',
      demo: '#'
    },
    {
      title: 'Lecturers Payment Management System',
      category: 'Management System',
      desc: 'A complete management suite for lecturers payments. Features include student information management, payment tracking, and report generation.',
      tags: ['PHP', 'AJAX', 'MySQL', 'Responsive UI'],
      image: 'https://images.unsplash.com/photo-1496179356921-5f385945b45e?auto=format&fit=crop&q=80&w=1200',
      github: 'https://github.com/pruthvipatel2024/project-1',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-32 bg-slate-900/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4"
          >
            Featured Work
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-black mb-8"
          >
            Real World <span className="text-gradient">Solutions.</span>
          </motion.h3>
        </div>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

