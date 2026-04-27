import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';

const services = [
  {
    title: 'Frontend Development',
    desc: 'Crafting high-performance, pixel-perfect user interfaces using React, Tailwind CSS, and Framer Motion.',
    icon: <Code2 className="w-8 h-8" />,
    color: 'from-blue-500/20 to-cyan-500/20',
    accent: 'text-blue-400'
  },
  {
    title: 'Backend Solutions',
    desc: 'Building robust, scalable server-side architectures and RESTful APIs using Node.js and PHP.',
    icon: <Database className="w-8 h-8" />,
    color: 'from-emerald-500/20 to-teal-500/20',
    accent: 'text-emerald-400'
  },
  {
    title: 'Mobile-First Design',
    desc: 'Ensuring your application looks and functions perfectly across all devices and screen sizes.',
    icon: <Smartphone className="w-8 h-8" />,
    color: 'from-amber-500/20 to-orange-500/20',
    accent: 'text-amber-400'
  },
  {
    title: 'Performance Optimization',
    desc: 'Deep auditing and optimization to achieve lightning-fast load times and high Core Web Vitals scores.',
    icon: <Zap className="w-8 h-8" />,
    color: 'from-purple-500/20 to-pink-500/20',
    accent: 'text-purple-400'
  },
  {
    title: 'Web Security',
    desc: 'Implementing end-to-end encryption and modern security best practices to protect your user data.',
    icon: <ShieldCheck className="w-8 h-8" />,
    color: 'from-red-500/20 to-rose-500/20',
    accent: 'text-red-400'
  },
  {
    title: 'Global Deployment',
    desc: 'Setting up CI/CD pipelines and deploying applications to global edge networks for maximum availability.',
    icon: <Globe className="w-8 h-8" />,
    color: 'from-indigo-500/20 to-violet-500/20',
    accent: 'text-indigo-400'
  }
];

const ServiceCard = ({ service, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative group h-[380px] w-full"
    >
      <div 
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 rounded-[2.5rem] glass border border-white/5 group-hover:border-white/20 transition-colors duration-500 overflow-hidden"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        <div className="relative h-full flex flex-col p-10 justify-between">
          <div 
             style={{ transform: "translateZ(40px)" }}
             className={`w-16 h-16 glass rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${service.accent}`}
          >
            {service.icon}
          </div>
          
          <div style={{ transform: "translateZ(30px)" }}>
            <h4 className="text-2xl font-bold mb-4 text-white leading-tight">
              {service.title}
            </h4>
            <p className="text-slate-400 group-hover:text-slate-200 transition-colors text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>

          <div 
            style={{ transform: "translateZ(20px)" }}
            className="pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-all"
          >
            Learn More
            <div className="w-8 h-px bg-primary" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">What I Offer</h2>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6">Premium <span className="text-gradient">Services.</span></h3>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-8" />
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Transforming your ideas into high-impact digital experiences with cutting-edge technology and 3D interactive designs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
