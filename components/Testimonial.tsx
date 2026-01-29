import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

// ১. ডাটা অ্যারে (এখানে আপনার স্লাইডগুলোর তথ্য দিন)
const testimonials = [
  {
    id: 1,
    quote: "Renew Home Is Working With Leading Brands. From Thermostats To Water Heaters, Integrating New Energy. Savings Made Easy With Nirusolar.",
    name: "John Alex",
    role: "Business Owner",
    avatar: "https://i.pravatar.cc/150?u=john",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    quote: "Switching to solar was the best decision for our factory. The efficiency is unmatched and the support from the team has been phenomenal.",
    name: "Sarah Connors",
    role: "Factory Manager",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    quote: "Sustainable energy is not just a choice, it's a responsibility. This solution made it incredibly easy for us to transition smoothly.",
    name: "Michael Chen",
    role: "Tech Lead",
    avatar: "https://i.pravatar.cc/150?u=michael",
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&q=80&w=1000"
  }
];

const Testimonial: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  
  // সেটিংস: কতক্ষণ পর স্লাইড চেঞ্জ হবে (মিলি-সেকেন্ড)
  const duration = 5000; 

  // ২. অটো-প্লে এবং প্রগ্রেস লজিক
  useEffect(() => {
    const intervalTime = 50; // প্রতি ৫০ms পর আপডেট হবে
    const step = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // ১০০% হলে পরের স্লাইডে যাও
          handleNext(); 
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [current]); // current চেঞ্জ হলে টাইমার রিসেট হবে না, কিন্তু লজিক ঠিক থাকবে

  // ৩. নেক্সট বাটন ফাংশন
  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setProgress(0); // ম্যানুয়াল ক্লিকের পর প্রগ্রেস রিসেট
  };

  // ৪. প্রিভিয়াস বাটন ফাংশন
  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setProgress(0); // ম্যানুয়াল ক্লিকের পর প্রগ্রেস রিসেট
  };

  // বর্তমান ডাটা
  const activeSlide = testimonials[current];

  // SVG সার্কেলের হিসাব (ব্যাসার্ধ ১৮ হলে পরিধি ≈ ১১৩)
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
           
           {/* Left Content */}
           <div className="lg:col-span-3 bg-[#EFEFEF] rounded-[60px] p-12 md:p-20 flex flex-col justify-between relative overflow-hidden transition-all duration-500">
              <div className="absolute top-12 left-12 opacity-[0.05]">
                 <Quote size={120} />
              </div>
              
              {/* Text Area with Animation Key */}
              <div className="relative z-10 animate-fade-in" key={`text-${activeSlide.id}`}>
                 <p className="text-2xl md:text-3xl font-light text-neutral-800 leading-relaxed mb-16 italic transition-opacity duration-500">
                   "{activeSlide.quote}"
                 </p>
                 <div className="w-full h-[1px] bg-neutral-300/50 mb-12" />
                 
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <img src={activeSlide.avatar} className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-sm" alt={activeSlide.name} />
                       <div>
                          <h4 className="font-bold text-neutral-900 text-lg">{activeSlide.name}</h4>
                          <span className="text-xs text-neutral-400 font-bold uppercase tracking-widest">{activeSlide.role}</span>
                       </div>
                    </div>
                    
                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                       <button 
                         onClick={handlePrev}
                         className="w-14 h-14 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all active:scale-95">
                          <ArrowLeft size={20} />
                       </button>
                       <button 
                         onClick={handleNext}
                         className="w-14 h-14 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 transition-all active:scale-95">
                          <ArrowRight size={20} />
                       </button>
                    </div>
                 </div>
              </div>
           </div>

           {/* Right Image */}
           <div className="lg:col-span-2 relative">
              <div className="rounded-[60px] overflow-hidden h-full min-h-[400px] shadow-2xl relative">
                 {/* Main Image with Animation Key */}
                 <img 
                   key={`img-${activeSlide.id}`}
                   src={activeSlide.image} 
                   className="w-full h-full object-cover animate-fade-in transition-transform duration-700 hover:scale-105" 
                   alt="Testimonial"
                 />
                 
                 {/* Top Right: Progress Indicator & Count */}
                 <div className="absolute top-10 right-10 flex items-center gap-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-white font-bold tracking-widest text-sm">
                      {current + 1}/{testimonials.length}
                    </span>
                    
                    {/* Circular Progress Bar */}
                    <div className="relative w-10 h-10 flex items-center justify-center">
                       {/* Background Circle */}
                       <svg className="w-full h-full transform -rotate-90">
                          <circle
                            cx="20"
                            cy="20"
                            r={radius}
                            stroke="rgba(255,255,255,0.3)"
                            strokeWidth="2"
                            fill="transparent"
                          />
                          {/* Animated Progress Circle */}
                          <circle
                            cx="20"
                            cy="20"
                            r={radius}
                            stroke="white"
                            strokeWidth="2"
                            fill="transparent"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            className="transition-all duration-75 ease-linear"
                          />
                       </svg>
                    </div>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonial;