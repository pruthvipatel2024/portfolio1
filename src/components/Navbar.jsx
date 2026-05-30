import React, { useState, useEffect, useCallback } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const handleLinkClick = useCallback((e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
    const targetId = href.replace('#', '');
    if (targetId === 'home') {
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
      return;
    }
    const el = document.getElementById(targetId);
    if (el) {
      setTimeout(() => {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, isMenuOpen ? 300 : 0);
    }
  }, [isMenuOpen]);

  return (
    <>
      <m.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 w-full z-[200] transition-all duration-500 ${
          isScrolled ? 'py-3 glass-nav' : 'py-5 bg-transparent'
        }`}
      >
        <div className="section-container flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="text-xl font-black tracking-tighter group"
          >
            <span className="text-white">PRUTHVI</span>
            <span className="text-gradient">.SURATI</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all rounded-lg group ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-white'
                    : 'text-slate-500 hover:text-slate-200'
                }`}
              >
                {activeSection === link.href.replace('#', '') && (
                  <m.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-white/5 border border-white/10 rounded-lg"
                    transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                  />
                )}
                <span className="relative">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://github.com/pruthvipatel2024"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-slate-500 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/pruthvi-patel--/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-slate-500 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="btn-primary !py-2 !px-5 text-xs !rounded-lg"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 relative z-50"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <m.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={22} />
                </m.span>
              ) : (
                <m.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={22} />
                </m.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </m.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <m.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[199] lg:hidden bg-slate-950/95 backdrop-blur-2xl flex flex-col"
          >
            {/* Orbs */}
            <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col justify-center flex-1 px-10 py-24 relative z-10">
              <div className="space-y-1">
                {navLinks.map((link, i) => (
                  <m.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center justify-between py-4 border-b border-white/5 text-2xl font-bold text-slate-300 hover:text-white active:text-primary transition-all duration-200 group"
                  >
                    <span>{link.name}</span>
                    <span className="text-slate-700 group-hover:text-primary transition-colors text-sm font-normal tracking-widest">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </m.a>
                ))}
              </div>

              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="mt-10 flex flex-col gap-3"
              >
                <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="btn-primary w-full py-4 text-base">
                  Get In Touch
                </a>
                <div className="flex gap-3">
                  <a href="https://github.com/pruthvipatel2024" target="_blank" rel="noopener noreferrer" className="flex-1 btn-outline py-3 text-sm">
                    <Github size={16} /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/pruthvi-patel--/" target="_blank" rel="noopener noreferrer" className="flex-1 btn-outline py-3 text-sm">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                </div>
              </m.div>
            </div>

            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="px-10 pb-10 text-slate-600 text-xs tracking-widest uppercase"
            >
              PRUTHVI SURATI © 2026
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
