"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CalendarCheck, HelpCircle } from "lucide-react";

interface FaqSectionProps {
  onOpenBooking: () => void;
}

const faqs = [
  {
    question: "Is Brightfield only for women going through menopause?",
    answer:
      "No. The approach specifically supports women navigating perimenopause (typically beginning in the late 30s or early 40s), menopause, and the broader post-menopausal midlife transition. Wherever you are on this spectrum, the support is tailored to your stage.",
  },
  {
    question: "Do I need to be fit before joining?",
    answer:
      "Absolutely not. Your approach is carefully adapted to your current fitness level, energy reserves, joint comfort, and daily schedule. We start where you are and build sustainably.",
  },
  {
    question: "Is this just a weight-loss programme?",
    answer:
      "No. While healthy weight balance and losing stubborn midlife visceral fat is often a key goal, Brightfield's approach goes far beyond the weighing scale — focusing equally on functional strength, nourishing nutrition, restorative sleep, and emotional wellbeing.",
  },
  {
    question: "Do I have to follow a strict diet?",
    answer:
      "No. The focus is on sustainable, nourishing nutrition habits rather than extreme calorie counting or food elimination. You learn how to fuel your changing metabolism with realistic meals you enjoy.",
  },
  {
    question: "What if I'm already exercising?",
    answer:
      "That's great. The goal isn't necessarily to do more exercise — it's to understand what type of movement, resistance training, mobility, and recovery support makes sense for your current hormonal profile.",
  },
  {
    question: "Can I join if I'm already under medical care?",
    answer:
      "Brightfield's wellness support should complement — not replace — appropriate medical care. If you have an active medical condition or symptoms requiring clinical diagnosis or hormone replacement therapy (HRT), we always encourage consulting your healthcare professional.",
  },
];

export default function FaqSection({ onOpenBooking }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-10 md:py-20 bg-background relative overflow-hidden w-full max-w-full">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-[10px] min-[360px]:text-xs uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" />
              <span>Frequently Asked Questions</span>
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-secondary font-serif leading-tight">
              Got Questions? We Have Answers.
            </h2>

            <div className="h-1 w-16 sm:w-20 bg-primary rounded-full mx-auto mt-3 sm:mt-4 mb-4 sm:mb-6"></div>

            <p className="text-xs sm:text-base md:text-lg text-foreground/80 font-medium leading-relaxed max-w-2xl mx-auto px-1">
              Everything you need to know about the Brightfield approach to women&apos;s midlife wellness.
            </p>
          </motion.div>
        </div>

        {/* FAQ Accordion List */}
        <div className="mx-auto max-w-3xl space-y-3 sm:space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.3 }}
                className="border border-primary/15 rounded-xl sm:rounded-3xl overflow-hidden bg-white shadow-2xs"
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full px-4 sm:px-6 py-3.5 sm:py-5 text-left flex items-center justify-between focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-xs sm:text-base md:text-lg text-secondary font-serif pr-3 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors ${
                      isOpen ? "bg-primary text-white" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
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
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-foreground/80 leading-relaxed text-xs sm:text-base border-t border-primary/10 pt-2.5 sm:pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 sm:mt-16 text-center px-2"
        >
          <button
            onClick={onOpenBooking}
            className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-lg font-bold text-white shadow-xl shadow-primary/25 hover:bg-primary-hover active:scale-98 transition-all cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
            <span className="truncate">BOOK YOUR FREE CONSULTATION</span>
            <div className="absolute inset-0 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-background opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
