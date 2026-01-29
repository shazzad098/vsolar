import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { PageID } from '../App';

interface NavbarProps {
  onNavigate: (page: PageID) => void;
  currentPage: PageID;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // স্ক্রল করলে ব্যাকগ্রাউন্ড কালচে হবে
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; id: PageID }[] = [
    { name: 'Impact', id: 'impact' },
    { name: 'Nest renew', id: 'nest-renew' },
    { name: 'Press', id: 'press' },
    { name: 'Partners', id: 'partners' },
    { name: 'About us', id: 'about-us' },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 ${
          isScrolled ? 'bg-black/80 backdrop-blur-lg py-4 border-b border-white/5' : 'py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section - ছবির মতো আইকন যোগ করা হয়েছে */}
          <div 
            onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
            className="flex items-center gap-2 cursor-pointer group"
          >
            {/* V Shape Logo Icon */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
               <path d="M4 4L12 20L20 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-white text-2xl font-bold tracking-tight">Vsolar</span>
          </div>

          {/* Desktop Navigation - ছবির মতো Glass Pill Shape */}
          <div className="hidden lg:flex items-center gap-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full p-1.5 shadow-2xl">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`text-sm px-5 py-2 rounded-full transition-all duration-300 font-semibold tracking-wide ${
                  currentPage === link.id 
                    ? 'bg-white text-black shadow-sm' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-transform duration-500 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden flex flex-col items-center justify-center gap-8`}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => { onNavigate(link.id); setMobileMenuOpen(false); }}
            className={`text-3xl font-bold tracking-tight transition-colors ${currentPage === link.id ? 'text-white' : 'text-neutral-500 hover:text-white'}`}
          >
            {link.name}
          </button>
        ))}
        <button
          onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
          className={`text-3xl font-bold tracking-tight transition-colors ${currentPage === 'home' ? 'text-white' : 'text-neutral-500 hover:text-white'}`}
        >
          Home
        </button>
      </div>
    </>
  );
};

export default Navbar;