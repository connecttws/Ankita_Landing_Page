"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqSectionProps {
  onOpenBooking?: () => void;
}

const faqs = [
  {
    question: "Is Brightfield only for women going through menopause?",
    answer:
      "No. It is designed for women 38+ navigating perimenopause, menopause, and beyond. If you are experiencing sudden stubborn weight, fatigue, or mood shifts, our framework meets you right where you are.",
  },
  {
    question: "Do I need to be fit before joining?",
    answer:
      "Not at all. Every movement and habit recommendation is tailored to your current energy reserves, schedule, and joint comfort. We start gentle and build steadily.",
  },
  {
    question: "Do I have to follow a strict or boring diet?",
    answer:
      "Never. We focus on real, wholesome Indian meals balancing protein, fiber, and healthy fats. No starving, no cutting out carbs, and no calorie obsession.",
  },
  {
    question: "How is this different from standard weight loss programs?",
    answer:
      "Most programs prescribe fewer calories and more cardio, which spikes cortisol and worsens hormonal resistance. We focus on hormonal synergy, restful sleep, and preserving lean muscle.",
  },
  {
    question: "Can I join if I'm under medical treatment or taking HRT?",
    answer:
      "Yes. Brightfield complements your medical care with nutrition, sleep, and lifestyle coaching. We always encourage alignment with your treating physician.",
  },
];

export default function FaqSection({}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-7 sm:py-12 bg-[#f8f6f2] relative overflow-hidden w-full max-w-full">
      <div className="mx-auto max-w-7xl px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-5 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1 rounded-full bg-emerald-950/5 text-primary font-bold text-[11px] sm:text-xs uppercase tracking-wider mb-2 border border-[#0d7363]/20">
              <HelpCircle className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>Frequently Asked Questions</span>
            </span>

            <h2 className="text-lg min-[360px]:text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-secondary leading-tight">
              Got Questions? We Have Answers.
            </h2>

            <div className="h-0.5 sm:h-1 w-14 bg-primary rounded-full mx-auto mt-2 sm:mt-2.5 mb-2.5"></div>

            <p className="text-xs sm:text-base text-foreground/80 font-medium leading-relaxed max-w-2xl mx-auto px-1">
              Everything you need to know about our doctor-aligned coaching approach.
            </p>
          </motion.div>
        </div>

        {/* FAQ Accordion List - fluid shrink */}
        <div className="mx-auto max-w-3xl space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.25 }}
                className="border border-emerald-950/10 rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-2xs transition-all hover:border-primary/40"
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full px-3.5 min-[360px]:px-5 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between focus:outline-none cursor-pointer gap-2"
                >
                  <span className="font-extrabold text-xs sm:text-base md:text-lg text-secondary leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors ${
                      isOpen ? "bg-primary text-white" : "bg-emerald-950/5 text-primary"
                    }`}
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-3.5 min-[360px]:px-5 sm:px-6 pb-3.5 sm:pb-4 text-foreground/80 leading-relaxed text-xs sm:text-sm border-t border-emerald-950/5 pt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
