
import React, { useEffect, useRef } from 'react';
import { Home, Battery, Smartphone, Cloud, Zap, Shield, BarChart3, Globe, Check } from 'lucide-react';
import gsap from 'gsap';

const NestRenew: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reveal-text', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out'
      });

      gsap.from('.step-card', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.steps-grid',
          start: 'top 80%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const features = [
    { title: 'Predictive Storage', desc: 'AI-driven battery management that charges when energy is cheapest.', icon: <Battery className="w-6 h-6" /> },
    { title: 'Grid Resilience', desc: 'Protects your home from blackouts with millisecond switching.', icon: <Shield className="w-6 h-6" /> },
    { title: 'Real-time Monitoring', desc: 'Gram-level carbon tracking via the Vsolar mobile app.', icon: <Smartphone className="w-6 h-6" /> },
    { title: 'Zero Waste Sync', desc: 'Excess energy is shared with neighbors to eliminate waste.', icon: <Globe className="w-6 h-6" /> },
  ];

  const steps = [
    { number: '01', title: 'Seamless Audit', desc: 'We analyze your 12-month usage history to design your custom hub.' },
    { number: '02', title: 'Modular Install', desc: 'Our team installs the Nest Hub in under 4 hours with no power disruption.' },
    { number: '03', title: 'Auto-Optimization', desc: 'The system begins learning your habits immediately, saving you money from day one.' },
  ];

  const tiers = [
    {
      name: 'Essential',
      price: '$0/mo',
      desc: 'Smart monitoring for traditional grid users.',
      features: ['Basic energy insights', 'Monthly carbon reports', 'App access', 'Weather alerts'],
      cta: 'Get Started',
      highlight: false
    },
    {
      name: 'Premium',
      price: '$29/mo',
      desc: 'The full Vsolar experience with zero upfront cost.',
      features: ['Full solar hardware suite', 'AI-Predictive storage', 'VPP energy credits', 'Priority support', 'Lifetime hardware warranty'],
      cta: 'Upgrade to Premium',
      highlight: true
    }
  ];

  return (
    <div ref={containerRef} className="bg-[#0A0A0A] text-white min-h-screen overflow-hidden">
      {/* Immersive Hero */}
      <section className="relative pt-48 pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="reveal-text text-xs font-bold tracking-[0.4em] uppercase text-white/40 mb-6 block">The Future of Residential Energy</span>
            <h1 className="reveal-text text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-10">
              Your home,<br /><span className="text-white/40">unplugged.</span>
            </h1>
            <p className="reveal-text text-white/50 text-xl leading-relaxed mb-12 max-w-lg font-light">
              Nest Renew is the first fully autonomous energy subscription. It manages your solar generation, storage, and grid interaction so you never have to think about a utility bill again.
            </p>
            <div className="reveal-text flex flex-wrap gap-6">
              <button className="bg-white text-black px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform">
                Apply for Nest Renew
              </button>
              <button className="border border-white/20 px-10 py-5 rounded-2xl font-bold hover:bg-white/5 transition-colors">
                View System Specs
              </button>
            </div>
          </div>
          <div className="relative">
             <div className="absolute -inset-20 bg-blue-500/10 blur-[120px] rounded-full" />
             <div className="relative rounded-[48px] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full aspect-[4/5] object-cover opacity-80"
                  alt="Modern Home with Nest Renew"
                />
                <div className="absolute bottom-10 left-10 glass p-8 rounded-3xl border-white/10 max-w-xs">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                         <Zap className="text-green-500" />
                      </div>
                      <div>
                         <span className="block text-xs text-white/40 font-bold uppercase tracking-wider">Current Power</span>
                         <span className="text-xl font-bold">100% Renewable</span>
                      </div>
                   </div>
                   <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full w-[85%]" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-6 md:px-12 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((f, i) => (
              <div key={i} className="group">
                <div className="mb-8 p-4 bg-white/10 w-fit rounded-2xl group-hover:bg-white group-hover:text-black transition-all duration-500">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-white/40 font-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works - Steps */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How Nest Renew Works.</h2>
            <p className="text-white/40 max-w-2xl mx-auto font-light">The transition is effortless. We've designed a three-step process to get your home running on pure sunlight.</p>
          </div>
          <div className="steps-grid grid grid-cols-1 md:grid-cols-3 gap-16">
            {steps.map((step, i) => (
              <div key={i} className="step-card relative p-10 bg-white/5 rounded-[40px] border border-white/5">
                <span className="text-5xl font-bold text-white/10 absolute top-8 right-10">{step.number}</span>
                <h3 className="text-2xl font-bold mb-6">{step.title}</h3>
                <p className="text-white/40 leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Section */}
      <section className="py-32 px-6 md:px-12 bg-neutral-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="order-2 lg:order-1 relative">
              <div className="bg-black p-8 rounded-[40px] border border-white/10">
                 <div className="flex justify-between items-center mb-10">
                    <h4 className="font-bold text-sm tracking-widest uppercase text-white/40">Energy Consumption Analytics</h4>
                    <BarChart3 className="text-white/20" size={20} />
                 </div>
                 <div className="space-y-6">
                    {[
                      { label: 'HVAC Optimization', val: 78, color: 'bg-blue-500' },
                      { label: 'EV Charging', val: 45, color: 'bg-green-500' },
                      { label: 'Appliance Intelligence', val: 92, color: 'bg-purple-500' },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-2">
                           <span className="text-sm font-medium">{item.label}</span>
                           <span className="text-sm text-white/40">{item.val}% Efficiency Increase</span>
                        </div>
                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                           <div className={`${item.color} h-full transition-all duration-1000`} style={{ width: `${item.val}%` }} />
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
           </div>
           <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-8">Data-driven Savings.</h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8 font-light">
                Our Nest Hub doesn't just store power—it analyzes real-time grid prices and weather patterns to make micro-adjustments to your home's consumption.
              </p>
              <ul className="space-y-4">
                 {['Average $1,200 annual savings', 'Zero carbon emissions during peak hours', '24/7 autonomous battery management'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                       <Check size={18} className="text-green-500" />
                       <span className="text-white/80 font-medium">{item}</span>
                    </li>
                 ))}
              </ul>
           </div>
        </div>
      </section>

      {/* Pricing / Tiers */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose your Tier.</h2>
             <p className="text-white/40">Transparency in every watt. Select the plan that fits your life.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tiers.map((tier, i) => (
              <div key={i} className={`p-12 rounded-[48px] border transition-all duration-700 ${tier.highlight ? 'bg-white text-black border-white' : 'bg-white/5 border-white/10 text-white'}`}>
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold mb-6 tracking-tighter">{tier.price}</div>
                <p className={`mb-10 text-sm ${tier.highlight ? 'text-black/60' : 'text-white/40'}`}>{tier.desc}</p>
                <div className={`w-full h-[1px] mb-10 ${tier.highlight ? 'bg-black/10' : 'bg-white/10'}`} />
                <ul className="space-y-4 mb-12">
                  {tier.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check size={16} className={tier.highlight ? 'text-black mt-1' : 'text-white/40 mt-1'} />
                      <span className="text-sm font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-5 rounded-2xl font-bold transition-all ${tier.highlight ? 'bg-black text-white hover:bg-neutral-800' : 'bg-white text-black hover:bg-neutral-100'}`}>
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NestRenew;
