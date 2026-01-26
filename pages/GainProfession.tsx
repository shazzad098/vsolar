
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Award, GraduationCap, Users, ShieldCheck, ArrowRight } from 'lucide-react';

const GainProfession: React.FC = () => {
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
      gsap.from('.feature-box', {
        opacity: 0, y: 30, stagger: 0.1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.features-grid', start: 'top 85%' }
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
    <div ref={containerRef} className="pt-48 pb-24 bg-[#0A0A0A] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-32 items-center mb-48">
           <div className="lg:w-1/2">
              <span className="text-xs font-bold tracking-[0.5em] uppercase text-white/40 mb-8 block">Professional Ecosystem</span>
              <h1 className="text-2xl md:text-5xl tracking-[0.4em] leading-tight mb-12 text-white">
                {renderSpacedText("Elevate Your")} <br />
                <span className="text-white/20 italic">{renderSpacedText("Expertise.")}</span>
              </h1>
              <p className="text-xl text-white/40 font-light leading-relaxed mb-12 max-w-lg">
                Become a certified Vsolar Professional. Gain access to proprietary hardware, design tools, and the world's most advanced solar technology ecosystem.
              </p>
              <button className="bg-white text-black px-12 py-6 rounded-2xl font-bold flex items-center gap-4 hover:bg-neutral-200 transition-all group shadow-2xl">
                Apply for Certification <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
           </div>
           <div className="lg:w-1/2 grid grid-cols-2 gap-8 features-grid">
              {[
                { icon: <Award />, title: 'Premium Branding', desc: 'Leverage our reputation for luxury engineering.' },
                { icon: <GraduationCap />, title: 'Masterclasses', desc: 'Direct technical training from Swiss engineers.' },
                { icon: <Users />, title: 'Lead Access', desc: 'Direct connections to premium estate owners.' },
                { icon: <ShieldCheck />, title: 'Top Warranty', desc: 'Industry leading support for all components.' },
              ].map((item, i) => (
                <div key={i} className="feature-box p-12 bg-white/5 backdrop-blur-md rounded-[48px] border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-700">
                   <div className="text-white mb-8 p-4 bg-white/10 rounded-2xl w-fit border border-white/10">{React.cloneElement(item.icon, { size: 32 })}</div>
                   <h4 className="text-xl font-bold mb-4 tracking-tight text-white">{item.title}</h4>
                   <p className="text-sm text-white/40 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default GainProfession;
