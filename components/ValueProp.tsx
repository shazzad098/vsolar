import React from "react";
import { Sun, Home } from "lucide-react";

const ValueProp: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F5F5F3]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-neutral-400 mb-4 block">
            More Energy More Savings
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-neutral-900 leading-none">
            Experience the future
            <br />
            of Solar Power.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* ================= Card 1 (TOP) ================= */}
          <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden group order-1 self-start bg-neutral-500">
            <video
              src="https://cdn.pixabay.com/video/2018/03/02/14609-258212436_large.mp4"
              className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
              autoPlay
              loop
              muted
              playsInline
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute top-10 left-10">
              <h3 className="text-white text-3xl font-bold leading-tight">
                Making Everything
                <br />
                From Nirosolar
              </h3>
            </div>

            <div className="absolute bottom-10 left-10">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-white/60 text-sm">Saving-</span>
                <span className="text-white text-3xl font-bold tracking-tighter">
                  610 kV
                </span>
              </div>

              {/* Gauge */}
              <div className="relative w-32 h-16 overflow-hidden">
                <div className="w-32 h-32 border-[12px] border-white/20 rounded-full" />
                <div className="absolute top-0 left-0 w-32 h-32 border-[12px] border-white rounded-full border-t-transparent border-r-transparent rotate-45" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full" />
              </div>
            </div>
          </div>

          {/* ================= Card 2 (MIDDLE) ================= */}
          <div
            className="order-2 self-center md:translate-y-10
            bg-gradient-to-br from-emerald-500 to-teal-600
            p-12 rounded-[48px] flex flex-col
            shadow-lg hover:shadow-2xl hover:-translate-y-2
            transition-all duration-500 group cursor-pointer"
          >
            <div className="w-16 h-12 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-10 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
              <Sun
                size={32}
                className="text-white group-hover:rotate-180 transition-transform duration-700"
              />
            </div>

            <h3 className="text-2xl font-bold text-white mb-8">
              Solar Energy Best
              <br />
              Production
            </h3>

            <p className="text-white/80 font-light leading-relaxed flex-1">
              Solar energy is the radiant light and heat emitted by the sun,
              harnessed through various technologies to generate electricity or
              heat. It's a renewable energy source, meaning it won't run out as
              long as the sun shines, making it more.
            </p>
          </div>

          {/* ================= Card 3 (BOTTOM) ================= */}
          <div
            className="order-3 self-end md:translate-y-20
            bg-gradient-to-br from-amber-500 to-orange-600
            p-12 rounded-[48px] flex flex-col
            shadow-lg hover:shadow-2xl hover:-translate-y-2
            transition-all duration-500 group cursor-pointer"
          >
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-10 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
              <Home
                size={32}
                className="text-white group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <h3 className="text-2xl font-bold text-white mb-8">
              We Are Building
              <br />
              Better Future
            </h3>

            <p className="text-white/80 font-light leading-relaxed flex-1">
              Solar energy is the radiant light and heat emitted by the sun,
              harnessed through various technologies to generate electricity or
              heat. It's a renewable energy source, meaning it won't run out as
              long as the sun shines, making it more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
