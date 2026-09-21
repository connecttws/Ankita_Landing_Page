"use client";

import {
  Sparkles,
  ArrowRight,
  Search,
  Sliders,
  CheckCircle,
  TrendingUp,
  ArrowDown,
} from "lucide-react";

interface ProcessStepsProps {
  onBookClick: () => void;
}

export default function ProcessSteps({ onBookClick }: ProcessStepsProps) {
  const steps = [
    {
      step: "STEP 1",
      name: "Understand",
      icon: Search,
      color: "#C86A4B",
      bgBadge: "#FDF2EE",
      description:
        "We understand your current lifestyle, challenges, goals and where you are in your menopause journey.",
      highlights: [
        "In-depth assessment of sleep patterns, stress & hormonal transition indicators",
        "Evaluating your daily routines, schedule constraints, and family life",
        "Listening to your personal health history without judgment",
      ],
    },
    {
      step: "STEP 2",
      name: "Personalise",
      icon: Sliders,
      color: "#DDA15E",
      bgBadge: "#FFF7ED",
      description:
        "Your fitness, nutrition and wellbeing approach is tailored around YOU.",
      highlights: [
        "Custom movement routines built for joint health and strength",
        "Nutritious, satisfying meal guidelines that fit your food preferences",
        "Personalised stress regulation & evening wind-down protocols",
      ],
    },
    {
      step: "STEP 3",
      name: "Implement",
      icon: CheckCircle,
      color: "#BE185D",
      bgBadge: "#FDF2F8",
      description:
        "You start making realistic changes that fit around your work, family and everyday life.",
      highlights: [
        "One small, frictionless habit modification at a time",
        "Direct guidance & accountability so you never feel confused or lost",
        "Adjustments on-the-fly whenever travel or hectic work schedules occur",
      ],
    },
    {
      step: "STEP 4",
      name: "Transform",
      icon: TrendingUp,
      color: "#432B25",
      bgBadge: "#F5ECE7",
      description:
        "Build strength, confidence, better habits and a healthier relationship with your changing body.",
      highlights: [
        "Watch stubborn belly fat ease off naturally as cortisol balances",
        "Experience refreshed morning energy and restful night sleep",
        "Enjoy lifelong confidence and harmony with your body for the future",
      ],
    },
  ];

  return (
    <section className="py-12 min-[360px]:py-16 sm:py-20 lg:py-24 bg-[#FDFBF7] relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="badge-wellness mb-3 min-[360px]:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C86A4B]" />
            <span>The Client Roadmap</span>
          </div>

          <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-bold text-[#26201D] tracking-tight mb-3 sm:mb-4">
            What Happens When You Start?
          </h2>

          <p className="text-xs min-[360px]:text-sm sm:text-base md:text-lg text-[#5A4D46] max-w-2xl mx-auto">
            A clear, gentle, 4-step pathway designed to take you from confusion and frustration
            to absolute clarity, confidence, and bodily peace.
          </p>
        </div>

        {/* 4 Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="relative flex flex-col">
                <div className="wellness-card p-4 min-[360px]:p-5 sm:p-7 flex-1 flex flex-col justify-between group hover:border-[#C86A4B] transition-all">
                  <div>
                    {/* Top Step Marker */}
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="font-mono text-xs font-black tracking-widest text-[#C86A4B] bg-[#FDF2EE] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-[#C86A4B]/20">
                        {step.step}
                      </span>
                      <div
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shadow-xs shrink-0"
                        style={{ backgroundColor: step.bgBadge }}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: step.color }} />
                      </div>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#26201D] mb-1.5 group-hover:text-[#C86A4B] transition-colors">
                      {step.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5A4D46] leading-relaxed mb-3 sm:mb-4">
                      {step.description}
                    </p>

                    <div className="space-y-1.5 pt-2.5 border-t border-[#C86A4B]/10">
                      {step.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-1.5 text-xs text-[#26201D]">
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                            style={{ backgroundColor: step.color }}
                          />
                          <span className="leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6 pt-2.5 border-t border-[#C86A4B]/10 text-[10px] min-[360px]:text-[11px] font-bold text-[#A85338] flex items-center justify-between">
                    <span>Phase 0{idx + 1} of 04</span>
                    <span>1-on-1 Guided</span>
                  </div>
                </div>

                {/* Mobile Connector arrow */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-1.5 text-[#C86A4B]">
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
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
