import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  Layers, 
  Send,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass border-b' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-gradient"
        >
          DevPortfolio
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="btn-primary py-2 text-sm"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b"
          >
            <div className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-secondary font-semibold tracking-wider mb-4">OPEN FOR COLLABORATION</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Pruthvi <span className="text-gradient">Patel</span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto md:mx-0">
              Fullstack Developer with an eye for pixel-perfect design. I specialize in building management systems, robust e-commerce platforms, and interactive web experiences.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-outline flex items-center gap-2">
                Let's Talk <ChevronRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="md:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-primary to-accent p-2 shadow-2xl shadow-primary/30">
              <div className="w-full h-full rounded-full bg-slate-950 overflow-hidden relative flex items-center justify-center">
                 <Terminal className="text-slate-500 w-32 h-32 md:w-48 md:h-48" />
                 {/* Floating Badges */}
                 <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-10 right-0 glass px-4 py-2 rounded-xl text-xs flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" /> PHP/React Specialist
                 </motion.div>
                 <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-10 left-0 glass px-4 py-2 rounded-xl text-xs flex items-center gap-2">
                    <Globe size={14} className="text-primary" /> Fullstack Pro
                 </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe className="text-blue-400" />,
      skills: ['React', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Responsive Design'],
    },
    {
      title: 'Backend',
      icon: <Terminal className="text-emerald-400" />,
      skills: ['PHP', 'Hack', 'Node.js', 'MySQL', 'REST APIs'],
    },
    {
      title: 'Management & Tools',
      icon: <Layers className="text-purple-400" />,
      skills: ['Git/GitHub', 'Project Management', 'System Architecture', 'Database Design'],
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Technical Arsenal</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A versatile stack focused on building robust management systems and scalable e-commerce solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl"
            >
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center mb-6">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 border border-white/5">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Camera Store E-Commerce',
      desc: 'A specialized online marketplace for photography equipment featuring product catalogs and secure carts.',
      tags: ['PHP', 'CSS3', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/pruthvipatel2024/camera-store'
    },
    {
      title: 'Premium E-Commerce Platform',
      desc: 'A scalable shopping solution built with performance in mind, utilizing modern backend technologies.',
      tags: ['Hack', 'PHP', 'Database'],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/pruthvipatel2024/E-Commerce'
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Real World <span className="text-gradient">Projects</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Practical solutions built to solve complex management and retail challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass rounded-3xl overflow-hidden"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-base mb-6">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase tracking-wider text-slate-400 border border-white/10">{tag}</span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors"
                >
                  View on GitHub <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:patelpruthvi671@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
       <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass max-w-4xl mx-auto rounded-[2rem] p-8 md:p-12 overflow-hidden relative">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's build something <span className="text-gradient">amazing</span></h2>
              <p className="text-slate-400 mb-8">
                Ready to start your next project or just want to say hi? Reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 glass rounded-lg flex items-center justify-center text-primary"><Mail size={20} /></div>
                  patelpruthvi671@gmail.com
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 glass rounded-lg flex items-center justify-center text-secondary"><Linkedin size={20} /></div>
                  linkedin.com/in/username
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" 
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" 
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project" 
                rows="4" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" 
              />
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-slate-950">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
        <div className="mb-4 md:mb-0">
          © 2026 Pruthvi Patel. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="https://github.com/pruthvipatel2024" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Github</a>
          <a href="#" className="hover:text-primary transition-colors">Linkedin</a>
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
