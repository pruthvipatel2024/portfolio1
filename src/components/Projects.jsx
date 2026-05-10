import React, { memo } from 'react';
import { m } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';

const ProjectCard = memo(({ project, i }) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center relative z-10 group`}
    >
      {/* Visual Side */}
      <div className="lg:w-3/5 w-full relative">
        {/* Cinematic Backdrop Glow */}
        <div className={`absolute -inset-4 bg-gradient-to-tr from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl rounded-[3rem]`} />
        
        <m.div 
          whileHover={{ y: -10 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="group relative rounded-[2.5rem] overflow-hidden glass border border-white/10 aspect-video shadow-2xl z-10"
        >
          <m.img
            src={`${project.image}&w=1000&q=80`}
            srcSet={`${project.image}&w=600&q=70 600w, ${project.image}&w=1000&q=80 1000w, ${project.image}&w=1400&q=85 1400w`}
            sizes="(max-width: 768px) 100vw, 60vw"
            alt={project.title}
            width="1000"
            height="562"
            loading="lazy"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
          
          {/* Status Badge */}
          <div className="absolute top-6 left-6">
            <span className="px-5 py-2 glass rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-xl">
              {project.category}
            </span>
          </div>


        </m.div>
      </div>

      {/* Content Side */}
      <div className="lg:w-2/5 w-full text-left">
        <m.div
          initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h4 className="text-3xl md:text-5xl font-black mb-6 tracking-tight group-hover:text-primary transition-colors duration-500">
            {project.title}
          </h4>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/5 rounded-full text-[11px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-slate-300 group-hover:border-white/10 transition-colors">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-10">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-white hover:text-primary transition-all group/link"
              aria-label={`View source code for ${project.title}`}
            >
              <Github size={20} className="group-hover/link:rotate-12 transition-transform" />
              Source
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-white hover:text-secondary transition-all group/link"
              aria-label={`View live demo for ${project.title}`}
            >
              Live Experience
              <ArrowRight size={18} className="group-hover/link:translate-x-1.5 transition-transform" />
            </a>
          </div>
        </m.div>
      </div>
    </m.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'New Era Beauti Care',
      category: 'Service Platform',
      desc: 'A premium beauty parlour experience with an integrated cinematic booking system and high-conversion UX.',
      tags: ['React', 'Tailwind', 'Booking', 'Motion'],
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop',
      github: 'https://github.com/pruthvipatel2024/new-era-beauti-care',
      demo: 'https://new-era-beauti-care.vercel.app/'
    },
    {
      title: 'Enterprise E-Commerce',
      category: 'Retail Architecture',
      desc: 'High-performance retail engine built with HHVM/Hack, featuring advanced multi-layer caching.',
      tags: ['Hack', 'HHVM', 'Database', 'Scaling'],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop',
      github: 'https://github.com/pruthvipatel2024/E-Commerce',
      demo: '#'
    },
    {
      title: 'Camera Store',
      category: 'Niche Retail',
      desc: 'Specialized cinematography gear marketplace with robust real-time inventory management.',
      tags: ['PHP', 'MySQL', 'Tailwind', 'JS'],
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop',
      github: 'https://github.com/pruthvipatel2024/camera-store',
      demo: '#'
    },
    {
      title: 'Payment Mgmt System',
      category: 'Fintech Suite',
      desc: 'Complete financial management ecosystem for educational institutions with automated reporting.',
      tags: ['PHP', 'AJAX', 'MySQL', 'Admin'],
      image: 'https://images.unsplash.com/photo-1496179356921-5f385945b45e?auto=format&fit=crop',
      github: 'https://github.com/pruthvipatel2024/project-1',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-36 relative overflow-hidden bg-slate-900/10">
      {/* Background Cinematic Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />

      <div className="section-container">
        <div className="text-center mb-24">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow text-secondary mb-5"
          >
            Digital Portfolio
          </m.h2>
          <m.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-7xl font-black mb-10 tracking-tight"
          >
            Real World <span className="text-gradient">Solutions.</span>
          </m.h3>
          <div className="w-24 h-1.5 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto shadow-lg shadow-secondary/20" />
        </div>

        <div className="space-y-32 md:space-y-48">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
