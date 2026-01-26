
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Handshake, Zap, Globe, Shield, ArrowRight, ExternalLink, Cpu, Building2, Beaker } from 'lucide-react';

const PARTNERS = [
  { 
    name: 'Tesla Energy', 
    role: 'Storage Solutions', 
    category: 'Technology',
    desc: 'Joint development of the next-gen Powerwall integration for high-load luxury estates.',
    icon: <Zap />,
    color: 'from-red-500/20 to-transparent'
  },
  { 
    name: 'Google Cloud', 
    role: 'Smart Grid AI', 
    category: 'Software',
    desc: 'Leveraging Vertex AI to predict residential consumption patterns with 99.2% accuracy.',
    icon: <Cpu />,
    color: 'from-blue-500/20 to-transparent'
  },
  { 
    name: 'Foster + Partners', 
    role: 'Architectural Design', 
    category: 'Design',
    desc: 'Defining the aesthetic language of building-integrated photovoltaics (BIPV).',
    icon: <Building2 />,
    color: 'from-neutral-500/20 to-transparent'
  },
  { 
    name: 'BMW i', 
    role: 'E-Mobility Integration', 
    category: 'Technology',
    desc: 'Bi-directional charging protocols connecting the driveway to the home grid.',
    icon: <Zap />,
    color: 'from-sky-400/20 to-transparent'
  },
  { 
    name: 'NASA', 
    role: 'Solar Cell Research', 
    category: 'Research',
    desc: 'Commercializing space-grade multi-junction cells for high-efficiency terrestrial use.',
    icon: <Beaker />,
    color: 'from-orange-500/20 to-transparent'
  },
  { 
    name: 'UN Climate', 
    role: 'Global Impact Program', 
    category: 'Sustainability',
    desc: 'Our primary partner in the 2030 Carbon Neutral initiative across developing nations.',
    icon: <Globe />,
    color: 'from-emerald-500/20 to-transparent'
  },
  { 
    name: 'Goldman Sachs', 
    role: 'Financing Solutions', 
    category: 'Software',
    desc: 'Enabling zero-upfront financing models for community solar projects.',
    icon: <Shield />,
    color: 'from-yellow-500/20 to-transparent'
  },
  { 
    name: 'Autodesk', 
    role: 'BIM Integration', 
    category: 'Design',
    desc: 'Native Vsolar plug-ins for Revit, allowing architects to simulate energy in real-time.',
    icon: <Building2 />,
    color: 'from-rose-500/20 to-transparent'
  },
  { 
    name: 'Schneider Electric', 
    role: 'Hardware Distribution', 
    category: 'Technology',
    desc: 'Global supply chain partnership ensuring Vsolar hardware availability in 100+ countries.',
    icon: <Zap />,
    color: 'from-green-600/20 to-transparent'
  }
];

const CATEGORIES = ['All', 'Technology', 'Software', 'Design', 'Research', 'Sustainability'];

const Partners: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const filteredPartners = filter === 'All' 
    ? PARTNERS 
    : PARTNERS.filter(p => p.category === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from('.partner-hero-content > *', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });

      // Stats reveal
      gsap.from('.partner-stat', {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.partner-stats-grid',
          start: 'top 85%'
        }
      });
      
      // Floating blobs parallax
      gsap.to('.bg-blob', {
        y: '20%',
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Animation when filter changes
  useEffect(() => {
    if (cardsRef.current) {
      gsap.fromTo('.partner-card', 
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.05, ease: 'power2.out' }
      );
    }
  }, [filter]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050505] text-white pt-32 pb-24 overflow-hidden selection:bg-white selection:text-black">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="bg-blob absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="bg-blob absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-500/10 rounded-full blur-[150px]" />
        <div className="bg-blob absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Hero Section */}
        <div className="partner-hero-content text-center mb-24 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
             <Handshake className="text-white/40" size={24} />
             <span className="text-xs font-bold tracking-[0.5em] uppercase text-white/40">Our Ecosystem</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
            Built on <span className="text-white/30 italic">Collective</span> Intelligence.
          </h1>
          <p className="text-xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto">
            Vsolar isn't a solitary solution. We are a nexus of innovation, bringing together global leaders in engineering, finance, and sustainability to accelerate the clean energy transition.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="partner-stats-grid grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {[
            { label: 'Strategic Alliances', value: '45+' },
            { label: 'Global Projects', value: '1.2k' },
            { label: 'R&D Investment', value: '$850m' },
            { label: 'Shared Patents', value: '142' }
          ].map((stat, i) => (
            <div key={i} className="partner-stat bg-white/5 border border-white/10 rounded-[32px] p-8 text-center hover:bg-white/[0.08] transition-all group">
              <span className="block text-4xl md:text-5xl font-bold tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-500">{stat.value}</span>
              <span className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/40">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat 
                  ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                  : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {filteredPartners.map((p, i) => (
            <div 
              key={p.name} 
              className="partner-card group relative bg-[#0D0D0D] border border-white/5 rounded-[48px] p-10 overflow-hidden hover:border-white/20 transition-all duration-700"
            >
              {/* Card Gradient Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                   <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-white/10 transition-all duration-500 group-hover:rotate-6">
                      {React.cloneElement(p.icon as React.ReactElement, { size: 28 })}
                   </div>
                   <div className="text-[10px] font-bold tracking-widest uppercase text-white/20 group-hover:text-white/40 transition-colors">
                      {p.category}
                   </div>
                </div>

                <div className="mb-10">
                  <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-500">{p.name}</h3>
                  <p className="text-white/40 font-light text-sm leading-relaxed mb-4 min-h-[60px]">
                    {p.desc}
                  </p>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/20">{p.role}</span>
                </div>

                <div className="pt-8 border-t border-white/5 flex items-center justify-between group-hover:border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 group-hover:text-white transition-colors">View Collaboration</span>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA / Alliance Section */}
        <section className="bg-white text-black rounded-[64px] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 group overflow-hidden relative">
          {/* Animated Background SVG Pattern */}
          <svg className="absolute inset-0 opacity-[0.03] pointer-events-none" width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          <div className="relative z-10 max-w-2xl">
             <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-none">
                Join the <span className="italic">Alliance</span> for a cleaner future.
             </h2>
             <p className="text-lg font-light leading-relaxed mb-0 opacity-70">
                Are you pioneering new technologies or redefining the built environment? Let's discuss how we can integrate Vsolar into your ecosystem.
             </p>
          </div>
          <button className="relative z-10 bg-black text-white px-12 py-6 rounded-3xl font-bold text-lg flex items-center gap-4 hover:scale-105 transition-all shadow-2xl active:scale-95 group/btn">
             Partner With Us
             <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
          </button>
        </section>
      </div>

      {/* Footer Decoration */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-32 border-t border-white/5 pt-12 text-center">
        <p className="text-white/20 text-xs font-bold uppercase tracking-[0.4em]">Strategic Partnerships • Innovation Hub • Vsolar Global Network</p>
      </div>
    </div>
  );
};

export default Partners;
