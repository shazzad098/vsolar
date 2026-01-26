
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-48 pb-24 bg-[#0A0A0A] text-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-bold tracking-tighter mb-16 text-white">Terms of Service.</h1>
        <div className="prose prose-invert prose-lg text-white/40 font-light leading-relaxed space-y-12">
           <p className="text-white/60 text-xl italic">Welcome to the Vsolar Ecosystem.</p>
           <section>
              <h2 className="text-2xl font-bold text-white mb-6">1. Acceptance</h2>
              <p>By using Vsolar hardware or software, you agree to comply with our environmental standards and safety protocols. Our systems must be maintained by certified professionals.</p>
           </section>
           <section>
              <h2 className="text-2xl font-bold text-white mb-6">2. Warranty</h2>
              <p>All Vsolar components are backed by a 25-year structural warranty, provided maintenance is conducted via our official service menu.</p>
           </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
