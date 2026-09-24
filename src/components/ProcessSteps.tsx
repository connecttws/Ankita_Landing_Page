"use client";

import { motion } from "framer-motion";
import { Search, Sliders, PlayCircle, Award, ArrowRight, Sparkles, CalendarCheck } from "lucide-react";

interface ProcessStepsProps {
  onOpenBooking?: () => void;
}

const steps = [
  {
    step: "STEP 1",
    title: "Understand",
    description:
      "We understand your current lifestyle, challenges, goals and where you are in your menopause journey.",
    icon: Search,
  },
  {
    step: "STEP 2",
    title: "Personalise",
    description:
      "Your fitness, nutrition and wellbeing approach is tailored around YOU.",
    icon: Sliders,
  },
  {
    step: "STEP 3",
    title: "Implement",
    description:
      "You start making realistic changes that fit around your work, family and everyday life.",
    icon: PlayCircle,
  },
  {
    step: "STEP 4",
    title: "Transform",
    description:
      "Build strength, confidence, better habits and a healthier relationship with your changing body.",
    icon: Award,
  },
];

export default function ProcessSteps({ onOpenBooking }: ProcessStepsProps) {
  return (
    <section className="py-7 sm:py-12 bg-[#f8f6f2] relative overflow-hidden w-full max-w-full">
      <div className="mx-auto max-w-7xl px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-5 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1 rounded-full bg-emerald-950/5 text-primary font-bold text-[11px] sm:text-xs uppercase tracking-wider mb-2 border border-[#0d7363]/20">
              <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>Structured Roadmap</span>
            </span>

            <h2 className="text-lg min-[360px]:text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-secondary leading-tight">
              What Happens When You Start?
            </h2>

            <div className="h-0.5 sm:h-1 w-14 bg-primary rounded-full mx-auto mt-2 sm:mt-2.5 mb-2.5"></div>
          </motion.div>
        </div>

        {/* 4 Steps Grid - fluid shrink */}
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 border border-emerald-950/10 shadow-sm hover:shadow-xl shadow-emerald-950/8 flex flex-col justify-between hover:border-primary/40 hover:-translate-y-1 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] min-[360px]:text-[11px] font-extrabold uppercase tracking-wider text-white bg-[#032d23] px-2.5 py-0.5 rounded-full shadow-2xs whitespace-nowrap">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-950/5 text-primary flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-extrabold text-secondary mb-1.5">
                    {item.title}
                  </h3>

                  <p className="text-[11px] sm:text-sm text-foreground/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-end text-emerald-600/40 mt-3">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:text-primary transition-all" />
                  </div>
                )}
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
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover active:scale-98 px-6 sm:px-8 py-3 text-xs sm:text-sm font-bold text-white shadow-lg transition-all cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4 text-white shrink-0" />
            <span>BOOK YOUR FREE CONSULTATION</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
