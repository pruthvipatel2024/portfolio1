import React from 'react';
import { m } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    role: 'Fullstack Developer',
    company: 'Self-Employed / Freelance',
    period: '2024 – Present',
    location: 'Bhavnagar, India',
    type: 'Full-time',
    color: 'from-primary/20 to-secondary/20',
    borderColor: 'border-primary/30',
    dotColor: 'bg-primary',
    achievements: [
      'Built and deployed 4+ full-stack production applications using React, PHP, and MySQL with 99.9% uptime',
      'Designed a scalable e-commerce platform handling 1000+ product listings with real-time inventory sync',
      'Engineered a complete beauty parlour booking system with live availability and integrated payment flow',
      'Architected an institutional payment management suite replacing manual processes for 500+ records',
    ],
    tags: ['React', 'PHP', 'MySQL', 'Tailwind', 'Framer Motion', 'Vite'],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Web Agency (Freelance Project)',
    period: '2023 – 2024',
    location: 'Remote',
    type: 'Internship',
    color: 'from-secondary/20 to-accent/20',
    borderColor: 'border-secondary/30',
    dotColor: 'bg-secondary',
    achievements: [
      'Delivered 6+ responsive React components from Figma designs with pixel-perfect accuracy',
      'Improved page load times by 40% through asset optimization and lazy loading techniques',
      'Collaborated on a team project implementing REST API integrations for a client dashboard',
    ],
    tags: ['React', 'JavaScript', 'Tailwind', 'REST APIs', 'Figma'],
  },
  {
    role: 'PHP & MySQL Developer (Self-Taught)',
    company: 'Personal Projects',
    period: '2022 – 2023',
    location: 'Bhavnagar, India',
    type: 'Learning',
    color: 'from-accent/20 to-orange-500/20',
    borderColor: 'border-accent/30',
    dotColor: 'bg-accent',
    achievements: [
      'Built a full camera store management system with inventory tracking and admin panel from scratch',
      'Designed normalized MySQL schemas for complex relational datasets with 5+ joined tables',
      'Learned HHVM/Hack by rewriting a PHP e-commerce backend for improved performance and type safety',
    ],
    tags: ['PHP', 'MySQL', 'JavaScript', 'HHVM', 'Hack'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-28 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/15 to-transparent pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-2xl"
        >
          <span className="eyebrow">Experience</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
            My professional<br /><span className="text-gradient">journey</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            From self-taught foundations to building enterprise-grade production systems.
          </p>
        </m.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-5 top-5 w-4 h-4 rounded-full ${exp.dotColor} border-2 border-slate-950 ring-2 ring-white/5 z-10`} />

                {/* Card */}
                <div className={`glass border ${exp.borderColor} rounded-2xl md:rounded-3xl p-6 md:p-8 hover:border-white/15 transition-all duration-300 group`}>
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg md:text-xl font-bold text-white">{exp.role}</h3>
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r ${exp.color} text-slate-300`}>
                          {exp.type}
                        </span>
                      </div>
                      <div className="text-slate-400 font-medium">{exp.company}</div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <div className="text-sm text-slate-400 font-medium">{exp.period}</div>
                      <div className="flex items-center gap-1 text-slate-600 text-xs">
                        <MapPin size={11} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((ach, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-700 shrink-0 group-hover:bg-primary/50 transition-colors" />
                        {ach}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/[0.03] border border-white/5 rounded-lg text-xs font-medium text-slate-500 hover:text-slate-300 hover:border-white/10 transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
