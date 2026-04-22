import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 border-t border-white/5 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          <div>
            <div className="text-2xl font-black mb-4">
              PRUTHVI<span className="text-gradient">.PATEL</span>
            </div>
            <p className="text-slate-500 max-w-sm">
              Designing and developing digital products with a focus on impact and efficiency.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10">
            {['Home', 'Skills', 'Projects', 'Contact'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="text-sm font-bold text-slate-400 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <button 
            onClick={scrollToTop}
            className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-primary transition-all group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">
          <div className="mb-4 md:mb-0">
            © 2026 Pruthvi Patel. Built with Passion.
          </div>
          <div className="flex space-x-8">
            <a href="https://github.com/pruthvipatel2024" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Github</a>
            <a href="#" className="hover:text-primary transition-colors">Linkedin</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
