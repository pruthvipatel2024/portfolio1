import React from 'react';
import { m } from 'framer-motion';
import { Trophy, Code2, Star, Zap } from 'lucide-react';

const achievements = [
  {
    category: 'Certifications',
    icon: <Trophy size={20} />,
    color: 'from-yellow-500/15 to-orange-500/15',
    border: 'border-yellow-500/20',
    accent: 'text-yellow-400',
    items: [
      {
        title: 'React Developer Certification',
        issuer: 'Udemy / Self-Study',
        date: '2024',
        desc: 'Completed advanced React 18/19 curriculum covering hooks, performance optimization, and modern architecture patterns.',
      },
      {
        title: 'PHP & MySQL – Web Development',
        issuer: 'Self-Study',
        date: '2023',
        desc: 'Mastered server-side PHP development with MySQL database design, query optimization, and REST API construction.',
      },
    ]
  },
  {
    category: 'Highlights',
    icon: <Star size={20} />,
    color: 'from-primary/15 to-secondary/15',
    border: 'border-primary/20',
    accent: 'text-primary',
    items: [
      {
        title: '4+ Production Deployments',
        issuer: 'Live on Vercel',
        date: '2024–2025',
        desc: 'Successfully deployed and maintained 4+ full-stack applications, each serving real users with 99.9% uptime.',
      },
      {
        title: 'Enterprise System Architect',
        issuer: 'Client Project',
        date: '2024',
        desc: 'Architected a complete educational payment management system replacing spreadsheets for 500+ records with automated reporting.',
      },
    ]
  },
  {
    category: 'Self-Learning Milestones',
    icon: <Zap size={20} />,
    color: 'from-green-500/15 to-emerald-500/15',
    border: 'border-green-500/20',
    accent: 'text-green-400',
    items: [
      {
        title: 'Framer Motion & UI Animation',
        issuer: 'Self-Taught',
        date: '2024',
        desc: 'Mastered complex animation sequences, gesture-based motion, and performance-optimized Framer Motion implementations.',
      },
      {
        title: 'HHVM / Hack Language',
        issuer: 'Meta / Facebook Tech',
        date: '2023',
        desc: 'Self-learned Hack (PHP\'s statically typed superset) to migrate an e-commerce backend for type safety and performance gains.',
      },
    ]
  },
  {
    category: 'Open Source & Community',
    icon: <Code2 size={20} />,
    color: 'from-purple-500/15 to-indigo-500/15',
    border: 'border-purple-500/20',
    accent: 'text-purple-400',
    items: [
      {
        title: 'GitHub Active Contributor',
        issuer: 'github.com/pruthvipatel2024',
        date: '2022–Present',
        desc: 'Consistently published open-source projects covering e-commerce, management systems, and modern React portfolios.',
      },
      {
        title: 'Modern Portfolio Design',
        issuer: 'Open Source',
        date: '2025',
        desc: 'Designed and built an ultra-premium SaaS-style developer portfolio with Linear/Vercel-inspired aesthetics and Framer Motion animations.',
      },
    ]
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-28 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/15 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-yellow-500/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-2xl"
        >
          <span className="eyebrow">Achievements</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
            Milestones &<br /><span className="text-gradient">recognition</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Certifications, milestones, and community contributions that define the journey.
          </p>
        </m.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((cat, i) => (
            <m.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`glass border ${cat.border} rounded-2xl p-6 md:p-8 hover:border-white/15 transition-all duration-300 group relative overflow-hidden`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center ${cat.accent}`}>
                    {cat.icon}
                  </div>
                  <h3 className={`text-sm font-bold ${cat.accent} uppercase tracking-wider`}>{cat.category}</h3>
                </div>

                {/* Achievement items */}
                <div className="space-y-5">
                  {cat.items.map((item, j) => (
                    <div key={j} className="border-t border-white/5 pt-5 first:border-t-0 first:pt-0">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <h4 className="text-white font-semibold text-sm mb-0.5">{item.title}</h4>
                          <span className="text-xs text-slate-600 font-medium">{item.issuer}</span>
                        </div>
                        <span className="text-xs text-slate-600 font-mono whitespace-nowrap shrink-0 mt-0.5">{item.date}</span>
                      </div>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
