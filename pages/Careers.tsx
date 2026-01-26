
import React from 'react';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';

const Careers: React.FC = () => {
  const jobs = [
    { title: 'Hardware Engineer', dept: 'Engineering', loc: 'Zurich, CH' },
    { title: 'Sustainability Lead', dept: 'Impact', loc: 'Remote / Berlin' },
    { title: 'UX Designer', dept: 'Product', loc: 'London, UK' },
    { title: 'Energy Market Analyst', dept: 'Software', loc: 'San Francisco, US' },
  ];

  return (
    <div className="pt-48 pb-24 bg-[#0A0A0A] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24 text-center">
           <span className="text-xs font-bold tracking-[0.5em] uppercase text-white/40 mb-6 block">Join the Revolution</span>
           <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-10 text-white">Powering <span className="text-white/20 italic">Careers.</span></h1>
           <p className="text-xl text-white/40 max-w-xl mx-auto font-light leading-relaxed">
             We are looking for visionaries who want to redefine how the world interacts with energy. Join our global mission.
           </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {jobs.map((job, i) => (
            <div key={i} className="group bg-white/5 backdrop-blur-md p-10 rounded-[40px] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer">
               <div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{job.title}</h3>
                  <div className="flex items-center gap-6 text-white/40 font-bold uppercase text-[10px] tracking-widest">
                     <span className="flex items-center gap-2"><Briefcase size={12} /> {job.dept}</span>
                     <span className="flex items-center gap-2"><MapPin size={12} /> {job.loc}</span>
                  </div>
               </div>
               <button className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowRight size={24} />
               </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
