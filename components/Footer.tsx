
import React from 'react';
import { Twitter, Linkedin, Send, Mail, Globe } from 'lucide-react';
import { PageID } from '../App';

interface FooterProps {
  onNavigate?: (page: PageID) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (id: PageID) => {
    if (onNavigate) onNavigate(id);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="relative bg-[#0A0A0A] text-white pt-24 pb-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute top-0 left-0 w-full h-[500px] z-0">
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000" 
          alt="Landscape background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/0 via-[#0A0A0A]/80 to-[#0A0A0A]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Section: Newsletter Heading & Subscription */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-32">
          <h2 className="text-7xl md:text-[9rem] font-bold tracking-tighter leading-none select-none">
            Newsletter
          </h2>
          <div className="flex flex-col gap-4 w-full max-w-md">
            <span className="text-sm font-bold text-white/90">Subscribe to newsletter</span>
            <div className="relative">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-400">
                <Mail size={20} />
              </div>
              <input 
                type="email" 
                placeholder="Your email here"
                className="w-full bg-white text-neutral-900 rounded-2xl py-5 pl-14 pr-16 text-sm font-medium focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-black text-white rounded-xl flex items-center justify-center hover:bg-neutral-800 transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 border-t border-white/10 pt-20">
          {/* Logo Column */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNav('home')}>
              <span className="text-2xl font-bold tracking-tight">Vsolar</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-[240px]">
              All the Lorem Ipsum generators on the Internet to there repeat.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all border border-white/5">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all border border-white/5">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all border border-white/5">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-bold mb-8 text-lg">Quick links</h4>
            <ul className="space-y-4 text-white/60 text-sm font-medium">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Menu', id: 'menu' },
                { name: 'Order Online', id: 'order-online' },
                { name: 'About Us', id: 'about-us' }
              ].map(link => (
                <li key={link.id}>
                  <button onClick={() => handleNav(link.id as PageID)} className="hover:text-white transition-colors">{link.name}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h4 className="font-bold mb-8 text-lg">Information</h4>
            <ul className="space-y-4 text-white/60 text-sm font-medium">
              {[
                { name: 'Careers', id: 'careers' },
                { name: 'Privacy Policy', id: 'privacy-policy' },
                { name: 'Order Online', id: 'order-online' },
                { name: 'Terms of Service', id: 'terms-of-service' }
              ].map(link => (
                <li key={link.name + link.id}>
                  <button onClick={() => handleNav(link.id as PageID)} className="hover:text-white transition-colors">{link.name}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Discover Column */}
          <div>
            <h4 className="font-bold mb-8 text-lg">Discover</h4>
            <ul className="space-y-4 text-white/60 text-sm font-medium">
              {[
                { name: 'Solution', id: 'solution' },
                { name: 'Career', id: 'careers' },
                { name: 'Gain Profession', id: 'gain-profession' },
                { name: 'New Arrivals', id: 'new-arrivals' }
              ].map(link => (
                <li key={link.name}>
                  <button onClick={() => handleNav(link.id as PageID)} className="hover:text-white transition-colors">{link.name}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center pt-12 border-t border-white/5">
          <p className="text-xs font-bold uppercase tracking-widest text-white/40">
            Copyright @2024 Vsolar - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
