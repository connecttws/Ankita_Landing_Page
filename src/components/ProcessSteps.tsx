"use client";

import { motion } from "framer-motion";
import { Search, Sliders, PlayCircle, Award, ArrowRight, CalendarCheck, Sparkles } from "lucide-react";

interface ProcessStepsProps {
  onOpenBooking: () => void;
}

const steps = [
  {
    step: "STEP 1",
    title: "Understand",
    description:
      "We understand your current lifestyle, challenges, health history, goals, and exactly where you are in your perimenopause or menopause journey.",
    icon: Search,
  },
  {
    step: "STEP 2",
    title: "Personalise",
    description:
      "Your fitness, nutrition, and wellbeing approach is tailored around YOU. No cookie-cutter calorie charts or unrealistic workout expectations.",
    icon: Sliders,
  },
  {
    step: "STEP 3",
    title: "Implement",
    description:
      "You start making realistic, enjoyable changes that fit around your career, family responsibilities, and everyday Indian routine.",
    icon: PlayCircle,
  },
  {
    step: "STEP 4",
    title: "Transform",
    description:
      "Build functional strength, renewed energy, emotional calm, and a lasting, harmonious relationship with your changing body.",
    icon: Award,
  },
];

export default function ProcessSteps({ onOpenBooking }: ProcessStepsProps) {
  return (
    <section className="py-10 md:py-20 bg-background relative overflow-hidden w-full max-w-full">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-[10px] min-[360px]:text-xs uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-accent flex-shrink-0" />
              <span>Simple, Compassionate Roadmap</span>
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-secondary font-serif leading-tight">
              What Happens When You Start?
            </h2>

            <div className="h-1 w-16 sm:w-20 bg-primary rounded-full mx-auto mt-3 sm:mt-4 mb-4 sm:mb-6"></div>

            <p className="text-xs sm:text-base md:text-lg text-foreground/80 font-medium leading-relaxed max-w-2xl mx-auto px-1">
              A structured, step-by-step process designed to remove stress and replace it with clarity, momentum, and sustainable progress.
            </p>
          </motion.div>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 max-w-6xl mx-auto relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-primary/15 shadow-sm shadow-primary/5 flex flex-col justify-between relative group hover:border-primary/30 hover:-translate-y-1 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5 sm:mb-5">
                    <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-secondary text-accent flex items-center justify-center">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-xl md:text-2xl font-bold text-secondary font-serif mb-2 sm:mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-end text-primary/40 mt-3">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:text-primary transition-all" />
                  </div>
                )}
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
