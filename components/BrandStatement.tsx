
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const BrandStatement: React.FC = () => {
  const cards = [
    {
      title: 'Experience the future of Solar Power.',
      desc: 'Renew Home is working with leading brands making...',
      img: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=300'
    },
    {
      title: 'Embrace the Future of Solar Energy.',
      desc: 'Nestled in the vast, open grasslands, a traditional yurt st...',
      img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=300'
    },
    {
      title: 'Clean Energy for a Limitless Future.',
      desc: 'A dusty rural road stretches into the horizon, flanked by weather...',
      img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=300'
    }
  ];

  return (
    <section className="relative h-[110vh] w-full flex flex-col items-center justify-center overflow-hidden bg-black py-24">
      {/* Background with Parallax effect simulation via fixed bg */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509391366360-fe5bb6583e2f?auto=format&fit=crop&q=80&w=2000"
          alt="Sustainability landscape"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </div>

      <div className="relative z-10 text-center px-6 mb-32">
        <span className="text-white/60 text-xs font-bold uppercase tracking-[0.4em] mb-6 block">More Power Efficiency</span>
        <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-12">
          Where sustainability<br />meets style.
        </h2>
        <div className="group cursor-pointer w-fit mx-auto scale-90 md:scale-100">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-8 md:px-10 py-4 md:py-5 rounded-2xl flex items-center gap-3 transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            <span className="text-white font-bold text-base md:text-lg">Get Started</span>
            <ArrowRight className="text-white transition-transform duration-300 group-hover:translate-x-1" size={24} />
          </div>
        </div>
      </div>

      {/* Floating Info Cards - Triple Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-2xl border border-white/20 p-6 rounded-[40px] flex gap-6 items-center group cursor-pointer hover:bg-white/20 transition-all duration-500">
            <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 relative">
              <img src={card.img} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <Play size={20} fill="white" className="text-white translate-x-0.5" />
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-2 group-hover:text-blue-300 transition-colors">{card.title}</h4>
              <p className="text-white/40 text-[10px] leading-relaxed uppercase tracking-wider">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandStatement;
