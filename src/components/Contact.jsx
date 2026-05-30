import React, { useState, memo } from 'react';
import { m } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Copy, Check, ArrowUpRight, Download } from 'lucide-react';

const EMAIL = 'patelpruthvi671@gmail.com';

const contactLinks = [
  { icon: <Mail size={18} />, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: <Github size={18} />, label: 'GitHub', value: 'pruthvipatel2024', href: 'https://github.com/pruthvipatel2024', external: true },
  { icon: <Linkedin size={18} />, label: 'LinkedIn', value: 'pruthvi-patel--', href: 'https://www.linkedin.com/in/pruthvi-patel--/', external: true },
  { icon: <Instagram size={18} />, label: 'Instagram', value: 'pruthvi._.506', href: 'https://www.instagram.com/pruthvi._.506/', external: true },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    const sub = encodeURIComponent(`${formData.subject || 'Portfolio Inquiry'} — ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:${EMAIL}?subject=${sub}&body=${body}`;
    setTimeout(() => setSending(false), 2000);
  };

  return (
    <section id="contact" className="py-28 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/15 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="section-container relative z-10">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 max-w-2xl mx-auto"
        >
          <span className="eyebrow">Contact</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
            Let's build<br /><span className="text-gradient">something great</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            I'm available for freelance projects, full-time roles, and collaborations. Let's talk.
          </p>
        </m.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Left Column */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Availability card */}
            <div className="glass border border-green-500/15 rounded-2xl p-5">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-green-400" />
                </span>
                <span className="text-green-400 text-sm font-bold">Available Now</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Currently open to new projects, freelance work, and full-time opportunities.
              </p>
            </div>

            {/* Links */}
            <div className="glass border border-white/8 rounded-2xl p-5 space-y-3">
              {contactLinks.map((link, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-slate-500 group-hover:text-white group-hover:bg-white/10 transition-all shrink-0">
                    {link.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] text-slate-600 font-bold uppercase tracking-widest mb-0.5">{link.label}</div>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-slate-300 hover:text-white transition-colors truncate block"
                    >
                      {link.value}
                    </a>
                  </div>
                  {link.external && <ArrowUpRight size={12} className="text-slate-700 group-hover:text-slate-400 transition-colors shrink-0" />}
                </div>
              ))}

              {/* Copy email button */}
              <button
                onClick={copyEmail}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/8 bg-white/[0.02] text-sm text-slate-500 hover:text-white hover:border-white/15 hover:bg-white/5 transition-all"
              >
                {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                {copied ? 'Email copied!' : 'Copy email address'}
              </button>
            </div>

            {/* Resume download */}
            <a href="/resume.pdf" download className="btn-outline w-full py-3 text-sm">
              <Download size={15} /> Download Resume
            </a>
          </m.div>

          {/* Right Column – Form */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass border border-white/8 rounded-2xl p-6 md:p-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-2">Name</label>
                  <input
                    id="name" type="text" required placeholder="John Doe"
                    className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-white placeholder:text-slate-700 text-sm outline-none focus:border-primary/50 focus:bg-white/5 transition-all"
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-2">Email</label>
                  <input
                    id="email" type="email" required placeholder="john@example.com"
                    className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-white placeholder:text-slate-700 text-sm outline-none focus:border-primary/50 focus:bg-white/5 transition-all"
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-2">Subject</label>
                <input
                  id="subject" type="text" placeholder="Project inquiry / Job opportunity"
                  className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-white placeholder:text-slate-700 text-sm outline-none focus:border-primary/50 focus:bg-white/5 transition-all"
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-2">Message</label>
                <textarea
                  id="message" required rows={5} placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-white placeholder:text-slate-700 text-sm outline-none focus:border-primary/50 focus:bg-white/5 transition-all resize-none"
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="btn-primary w-full py-4 text-sm font-bold disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Mail size={15} />
                {sending ? 'Opening mail client...' : 'Send Message'}
              </button>
            </form>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
