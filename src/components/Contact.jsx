import React, { useState, memo } from 'react';
import { m } from 'framer-motion';
import { Send, Mail, Linkedin, Instagram, Github, Copy, Check } from 'lucide-react';

const ContactInfo = memo(({ icon: Icon, label, value, href, onClick }) => (
  <m.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-5 group"
  >
    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
      <Icon size={20} />
    </div>
    <div className="min-w-0">
      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">{label}</div>
      {href ? (
        <a href={href} className="text-base font-bold text-white hover:text-primary transition-colors block truncate">{value}</a>
      ) : (
        <button onClick={onClick} className="text-base font-bold text-white hover:text-primary transition-colors block truncate text-left">{value}</button>
      )}
    </div>
  </m.div>
));

ContactInfo.displayName = 'ContactInfo';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <m.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="eyebrow text-accent mb-4"
              >
                Contact
              </m.h2>
              <m.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tight"
              >
                Ready to start <br />
                your <span className="text-gradient">next project?</span>
              </m.h3>

              <div className="space-y-6">
                <ContactInfo
                  icon={Mail}
                  label="Email Me"
                  value="patelpruthvi671@gmail.com"
                  href="mailto:patelpruthvi671@gmail.com"
                />

                <div className="flex gap-3 pt-4">
                  {[
                    { icon: <Github size={20} />, label: 'Github', href: 'https://github.com/pruthvipatel2024' },
                    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/pruthvi-patel--/' },
                    { icon: <Instagram size={20} />, label: 'Instagram', href: 'https://www.instagram.com/pruthvi._.506/' },
                  ].map((social, i) => (
                    <m.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit my ${social.label}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all"
                    >
                      {social.icon}
                    </m.a>
                  ))}
                  <m.button
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all"
                  >
                    {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                  </m.button>
                </div>
              </div>
            </div>

            <m.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[2rem] border border-white/5 shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary transition-colors text-white placeholder:text-slate-600 text-sm outline-none"
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary transition-colors text-white placeholder:text-slate-600 text-sm outline-none"
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary transition-colors text-white placeholder:text-slate-600 text-sm outline-none resize-none"
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all active:scale-[0.98]"
                >
                  {isSent ? 'Opening Mail...' : 'Send Message'}
                  <Send size={16} />
                </button>
              </form>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
