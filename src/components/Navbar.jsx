import React, { useState, useEffect, memo } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Instagram } from 'lucide-react';

const NavLink = memo(({ name, href, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-all relative group py-2"
  >
    {name}
    <m.span 
      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all group-hover:w-full" 
      initial={false}
    />
  </a>
));

NavLink.displayName = 'NavLink';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'py-4 glass-nav' : 'py-8 bg-transparent'
    }`}>
      <div className="section-container flex justify-between items-center">
        <m.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter"
        >
          <a href="#home" className="flex items-center group">
            <span className="text-white group-hover:text-primary transition-colors">PRUTHVI</span>
            <span className="text-gradient">.SURATI</span>
          </a>
        </m.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-12 items-center">
          <div className="flex gap-10">
            {navLinks.map((link) => (
              <NavLink key={link.name} {...link} />
            ))}
          </div>
          <m.a 
            href="#contact" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary !py-3 !px-8 shadow-2xl"
          >
            Hire Me
          </m.a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-3 glass rounded-2xl text-white active:scale-90 transition-all border border-white/10"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav Overlay - Premium Fullscreen */}
      <AnimatePresence>
        {isMenuOpen && (
          <m.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-slate-950 z-[101] lg:hidden flex flex-col justify-center items-center p-10"
          >
            {/* Cinematic Menu Orbs */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-secondary/15 rounded-full blur-[120px] pointer-events-none" />

            <div className="flex flex-col space-y-10 text-center relative z-10 w-full max-w-sm">
              {navLinks.map((link, i) => (
                <m.a 
                  key={link.name} 
                  href={link.href} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-black text-white hover:text-primary transition-all tracking-tight"
                >
                  {link.name}
                </m.a>
              ))}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-10"
              >
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="btn-primary w-full py-5 text-xl">Hire Me</a>
              </m.div>

              {/* Mobile Socials */}
              <div className="flex gap-8 justify-center pt-10">
                {[
                  { icon: <Github size={24} />, href: 'https://github.com/pruthvipatel2024', label: 'Github' },
                  { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/pruthvi-patel--/', label: 'LinkedIn' },
                  { icon: <Instagram size={24} />, href: 'https://www.instagram.com/pruthvi._.506/', label: 'Instagram' }
                ].map((social, i) => (
                  <m.a 
                    key={i} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-slate-400 hover:text-white"
                  >
                    {social.icon}
                  </m.a>
                ))}
              </div>
            </div>

            {/* Bottom Branding */}
            <m.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]"
            >
              PRUTHVI SURATI © 2026
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
