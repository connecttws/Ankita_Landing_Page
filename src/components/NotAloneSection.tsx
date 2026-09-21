"use client";

import {
  Heart,
  Sparkles,
  ArrowRight,
  SearchX,
  RefreshCcw,
  CheckCircle2,
} from "lucide-react";

interface NotAloneSectionProps {
  onBookClick: () => void;
}

export default function NotAloneSection({ onBookClick }: NotAloneSectionProps) {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-br from-[#281D1A] via-[#322521] to-[#221815] text-white relative overflow-hidden w-full border-y border-[#C86A4B]/25">
      {/* Radiant Warm Ambient Glows */}
      <div className="absolute top-0 right-0 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#C86A4B]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-[400px] h-72 sm:h-[400px] bg-[#EAC096]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-3 min-[360px]:px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="badge-mocha mb-4 sm:mb-6">
          <Heart className="w-3.5 h-3.5 text-[#EAC096]" />
          <span>Compassionate Mentorship</span>
        </div>

        <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight text-white">
          You Don’t Have To <br />
          <span className="text-[#F4D3A1] italic">Figure This Out Alone.</span>
        </h2>

        <div className="max-w-2xl mx-auto space-y-3 sm:space-y-4 text-xs min-[360px]:text-sm sm:text-base text-[#EAE2DC]/90 leading-relaxed mb-8 sm:mb-10">
          <p>
            Perimenopause and menopause can feel confusing, frustrating, and isolating.
          </p>
          <p className="text-[#F4D3A1] font-semibold">
            You don't have to keep{" "}
            <span className="underline decoration-[#EAC096] underline-offset-4">
              searching Google late at night
            </span>{" "}
            every time your body does something new.
          </p>
          <p>
            You don't have to keep{" "}
            <span className="line-through decoration-[#E8927C] text-[#EAE2DC]/80 font-medium">
              jumping from one restrictive diet to another
            </span>
            , only to feel more depleted each time.
          </p>

          <div className="pt-2">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 text-white font-serif italic text-sm min-[360px]:text-base sm:text-lg leading-relaxed shadow-lg">
              “And you definitely don't have to believe that feeling tired, gaining stubborn
              belly weight, or feeling emotionally different is simply something you have to
              ‘put up with.’”
            </div>
          </div>
        </div>

        {/* 3 Reassurance Medium-Dark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 max-w-4xl mx-auto mb-8 sm:mb-10 text-left">
          <div className="p-4 rounded-2xl bg-[#342723]/90 border border-white/15 shadow-sm">
            <div className="flex items-center gap-2 text-[#F4D3A1] text-xs font-bold uppercase mb-1">
              <SearchX className="w-4 h-4 shrink-0 text-[#EAC096]" />
              <span>No More Google Panic</span>
            </div>
            <p className="text-xs text-[#EAE2DC]/85 leading-relaxed">
              Direct, evidence-informed answers tailored to your specific hormonal symptoms.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#342723]/90 border border-white/15 shadow-sm">
            <div className="flex items-center gap-2 text-[#F4D3A1] text-xs font-bold uppercase mb-1">
              <RefreshCcw className="w-4 h-4 shrink-0 text-[#EAC096]" />
              <span>No More Diet Hopping</span>
            </div>
            <p className="text-xs text-[#EAE2DC]/85 leading-relaxed">
              End the endless cycle of extreme calorie restrictions and unsustainable detoxes.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#342723]/90 border border-white/15 shadow-sm">
            <div className="flex items-center gap-2 text-[#F4D3A1] text-xs font-bold uppercase mb-1">
              <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
              <span>True Body Harmony</span>
            </div>
            <p className="text-xs text-[#EAE2DC]/85 leading-relaxed">
              Work with your biology so vitality, stamina, and mental calm return naturally.
            </p>
          </div>
        </div>

        {/* Closing Truth & CTA */}
        <p className="text-sm min-[360px]:text-base sm:text-lg font-serif font-bold text-white mb-6 sm:mb-8 leading-snug">
          There is a better way to approach this phase of life. <br />
          <span className="text-[#F4D3A1]">And it starts with understanding your body.</span>
        </p>

        <button
          onClick={onBookClick}
          className="w-full sm:w-auto btn-luxury-primary py-3.5 sm:py-4 px-7 sm:px-9 text-xs min-[360px]:text-sm sm:text-base font-bold shadow-2xl hover:scale-105 transition-all cursor-pointer"
        >
          <span>BOOK YOUR FREE CONSULTATION</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </button>
      </div>
    </section>
  );
}
