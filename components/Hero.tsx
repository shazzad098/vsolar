import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, Twitter, Linkedin, Github, Play } from 'lucide-react';

// ৫টি স্লাইড সহ নতুন অ্যারে
const SLIDES = [
  {
    id: 1,
    video: 'https://media.istockphoto.com/id/1159692743/video/4k-aerial-view-of-solar-panels-farm-with-sunlight.mp4?s=mp4-640x640-is&k=20&c=F6_BeUeNIaxP8rGFiPP_P6hZ1piFZ42ih3FQfMgGiqs=',
    title: 'Experience the future of Solar Power .',
    sub: 'More Power Efficiency'
  },
  {
    id: 2,
    video: 'https://cdn.pixabay.com/video/2025/11/28/318540_large.mp4',
    title: 'Where sustainability meets style .',
    sub: 'Clean Energy Design'
  },
  {
    id: 3,
    video: 'https://media.istockphoto.com/id/1483025163/video/sunset-view-of-high-voltage-electric-line-pylons-with-visualized-digital-power-flows-fast.mp4?s=mp4-640x640-is&k=20&c=ITShrXgiLYBtAojvct9lEDNaiBx2gaX5IxJy08JFL2o=',
    title: 'Powering homes with nature .',
    sub: 'Smart Integration'
  },
  {
    id: 4,
    video: 'https://media.istockphoto.com/id/1388241863/video/3d-animation-of-solar-panels-on-large-wind-turbines-background-windmills-concept-of-clean.mp4?s=mp4-640x640-is&k=20&c=j5zG6x0h94kA_v5nlLnubYyVS844huRt5Quzy-d01AE=',
    title: 'Innovation for a better world .',
    sub: 'Eco-Friendly Tech'
  },
  {
    id: 5,
    video: 'https://cdn.pixabay.com/video/2017/04/05/8579-211655655_large.mp4',
    title: 'Harnessing the sun seamlessly .',
    sub: 'Limitless Energy'
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
      <span key={i} className={`spaced-char inline-block ${char === ' ' ? 'mr-3 md:mr-6' : 'mr-2 md:mr-4'} uppercase`}>
        {char}
      </span>
    ));
  };

  const currentTitle = SLIDES[currentIdx].title;
  const splitIndex = Math.ceil(currentTitle.length / 2);
  const firstSpaceAfterHalf = currentTitle.indexOf(' ', splitIndex);

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
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80" />
      </div>

      {/* Structural Blue Frame Overlay */}
      <div className="absolute inset-8 md:inset-12 z-20 pointer-events-none border border-blue-400/20 rounded-[20px]" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-24 w-full h-full flex flex-col justify-center">

        {/* Top Centered Label */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-center opacity-80 w-full">
          <span className="text-white text-[10px] md:text-sm font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase">
            {SLIDES[currentIdx].sub}
          </span>
        </div>

        {/* Main Centered Content */}
        <div className="hero-content text-center max-w-6xl mx-auto px-4">
          <h1 className="text-white font-bold leading-relaxed mb-16 select-none flex flex-col items-center">
            {/* বড় স্ক্রিনে টাইটেলটি সুন্দর দেখানোর জন্য একটি ব্লকের মধ্যে রেন্ডার করা হলো */}
            <div className="text-xl md:text-4xl lg:text-5xl tracking-[0.5em] md:tracking-[0.8em] leading-normal block">
              {renderSpacedText(SLIDES[currentIdx].title)}
            </div>
          </h1>

          {/* Centered Get Started Button */}
          <div className="group cursor-pointer w-fit mx-auto scale-90 md:scale-100">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-8 md:px-10 py-4 md:py-5 rounded-2xl flex items-center gap-3 transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <span className="text-white font-bold text-base md:text-lg">Get Started</span>
              <ArrowRight className="text-white transition-transform duration-300 group-hover:translate-x-1" size={24} />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Socials (Left) & Card (Right) */}
        <div className="absolute bottom-12 md:bottom-20 left-8 md:left-20 right-8 md:right-20 flex items-end justify-between z-30">

          {/* Social Links Positioned Near the Border */}
          <div className="hidden md:flex items-center gap-8 text-white/40">
            <Twitter className="hover:text-white transition-colors cursor-pointer" size={18} />
            <Linkedin className="hover:text-white transition-colors cursor-pointer" size={18} />
            <Github className="hover:text-white transition-colors cursor-pointer" size={18} />
          </div>

          {/* Bottom Right Segment Card with Progress Loader */}
          <div className="flex flex-col items-end gap-6 md:gap-10 w-full md:w-auto">
            {/* Real Progress Loader */}
            <div className="flex items-center gap-4 mr-2 md:mr-6 self-end">
              <span className="text-white/60 font-bold tracking-widest text-xs">{currentIdx + 1}/{SLIDES.length}</span>
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
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] md:rounded-[48px] p-4 md:p-8 w-full md:w-[480px] shadow-2xl relative overflow-hidden group hover:bg-white/10 transition-all duration-700 cursor-pointer" onClick={() => setCurrentIdx(nextIdx)}>
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden relative shrink-0 bg-black/50">
                  {/* Thumbnail হিসেবে ভিডিওটিই ব্যবহার করা হয়েছে কিন্তু প্লে হবে না, বা আপনি চাইলে আলাদা ইমেজ দিতে পারেন */}
                  <video
                    src={SLIDES[nextIdx].video}
                    className="w-full h-full object-cover opacity-60"
                    muted
                    preload="metadata"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play size={16} className="text-white" fill="white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-medium text-sm md:text-base leading-tight mb-2 md:mb-4 truncate">
                    {SLIDES[nextIdx].title}
                  </h4>
                  <div className="group/btn inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 md:px-4 py-1.5 md:py-2.5 rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                    <span className="text-white text-[8px] md:text-[10px] font-bold uppercase tracking-[0.15em]">Next Segment</span>
                    <ArrowRight size={12} className="text-white transition-transform group-hover/btn:translate-x-0.5" />
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