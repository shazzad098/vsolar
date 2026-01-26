
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AboutUs: React.FC = () => {
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
      gsap.from('.about-content > *', {
        y: 40, opacity: 0, duration: 1, stagger: 0.1,
        scrollTrigger: { trigger: '.about-content', start: 'top 80%' }
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

  return (
    <div ref={containerRef} className="pt-48 pb-24 px-6 md:px-12 bg-[#0A0A0A] text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-white/40 mb-8 block">Our Heritage</span>
          <h1 className="text-2xl md:text-5xl tracking-[0.4em] leading-tight mb-12">
            {renderSpacedText("Built For The")} <br />
            <span className="text-white/20 italic">{renderSpacedText("Long Term.")}</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-48 about-content">
          <div>
            <p className="text-white/80 text-3xl font-light leading-relaxed mb-12 italic border-l-4 border-white pl-8">
              "We didn't start Vsolar to just build panels. We started it to build a relationship between humans and the planet that is finally sustainable, elegant, and permanent."
            </p>
            <p className="text-white/40 text-lg leading-relaxed mb-10 font-light">
              Founded in 2018 in Zurich, Vsolar was born out of a desire to merge Swiss precision engineering with architectural beauty. Today, we are the leading provider of luxury solar solutions worldwide, powering the world's most innovative estates.
            </p>
            <div className="flex gap-16">
               <div>
                  <h4 className="text-4xl font-bold mb-2 tracking-tighter text-white">2018</h4>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Founding Year</span>
               </div>
               <div>
                  <h4 className="text-4xl font-bold mb-2 tracking-tighter text-white">Zurich</h4>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Headquarters</span>
               </div>
            </div>
          </div>
          <div className="rounded-[80px] overflow-hidden aspect-square shadow-3xl relative group border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-100" 
              alt="Team at work"
            />
            <div className="absolute inset-0 border-[24px] border-white/5 transition-all pointer-events-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center border-t border-white/10 pt-24">
          <div>
            <h3 className="text-7xl font-bold text-white mb-4 tracking-tighter">14k+</h3>
            <p className="text-white/40 uppercase font-bold text-[10px] tracking-[0.3em]">Installs Completed</p>
          </div>
          <div>
            <h3 className="text-7xl font-bold text-white mb-4 tracking-tighter">500+</h3>
            <p className="text-white/40 uppercase font-bold text-[10px] tracking-[0.3em]">Energy Engineers</p>
          </div>
          <div>
            <h3 className="text-7xl font-bold text-white mb-4 tracking-tighter">120</h3>
            <p className="text-white/40 uppercase font-bold text-[10px] tracking-[0.3em]">Global Patents</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
