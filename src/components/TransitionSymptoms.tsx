"use client";

import { useState } from "react";
import {
  Sparkles,
  Check,
  ArrowRight,
  BatteryLow,
  Scale,
  Moon,
  Wind,
  Dumbbell,
  Cookie,
  HeartCrack,
  CheckCircle2,
} from "lucide-react";

interface TransitionSymptomsProps {
  onBookClick: () => void;
}

interface Symptom {
  id: string;
  emoji: string;
  icon: any;
  title: string;
  highlightText: string;
  fullDescription: string;
  category: string;
}

export default function TransitionSymptoms({
  onBookClick,
}: TransitionSymptomsProps) {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([
    "energy",
    "weight",
  ]);

  const symptoms: Symptom[] = [
    {
      id: "energy",
      emoji: "😩",
      icon: BatteryLow,
      title: "Your energy isn't what it used to be",
      highlightText: "Exhausted even after a normal day",
      fullDescription: "You wake up without feeling refreshed and hit an energy crash by mid-afternoon.",
      category: "Metabolism & Vitality",
    },
    {
      id: "weight",
      emoji: "⚖️",
      icon: Scale,
      title: "Your weight has started behaving differently",
      highlightText: "Especially around your belly",
      fullDescription: "Stubborn fat clings despite eating cleaner, cutting portions, or increasing salads.",
      category: "Hormonal Shift",
    },
    {
      id: "sleep",
      emoji: "🌙",
      icon: Moon,
      title: "Your sleep feels disturbed",
      highlightText: "Waking up tired, restless or 3 AM awakenings",
      fullDescription: "Restless tossing, night sweats, racing thoughts, or inability to switch off.",
      category: "Recovery & Cortisol",
    },
    {
      id: "moods",
      emoji: "🌪️",
      icon: Wind,
      title: "Your moods feel unpredictable",
      highlightText: "Irritability, anxiety, or emotional overwhelm",
      fullDescription: "Snapping unexpectedly, feeling on edge, or feeling unlike yourself.",
      category: "Nervous System",
    },
    {
      id: "strength",
      emoji: "💪",
      icon: Dumbbell,
      title: "You feel weaker or less active",
      highlightText: "Workouts that once worked don't give results",
      fullDescription: "Cardio and old workouts now cause fatigue and joint soreness rather than strength.",
      category: "Muscle & Joints",
    },
    {
      id: "cravings",
      emoji: "🍫",
      icon: Cookie,
      title: "Cravings have become harder to manage",
      highlightText: "Intense sugar & carb urges when stressed",
      fullDescription: "Especially in the evenings when emotionally drained from a busy day.",
      category: "Blood Sugar & Leptin",
    },
    {
      id: "identity",
      emoji: "❤️",
      icon: HeartCrack,
      title: "And somewhere along the way...",
      highlightText: "You stopped feeling like YOU",
      fullDescription: "Looking in the mirror feels disconnected, like your body has become unfamiliar.",
      category: "Self-Identity & Joy",
    },
  ];

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="symptoms" className="py-12 min-[360px]:py-16 sm:py-20 lg:py-24 bg-[#FAF6F2] relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="badge-luxury mb-3 min-[360px]:mb-4">
            <Sparkles className="w-3 h-3 text-[#C86A4B]" />
            <span>Root Cause Validation</span>
          </div>

          <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-bold text-[#26201D] tracking-tight mb-3 sm:mb-4 leading-tight">
            You’re <span className="soft-highlight-champagne">Not “Getting Lazy”</span>. <br />
            <span className="text-[#C86A4B] italic">
              Your Body Is Going Through a Transition.
            </span>
          </h2>

          <p className="text-xs min-[360px]:text-sm sm:text-base md:text-lg text-[#635852] max-w-2xl mx-auto">
            Maybe you have noticed subtle shifts. <strong className="text-[#26201D]">Tap the symptoms below</strong> that match your current reality:
          </p>
        </div>

        {/* Symptoms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 max-w-6xl mx-auto">
          {symptoms.map((symptom, idx) => {
            const isSelected = selectedSymptoms.includes(symptom.id);
            const isFeaturedLast = idx === symptoms.length - 1;

            return (
              <div
                key={symptom.id}
                onClick={() => toggleSymptom(symptom.id)}
                className={`group relative p-5 min-[360px]:p-6 rounded-2xl cursor-pointer transition-all duration-300 select-none ${
                  isFeaturedLast
                    ? "md:col-span-2 lg:col-span-3 bg-gradient-to-r from-[#FAF0EB] via-white to-[#FAF0EB] border-2 border-[#EAD0C2] shadow-sm"
                    : "bg-white border"
                } ${
                  isSelected
                    ? "border-[#C86A4B] shadow-md shadow-[#C86A4B]/10 -translate-y-1 ring-1 ring-[#C86A4B]/20 bg-[#FDF8F6]"
                    : "border-[#EFE6E0] hover:border-[#E2D0C6] hover:shadow-xs"
                }`}
              >
                {/* Top Bar inside card */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF3EE] flex items-center justify-center text-2xl shrink-0">
                      <span role="img" aria-label={symptom.title}>
                        {symptom.emoji}
                      </span>
                    </div>
                    <span className="text-[10px] min-[360px]:text-[11px] font-bold uppercase tracking-wider text-[#A64E33] bg-[#FAF0EB] px-2.5 py-0.5 rounded-full border border-[#F0D9CF] shrink-0">
                      {symptom.category}
                    </span>
                  </div>

                  {/* Interactive Toggle Checkbox */}
                  <div
                    className={`w-5 h-5 min-[360px]:w-6 min-[360px]:h-6 rounded-full flex items-center justify-center transition-all shrink-0 ${
                      isSelected
                        ? "bg-[#C86A4B] text-white shadow-xs scale-105"
                        : "border-2 border-[#EADCD4] group-hover:border-[#C86A4B]"
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 min-[360px]:w-3.5 min-[360px]:h-3.5 stroke-[3]" />}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-sm min-[360px]:text-base sm:text-lg font-bold text-[#26201D] group-hover:text-[#C86A4B] transition-colors mb-1.5">
                  {symptom.title}
                </h3>

                {/* Highlight Punchline */}
                <div className="mb-2">
                  <span className="font-extrabold text-[#A64E33] text-xs sm:text-sm block">
                    • {symptom.highlightText}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#635852] leading-relaxed">
                  {symptom.fullDescription}
                </p>

                {/* Tap hint */}
                <div className="mt-4 pt-2.5 border-t border-[#F0E6E0] flex items-center justify-between text-[11px] sm:text-xs">
                  <span className={isSelected ? "text-[#C86A4B] font-bold" : "text-[#948780]"}>
                    {isSelected ? "✓ Marked — You're not alone" : "Tap if you feel this"}
                  </span>
                  <span className="text-[10px] min-[360px]:text-[11px] text-[#A64E33] font-bold">
                    {isSelected ? "Selected" : "+ Tap"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empathy Box & CTA - Luminous Silk Card */}
        <div className="mt-10 sm:mt-14 max-w-3xl mx-auto text-center p-6 sm:p-9 rounded-3xl bg-white border border-[#EADCD4] shadow-md">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0EB] text-[#A64E33] border border-[#F0D9CF] text-[11px] sm:text-xs font-bold mb-3 sm:mb-4">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C86A4B] shrink-0" />
            <span>
              {selectedSymptoms.length > 0
                ? `You marked ${selectedSymptoms.length} transition indicator${
                    selectedSymptoms.length > 1 ? "s" : ""
                  }`
                : "Select the indicators that apply to you"}
            </span>
          </div>

          <h3 className="font-serif text-xl min-[360px]:text-2xl sm:text-3xl font-bold text-[#26201D] mb-2 sm:mb-3">
            If this sounds familiar, <span className="text-[#C86A4B] italic">you are not alone.</span>
          </h3>
          <p className="text-xs min-[360px]:text-sm sm:text-base text-[#635852] max-w-xl mx-auto mb-5 sm:mb-6 leading-relaxed">
            These are natural biological responses to <strong className="text-[#26201D]">estrogen, progesterone, and cortisol transitions</strong>.
            Your body requires understanding and tailored nourishment — not harsher starvation or exhaustion.
          </p>

          <button
            onClick={onBookClick}
            className="w-full sm:w-auto btn-luxury-primary py-3.5 px-6 sm:px-8 text-xs min-[360px]:text-sm sm:text-base font-bold shadow-lg hover:shadow-xl cursor-pointer"
          >
            <span>BOOK YOUR FREE CONSULTATION</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
