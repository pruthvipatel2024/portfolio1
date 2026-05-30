import React, { useEffect, useState } from 'react';
import { m } from 'framer-motion';

const shimmer = {
  animate: { x: ['-100%', '100%'] },
  transition: { repeat: Infinity, duration: 1.6, ease: 'linear' },
};

const Shimmer = () => (
  <m.div
    animate={shimmer.animate}
    transition={shimmer.transition}
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"
  />
);

const Skel = ({ className }) => (
  <div className={`relative overflow-hidden bg-white/[0.04] rounded-xl ${className}`}>
    <Shimmer />
  </div>
);

const statusTexts = [
  'INITIALIZING PORTFOLIO...',
  'LOADING COMPONENTS...',
  'HYDRATING REACT TREE...',
  'RENDERING PORTFOLIO...',
  'ALMOST READY...',
];

const SkeletonLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const totalDuration = 2400;
    const interval = 25;
    const increment = 100 / (totalDuration / interval);

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + increment;
        if (next >= 100) { clearInterval(timer); return 100; }
        if (next > 80) setStatusIndex(4);
        else if (next > 60) setStatusIndex(3);
        else if (next > 40) setStatusIndex(2);
        else if (next > 20) setStatusIndex(1);
        return next;
      });
    }, interval);

    const done = setTimeout(() => { if (onComplete) onComplete(); }, totalDuration + 200);
    return () => { clearInterval(timer); clearTimeout(done); };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[300] bg-[#05050a] flex flex-col overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_40%,transparent_100%)] opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-secondary/6 rounded-full blur-[100px] pointer-events-none" />

      {/* Navbar skeleton */}
      <div className="w-full px-6 md:px-12 h-16 border-b border-white/5 flex items-center justify-between shrink-0">
        <Skel className="w-36 h-6" />
        <div className="hidden md:flex items-center gap-6">
          {[1,2,3,4,5,6].map(i => <Skel key={i} className={`h-4 w-${10 + i * 2}`} style={{ width: `${50 + i * 8}px` }} />)}
        </div>
        <Skel className="w-24 h-9 !rounded-xl" />
      </div>

      {/* Hero skeleton */}
      <div className="flex-1 flex items-center px-6 md:px-12 max-w-7xl mx-auto w-full py-12">
        <div className="w-full flex flex-col lg:flex-row items-center gap-16">
          {/* Left text */}
          <div className="lg:w-[58%] w-full flex flex-col items-center lg:items-start gap-5">
            <Skel className="h-7 w-48 !rounded-full" />
            <div className="space-y-3 w-full">
              <Skel className="h-14 sm:h-16 w-4/5" />
              <Skel className="h-14 sm:h-16 w-3/5" />
            </div>
            <Skel className="h-5 w-full max-w-md" />
            <Skel className="h-5 w-4/5 max-w-md" />
            <Skel className="h-5 w-3/5 max-w-md" />
            <div className="flex gap-3 mt-2 w-full">
              <Skel className="h-12 w-40 !rounded-xl" />
              <Skel className="h-12 w-44 !rounded-xl" />
            </div>
            {/* Stats */}
            <div className="flex gap-8 mt-4">
              {[1,2,3].map(i => (
                <div key={i} className="space-y-2">
                  <Skel className="h-9 w-16" />
                  <Skel className="h-3 w-24" />
                </div>
              ))}
            </div>
          </div>

          {/* Right orb */}
          <div className="hidden lg:flex lg:w-[42%] justify-center">
            <div className="relative w-80 h-80">
              <div className="w-full h-full rounded-full bg-white/[0.03] border border-white/8 overflow-hidden relative">
                <Shimmer />
              </div>
              {/* Floating badge skeletons */}
              {[
                { top: '5%', right: '-8%' },
                { top: '50%', right: '-12%' },
                { bottom: '10%', right: '-5%' },
                { top: '28%', left: '-12%' },
              ].map((pos, i) => (
                <div key={i} className="absolute" style={pos}>
                  <Skel className="h-8 w-24 !rounded-xl" />
                </div>
              ))}
              {/* Rotating ring */}
              <m.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full border border-dashed border-white/5"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar footer */}
      <div className="px-6 md:px-12 py-6 border-t border-white/5 bg-slate-950/60 backdrop-blur-md shrink-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-slate-600 tracking-widest">{statusTexts[statusIndex]}</span>
            <span className="text-xs font-mono text-primary font-bold">{Math.round(progress)}%</span>
          </div>
          <div className="h-px bg-white/5 rounded-full overflow-hidden">
            <m.div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.05 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
