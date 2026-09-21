"use client";

import { useState } from "react";
import { ChevronDown, Sparkles, HelpCircle, ArrowRight, ShieldAlert } from "lucide-react";

interface FaqSectionProps {
  onBookClick: () => void;
}

export default function FaqSection({ onBookClick }: FaqSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is Brightfield only for women going through menopause?",
      a: "No. The approach can support women navigating perimenopause, menopause and the broader midlife transition. Whether you are 38 and noticing early shifts in sleep, mood and energy, or in your 50s navigating post-menopause, our framework adapts specifically to your biological stage.",
    },
    {
      q: "Do I need to be fit before joining?",
      a: "Absolutely not. Your approach can be adapted to your current fitness level and lifestyle. Whether you haven't worked out in years, suffer from joint sensitivity, or are completely new to strength training, everything begins gently and safely from where you are today.",
    },
    {
      q: "Is this just a weight-loss programme?",
      a: "No. Weight management can be one goal, but Brightfield's approach goes beyond the weighing scale — focusing on fitness, nutrition and mental/emotional wellbeing. When you restore muscle tone, balance hormones, and lower chronic stress, healthy weight equilibrium becomes a natural byproduct.",
    },
    {
      q: "Do I have to follow a strict diet?",
      a: "No. The focus is on sustainable nutrition habits rather than extreme restriction. We do not believe in eliminating food groups, starving on 1000-calorie diets, or cooking separate meals from the rest of your family. You will learn intuitive, hormone-supportive nourishment.",
    },
    {
      q: "What if I'm already exercising?",
      a: "That's great. The goal isn't necessarily to do more exercise — it's to understand what type of movement, nutrition and recovery support makes sense for your current stage of life. Many active women discover that swapping excessive cardio for intentional strength and recovery creates rapid results.",
    },
    {
      q: "Can I join if I'm already under medical care?",
      a: "Brightfield's wellness support should complement—not replace—appropriate medical care. If you have a medical condition or symptoms requiring clinical assessment (such as thyroid disorders, severe hormonal imbalances, or HRT management), always consult your healthcare professional. We work synergistically with your overall wellness team.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 min-[360px]:py-16 sm:py-20 lg:py-24 bg-[#FDFBF7] relative w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="badge-wellness mb-3 min-[360px]:mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#C86A4B]" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-bold text-[#26201D] tracking-tight mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-xs min-[360px]:text-sm sm:text-base text-[#5A4D46] max-w-xl mx-auto">
            Everything you need to know about Brightfield’s perimenopause and menopause wellness
            framework.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className={`rounded-2xl transition-all border ${
                  isOpen
                    ? "bg-white border-[#C86A4B] shadow-sm shadow-[#C86A4B]/10"
                    : "bg-white/80 border-[#C86A4B]/15 hover:border-[#C86A4B]/40"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 min-[360px]:p-5 sm:p-6 flex items-center justify-between gap-3 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-sm min-[360px]:text-base sm:text-lg font-bold text-[#26201D] leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#C86A4B] text-white rotate-180"
                        : "bg-[#FDF2EE] text-[#C86A4B]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 min-[360px]:px-5 sm:px-6 pb-4 sm:pb-6 pt-1 text-xs sm:text-sm md:text-base text-[#5A4D46] leading-relaxed border-t border-[#C86A4B]/10 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Bottom CTA */}
        <div className="mt-10 sm:mt-14 text-center p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#F7F2EC] border border-[#C86A4B]/20">
          <p className="font-serif text-lg min-[360px]:text-xl font-bold text-[#26201D] mb-1.5 sm:mb-2">
            Have a question specific to your body?
          </p>
          <p className="text-xs sm:text-sm text-[#5A4D46] mb-4 sm:mb-5">
            Book a complimentary 1-on-1 consultation and get personalized answers without pressure.
          </p>
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto btn-luxury-primary py-3 px-6 sm:px-8 text-xs sm:text-sm font-bold shadow-md cursor-pointer"
          >
            <span>BOOK YOUR FREE CONSULTATION</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
