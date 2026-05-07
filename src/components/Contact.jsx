import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Instagram, Github, Copy, Check } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('patelpruthvi671@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio Inquiry - ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:patelpruthvi671@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="eyebrow text-accent mb-6"
              >
                Let's Collaborate
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-black mb-10 leading-tight"
              >
                Ready to start <br />
                your <span className="text-gradient">next project?</span>
              </motion.h2>
              
              <div className="space-y-8">
                {/* Email */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Me</div>
                    <div className="text-base sm:text-lg font-bold text-white break-all">patelpruthvi671@gmail.com</div>
                  </div>
                </motion.div>

                {/* Social Links + Copy */}
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: <Github size={20} />, label: 'Github', href: 'https://github.com/pruthvipatel2024' },
                    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/pruthvi-patel--/' },
                    { icon: <Instagram size={20} />, label: 'Instagram', href: 'https://www.instagram.com/pruthvi._.506/' },
                  ].map((social, i) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + (i * 0.1) }}
                      className="w-12 h-12 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
                      title={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                  <motion.button
                    onClick={copyEmail}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="w-12 h-12 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
                    title="Copy Email"
                  >
                    {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ perspective: 1000 }}
              className="glass p-6 sm:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl"
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors text-white placeholder:text-slate-600 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors text-white placeholder:text-slate-600 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your vision..."
                    rows="5"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors text-white placeholder:text-slate-600 resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-4 rounded-2xl flex items-center justify-center gap-3 group/btn"
                >
                  {isSent ? 'Opening Mail App...' : 'Send Message'}
                  <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
