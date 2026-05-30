import React from 'react';
import { m } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    emoji: '🎨',
    color: 'from-blue-500/10 to-cyan-500/10',
    border: 'border-blue-500/15',
    accent: 'text-blue-400',
    skills: [
      { name: 'React 19', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'JavaScript ES6+', level: 85 },
      { name: 'Framer Motion', level: 80 },
      { name: 'Vite', level: 82 },
    ]
  },
  {
    title: 'Backend',
    emoji: '⚙️',
    color: 'from-emerald-500/10 to-teal-500/10',
    border: 'border-emerald-500/15',
    accent: 'text-emerald-400',
    skills: [
      { name: 'PHP', level: 90 },
      { name: 'Hack / HHVM', level: 75 },
      { name: 'Node.js', level: 70 },
      { name: 'REST APIs', level: 85 },
    ]
  },
  {
    title: 'Databases',
    emoji: '🗄️',
    color: 'from-orange-500/10 to-yellow-500/10',
    border: 'border-orange-500/15',
    accent: 'text-orange-400',
    skills: [
      { name: 'MySQL', level: 88 },
      { name: 'Database Design', level: 85 },
      { name: 'Query Optimization', level: 75 },
    ]
  },
  {
    title: 'Cloud & Tools',
    emoji: '☁️',
    color: 'from-purple-500/10 to-indigo-500/10',
    border: 'border-purple-500/15',
    accent: 'text-purple-400',
    skills: [
      { name: 'Vercel', level: 85 },
      { name: 'Git & GitHub', level: 88 },
      { name: 'Postman', level: 80 },
      { name: 'System Design', level: 72 },
    ]
  },
  {
    title: 'AI Tools',
    emoji: '🤖',
    color: 'from-pink-500/10 to-rose-500/10',
    border: 'border-pink-500/15',
    accent: 'text-pink-400',
    skills: [
      { name: 'GitHub Copilot', level: 82 },
      { name: 'ChatGPT / Claude', level: 88 },
      { name: 'Gemini Pro', level: 78 },
    ]
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 md:py-40 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-2xl"
        >
          <span className="eyebrow">Skills</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
            Technical<br /><span className="text-gradient">powerhouse</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            A versatile stack engineered for building high-performance systems and modern web experiences.
          </p>
        </m.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <m.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`relative glass border ${cat.border} rounded-2xl p-6 hover:border-white/15 transition-all duration-300 group overflow-hidden`}
            >
              {/* Card glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{cat.emoji}</span>
                  <h3 className={`text-base font-bold ${cat.accent}`}>{cat.title}</h3>
                </div>

                {/* Skills with progress bars */}
                <div className="space-y-4">
                  {cat.skills.map((skill, j) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                        <span className="text-xs text-slate-600">{skill.level}%</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <m.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: i * 0.05 + j * 0.08, ease: [0.16, 1, 0.3, 1] }}
                          className={`h-full bg-gradient-to-r ${cat.color.replace('/10', '/80').replace('from-', 'from-').replace('to-', 'to-')} rounded-full`}
                          style={{
                            background: cat.title === 'Frontend' ? 'linear-gradient(to right, #3b82f6, #06b6d4)' :
                                       cat.title === 'Backend' ? 'linear-gradient(to right, #10b981, #14b8a6)' :
                                       cat.title === 'Databases' ? 'linear-gradient(to right, #f97316, #eab308)' :
                                       cat.title === 'Cloud & Tools' ? 'linear-gradient(to right, #a855f7, #6366f1)' :
                                       'linear-gradient(to right, #ec4899, #f43f5e)'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </m.div>
          ))}

          {/* Stats card */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass border border-white/8 rounded-2xl p-6 flex flex-col justify-center md:col-span-2 xl:col-span-1"
          >
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">At a Glance</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '20+', label: 'Projects Completed' },
                { value: '1+', label: 'Years Experience' },
                { value: '5+', label: 'Tech Stacks' },
                { value: '99%', label: 'Uptime Avg.' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
