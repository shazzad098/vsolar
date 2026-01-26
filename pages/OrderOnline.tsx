
import React from 'react';
import { ArrowRight, Box, Zap, Heart } from 'lucide-react';

const OrderOnline: React.FC = () => {
  return (
    <div className="pt-48 pb-24 bg-[#0A0A0A] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-24">
           <div className="lg:w-2/3">
              <h1 className="text-6xl font-bold tracking-tighter mb-12 text-white">Configure your<br />Energy Hub.</h1>
              <div className="space-y-8">
                 <div className="p-10 bg-white/5 backdrop-blur-md rounded-[40px] border border-blue-400/30 border-2">
                    <div className="flex justify-between mb-6">
                       <h3 className="text-xl font-bold text-white">Standard Config</h3>
                       <span className="font-bold text-white">$12,400</span>
                    </div>
                    <p className="text-white/40 text-sm mb-0">Includes V-Tile Pro, 10kW Battery, and Nest Hub Sync.</p>
                 </div>
                 <div className="p-10 bg-white/5 backdrop-blur-md rounded-[40px] border border-white/10 hover:border-white/30 transition-all cursor-pointer">
                    <div className="flex justify-between mb-6">
                       <h3 className="text-xl font-bold text-white">Elite Performance</h3>
                       <span className="font-bold text-white">$24,900</span>
                    </div>
                    <p className="text-white/40 text-sm mb-0">Dual Storage, Facade Expansion, and Priority Grid Access.</p>
                 </div>
              </div>
           </div>
           <div className="lg:w-1/3">
              <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-12 rounded-[48px] sticky top-32 shadow-2xl">
                 <h4 className="font-bold mb-10 text-xl tracking-tight text-white">Your Summary</h4>
                 <div className="space-y-6 mb-12 border-b border-white/10 pb-12">
                    <div className="flex justify-between text-white/60 font-medium">
                       <span>Standard Hub</span>
                       <span>$12,400</span>
                    </div>
                    <div className="flex justify-between text-white/60 font-medium">
                       <span>Installation</span>
                       <span>$1,200</span>
                    </div>
                 </div>
                 <div className="flex justify-between font-bold text-2xl mb-12 text-white">
                    <span>Total</span>
                    <span>$13,600</span>
                 </div>
                 <button className="w-full bg-white text-black py-5 rounded-2xl font-bold flex items-center justify-center gap-4 hover:bg-neutral-200 transition-all">
                    Checkout <ArrowRight size={20} />
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;
