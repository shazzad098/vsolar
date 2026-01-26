
import React from 'react';
import { Sun, Home, Wind } from 'lucide-react';

const VisualStoryTiles: React.FC = () => {
  const stories = [
    {
      title: 'The Mission Of Energy',
      desc: 'Renew Home is working with leading brands making there everything thermostats',
      image: 'https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=800',
      icon: <Sun size={20} />
    },
    {
      title: 'Serenity Of The Steppe',
      desc: 'Nestled in the vast, open grasslands, a traditional yurt stands as a symbol of nomadic heritage and...',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800',
      icon: <Home size={20} />
    },
    {
      title: 'Echoes Of The Past',
      desc: 'A dusty rural road stretches into the horizon, flanked by weathered houses and towering utility...',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800',
      icon: <Wind size={20} />
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F5F5F3]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
           <span className="text-xs font-bold tracking-[0.4em] uppercase text-neutral-400 mb-4 block">More Energy More Savings</span>
           <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-neutral-900 leading-none">
             Transform Your Home's A<br />Powerful Of The Force.
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {stories.map((story, i) => (
             <div key={i} className="group relative aspect-[4/5] rounded-[48px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700">
                <img src={story.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute top-8 left-8">
                   <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                      {story.icon}
                   </div>
                </div>

                <div className="absolute bottom-10 left-8 right-8">
                   <h3 className="text-white text-2xl font-bold mb-4 tracking-tight">{story.title}</h3>
                   <p className="text-white/60 text-sm font-light leading-relaxed">
                      {story.desc}
                   </p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default VisualStoryTiles;
