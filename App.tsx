
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Impact from './pages/Impact';
import NestRenew from './pages/NestRenew';
import Press from './pages/Press';
import Partners from './pages/Partners';
import AboutUs from './pages/AboutUs';
import Solution from './pages/Solution';
import Careers from './pages/Careers';
import GainProfession from './pages/GainProfession';
import NewArrivals from './pages/NewArrivals';
import Menu from './pages/Menu';
import OrderOnline from './pages/OrderOnline';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

gsap.registerPlugin(ScrollTrigger);

export type PageID = 
  | 'home' | 'impact' | 'nest-renew' | 'press' | 'partners' | 'about-us'
  | 'solution' | 'careers' | 'gain-profession' | 'new-arrivals'
  | 'menu' | 'order-online' | 'privacy-policy' | 'terms-of-service';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageID>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
    
    gsap.fromTo(
      '.page-content',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'impact': return <Impact />;
      case 'nest-renew': return <NestRenew />;
      case 'press': return <Press />;
      case 'partners': return <Partners />;
      case 'about-us': return <AboutUs />;
      case 'solution': return <Solution />;
      case 'careers': return <Careers />;
      case 'gain-profession': return <GainProfession />;
      case 'new-arrivals': return <NewArrivals />;
      case 'menu': return <Menu />;
      case 'order-online': return <OrderOnline />;
      case 'privacy-policy': return <PrivacyPolicy />;
      case 'terms-of-service': return <TermsOfService />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-neutral-800 selection:text-white bg-white">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="page-content">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
