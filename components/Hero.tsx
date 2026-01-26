
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, Twitter, Linkedin, Github, Play } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    video: 'https://cdn.pixabay.com/video/2020/09/24/50537-462319985_large.mp4',
    title: 'Experience the future of Solar Power .',
    sub: 'More Power Efficiency'
  },
  {
    id: 2,
    video: 'https://cdn.pixabay.com/video/2021/04/14/71120-538466657_large.mp4',
    title: 'Where sustainability meets style .',
    sub: 'Clean Energy Design'
  }
];

const Hero: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressCircleRef = useRef<SVGCircleElement>(null);
  const nextIdx = (currentIdx + 1) % SLIDES.length;
  const slideDuration = 8; // seconds per slide

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Character-by-character animation for the main title
      gsap.from('.spaced-char', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.02,
        ease: 'power2.out',
      });

      // Progress animation sync with slide change
      gsap.set(progressCircleRef.current, { strokeDashoffset: 100 });
      gsap.to(progressCircleRef.current, {
        strokeDashoffset: 0,
        duration: slideDuration,
        ease: 'none',
        onComplete: () => {
          setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [currentIdx]);

  // Helper to split text into characters for spacing
  const renderSpacedText = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className={`spaced-char inline-block ${char === ' ' ? 'mr-6' : 'mr-4'} uppercase`}>
        {char}
      </span>
    ));
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          key={SLIDES[currentIdx].video}
          src={SLIDES[currentIdx].video}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
      </div>

      {/* Structural Blue Frame Overlay */}
      <div className="absolute inset-8 md:inset-12 z-20 pointer-events-none border border-blue-400/20 rounded-[20px]" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-12 md:px-24 w-full h-full flex flex-col justify-center">
        
        {/* Top Centered Label */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-center opacity-60">
           <span className="text-white text-xs md:text-sm font-bold tracking-[0.5em] uppercase">
             {SLIDES[currentIdx].sub}
           </span>
        </div>

        {/* Main Centered Content */}
        <div className="hero-content text-center max-w-6xl mx-auto">
          <h1 className="text-white font-bold leading-relaxed mb-16 select-none flex flex-col items-center">
            <div className="text-xl md:text-3xl tracking-[1em] mb-12 block">
              {renderSpacedText("Where sustainability")}
            </div>
            <div className="text-xl md:text-3xl tracking-[1em] block">
              {renderSpacedText("meets style .")}
            </div>
          </h1>

          {/* Centered Get Started Button */}
          <div className="flex items-center group cursor-pointer w-fit mx-auto scale-90 md:scale-100">
            <div className="bg-white px-10 py-5 rounded-l-2xl transition-all duration-300 group-hover:bg-neutral-100">
              <span className="text-neutral-900 font-bold text-lg">Get Started</span>
            </div>
            <div className="bg-neutral-900/40 backdrop-blur-md px-6 py-5 rounded-r-2xl border-l border-white/10 transition-all duration-300 group-hover:bg-white/20">
              <ArrowRight className="text-white" size={24} />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Socials (Left) & Card (Right) */}
        <div className="absolute bottom-20 left-20 right-20 flex items-end justify-between z-30">
          
          {/* Social Links Positioned Near the Border */}
          <div className="flex items-center gap-8 text-white/40">
            <Twitter className="hover:text-white transition-colors cursor-pointer" size={18} />
            <Linkedin className="hover:text-white transition-colors cursor-pointer" size={18} />
            <Github className="hover:text-white transition-colors cursor-pointer" size={18} />
          </div>

          {/* Bottom Right Segment Card with Progress Loader */}
          <div className="flex flex-col items-end gap-10">
            {/* Real Progress Loader */}
            <div className="flex items-center gap-4 mr-6">
               <span className="text-white/40 font-bold tracking-widest text-xs">{currentIdx + 1}/2</span>
               <div className="relative w-8 h-8">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 40 40">
                    <circle
                      cx="20"
                      cy="20"
                      r="16"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="transparent"
                      className="text-white/10"
                    />
                    <circle
                      ref={progressCircleRef}
                      cx="20"
                      cy="20"
                      r="16"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="transparent"
                      strokeDasharray="100"
                      strokeDashoffset="100"
                      className="text-white"
                      strokeLinecap="round"
                    />
                  </svg>
               </div>
            </div>

            {/* Next Segment Card */}
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[48px] p-8 w-[380px] md:w-[480px] shadow-2xl relative overflow-hidden group hover:bg-white/10 transition-all duration-700">
               <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden relative shrink-0">
                     <img 
                       src={SLIDES[nextIdx].video.replace('.mp4', '.jpg')} // Thumbnail fallback
                       className="w-full h-full object-cover opacity-50" 
                     />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <Play size={20} className="text-white" fill="white" />
                     </div>
                  </div>
                  <div className="flex-1">
                     <h4 className="text-white font-medium text-sm md:text-base leading-tight mb-4">
                        {SLIDES[nextIdx].title}
                     </h4>
                     <div className="flex items-center group/btn cursor-pointer">
                        <div className="bg-white px-6 py-2 rounded-l-lg">
                          <span className="text-black text-[9px] font-extrabold uppercase tracking-[0.2em]">Next Segment</span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md px-3 py-2 rounded-r-lg group-hover/btn:bg-white/20 transition-colors">
                          <ArrowRight size={14} className="text-white" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
