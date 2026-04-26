import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      isScrolled && !isMenuOpen ? 'py-4 glass-nav border-b border-white/10' : 'py-6 md:py-8 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center relative z-[101]">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl font-bold tracking-tighter"
        >
          <a href="#home" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <span className="text-white">PRUTHVI</span>
            <span className="text-gradient">.SURATI</span>
          </a>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </motion.a>
          ))}
          <motion.button 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary py-2.5 px-8 text-sm"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 glass rounded-2xl text-white transition-all active:scale-90"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Fullscreen Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-slate-950 z-[100] md:hidden flex flex-col justify-center items-center p-10"
          >
            {/* Background Orbs for Premium Look */}
            <div className="absolute top-1/4 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-[120px]" />
            
            <div className="flex flex-col space-y-8 text-center relative z-10">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name} 
                  href={link.href} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-black text-white hover:text-primary transition-colors tracking-tighter"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-10"
              >
                <button className="btn-primary w-full py-5 text-xl">Hire Me</button>
              </motion.div>
            </div>

            {/* Bottom Credits */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 text-slate-500 text-xs font-bold uppercase tracking-[0.3em]"
            >
              PRUTHVI SURATI © 2026
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
