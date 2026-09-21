"use client";

import { useState } from "react";
import {
  Dumbbell,
  Apple,
  Brain,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface ThreeDimensionsSectionProps {
  onBookClick: () => void;
}

export default function ThreeDimensionsSection({
  onBookClick,
}: ThreeDimensionsSectionProps) {
  const [activeDimension, setActiveDimension] = useState<number>(0);

  const dimensions = [
    {
      title: "FITNESS",
      tagline: "Move for vitality, not punishment",
      badgeText: "Strength & Joint Mobility",
      icon: Dumbbell,
      color: "#E8927C",
      bgBadge: "rgba(232, 146, 124, 0.18)",
      borderBadge: "rgba(232, 146, 124, 0.35)",
      headlineHighlight: "Movement designed for your changing body",
      description:
        "Build strength, mobility, stamina & confidence without exhausting cardio routines that leave you drained.",
      details: [
        "Preserve lean muscle mass to keep your resting metabolic rate active",
        "Joint-friendly functional mobility to protect hips, knees & lower back",
        "Cortisol-conscious workouts that boost energy rather than causing burnout",
        "Restorative strength conditioning that fits into 20-30 minute windows",
      ],
    },
    {
      title: "NUTRITION",
      tagline: "Nourish without deprivation",
      badgeText: "Hormone-Balancing Food",
      icon: Apple,
      color: "#EAC096",
      bgBadge: "rgba(234, 192, 150, 0.18)",
      borderBadge: "rgba(234, 192, 150, 0.35)",
      headlineHighlight: "No extreme diets or calorie counting",
      description:
        "Learn how to nourish your body without extreme restrictions, starvation plans, or separate family meals.",
      details: [
        "Hormone-supportive macronutrient balancing for steady blood sugar",
        "Targeted protein intake to eliminate afternoon energy slumps & cravings",
        "Real-food strategies that let you eat comfortably with your family",
        "Gentle gut-health and inflammation-calming nutrition habits",
      ],
    },
    {
      title: "MIND & EMOTIONAL WELLBEING",
      tagline: "Lighten the mental load",
      badgeText: "Stress & Sleep Reset",
      icon: Brain,
      color: "#79A790",
      bgBadge: "rgba(121, 167, 144, 0.18)",
      borderBadge: "rgba(121, 167, 144, 0.35)",
      headlineHighlight: "Stress, emotional triggers & mental load",
      description:
        "Work on the psychological weight, emotional eating triggers, and anxiety that often get completely ignored.",
      details: [
        "Unpack subconscious emotional triggers behind late-night stress eating",
        "Practical nervous system reset tools to lower cortisol and deepen sleep",
        "Rebuilding body trust and self-worth when body changes feel overwhelming",
        "Boundary setting and stress mitigation techniques for busy midlife women",
      ],
    },
  ];

  return (
    <section
      id="dimensions"
      className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-[#241A17] via-[#2D211D] to-[#241A17] text-white relative overflow-hidden w-full border-y border-[#C86A4B]/25"
    >
      {/* Warm Ambient Radial Glows */}
      <div className="absolute top-0 left-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-[#C86A4B]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-[#EAC096]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 min-[360px]:px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="badge-mocha mb-3 min-[360px]:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#EAC096]" />
            <span>The Brightfield Philosophy</span>
          </div>

          <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4 leading-tight text-white">
            Stop Fighting Your Body. <br />
            <span className="text-[#F4D3A1] italic">Start Understanding It.</span>
          </h2>

          <p className="text-xs min-[360px]:text-sm sm:text-base md:text-lg text-[#EAE2DC]/85 leading-relaxed max-w-2xl mx-auto">
            Perimenopause and menopause aren’t simply about changing hormones. They affect{" "}
            <strong className="text-white font-bold">how you move, eat, sleep, think, feel and recover</strong>.
          </p>

          <p className="mt-2 text-xs min-[360px]:text-sm sm:text-base text-[#F4D3A1] font-semibold max-w-xl mx-auto">
            Brightfield doesn’t believe in generic workout sheets.{" "}
            <span className="underline decoration-[#EAC096] underline-offset-4">
              We work on the woman as a whole.
            </span>
          </p>
        </div>

        {/* 3 Dimensions Medium-Dark Luxury Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {dimensions.map((dim, idx) => {
            const Icon = dim.icon;
            const isSelected = activeDimension === idx;

            return (
              <div
                key={dim.title}
                onClick={() => setActiveDimension(idx)}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? "bg-[#332521] border-[#EAC096] shadow-xl shadow-black/50 -translate-y-1.5 ring-1 ring-[#EAC096]/50"
                    : "bg-[#2A1F1B]/90 border-white/10 hover:border-white/25 hover:bg-[#30231F]"
                }`}
              >
                <div>
                  {/* Top Header Row inside card */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 min-[360px]:w-14 min-[360px]:h-14 rounded-2xl flex items-center justify-center shadow-inner shrink-0"
                      style={{
                        backgroundColor: dim.bgBadge,
                        border: `1px solid ${dim.borderBadge}`,
                      }}
                    >
                      <Icon className="w-6 h-6 min-[360px]:w-7 min-[360px]:h-7" style={{ color: dim.color }} />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#F4D3A1] bg-white/10 px-2.5 py-1 rounded-md border border-white/10">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Badge */}
                  <span
                    className="inline-block text-[10px] min-[360px]:text-[11px] font-extrabold uppercase tracking-wide px-2.5 py-0.5 rounded-full mb-2"
                    style={{
                      backgroundColor: dim.bgBadge,
                      color: dim.color,
                      border: `1px solid ${dim.borderBadge}`,
                    }}
                  >
                    {dim.badgeText}
                  </span>

                  <h3 className="font-serif text-xl min-[360px]:text-2xl font-bold tracking-wide text-white mb-1.5">
                    {dim.title}
                  </h3>

                  {/* Scannable Headline */}
                  <p className="text-xs min-[360px]:text-sm font-bold text-[#F4D3A1] mb-3 leading-snug">
                    ✓ {dim.headlineHighlight}
                  </p>

                  {/* Description */}
                  <p className="text-xs min-[360px]:text-sm text-[#EAE2DC]/80 leading-relaxed mb-5">
                    {dim.description}
                  </p>

                  {/* Detailed Points */}
                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    {dim.details.map((point) => (
                      <div key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#EAE2DC]">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: dim.color }}
                        />
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-6 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-[#EAE2DC]/70">
                  <span className="font-semibold text-[#F4D3A1]">Pillar 0{idx + 1}</span>
                  <span className="text-[11px] font-medium">Personalised</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Synthesis Statement & CTA ── */}
        <div className="mt-12 sm:mt-16 text-center max-w-2xl mx-auto px-2">
          <div className="inline-block p-1 rounded-full bg-white/10 backdrop-blur-md mb-3 sm:mb-4 border border-white/20 max-w-full">
            <span className="px-4 sm:px-6 py-1.5 rounded-full bg-gradient-to-r from-[#C86A4B] to-[#DDA15E] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider block shadow-sm truncate">
              One woman. Three dimensions. One personalised approach.
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#EAE2DC]/75 mb-6">
            When all three dimensions are calibrated to your hormonal stage, sustainable energy
            and effortless weight equilibrium naturally follow.
          </p>

          <button
            onClick={onBookClick}
            className="w-full sm:w-auto btn-luxury-primary py-3.5 px-7 sm:px-9 text-xs min-[360px]:text-sm sm:text-base font-bold shadow-2xl cursor-pointer hover:scale-105 transition-all"
          >
            <span>BOOK YOUR FREE CONSULTATION</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
