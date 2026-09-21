"use client";

import {
  Sparkles,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface WhyBrightfieldProps {
  onBookClick: () => void;
}

export default function WhyBrightfield({ onBookClick }: WhyBrightfieldProps) {
  const differentiators = [
    {
      title: "Fitness + Nutrition + Emotional Wellbeing",
      highlightTag: "3-in-1 Synergy",
      description: "All 3 pillars synchronized — not isolated workout sheets or restrictive diets.",
    },
    {
      title: "Personalised, Not Generic",
      highlightTag: "Tailored to You",
      description: "Tailored to your age, metabolism, work hours, and perimenopause symptoms.",
    },
    {
      title: "Designed Around Your Real Lifestyle",
      highlightTag: "No 2-Hour Gyms",
      description: "Realistic habits you can maintain effortlessly with work and family commitments.",
    },
    {
      title: "Focused on Strength & Sustainable Health",
      highlightTag: "Bone & Joint Longevity",
      description: "Protecting bone density, joint mobility, muscle tone, and lasting vitality.",
    },
    {
      title: "Support Through Perimenopause AND Menopause",
      highlightTag: "Both Phases Covered",
      description: "Navigating mood shifts, belly fat resistance, and sleep disruptions with empathy.",
    },
    {
      title: "Long-Term Lifestyle Change — Not Quick Fixes",
      highlightTag: "No Rebound Guilt",
      description: "No starvation, no juice cleanses, and no vicious cycle of rebound weight regain.",
    },
  ];

  return (
    <section id="why-brightfield" className="py-12 min-[360px]:py-16 sm:py-20 lg:py-24 bg-[#F7F2EC]/70 relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="badge-wellness mb-3 min-[360px]:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C86A4B]" />
            <span>Since 2013 • Trusted Midlife Framework</span>
          </div>

          <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-bold text-[#26201D] tracking-tight mb-3 sm:mb-4 leading-tight">
            Why Brightfield? <br />
            <span className="highlight-amber mt-1 inline-block">
              Because You Need More Than Another Diet Plan.
            </span>
          </h2>

          <p className="text-xs min-[360px]:text-sm sm:text-base md:text-lg text-[#5A4D46] max-w-2xl mx-auto">
            <strong className="text-[#26201D]">Since 2013</strong>, Brightfield has been helping
            women build healthier relationships with fitness and wellbeing. And when it comes
            to midlife women, we understand that{" "}
            <span className="highlight-terracotta">one-size-fits-all does not work</span>.
          </p>
        </div>

        {/* Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left: Generic Diet Programs (Contrast) */}
          <div className="lg:col-span-5 bg-white/80 rounded-2xl sm:rounded-3xl p-4 min-[360px]:p-6 sm:p-8 border border-red-200/70 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-[10px] min-[360px]:text-xs font-bold uppercase tracking-wider">
                  The Old Way
                </span>
                <span className="text-[11px] min-[360px]:text-xs text-gray-500 font-medium">Generic Diet Industry</span>
              </div>

              <h3 className="font-serif text-lg min-[360px]:text-xl sm:text-2xl font-bold text-[#26201D] mb-3">
                Generic Crash Diets &amp; Hardcore Fitness
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-gray-600">
                <div className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-red-950 font-semibold">Cuts calories dramatically</strong>, causing severe hormone &amp; thyroid slowdown
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-red-950 font-semibold">Exhausting cardio</strong> that spikes cortisol and stores stubborn belly fat
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-red-950 font-semibold">Ignores emotional stress</strong>, sleepless nights, and the mental load
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-red-950 font-semibold">30-day challenges</strong> that end in rebound weight gain and guilt
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-red-950 font-semibold">Blames you for “lack of willpower”</strong> when biology was the real factor
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-red-100 text-[11px] min-[360px]:text-xs text-red-700/90 font-bold">
              Result: Frustration, exhaustion, and feeling like your body is broken.
            </div>
          </div>

          {/* Right: The Brightfield Whole-Woman Method (High Contrast Rich Medium-Dark Mocha) */}
          <div className="lg:col-span-7 bg-gradient-to-b from-[#2B1F1B] via-[#241A17] to-[#1C1513] text-[#FAF0EB] rounded-2xl sm:rounded-3xl p-4 min-[360px]:p-6 sm:p-8 border-2 border-[#EAC096]/60 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            {/* Top Glow Ambient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C86A4B]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Corner Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-[#C86A4B] to-[#DF9B82] text-white text-[9px] min-[360px]:text-[10px] sm:text-[11px] font-extrabold px-3.5 py-1 rounded-bl-xl uppercase tracking-wider shadow-md">
              The Brightfield Method
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EAC096]/20 text-[#F8D2BA] text-[10px] min-[360px]:text-xs font-bold uppercase tracking-wider border border-[#EAC096]/40">
                  Whole-Woman Synergy
                </span>
                <span className="text-[11px] min-[360px]:text-xs text-[#D6C7BF] font-bold">Since 2013</span>
              </div>

              <h3 className="font-serif text-lg min-[360px]:text-xl sm:text-2xl font-bold text-white mb-1">
                What Makes Our Approach Different?
              </h3>
              <p className="text-xs sm:text-sm text-[#D6C7BF] mb-4">
                Designed specifically around the biology and daily realities of midlife women.
              </p>

              {/* 6 Core Checkmarks with Highlights on Mocha */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {differentiators.map((item) => (
                  <div
                    key={item.title}
                    className="p-3 rounded-xl bg-[#332520] border border-[#E8927C]/25 hover:border-[#EAC096]/60 transition-all shadow-xs"
                  >
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#EAC096] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[9px] min-[360px]:text-[10px] font-extrabold uppercase tracking-wide text-[#F8D2BA] bg-[#C86A4B]/25 px-1.5 py-0.2 rounded border border-[#C86A4B]/40 block w-fit mb-0.5">
                          {item.highlightTag}
                        </span>
                        <h4 className="text-xs sm:text-sm font-extrabold text-white leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-[10px] min-[360px]:text-[11px] text-[#D6C7BF] mt-1 leading-snug">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-6 pt-4 border-t border-[#E8927C]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs font-bold text-[#F8D2BA] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#EAC096] shrink-0" />
                <span>Backed by 13+ Years of Coaching Practice</span>
              </span>
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto btn-luxury-primary py-2.5 px-5 text-xs font-bold cursor-pointer"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
