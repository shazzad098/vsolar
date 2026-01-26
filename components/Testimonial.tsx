
import React from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const Testimonial: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
           {/* Left Content */}
           <div className="lg:col-span-3 bg-[#EFEFEF] rounded-[60px] p-12 md:p-20 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-12 left-12 opacity-[0.05]">
                 <Quote size={120} />
              </div>
              <div className="relative z-10">
                 <p className="text-2xl md:text-3xl font-light text-neutral-800 leading-relaxed mb-16 italic">
                   Renew Home Is Working With Leading Brands There Making There Everything From Thermostats To Water Of The Heaters, Integrating New Energy. Energy To Savings Made Easy With Nirusolar. E Making There Everything From Thermostats To Water Of The Heaters, Integrating
                 </p>
                 <div className="w-full h-[1px] bg-neutral-300/50 mb-12" />
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <img src="https://i.pravatar.cc/150?u=john" className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-sm" alt="John Alex" />
                       <div>
                          <h4 className="font-bold text-neutral-900 text-lg">John Alex</h4>
                          <span className="text-xs text-neutral-400 font-bold uppercase tracking-widest">Business Owner</span>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <button className="w-14 h-14 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all">
                          <ArrowLeft size={20} />
                       </button>
                       <button className="w-14 h-14 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 transition-all">
                          <ArrowRight size={20} />
                       </button>
                    </div>
                 </div>
              </div>
           </div>

           {/* Right Image */}
           <div className="lg:col-span-2 relative">
              <div className="rounded-[60px] overflow-hidden h-full shadow-2xl relative">
                 <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" />
                 <div className="absolute top-10 right-10 flex items-center gap-3">
                    <span className="text-white font-bold tracking-widest text-sm">1/5</span>
                    <div className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center p-1">
                       <div className="w-full h-full border-2 border-white rounded-full border-t-transparent" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
