
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Press: React.FC = () => {
  const articles = [
    { date: 'Oct 24, 2024', source: 'Forbes', title: 'Vsolar: Redefining the Luxury Renewable Market' },
    { date: 'Sep 12, 2024', source: 'The Verge', title: 'Why Vsolar’s New Cells Are 40% More Efficient' },
    { date: 'Aug 05, 2024', source: 'Wired', title: 'The Future of Energy Architecture is Here' },
    { date: 'Jul 20, 2024', source: 'Architectural Digest', title: 'Integrating Solar into Ultra-Modern Homes' },
  ];

  return (
    <div className="pt-48 pb-24 px-6 md:px-12 bg-[#0A0A0A] text-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-white/40 mb-4 block">Newsroom</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">Press & <span className="text-white/20 italic">Media.</span></h1>
        </div>

        <div className="space-y-6">
          {articles.map((article, i) => (
            <a 
              key={i} 
              href="#" 
              className="group flex flex-col md:flex-row md:items-center justify-between p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-700"
            >
              <div className="mb-4 md:mb-0">
                <div className="flex items-center gap-4 mb-3">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 group-hover:text-black/40">{article.date}</span>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-white group-hover:text-black">{article.source}</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight">{article.title}</h2>
              </div>
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-black/20">
                <ExternalLink size={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Press;
