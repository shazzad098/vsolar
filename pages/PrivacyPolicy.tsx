
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-48 pb-24 bg-[#0A0A0A] text-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-bold tracking-tighter mb-16 text-white">Privacy Policy.</h1>
        <div className="prose prose-invert prose-lg text-white/40 font-light leading-relaxed space-y-12">
           <p className="text-white/60">Last Updated: October 2024</p>
           <section>
              <h2 className="text-2xl font-bold text-white mb-6">1. Data Collection</h2>
              <p>At Vsolar, we prioritize your privacy. We collect data necessary for system optimization, billing, and technical support. This includes energy production stats, usage patterns, and contact information.</p>
           </section>
           <section>
              <h2 className="text-2xl font-bold text-white mb-6">2. Usage</h2>
              <p>Your data is used to improve AI-driven energy storage management and to provide real-time reporting via our mobile applications.</p>
           </section>
           <section>
              <h2 className="text-2xl font-bold text-white mb-6">3. Security</h2>
              <p>All data is encrypted using space-grade protocols and stored in secure, decentralized Swiss data hubs.</p>
           </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
