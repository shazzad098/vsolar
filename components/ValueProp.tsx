
import React from 'react';
import { Sun, Home } from 'lucide-react';

const ValueProp: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F5F5F3]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
           <span className="text-xs font-bold tracking-[0.4em] uppercase text-neutral-400 mb-4 block">More Energy More Savings</span>
           <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-neutral-900 leading-none">
             Experience the future<br />of Solar Power.
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Gauge Card */}
          <div className="bg-neutral-500 relative aspect-[4/5] rounded-[48px] overflow-hidden group">
             <img src="https://images.unsplash.com/photo-1509391366360-fe5bb6583e2f?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
             <div className="absolute top-10 left-10">
                <h3 className="text-white text-3xl font-bold leading-tight">Making Everything<br />From Nirosolar</h3>
             </div>
             <div className="absolute bottom-10 left-10 flex flex-col items-start">
                <div className="flex items-baseline gap-1 mb-2">
                   <span className="text-white/60 text-sm">Saving-</span>
                   <span className="text-white text-3xl font-bold tracking-tighter">610 kV</span>
                </div>
                {/* Visual Gauge Mockup */}
                <div className="relative w-32 h-16 overflow-hidden">
                   <div className="w-32 h-32 border-[12px] border-white/20 rounded-full" />
                   <div className="absolute top-0 left-0 w-32 h-32 border-[12px] border-white rounded-full border-t-transparent border-r-transparent rotate-45" />
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full" />
                </div>
             </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-12 rounded-[48px] flex flex-col shadow-sm hover:shadow-xl transition-all duration-500">
             <div className="w-16 h-16 bg-neutral-100 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-neutral-900 transition-colors">
                <Sun className="text-neutral-900" size={32} />
             </div>
             <h3 className="text-2xl font-bold text-neutral-900 mb-10">Solar Energy Best<br />Production</h3>
             <p className="text-neutral-500 font-light leading-relaxed mb-8 flex-1">
               Solar energy is the radiant light and heat emitted by the sun, harnessed through various technologies to generate electricity or heat. It's a renewable energy source, meaning it won't run out as long as the sun shines, making it more.
             </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-12 rounded-[48px] flex flex-col shadow-sm hover:shadow-xl transition-all duration-500">
             <div className="w-16 h-16 bg-neutral-100 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-neutral-900 transition-colors">
                <Home className="text-neutral-900" size={32} />
             </div>
             <h3 className="text-2xl font-bold text-neutral-900 mb-10">We Are Building<br />Better Future</h3>
             <p className="text-neutral-500 font-light leading-relaxed mb-8 flex-1">
               Solar energy is the radiant light and heat emitted by the sun, harnessed through various technologies to generate electricity or heat. It's a renewable energy source, meaning it won't run out as long as the sun shines, making it more.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
