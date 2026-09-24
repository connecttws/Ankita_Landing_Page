"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, CalendarCheck } from "lucide-react";

interface FaqSectionProps {
  onOpenBooking?: () => void;
}

const faqs = [
  {
    question: "Is Brightfield only for women going through menopause?",
    answer:
      "No. The approach can support women navigating perimenopause, menopause and the broader midlife transition.",
  },
  {
    question: "Do I need to be fit before joining?",
    answer:
      "Absolutely not. Your approach can be adapted to your current fitness level and lifestyle.",
  },
  {
    question: "Is this just a weight-loss programme?",
    answer:
      "No. Weight management can be one goal, but Brightfield's approach goes beyond the weighing scale — focusing on fitness, nutrition and mental/emotional wellbeing.",
  },
  {
    question: "Do I have to follow a strict diet?",
    answer:
      "The focus is on sustainable nutrition habits rather than extreme restriction.",
  },
  {
    question: "What if I'm already exercising?",
    answer:
      "That's great. The goal isn't necessarily to do more exercise — it's to understand what type of movement, nutrition and recovery support makes sense for your current stage of life.",
  },
  {
    question: "Can I join if I'm already under medical care?",
    answer:
      "Brightfield's wellness support should complement—not replace—appropriate medical care. If you have a medical condition or symptoms requiring clinical assessment, consult your healthcare professional.",
  },
];

export default function FaqSection({ onOpenBooking }: FaqSectionProps) {
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
              <span>Questions &amp; Answers</span>
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-secondary leading-tight">
              FAQ
            </h2>

            <div className="h-0.5 sm:h-1 w-14 bg-primary rounded-full mx-auto mt-2 sm:mt-2.5 mb-2.5"></div>
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

        {/* Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 sm:mt-8 text-center"
        >
          <button
            onClick={onOpenBooking}
            className="inline-flex w-full max-w-[310px] min-[380px]:max-w-[340px] sm:w-auto sm:max-w-none items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover active:scale-98 px-6 sm:px-8 py-3.5 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg transition-all cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4 text-white shrink-0" />
            <span>BOOK YOUR FREE CONSULTATION</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
