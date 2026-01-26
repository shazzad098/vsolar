
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Zap, Sun, Battery, Cloud, ArrowRight } from 'lucide-react';

const Solution: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.spaced-char', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.02,
        ease: 'power2.out',
      });
      
      gsap.from('.sol-card', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.sol-grid',
          start: 'top 80%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const renderSpacedText = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className={`spaced-char inline-block ${char === ' ' ? 'mr-4' : 'mr-2'} uppercase font-bold text-white`}>
        {char}
      </span>
    ));
  };

  const solutions = [
    { title: 'Residential Hub', icon: <Sun />, desc: 'Fully integrated solar roofing and storage for modern homes.', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800' },
    { title: 'Industrial Microgrids', icon: <Zap />, desc: 'Large scale energy independence for manufacturing hubs.', img: 'https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=800' },
    { title: 'Smart Storage', icon: <Battery />, desc: 'AI-driven solid-state battery tech for 24/7 reliability.', img: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=800' },
    { title: 'Grid Sync SaaS', icon: <Cloud />, desc: 'Real-time energy trading and management software.', img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div ref={containerRef} className="pt-48 pb-24 bg-[#0A0A0A] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-32">
          <span className="text-xs font-bold tracking-[0.5em] uppercase text-white/40 mb-8 block">Our Ecosystem</span>
          <h1 className="text-2xl md:text-5xl tracking-[0.4em] leading-tight mb-12">
            {renderSpacedText("Integrated")} <br />
            <span className="text-white/20 italic">{renderSpacedText("Solutions.")}</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl font-light leading-relaxed">
            Engineering the complete lifecycle of clean energy, from capture to intelligent distribution.
          </p>
        </div>

        <div className="sol-grid grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          {solutions.map((sol, i) => (
            <div key={i} className="sol-card group bg-white/5 backdrop-blur-md rounded-[60px] overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-700">
               <div className="h-96 overflow-hidden">
                  <img src={sol.img} className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-100" />
               </div>
               <div className="p-16">
                  <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center mb-10 border border-white/10">
                     {React.cloneElement(sol.icon as React.ReactElement, { size: 32, className: 'text-white' })}
                  </div>
                  <h3 className="text-4xl font-bold mb-6 tracking-tight text-white">{sol.title}</h3>
                  <p className="text-white/40 text-lg mb-10 leading-relaxed font-light">{sol.desc}</p>
                  <button className="flex items-center gap-4 font-bold text-xs uppercase tracking-[0.3em] text-white hover:gap-6 transition-all">
                    View Technical Datasheet <ArrowRight size={20} />
                  </button>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solution;
