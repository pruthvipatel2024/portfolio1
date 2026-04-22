import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Camera Store E-Commerce',
      category: 'E-Commerce Solution',
      desc: 'A high-performance marketplace for professional photography gear. Features advanced filtering, secure checkout, and a robust admin dashboard.',
      tags: ['PHP', 'MySQL', 'JavaScript', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1200',
      github: 'https://github.com/pruthvipatel2024/camera-store',
      demo: '#'
    },
    {
      title: 'Enterprise Management System',
      category: 'Internal Tooling',
      desc: 'A comprehensive management platform designed for scaling businesses. Streamlines operations with real-time analytics and inventory tracking.',
      tags: ['Hack', 'PHP', 'Database Architecture', 'React'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
      github: 'https://github.com/pruthvipatel2024/E-Commerce',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-32 bg-slate-900/30">
      <div className="container mx-auto px-6">
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
            className="text-4xl md:text-6xl font-black mb-8"
          >
            Real World <span className="text-gradient">Solutions.</span>
          </motion.h3>
        </div>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="lg:w-3/5 w-full">
                <div className="group relative rounded-[2.5rem] overflow-hidden glass border border-white/10 aspect-video">
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
              <div className="lg:w-2/5 w-full text-left">
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

                <div className="flex items-center gap-8">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors group"
                  >
                    <Github size={20} className="group-hover:rotate-12 transition-transform" />
                    Source Code
                  </a>
                  <a 
                    href={project.demo} 
                    className="flex items-center gap-2 text-sm font-bold text-white hover:text-secondary transition-colors group"
                  >
                    Live Demo
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
