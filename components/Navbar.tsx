
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
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
      setIsScrolled(window.scrollY > 50);
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-6 md:py-8 ${
          isScrolled ? 'bg-black/80 backdrop-blur-lg py-4' : ''
        }`}
      >
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
            className="flex items-center gap-1 cursor-pointer"
          >
            <span className="text-white text-xl md:text-2xl font-bold tracking-tight">Vsolar</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full p-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`text-sm px-6 py-2.5 rounded-full transition-all duration-300 font-medium ${
                  currentPage === link.id 
                    ? 'bg-white text-neutral-900' 
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-black transition-transform duration-500 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden flex flex-col items-center justify-center gap-8`}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => { onNavigate(link.id); setMobileMenuOpen(false); }}
            className={`text-3xl font-bold tracking-tight ${currentPage === link.id ? 'text-white' : 'text-neutral-500'}`}
          >
            {link.name}
          </button>
        ))}
        <button
          onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
          className={`text-3xl font-bold tracking-tight ${currentPage === 'home' ? 'text-white' : 'text-neutral-500'}`}
        >
          Home
        </button>
      </div>
    </>
  );
};

export default Navbar;
