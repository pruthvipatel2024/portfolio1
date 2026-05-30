import React from 'react';
import { m } from 'framer-motion';
import { Rocket, Award, BookOpen, Code2 } from 'lucide-react';

const strengths = [
  { icon: <Rocket size={18} />, title: 'Fast Learner', desc: 'Adapts quickly to new technologies and frameworks' },
  { icon: <Award size={18} />, title: 'Quality Driven', desc: 'Commits to clean, maintainable, production-ready code' },
  { icon: <BookOpen size={18} />, title: 'Self-Taught', desc: 'Project-first mindset with deep problem-solving instincts' },
  { icon: <Code2 size={18} />, title: 'Full Stack', desc: 'Bridges backend logic with modern frontend experiences' },
];

const technologies = [
  'React 19', 'Tailwind CSS', 'Framer Motion', 'PHP', 'Hack/HHVM',
  'Node.js', 'MySQL', 'JavaScript', 'REST APIs', 'Git', 'Vite', 'Vercel'
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
});

const About = () => {
  return (
    <section id="about" className="py-28 md:py-40 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <m.div {...fadeUp()} className="mb-20 max-w-2xl">
          <span className="eyebrow">About Me</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
            Crafting digital<br /><span className="text-gradient">experiences</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            A self-taught fullstack developer who turned curiosity into craft — building enterprise systems that matter.
          </p>
        </m.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left – Image */}
          <m.div {...fadeUp(0.1)} className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-square max-w-md glass border border-white/8 shadow-2xl shadow-black/40">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
                alt="Pruthvi Surati – Developer"
                loading="lazy"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass border border-white/10 rounded-2xl p-4">
                  <div className="text-white font-bold text-sm">Pruthvi Surati</div>
                  <div className="text-slate-400 text-xs mt-0.5">Fullstack Developer · Surat, India</div>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative h-2 w-2 rounded-full bg-green-400" />
                    </span>
                    <span className="text-green-400 text-xs font-medium">Open to opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-center text-primary text-2xl font-black">
              &lt;/&gt;
            </div>
          </m.div>

          {/* Right – Content */}
          <div className="space-y-10">
            <m.div {...fadeUp(0.15)}>
              <div className="space-y-5 text-slate-400 leading-relaxed text-base">
                <p>
                  As a <span className="text-white font-semibold">self-taught Fullstack Developer</span>, I built my career through a "project-first" mindset — diving into PHP and MySQL early to architect complex management systems and real-world business tools.
                </p>
                <p>
                  From inventory trackers to payment management suites, I learned to design databases that are both <span className="text-white font-semibold">performant and scalable</span>. Today I bridge backend robustness with modern, immersive frontend experiences using <span className="text-white font-semibold">React and Tailwind CSS</span>.
                </p>
                <p>
                  My goal is simple: build digital products that provide lasting value through clean, maintainable, production-ready code.
                </p>
              </div>
            </m.div>

            {/* Strengths grid */}
            <m.div {...fadeUp(0.2)} className="grid grid-cols-2 gap-3">
              {strengths.map((s, i) => (
                <div key={i} className="glass border border-white/5 rounded-2xl p-4 hover:border-white/10 transition-all group">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:bg-primary/20 transition-colors">
                    {s.icon}
                  </div>
                  <div className="text-white text-sm font-bold mb-1">{s.title}</div>
                  <div className="text-slate-500 text-xs leading-relaxed">{s.desc}</div>
                </div>
              ))}
            </m.div>

            {/* Tech tags */}
            <m.div {...fadeUp(0.25)}>
              <div className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-3">Technologies</div>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-white/[0.03] border border-white/8 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:border-white/15 transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
