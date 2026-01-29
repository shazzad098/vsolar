
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Globe, Leaf, Zap, Award, ArrowRight } from 'lucide-react';

const Impact: React.FC = () => {
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
      gsap.from('.impact-stat', {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: { trigger: '.stats-grid', start: 'top 80%' }
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

  const stats = [
    { label: 'Carbon Offset', value: '450k', unit: 'Tons', icon: <Leaf className="text-green-500" /> },
    { label: 'Clean Energy', value: '1.2b', unit: 'kWh', icon: <Zap className="text-yellow-500" /> },
    { label: 'Global Reach', value: '24', unit: 'Countries', icon: <Globe className="text-blue-500" /> },
    { label: 'Sustainability Awards', value: '15+', unit: 'Global', icon: <Award className="text-purple-500" /> },
  ];

  return (
    <div ref={containerRef} className="pt-48 pb-24 bg-[#0A0A0A] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-32">
          <span className="text-xs font-bold tracking-[0.5em] uppercase text-white/40 mb-8 block">Measuring Change</span>
          <h1 className="text-2xl md:text-5xl tracking-[0.4em] leading-tight mb-12">
            {renderSpacedText("Quantifying")} <br />
            {renderSpacedText("Our Impact.")}
          </h1>
        </div>

        <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, i) => (
            <div key={i} className="impact-stat bg-white/5 border border-white/10 p-12 rounded-[48px] group hover:bg-white hover:text-black transition-all duration-700">
              <div className="mb-10 p-4 bg-white/10 rounded-2xl w-fit shadow-sm group-hover:bg-neutral-200">{stat.icon}</div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold tracking-tighter">{stat.value}</span>
                <span className="text-xs font-bold opacity-40 uppercase tracking-widest">{stat.unit}</span>
              </div>
              <p className="text-white/40 group-hover:text-black/60 font-medium tracking-wide uppercase text-[10px]">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="rounded-[60px] overflow-hidden aspect-video shadow-3xl relative group border border-white/10">
            <img 
              src="https://cdn.pixabay.com/photo/2013/10/06/18/58/solar-field-191683_1280.jpg" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000" 
              alt="Solar Field"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8 tracking-tight text-white">Regenerative Ecosystems</h2>
            <p className="text-white/40 text-lg leading-relaxed mb-10 font-light">
              We don't just install panels; we regenerate local economies and ecosystems. Every Vsolar project includes a mandatory biodiversity plan, ensuring that our presence supports local flora and fauna.
            </p>
            <button className="flex items-center gap-4 bg-white text-black px-10 py-5 rounded-2xl font-bold hover:bg-neutral-200 transition-all group">
              Download 2024 Report <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
