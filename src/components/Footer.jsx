import React from 'react';
import { m } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowUp, Mail } from 'lucide-react';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

const socials = [
  { icon: <Github size={16} />, href: 'https://github.com/pruthvipatel2024', label: 'GitHub' },
  { icon: <Linkedin size={16} />, href: 'https://www.linkedin.com/in/pruthvi-patel--/', label: 'LinkedIn' },
  { icon: <Instagram size={16} />, href: 'https://www.instagram.com/pruthvi._.506/', label: 'Instagram' },
  { icon: <Mail size={16} />, href: 'mailto:patelpruthvi671@gmail.com', label: 'Email' },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0 });

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href.replace('#', ''));
    if (el) {
      el.scrollIntoView();
    } else {
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <footer className="relative border-t border-white/5 bg-slate-950 overflow-hidden">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="section-container relative z-10 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="inline-block mb-4">
              <span className="text-xl font-black tracking-tighter">
                PRUTHVI<span className="text-gradient">.SURATI</span>
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
              Fullstack Developer building scalable enterprise systems and immersive modern web experiences with PHP, React & Node.js.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  className="w-9 h-9 glass border border-white/8 rounded-xl flex items-center justify-center text-slate-500 hover:text-white hover:border-white/15 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-5">Navigation</div>
            <ul className="space-y-3">
              {quickLinks.slice(0, 3).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-slate-500 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-5">More</div>
            <ul className="space-y-3">
              {quickLinks.slice(3).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-slate-500 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="mailto:patelpruthvi671@gmail.com" className="text-sm text-slate-500 hover:text-white transition-colors">
                  Hire Me
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-700">
            © 2026 Pruthvi Surati. Built with React, Tailwind & Framer Motion.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs text-slate-700">Designed & Developed by Pruthvi Surati</span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-9 h-9 glass border border-white/8 rounded-xl flex items-center justify-center text-slate-500 hover:text-white hover:border-white/15 transition-all group"
            >
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
