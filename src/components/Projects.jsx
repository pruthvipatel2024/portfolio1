import React from 'react';
import { m } from 'framer-motion';
import { Github, ArrowUpRight, Star, GitFork } from 'lucide-react';

const projects = [
  {
    title: 'New Era Beauti Care',
    category: 'Service Platform',
    desc: 'A premium beauty parlour experience with an integrated cinematic booking system, live availability management, and a high-conversion UX designed for modern consumers.',
    tags: ['React', 'Tailwind', 'Framer Motion', 'Vite'],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/pruthvipatel2024/new-era-beauti-care',
    demo: 'https://new-era-beauti-care.vercel.app/',
    metrics: { stars: '—', forks: '—', status: 'Live' },
    featured: true,
  },
  {
    title: 'Enterprise E-Commerce',
    category: 'Retail Architecture',
    desc: 'High-performance retail engine built with HHVM/Hack, featuring advanced multi-layer caching, real-time inventory, and an admin dashboard for full product lifecycle management.',
    tags: ['Hack', 'HHVM', 'PHP', 'MySQL', 'Scaling'],
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/pruthvipatel2024/E-Commerce',
    demo: null,
    metrics: { stars: '—', forks: '—', status: 'Private' },
    featured: true,
  },
  {
    title: 'Camera Store Marketplace',
    category: 'Niche Retail',
    desc: 'Specialized cinematography gear marketplace with robust real-time inventory management, category filtering, a cart system, and a clean checkout flow.',
    tags: ['PHP', 'MySQL', 'Tailwind', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/pruthvipatel2024/camera-store',
    demo: null,
    metrics: { stars: '—', forks: '—', status: 'Complete' },
    featured: false,
  },
  {
    title: 'Payment Management System',
    category: 'Fintech Suite',
    desc: 'Complete financial management ecosystem for educational institutions. Automated payroll reporting, multi-role admin access, and audit trails for 500+ lecturer records.',
    tags: ['PHP', 'AJAX', 'MySQL', 'Bootstrap', 'Admin'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/pruthvipatel2024/project-1',
    demo: null,
    metrics: { stars: '—', forks: '—', status: 'Complete' },
    featured: false,
  },
];

const statusColors = {
  'Live': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Private': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  'Complete': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
};

const Projects = () => {
  return (
    <section id="projects" className="py-28 md:py-40 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="eyebrow">Projects</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
              Real-world<br /><span className="text-gradient">solutions</span>
            </h2>
            <p className="text-slate-400 text-base max-w-sm leading-relaxed">
              Projects built to solve real business problems — from beauty parlours to enterprise fintech systems.
            </p>
          </div>
        </m.div>

        {/* Featured projects – large layout */}
        <div className="space-y-6 mb-6">
          {projects.filter(p => p.featured).map((project, i) => (
            <m.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass border border-white/8 rounded-3xl overflow-hidden hover:border-white/15 transition-all duration-500 group"
            >
              <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Image */}
                <div className="lg:w-3/5 relative overflow-hidden min-h-[250px] sm:min-h-[300px] lg:min-h-[380px]">
                  <m.img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 scale-100 group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className={`px-3 py-1 rounded-lg border text-xs font-bold ${statusColors[project.metrics.status]}`}>
                      {project.metrics.status}
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5">
                    <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-400 font-medium">{project.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/5 p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/[0.03] border border-white/5 rounded-lg text-xs font-medium text-slate-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                      <Github size={16} /> Source
                    </a>
                    {project.demo && project.demo !== '#' && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        className="btn-primary !py-2.5 !px-5 text-xs">
                        Live Demo <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </m.div>
          ))}
        </div>

        {/* Other projects – grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, i) => (
            <m.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass border border-white/8 rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-500 group flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className={`px-2.5 py-1 rounded-lg border text-xs font-bold ${statusColors[project.metrics.status]}`}>
                    {project.metrics.status}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-2">{project.category}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-white/[0.02] border border-white/5 rounded-md text-xs text-slate-600">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-white transition-colors">
                    <Github size={13} /> View Code
                  </a>
                </div>
              </div>
            </m.div>
          ))}
        </div>

        {/* View all CTA */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a href="https://github.com/pruthvipatel2024" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex">
            <Github size={15} /> View all on GitHub <ArrowUpRight size={14} />
          </a>
        </m.div>
      </div>
    </section>
  );
};

export default Projects;
