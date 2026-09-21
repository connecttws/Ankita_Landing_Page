"use client";

import { Sparkles, Calendar, ArrowRight, ShieldCheck, Heart, Star, CheckCircle } from "lucide-react";
import VslVideoFrame from "./VslVideoFrame";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative pt-6 pb-12 min-[360px]:pt-8 min-[360px]:pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#FCFAF8] via-[#FAF4F0] to-[#FCFAF8] w-full">
      {/* Background Soft Luminous Lighting - Ethereal and Clean */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-[700px] h-[350px] bg-gradient-to-r from-[#DF9B82]/15 via-[#EAC096]/20 to-[#E8F0EB]/25 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header Info */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Category Pill with luxury badge */}
          <div className="badge-luxury mb-3 min-[360px]:mb-4 sm:mb-6 max-w-full text-center">
            <Sparkles className="w-3 h-3 text-[#C86A4B] shrink-0" />
            <span className="truncate">
              PERIMENOPAUSE &amp; MENOPAUSE WELLNESS FOR{" "}
              <strong className="text-[#26201D] bg-[#FAF0EB] px-2 py-0.5 rounded-full border border-[#EAD0C2] ml-0.5">
                WOMEN 38+
              </strong>
            </span>
          </div>

          {/* Main Headline - Elegant Editorial Typography */}
          <h1 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#26201D] tracking-tight leading-[1.22] mb-4 sm:mb-6">
            If losing weight{" "}
            <span className="text-[#C86A4B] relative inline-block">
              suddenly feels impossible
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#DF9B82]/25 rounded-full -rotate-1" />
            </span>{" "}
            <span className="soft-highlight-champagne whitespace-nowrap">after 38</span> —{" "}
            <span className="italic text-[#635852] font-medium">feeling stuck?</span>{" "}
            <span className="block text-[#26201D] mt-2 sm:mt-3 font-serif font-extrabold text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl">
              This is for you.
            </span>
          </h1>

          {/* Value Subheading with subtle luxury accents */}
          <p className="text-xs min-[360px]:text-sm sm:text-base md:text-lg text-[#635852] max-w-2xl font-normal leading-relaxed mb-5 sm:mb-7 px-1">
            <strong className="text-[#26201D] font-bold">Stop fighting your changing body</strong>{" "}
            with harsh{" "}
            <span className="line-through decoration-[#C86A4B]/60 decoration-2 text-[#8C5243] font-semibold">
              crash diets
            </span>{" "}
            and exhausting workouts. Discover Brightfield’s{" "}
            <span className="highlight-terracotta font-bold">
              personalised whole-woman approach
            </span>{" "}
            designed for natural hormonal rhythm, metabolic strength, and renewed vitality.
          </p>

          {/* Core Feature Bullet Ribbon - Sophisticated luxury badges */}
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 min-[360px]:gap-2 sm:gap-3 px-3 py-1.5 min-[360px]:py-2 rounded-2xl bg-white/95 border border-[#EADCD4] shadow-xs text-[11px] min-[360px]:text-xs sm:text-sm text-[#26201D] font-bold mb-6 sm:mb-8 max-w-full">
            <span className="flex items-center gap-1.5 bg-[#FAF0EB] text-[#A64E33] px-2.5 py-1 rounded-xl border border-[#F0D9CF] shadow-2xs whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-[#C86A4B]" />
              Personalised Guidance
            </span>
            <span className="flex items-center gap-1.5 bg-[#FDF2F8] text-[#9D174D] px-2.5 py-1 rounded-xl border border-[#FCE7F3] shadow-2xs whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-[#BE185D]" />
              Sustainable Habits
            </span>
            <span className="flex items-center gap-1.5 bg-[#FBF4EC] text-[#8C5928] px-2.5 py-1 rounded-xl border border-[#F1DEC9] shadow-2xs whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-[#DDA15E]" />
              No Crash Diets
            </span>
          </div>

          {/* Primary CTA Area */}
          <div className="flex flex-col items-center gap-2.5 w-full max-w-md mb-8 sm:mb-12">
            <button
              onClick={onBookClick}
              className="w-full btn-luxury-primary py-3.5 sm:py-4.5 px-6 sm:px-8 text-xs min-[360px]:text-sm sm:text-base tracking-wider font-extrabold shadow-xl hover:shadow-2xl cursor-pointer"
            >
              <span>BOOK YOUR FREE CONSULTATION</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Urgency & Confidence Ticker */}
            <div className="flex items-center justify-center gap-1.5 min-[360px]:gap-2 text-[10px] min-[360px]:text-[11px] sm:text-xs text-[#635852] flex-wrap text-center">
              <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span className="font-bold text-[#26201D] bg-white px-2 py-0.5 rounded-full border border-[#EADCD4] shadow-2xs">
                100% Free 1-on-1 Call
              </span>
              <span>•</span>
              <span>No pushy sales</span>
              <span>•</span>
              <span className="text-[#C86A4B] font-extrabold bg-[#FAF0EB] px-2 py-0.5 rounded-full border border-[#F0D9CF]">
                Only 4 slots left this week
              </span>
            </div>
          </div>
        </div>

        {/* ── Featured VSL Video Frame ── */}
        <div className="mt-2 sm:mt-6 w-full">
          <div className="text-center mb-3">
            <span className="text-[10px] min-[360px]:text-xs uppercase tracking-widest text-[#A64E33] font-extrabold bg-[#FAF0EB] px-3 py-1 rounded-full border border-[#EADCD4] shadow-2xs">
              ▶ 3-Minute Video Breakdown With Ankita
            </span>
          </div>
          <VslVideoFrame onBookClick={onBookClick} />
        </div>

        {/* ── Proof / Trust Anchor (Light Editorial Cards) ── */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-[#EFE6E0] max-w-4xl mx-auto w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 text-center">
            <div className="luxury-card p-3 sm:p-4">
              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#26201D]">
                13+ Years
              </div>
              <div className="text-[10px] min-[360px]:text-xs text-[#C86A4B] font-bold mt-0.5">
                Women’s Wellness
              </div>
            </div>
            <div className="luxury-card p-3 sm:p-4">
              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#C86A4B]">
                Since 2013
              </div>
              <div className="text-[10px] min-[360px]:text-xs text-[#635852] font-semibold mt-0.5">
                Brightfield Established
              </div>
            </div>
            <div className="luxury-card p-3 sm:p-4">
              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#26201D]">
                3 Dimensions
              </div>
              <div className="text-[10px] min-[360px]:text-xs text-[#5F8571] font-bold mt-0.5">
                Fitness • Food • Mind
              </div>
            </div>
            <div className="luxury-card p-3 sm:p-4">
              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#C86A4B]">
                100%
              </div>
              <div className="text-[10px] min-[360px]:text-xs text-[#635852] font-semibold mt-0.5">
                Personalised Care
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
