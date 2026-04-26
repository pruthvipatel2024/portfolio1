import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio Inquiry - ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:patelpruthvi671@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-6"
              >
                Let's Collaborate
              </motion.h2>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black mb-10 leading-tight"
              >
                Ready to start <br />
                your <span className="text-gradient">next project?</span>
              </motion.h3>
              
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Me</div>
                    <div className="text-xl font-bold text-white">patelpruthvi671@gmail.com</div>
                  </div>
                </motion.div>

                <div className="flex gap-4">
                  {[
                    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: '#' },
                    { icon: <Twitter size={20} />, label: 'Twitter', href: '#' },
                  ].map((social, i) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + (i * 0.1) }}
                      className="w-12 h-12 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ 
                rotateX: -5,
                rotateY: 5,
                transition: { duration: 0.5 }
              }}
              style={{
                perspective: 1000,
                transformStyle: "preserve-3d",
              }}
              className="glass p-10 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl group/form"
            >
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                style={{ transform: "translateZ(30px)" }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-4">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors text-white placeholder:text-slate-700" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-4">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors text-white placeholder:text-slate-700" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-4">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your vision..." 
                      rows="5" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-6 py-4 focus:outline-none focus:border-primary transition-colors text-white placeholder:text-slate-700 resize-none" 
                    />
                </div>
                <button 
                  type="submit" 
                  style={{ transform: "translateZ(20px)" }}
                  className="btn-primary w-full py-5 rounded-[2rem] flex items-center justify-center gap-3 group/btn"
                >
                  Send Message 
                  <Send size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
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
