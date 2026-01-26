
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const NewArrivals: React.FC = () => {
  const products = [
    { name: 'V-Cell X1', tag: 'New Technology', desc: 'Our first multi-junction cell with 28.5% efficiency.', img: 'https://images.unsplash.com/photo-1509391366360-fe5bb6583e2f?auto=format&fit=crop&q=80&w=800' },
    { name: 'Glass Wall Pro', tag: 'Architectural', desc: 'Translucent solar glass for vertical building facades.', img: 'https://images.unsplash.com/photo-1449156001437-3a1621dfbe69?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="pt-48 pb-24 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24">
           <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-yellow-400" size={24} />
              <span className="text-xs font-bold tracking-[0.5em] uppercase text-white/40">Latest Innovation</span>
           </div>
           <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-10">New <span className="text-white/30 italic">Arrivals.</span></h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((p, i) => (
            <div key={i} className="group relative rounded-[60px] overflow-hidden aspect-[4/5]">
               <img src={p.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
               <div className="absolute bottom-16 left-16 right-16">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-4 block">{p.tag}</span>
                  <h3 className="text-4xl font-bold mb-6">{p.name}</h3>
                  <p className="text-white/60 mb-10 font-light leading-relaxed">{p.desc}</p>
                  <button className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:gap-6 transition-all">
                    Pre-Order Now <ArrowRight size={20} />
                  </button>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
