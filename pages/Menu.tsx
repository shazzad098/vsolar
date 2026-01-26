
import React from 'react';

const Menu: React.FC = () => {
  const categories = [
    { title: 'Residential', items: ['Custom Solar Tiles', 'Battery Integration', 'Smart Hub Installation', 'Energy Audits'] },
    { title: 'Commercial', items: ['Solar Facades', 'Industrial Storage', 'Microgrid Planning', 'Carbon Offset Strategy'] },
    { title: 'Services', items: ['Maintenance & Tuning', 'AI Optimization', 'Certification Training', 'Consultation'] },
  ];

  return (
    <div className="pt-48 pb-24 bg-[#0A0A0A] text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-24 text-center text-white">Service <span className="text-white/20 italic">Menu.</span></h1>
        
        <div className="space-y-24">
          {categories.map((cat, i) => (
            <div key={i}>
               <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-white/40 mb-12 border-b border-white/10 pb-4">{cat.title}</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {cat.items.map((item, j) => (
                    <div key={j} className="flex justify-between items-center group cursor-pointer py-4">
                       <span className="text-2xl font-light text-white/80 group-hover:text-white group-hover:translate-x-2 transition-all">{item}</span>
                       <div className="w-12 h-[1px] bg-white/10 group-hover:w-20 group-hover:bg-white/40 transition-all" />
                    </div>
                  ))}
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
