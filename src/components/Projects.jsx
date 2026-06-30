import React, { useState, useEffect, useRef } from 'react';
import { m, AnimatePresence, useInView } from 'framer-motion';
import { Github, ArrowUpRight, Layers, Award, Terminal, ShieldAlert, Cpu, Globe } from 'lucide-react';

// Local counter component for stats
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
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const projects = [
  {
    title: 'OmniDine – Restaurant Management SaaS',
    subtitle: 'Complete cloud-based restaurant operating system.',
    categories: ['SaaS', 'Web Apps'],
    desc: 'OmniDine is a full-scale SaaS platform built for restaurants that manages the complete restaurant workflow. It includes two mobile apps: a Flutter Captain app for waiters to take orders, and a Flutter Owner app for owners to manage the restaurant on the go.',
    features: [
      'Restaurant POS & Billing system with Table Management',
      'Kitchen Display System (KDS) & Order Tracking',
      'Flutter Captain App (Waiter Ordering) & Flutter Owner App (Mobile POS Manager)',
      'Dynamic QR Menu & KOT (Kitchen Order Ticket) Generation',
      'Real-time multi-device synchronization and analytics dashboard'
    ],
    architecture: {
      type: 'diagram',
    },
    challenges: [
      'Real-time multi-device database state synchronization during high peak hours.',
      'Integrating native Flutter applications with Next.js web applications seamlessly.',
      'Designing robust KOT generation pipeline with print queue handlers.'
    ],
    impact: [
      'Reduced manual order handling & paper usage by transitioning to instant KOT routing.',
      'Enabled contact-free QR menu and customer checkout flow.',
      'Centralized operations for billing, kitchen, captain, and administration.',
      'Architected for multi-restaurant scalability with multi-tenant workspace separation.'
    ],
    tags: ['Next.js', 'React', 'Flutter', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Shadcn UI'],
    image: '/omnidine.png',
    github: null,
    demo: 'https://omni-dine.vercel.app/',
    metrics: { status: 'Live Production', highlight: 'SaaS Product · Multi-platform · Real-time · Production Ready' },
    stats: [
      { label: 'Applications', value: '3' },
      { label: 'Screens', value: '100+' },
      { label: 'Sync Delay', value: 'Real-time' },
      { label: 'SaaS Architecture', value: 'Multi-tenant' }
    ],
    featured: true,
  },
  {
    title: 'HD Tech Solution',
    subtitle: 'Professional business website delivered to a real client.',
    categories: ['Client Projects', 'Web Apps'],
    desc: 'Designed, built and delivered a full-scale corporate web platform with a custom content management system (CMS) for an engineering/consulting business.',
    features: [
      'Fully responsive & highly polished user interface with custom branding',
      'Services showcase section & dynamic service request contact forms',
      'SEO optimized structure with structured schema data',
      'Secure custom admin dashboard to edit services, client gallery, and incoming inquiries'
    ],
    architecture: {
      type: 'stack',
      details: [
        { label: 'Frontend', value: 'Next.js (Vercel)' },
        { label: 'Backend', value: 'Express.js (Render)' },
        { label: 'Database', value: 'Neon PostgreSQL' },
        { label: 'Media', value: 'Cloudinary CDN' },
        { label: 'Security', value: 'JWT + HTTP-Only Cookies' }
      ]
    },
    challenges: [
      'Handling secure cross-origin authentication & cookie-sharing between frontend (Vercel) and backend (Render).',
      'Building a flexible CMS to replace hardcoded content without introducing complex dashboard bloat.',
      'Designing robust database normalization schemas using Prisma for flexible page configurations.'
    ],
    impact: [
      'Successfully delivered to a paying client with 100% project satisfaction.',
      'Equipped client team with a self-managed custom CMS dashboard for dynamic gallery & services management.',
      'Deployed highly available serverless production infrastructure using Vercel, Render, and Neon.'
    ],
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'Cloudinary'],
    image: '/hd-tech-solution.png',
    github: null,
    demo: 'https://hd-tech-sollution.vercel.app/',
    metrics: { status: 'Real Client Project', highlight: 'Successfully delivered to a paying client' },
    featured: true,
  },
  {
    title: 'New Era Beauti Care',
    categories: ['Client Projects', 'Web Apps'],
    desc: 'A premium beauty parlour experience with an integrated cinematic booking system, live availability management, and a high-conversion UX designed for modern consumers.',
    tags: ['React', 'Tailwind', 'Framer Motion', 'Vite'],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/pruthvipatel2024/new-era-beauti-care',
    demo: 'https://new-era-beauti-care.vercel.app/',
    metrics: { status: 'Live' },
    featured: false,
  },
  {
    title: 'Enterprise E-Commerce',
    categories: ['Web Apps'],
    desc: 'High-performance retail engine built with HHVM/Hack, featuring advanced multi-layer caching, real-time inventory, and an admin dashboard for full product lifecycle management.',
    tags: ['Hack', 'HHVM', 'PHP', 'MySQL', 'Scaling'],
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/pruthvipatel2024/E-Commerce',
    demo: null,
    metrics: { status: 'Private' },
    featured: false,
  },
  {
    title: 'Camera Store Marketplace',
    categories: ['Web Apps', 'Open Source'],
    desc: 'Specialized cinematography gear marketplace with robust real-time inventory management, category filtering, a cart system, and a clean checkout flow.',
    tags: ['PHP', 'MySQL', 'Tailwind', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/pruthvipatel2024/camera-store',
    demo: null,
    metrics: { status: 'Complete' },
    featured: false,
  },
  {
    title: 'Payment Management System',
    categories: ['Web Apps', 'Client Projects'],
    desc: 'Complete financial management ecosystem for educational institutions. Automated payroll reporting, multi-role admin access, and audit trails for 500+ lecturer records.',
    tags: ['PHP', 'AJAX', 'MySQL', 'Bootstrap', 'Admin'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/pruthvipatel2024/project-1',
    demo: null,
    metrics: { status: 'Complete' },
    featured: false,
  },
];

const statusColors = {
  'Live Production': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Real Client Project': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'Live': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Private': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  'Complete': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
};

const techColors = {
  'Next.js': 'bg-slate-900 text-white border-white/20',
  'React': 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  'React 19': 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  'Flutter': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'TypeScript': 'bg-blue-600/10 text-blue-400 border-blue-600/20',
  'Node.js': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Prisma': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  'PostgreSQL': 'bg-blue-400/10 text-blue-300 border-blue-400/20',
  'Tailwind CSS': 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  'Tailwind': 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  'Shadcn UI': 'bg-zinc-800 text-zinc-100 border-zinc-700',
  'Express': 'bg-slate-700/10 text-slate-300 border-slate-700/20',
  'Cloudinary': 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  'PHP': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  'MySQL': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'Hack': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'HHVM': 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20',
  'Framer Motion': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  'Vite': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Bootstrap': 'bg-purple-600/10 text-purple-400 border-purple-600/20',
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter projects dynamically
  const filteredFeatured = projects.filter(
    (p) => p.featured && (activeFilter === 'All' || p.categories.includes(activeFilter))
  );
  
  const filteredOthers = projects.filter(
    (p) => !p.featured && (activeFilter === 'All' || p.categories.includes(activeFilter))
  );

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
          className="mb-16"
        >
          <span className="eyebrow">Projects</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-4">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <p className="text-slate-400 text-base max-w-xl leading-relaxed">
                Real-world software products and production applications I've designed and built.
              </p>
            </div>
          </div>
        </m.div>

        {/* Metrics Row */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 glass border border-white/5 rounded-3xl mb-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-40 pointer-events-none" />
          {[
            { value: 3, suffix: '+', label: 'Production Applications' },
            { value: 2, suffix: '', label: 'Live Products' },
            { value: 1, suffix: '', label: 'SaaS Platform' },
            { value: 1, suffix: '', label: 'Real Client Delivery' }
          ].map((metric, i) => (
            <div key={i} className="relative z-10 text-center md:text-left border-r last:border-r-0 border-white/5 pr-4 last:pr-0">
              <div className="text-3xl md:text-4xl font-black text-white tracking-tight">
                <Counter end={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-2">
                {metric.label}
              </div>
            </div>
          ))}
        </m.div>

        {/* Featured Achievement Banner */}
        <m.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 glass border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-white/25 transition-all duration-500"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-full blur-[80px] pointer-events-none" />
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest">
                Production-grade Showcase
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                Built & Deployed Real Production Systems
              </h3>
              <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
                Proven experience engineering end-to-end full-stack architectures, implementing secure JWT-based cross-origin authentication, deploying production cloud systems, and delivering production-ready business software.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto shrink-0">
              {[
                { label: 'Restaurant SaaS', desc: 'OmniDine System' },
                { label: 'Client Delivery', desc: 'HD Tech Solution' },
                { label: 'Fullstack Core', desc: 'Next.js + Express + SQL' },
                { label: 'Cloud Hosting', desc: 'Vercel, Render & Neon' },
              ].map((item, i) => (
                <div key={i} className="px-4 py-3 bg-white/[0.02] border border-white/5 rounded-xl hover:border-white/10 transition-colors">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{item.label}</div>
                  <div className="text-xs text-slate-300 font-semibold mt-0.5 whitespace-nowrap">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </m.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-16">
          {['All', 'SaaS', 'Web Apps', 'Client Projects', 'Open Source'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                activeFilter === filter
                  ? 'text-slate-950'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              {activeFilter === filter && (
                <m.span
                  layoutId="project-filter-bg"
                  className="absolute inset-0 bg-white rounded-xl shadow-lg shadow-white/5"
                  transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                />
              )}
              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </div>

        {/* Featured Projects – Large Case Studies */}
        <div className="space-y-16 mb-24">
          <AnimatePresence mode="popLayout">
            {filteredFeatured.map((project, i) => (
              <m.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-premium border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-500 group relative"
              >
                {/* Subtle Hover Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/3 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 p-6 md:p-10">
                  {/* Left Column: Media & Core Info */}
                  <div className="lg:w-1/2 flex flex-col justify-between space-y-6">
                    {/* Header Details */}
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`px-3 py-1 rounded-lg border text-[10px] font-black uppercase tracking-wider ${statusColors[project.metrics.status]}`}>
                          {project.metrics.status}
                        </span>
                        <span className="text-xs text-slate-500 font-semibold">{project.metrics.highlight}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-base text-slate-300 font-medium leading-relaxed italic border-l-2 border-primary/30 pl-4">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Image Mockup with Zoom */}
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 aspect-video group/img">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover opacity-80 group-hover/img:opacity-100 group-hover/img:scale-102 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Quick Statistics (OmniDine only) */}
                    {project.stats && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-white/[0.01] border border-white/5 rounded-2xl">
                        {project.stats.map((stat, idx) => (
                          <div key={idx} className="text-center md:text-left">
                            <div className="text-lg font-black text-white">{stat.value}</div>
                            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="space-y-3">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Tech Stack</div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1 rounded-lg border text-xs font-medium transition-colors hover:bg-white/5 cursor-default ${
                              techColors[tag] || 'bg-white/[0.02] text-slate-400 border-white/5'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Call to Actions */}
                    <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/5">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary !py-3 !px-6 text-xs hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300"
                        >
                          Live Demo <ArrowUpRight size={14} />
                        </a>
                      )}
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline !py-3 !px-6 text-xs flex items-center gap-2"
                        >
                          <Github size={14} /> View GitHub
                        </a>
                      ) : (
                        <div className="text-xs text-slate-500 font-medium px-4 py-2.5 border border-dashed border-white/5 rounded-xl cursor-default bg-white/[0.01]">
                          Enterprise Private Code
                        </div>
                      )}
                      <button
                        disabled
                        className="text-xs text-slate-400 bg-white/[0.02] border border-white/5 px-4 py-2.5 rounded-xl cursor-not-allowed select-none font-semibold uppercase tracking-wider"
                      >
                        Case Study Placeholder
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Case Study Sections */}
                  <div className="lg:w-1/2 flex flex-col justify-between space-y-8">
                    {/* Overview */}
                    <div className="space-y-3">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                        <Layers size={14} className="text-primary" /> Project Overview
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{project.desc}</p>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-3">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                        <Award size={14} className="text-secondary" /> Core Features
                      </div>
                      <ul className="grid gap-2 text-sm text-slate-400">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Architecture & Deployment */}
                    <div className="space-y-3">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                        <Terminal size={14} className="text-accent" /> Architecture & Deployment
                      </div>

                      {project.architecture.type === 'diagram' && (
                        <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-6 relative select-none">
                          <div className="flex flex-col gap-6 items-center w-full">
                            <div className="flex justify-between w-full gap-4">
                              <div className="flex-1 text-center py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl text-[10px] font-bold text-blue-400 shadow-md">
                                Flutter Captain App (Waiter)
                              </div>
                              <div className="flex-1 text-center py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl text-[10px] font-bold text-blue-400 shadow-md">
                                Flutter Owner App (Mobile POS)
                              </div>
                            </div>
                            <div className="relative w-full text-center">
                              <div className="absolute -top-4 left-1/4 w-[2px] h-4 bg-gradient-to-b from-blue-500 to-indigo-500" />
                              <div className="absolute -top-4 right-1/4 w-[2px] h-4 bg-gradient-to-b from-blue-500 to-indigo-500" />
                              <div className="inline-block px-5 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-xl text-[10px] font-bold text-indigo-300 shadow-lg">
                                Shared Backend Orchestration
                              </div>
                              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[2px] h-4 bg-gradient-to-b from-indigo-500 to-violet-500" />
                            </div>
                            <div className="w-full text-center">
                              <div className="inline-block px-6 py-2.5 bg-violet-500/10 border border-violet-500/20 rounded-xl text-[10px] font-bold text-violet-400 shadow-md">
                                Next.js Web POS
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.architecture.type === 'stack' && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-white/[0.01] border border-white/5 rounded-2xl p-4">
                          {project.architecture.details.map((detail, idx) => (
                            <div key={idx} className="flex justify-between items-center py-1.5 px-3 border-b last:border-b-0 sm:border-b-0 border-white/5">
                              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{detail.label}</span>
                              <span className="text-[10px] text-slate-300 font-semibold">{detail.value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Challenges Solved */}
                    <div className="space-y-3">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                        <ShieldAlert size={14} className="text-rose-400" /> Technical Challenges Solved
                      </div>
                      <ul className="grid gap-2 text-sm text-slate-400">
                        {project.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2.5 shrink-0" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Business Impact */}
                    <div className="space-y-3">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                        <Cpu size={14} className="text-emerald-400" /> Business Impact
                      </div>
                      <ul className="grid gap-2 text-sm text-slate-400">
                        {project.impact.map((imp, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 shrink-0" />
                            <span>{imp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </m.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Other Projects Section Header */}
        {filteredOthers.length > 0 && (
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-white/5 pt-16 mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Other Projects
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              Additional web applications, repositories and experiments.
            </p>
          </m.div>
        )}

        {/* Other Projects – Compact Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredOthers.map((project, i) => (
              <m.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="glass border border-white/8 rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-500 group flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-75 group-hover:scale-103 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2.5 py-1 rounded-lg border text-[10px] font-bold ${statusColors[project.metrics.status] || 'bg-white/10 text-white border-white/20'}`}>
                      {project.metrics.status}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">{project.categories?.join(' / ')}</div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-white/[0.02] border border-white/5 rounded-md text-[10px] text-slate-400">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors">
                        <Github size={13} /> View Code
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors">
                        <Globe size={13} /> Live Site
                      </a>
                    )}
                  </div>
                </div>
              </m.div>
            ))}
          </AnimatePresence>
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
