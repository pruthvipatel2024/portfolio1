import React, { memo } from 'react';
import { m } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';

const ServiceCard = memo(({ service, index }) => (
  <m.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ 
      delay: index * 0.1, 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    }}
    className="relative group h-full"
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[2.5rem] blur-xl`} />
    
    <div className="relative glass border border-white/5 group-hover:border-white/20 rounded-[2.5rem] p-10 h-full flex flex-col justify-between transition-all duration-500 overflow-hidden shadow-2xl">
      {/* Shine Effect */}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/[0.03] group-hover:animate-[shine_1.2s_ease-in-out]" />

      <div className={`w-16 h-16 glass rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 shadow-xl ${service.accent}`}>
        {service.icon}
      </div>
      
      <div>
        <h4 className="text-2xl font-black mb-4 tracking-tight text-white group-hover:text-primary transition-colors">
          {service.title}
        </h4>
        <p className="text-slate-400 group-hover:text-slate-300 transition-colors text-sm leading-relaxed font-medium">
          {service.desc}
        </p>
      </div>

      <div className="pt-8 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.25em] text-primary opacity-60 group-hover:opacity-100 transition-all duration-500">
        Inquiry Now
        <m.div 
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-10 h-px bg-primary" 
        />
      </div>
    </div>
  </m.div>
));

ServiceCard.displayName = 'ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Frontend Development',
      desc: 'Crafting pixel-perfect, highly-interactive user interfaces using React and modern CSS architectures.',
      icon: <Code2 size={28} />,
      color: 'from-blue-500/15 to-cyan-500/15',
      accent: 'text-blue-400 shadow-blue-500/10'
    },
    {
      title: 'Backend Solutions',
      desc: 'Architecting scalable server-side systems and secure APIs using PHP, Hack, and Node.js.',
      icon: <Database size={28} />,
      color: 'from-emerald-500/15 to-teal-500/15',
      accent: 'text-emerald-400 shadow-emerald-500/10'
    },
    {
      title: 'Mobile-First Design',
      desc: 'Ensuring seamless performance and visual excellence across all screen sizes and mobile platforms.',
      icon: <Smartphone size={28} />,
      color: 'from-amber-500/15 to-orange-500/15',
      accent: 'text-amber-400 shadow-amber-500/10'
    },
    {
      title: 'Performance Strategy',
      desc: 'Optimizing existing architectures for maximum speed, SEO, and Core Web Vitals compliance.',
      icon: <Zap size={28} />,
      color: 'from-purple-500/15 to-pink-500/15',
      accent: 'text-purple-400 shadow-purple-500/10'
    },
    {
      title: 'Security Architecture',
      desc: 'Implementing modern data protection standards and secure communication protocols.',
      icon: <ShieldCheck size={28} />,
      color: 'from-red-500/15 to-rose-500/15',
      accent: 'text-red-400 shadow-red-500/10'
    },
    {
      title: 'Global Infrastructure',
      desc: 'Deploying and scaling applications on global edge networks with automated CI/CD pipelines.',
      icon: <Globe size={28} />,
      color: 'from-indigo-500/15 to-violet-500/15',
      accent: 'text-indigo-400 shadow-indigo-500/10'
    }
  ];

  return (
    <section id="services" className="py-24 md:py-36 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="eyebrow text-primary mb-5">Professional Services</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
              Premium <span className="text-gradient">Offerings.</span>
            </h3>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto mb-8 shadow-lg shadow-primary/20" />
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed font-medium">
              Transforming complex visions into high-impact, cinematic digital experiences with state-of-the-art engineering.
            </p>
          </m.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
