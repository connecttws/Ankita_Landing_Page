"use client";

import {
  Sun,
  Dumbbell,
  Sparkles,
  Salad,
  Brain,
  Moon,
  Heart,
  Crown,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface TransformationSectionProps {
  onBookClick: () => void;
}

export default function TransformationSection({
  onBookClick,
}: TransformationSectionProps) {
  const transformations = [
    {
      emoji: "☀️",
      icon: Sun,
      title: "Having more energy throughout the day",
      highlightTag: "All-Day Vitality",
      desc: "Sustained vitality from morning till night without the 3 PM crash or chronic fatigue.",
      color: "#DDA15E",
      bg: "#FFFBEB",
    },
    {
      emoji: "💪",
      icon: Dumbbell,
      title: "Feeling stronger & capable in your body",
      highlightTag: "Strength & Muscle Tone",
      desc: "Moving and lifting with ease, feeling muscle tone return to your arms, legs, and core.",
      color: "#C86A4B",
      bg: "#FDF2EE",
    },
    {
      emoji: "👗",
      icon: Crown,
      title: "Feeling comfortable in your clothes",
      highlightTag: "Effortless Fit",
      desc: "Zipping up your favorite outfits with confidence, leaving behind the bloating and frustration.",
      color: "#9333EA",
      bg: "#FAF5FF",
    },
    {
      emoji: "🥗",
      icon: Salad,
      title: "Eating without constantly worrying about food",
      highlightTag: "Zero Food Guilt",
      desc: "Freedom from obsessive calorie counting, food guilt, and frantic restriction rules.",
      color: "#16A34A",
      bg: "#F0FDF4",
    },
    {
      emoji: "🧠",
      icon: Brain,
      title: "Feeling mentally clearer & balanced",
      highlightTag: "Brain Fog Lifted",
      desc: "Lifting brain fog, sharpening focus at work, and enjoying calm emotional steadiness.",
      color: "#2563EB",
      bg: "#EFF6FF",
    },
    {
      emoji: "😴",
      icon: Moon,
      title: "Building better sleep & recovery habits",
      highlightTag: "Restorative Sleep",
      desc: "Falling asleep peacefully, sleeping deeply without night awakenings, and waking refreshed.",
      color: "#6366F1",
      bg: "#EEF2FF",
    },
    {
      emoji: "❤️",
      icon: Heart,
      title: "Understanding your body instead of fighting it",
      highlightTag: "Body Harmony",
      desc: "Working in harmony with your hormonal rhythms instead of punishing your metabolism.",
      color: "#E11D48",
      bg: "#FFF1F2",
    },
    {
      emoji: "✨",
      icon: Sparkles,
      title: "And finally feeling like YOU are back in charge",
      highlightTag: "Reclaimed Agency",
      desc: "Reclaiming your vibrant joy, self-confidence, and peace of mind for the years ahead.",
      color: "#CA8A04",
      bg: "#FEFCE8",
    },
  ];

  return (
    <section id="outcomes" className="py-12 min-[360px]:py-16 sm:py-20 lg:py-24 bg-[#F7F2EC]/80 relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="badge-wellness mb-3 min-[360px]:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C86A4B]" />
            <span>The Desired Reality</span>
          </div>

          <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-bold text-[#26201D] tracking-tight mb-3 sm:mb-4 leading-tight">
            What Could Change For You? <br />
            <span className="highlight-terracotta mt-1 inline-block">
              Imagine Waking Up And…
            </span>
          </h2>

          <p className="text-xs min-[360px]:text-sm sm:text-base md:text-lg text-[#5A4D46] max-w-2xl mx-auto">
            This isn’t about striving for an unrealistic fitness model standard. It’s about{" "}
            <strong className="text-[#26201D]">
              feeling vibrant, joyful, strong, and deeply content in your midlife body
            </strong>
            .
          </p>
        </div>

        {/* 8 Transformation Grid with Eye-Catching Tags */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 max-w-6xl mx-auto">
          {transformations.map((item, idx) => {
            const Icon = item.icon;
            const isHighlighted = idx === 7;

            return (
              <div
                key={item.title}
                className={`p-4 min-[360px]:p-5 sm:p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between ${
                  isHighlighted
                    ? "bg-gradient-to-br from-[#2D211D] via-[#241A17] to-[#1D1614] text-[#FAF0EB] border-2 border-[#EAC096] shadow-xl sm:col-span-2 lg:col-span-1"
                    : "bg-white border border-[#C86A4B]/20 hover:border-[#C86A4B]/50 hover:shadow-md"
                }`}
              >
                <div>
                  {/* Top Emoji & Icon */}
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-2xl min-[360px]:text-3xl" role="img" aria-label={item.title}>
                      {item.emoji}
                    </span>
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: isHighlighted ? "rgba(234, 192, 150, 0.2)" : item.bg,
                      }}
                    >
                      <Icon
                        className="w-4 h-4"
                        style={{ color: isHighlighted ? "#EAC096" : item.color }}
                      />
                    </div>
                  </div>

                  {/* Highlight pill tag */}
                  <div className="mb-2">
                    <span
                      className={`text-[9px] min-[360px]:text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full inline-block ${
                        isHighlighted
                          ? "bg-[#EAC096]/20 text-[#F8D2BA] border border-[#EAC096]/40"
                          : "bg-[#FDF2EE] text-[#A85338] border border-[#C86A4B]/25"
                      }`}
                    >
                      {item.highlightTag}
                    </span>
                  </div>

                  <h3
                    className={`font-serif text-sm min-[360px]:text-base sm:text-lg font-bold mb-1.5 leading-snug ${
                      isHighlighted ? "text-white" : "text-[#26201D]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isHighlighted ? "text-[#FAF0EB]/90" : "text-[#5A4D46]"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-current/10 flex items-center gap-1.5 text-[11px] font-semibold text-[#C86A4B]">
                  <CheckCircle2
                    className="w-3.5 h-3.5"
                    style={{ color: isHighlighted ? "#EAC096" : "#C86A4B" }}
                  />
                  <span style={{ color: isHighlighted ? "#F8D2BA" : "#A85338" }}>
                    Brightfield Outcome
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
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
