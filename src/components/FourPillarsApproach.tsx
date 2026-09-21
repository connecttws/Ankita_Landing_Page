"use client";

import {
  Sparkles,
  ArrowRight,
  Activity,
  Salad,
  Smile,
  Flame,
  CheckCircle2,
} from "lucide-react";

interface FourPillarsApproachProps {
  onBookClick: () => void;
}

export default function FourPillarsApproach({
  onBookClick,
}: FourPillarsApproachProps) {
  const pillars = [
    {
      num: "01",
      name: "MOVE",
      highlightPill: "Functional Strength & Mobility",
      headline: "Build a body that supports the life you want to live.",
      description:
        "Personalised fitness that focuses on strength, mobility, balance, stamina and functional movement.",
      icon: Activity,
      color: "#C86A4B",
      bgBadge: "#FDF2EE",
      bullets: [
        "Metabolic strength training to support bone density & joint longevity",
        "Functional mobility routines to eliminate stiffness and aches",
        "Custom pacing suited for hormonal recovery without burnout",
      ],
    },
    {
      num: "02",
      name: "NOURISH",
      highlightPill: "Nourish Without Punishment",
      headline: "Eat to support your changing body — not punish it.",
      description:
        "Practical nutrition strategies designed around your lifestyle, preferences and goals.",
      icon: Salad,
      color: "#DDA15E",
      bgBadge: "#FFF7ED",
      bullets: [
        "Calibrated protein, fiber & healthy fat distribution",
        "Gentle carbohydrate timing for steady daytime energy",
        "Flexible family meals without feeling like you're on a 'diet'",
      ],
    },
    {
      num: "03",
      name: "RESET",
      highlightPill: "Nervous System & Mindset",
      headline: "Because your mental wellbeing matters too.",
      description:
        "Understand your emotional triggers, manage stress better and rebuild the confidence that may have taken a backseat.",
      icon: Smile,
      color: "#9F1239",
      bgBadge: "#FDF2F8",
      bullets: [
        "Identifying emotional eating patterns with self-compassion",
        "Simple evening wind-down rituals to deepen restorative sleep",
        "Nervous system resets to dial down stress hormones",
      ],
    },
    {
      num: "04",
      name: "THRIVE",
      highlightPill: "Lifelong Habit Architecture",
      headline: "Turn healthy choices into a lifestyle you can maintain.",
      description:
        "No temporary fixes. No 30-day challenges. Just sustainable habits that fit into your real life.",
      icon: Flame,
      color: "#432B25",
      bgBadge: "#F5ECE7",
      bullets: [
        "Habit stacking that seamlessly integrates with busy work & family life",
        "Elimination of the vicious 'all-or-nothing' cycle forever",
        "A supportive blueprint that lasts through menopause and beyond",
      ],
    },
  ];

  return (
    <section id="approach" className="py-12 min-[360px]:py-16 sm:py-20 lg:py-24 bg-[#FDFBF7] relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="badge-wellness mb-3 min-[360px]:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C86A4B]" />
            <span>Sustainable Lifestyle Architecture</span>
          </div>

          <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-bold text-[#26201D] tracking-tight mb-3 sm:mb-4 leading-tight">
            Introducing the Brightfield Approach: <br />
            <span className="highlight-terracotta mt-1 inline-block">
              A Stronger You — From The Inside Out.
            </span>
          </h2>

          <p className="text-xs min-[360px]:text-sm sm:text-base md:text-lg text-[#5A4D46] max-w-2xl mx-auto">
            We don’t believe in rapid 30-day crash challenges.{" "}
            <strong className="text-[#26201D]">
              No temporary fixes. No starvation. Just sustainable habits that fit your real life.
            </strong>
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="wellness-card p-4 min-[360px]:p-6 sm:p-8 flex flex-col justify-between group hover:border-[#C86A4B] transition-all"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs sm:text-sm font-extrabold text-[#C86A4B] bg-[#FDF2EE] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-[#C86A4B]/20">
                        {pillar.num}
                      </span>
                      <span className="text-xs font-black tracking-widest text-[#26201D] uppercase">
                        — {pillar.name}
                      </span>
                    </div>

                    <div
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shadow-xs shrink-0"
                      style={{ backgroundColor: pillar.bgBadge }}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: pillar.color }} />
                    </div>
                  </div>

                  {/* Highlight pill */}
                  <div className="mb-2">
                    <span className="text-[10px] min-[360px]:text-xs font-bold uppercase tracking-wider text-[#A85338] bg-[#FDF2EE] px-2 py-0.5 rounded-full border border-[#C86A4B]/20">
                      {pillar.highlightPill}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-serif text-lg min-[360px]:text-xl sm:text-2xl font-bold text-[#26201D] mb-2 leading-snug group-hover:text-[#C86A4B] transition-colors">
                    {pillar.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#5A4D46] leading-relaxed mb-4 sm:mb-5">
                    {pillar.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-3 sm:pt-4 border-t border-[#C86A4B]/10">
                    {pillar.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-2 text-xs sm:text-sm text-[#26201D]">
                        <CheckCircle2
                          className="w-3.5 h-3.5 min-[360px]:w-4 min-[360px]:h-4 shrink-0 mt-0.5"
                          style={{ color: pillar.color }}
                        />
                        <span className="leading-snug">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 sm:mt-6 pt-3 text-[10px] min-[360px]:text-[11px] text-[#A85338] font-bold tracking-wider uppercase flex items-center justify-between">
                  <span>Pillar {pillar.num} of 04</span>
                  <span className="bg-[#FAF0EB] text-[#8C3A22] px-2 py-0.5 rounded border border-[#E8D4C8]">
                    100% Habit Sustainable
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Strip */}
        <div className="mt-10 sm:mt-16 text-center">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto btn-luxury-primary py-3.5 sm:py-4 px-6 sm:px-8 text-xs min-[360px]:text-sm sm:text-base font-bold shadow-lg hover:shadow-xl cursor-pointer"
          >
            <span>BOOK YOUR FREE CONSULTATION</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
