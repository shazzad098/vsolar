
import React from 'react';
import { Check, ArrowRight, Zap, Target } from 'lucide-react';

const FeatureSplit: React.FC = () => {
   return (
      <section className="py-24 md:py-32 bg-white">
         <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
               <span className="text-xs font-bold tracking-[0.4em] uppercase text-neutral-400 mb-6 block">More Energy More Savings</span>
               <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-neutral-900 mb-10 leading-none">
                  Energy Savings<br />Made Easy With<br />The Solar
               </h2>
               <p className="text-lg text-neutral-500 font-light mb-12 leading-relaxed">
                  Solar energy is the radiant light and heat emitted by the sun, harnessed through various technologies to generate electricity or heat. It's a renewable energy source, meaning it won't run out as long as the sun shines, making it more.
               </p>

               <div className="space-y-6 mb-12">
                  <div className="flex items-center gap-4">
                     <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                        <Check size={14} strokeWidth={4} />
                     </div>
                     <span className="font-bold text-neutral-900">Provides insights into budget performance.</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                        <Check size={14} strokeWidth={4} />
                     </div>
                     <span className="font-bold text-neutral-900">Provides insights into budget performance.</span>
                  </div>
               </div>

               <div className="group cursor-pointer w-fit mx-auto scale-90 md:scale-100 overflow-hidden rounded-2xl">
                  <div className="relative bg-neutral-900 px-8 md:px-10 py-4 md:py-5 flex items-center gap-3 transition-all duration-300 group-hover:bg-neutral-800">
                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                     <span className="relative z-10 text-white font-bold text-base md:text-lg">Get Started</span>
                     <ArrowRight className="relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1" size={24} />
                  </div>
               </div>
            </div>

            <div className="order-1 lg:order-2 relative">
               <div className="rounded-[60px] overflow-hidden shadow-2xl relative">
                  <img
                     src="https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80&w=1200"
                     alt="Solar House"
                     className="w-full aspect-square object-cover"
                  />
                  {/* Savings Gauge Overlay */}
                  <div className="absolute bottom-10 right-10 flex flex-col gap-4">
                     <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[40px] flex items-center gap-6 shadow-2xl">
                        <div className="relative w-20 h-20">
                           <svg className="w-full h-full transform -rotate-90">
                              <circle cx="40" cy="40" r="34" fill="none" stroke="white" strokeWidth="8" strokeOpacity="0.1" />
                              <circle cx="40" cy="40" r="34" fill="none" stroke="white" strokeWidth="8" strokeDasharray="213" strokeDashoffset="60" />
                           </svg>
                           <div className="absolute inset-0 flex items-center justify-center text-white">
                              <Zap size={20} fill="white" />
                           </div>
                        </div>
                        <div>
                           <span className="text-white/60 text-xs block uppercase font-bold tracking-widest mb-1">Total Savings</span>
                           <div className="flex items-baseline gap-1">
                              <span className="text-white text-4xl font-bold tracking-tighter">700</span>
                              <span className="text-white/60 text-sm">/kV</span>
                           </div>
                        </div>
                     </div>

                     <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-full flex items-center gap-4 shadow-2xl">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                           <Target size={18} className="text-white" />
                        </div>
                        <span className="text-white text-sm font-bold uppercase tracking-wider">Making everything of nirosolar</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default FeatureSplit;
