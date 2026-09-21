"use client";

import { Sparkles, ArrowRight, ShieldCheck, Clock } from "lucide-react";

interface FinalCtaBannerProps {
  onBookClick: () => void;
}

export default function FinalCtaBanner({ onBookClick }: FinalCtaBannerProps) {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28 bg-gradient-to-b from-[#251C19] via-[#1E1513] to-[#160F0D] text-white overflow-hidden w-full border-t border-[#C86A4B]/35">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[650px] h-[450px] bg-gradient-to-r from-[#C86A4B]/20 via-[#EAC096]/15 to-[#DF9B82]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Shimmer Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C86A4B] via-[#EAC096] to-[#C86A4B] bg-[length:200%_auto] animate-shimmer" />

      <div className="max-w-5xl mx-auto px-3 min-[360px]:px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Brand Monogram */}
        <div className="inline-flex items-center justify-center w-14 h-14 sm:w-18 sm:h-18 rounded-2xl sm:rounded-3xl bg-[#30221D] border border-[#EAC096]/45 text-[#F4D3A1] font-serif text-2xl sm:text-4xl font-extrabold shadow-2xl mb-4 sm:mb-6">
          B
        </div>

        {/* Brand Tagline Header */}
        <div className="badge-mocha mb-3 sm:mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#EAC096]" />
          <span>Since 2013 • Over a Decade of Holistic Transformation</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2 sm:mb-3 text-white">
          BRIGHTFIELD
        </h2>

        <p className="text-sm min-[360px]:text-base sm:text-xl font-bold tracking-widest text-[#EAC096] uppercase mb-3 sm:mb-4">
          Fitness • Nutrition • Mind
        </p>

        <p className="font-serif italic text-xl min-[360px]:text-2xl sm:text-3xl md:text-4xl text-[#FDF8F5] font-medium max-w-2xl mx-auto mb-5 sm:mb-7 leading-snug">
          A Better Way Through Midlife.
        </p>

        <p className="text-xs min-[360px]:text-sm sm:text-base text-[#EAE2DC]/85 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
          Your body isn’t broken. It simply needs the right guidance, nourishment, and
          strength tailored for this vibrant chapter. Take the first step today.
        </p>

        {/* Primary CTA Button */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 max-w-md mx-auto w-full">
          <button
            onClick={onBookClick}
            className="w-full group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-5 min-[360px]:px-7 sm:px-10 py-4 sm:py-5 rounded-full btn-luxury-primary font-extrabold text-xs min-[360px]:text-sm sm:text-base md:text-lg tracking-wider uppercase shadow-2xl hover:shadow-[0_0_40px_rgba(200,106,75,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>START YOUR BRIGHTFIELD JOURNEY</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform shrink-0" />
          </button>

          {/* Reassurance text */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10px] min-[360px]:text-xs text-[#EAE2DC]/80 mt-1">
            <span className="flex items-center gap-1 font-semibold text-white">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
              100% Free Consultation
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 font-semibold text-[#F4D3A1]">
              <Clock className="w-3.5 h-3.5 text-[#EAC096] shrink-0" />
              25-Min Call
            </span>
            <span>•</span>
            <span>Zero Obligation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
