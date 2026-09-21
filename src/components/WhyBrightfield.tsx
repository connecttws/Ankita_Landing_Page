"use client";

import { motion } from "framer-motion";
import { CheckCircle2, CalendarCheck, Sparkles, Award } from "lucide-react";

interface WhyBrightfieldProps {
  onOpenBooking: () => void;
}

const differentiators = [
  "Fitness + Nutrition + Emotional Wellbeing",
  "Personalised, not generic",
  "Designed around your real lifestyle",
  "Focused on strength & sustainable health",
  "Support through perimenopause AND menopause",
  "Long-term lifestyle change — not quick fixes",
];

export default function WhyBrightfield({ onOpenBooking }: WhyBrightfieldProps) {
  return (
    <section className="py-10 md:py-20 bg-background relative overflow-hidden w-full max-w-full">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-[10px] min-[360px]:text-xs uppercase tracking-wider mb-3 sm:mb-4">
              <Award className="w-3.5 h-3.5 text-accent flex-shrink-0" />
              <span>Trusted Since 2013</span>
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-secondary font-serif leading-tight">
              Why Brightfield?<br />
              <span className="text-primary italic">Because You Need More Than Another Diet Plan.</span>
            </h2>

            <div className="h-1 w-16 sm:w-20 bg-primary rounded-full mt-3 sm:mt-4 mb-4 sm:mb-6"></div>

            <div className="space-y-3 sm:space-y-4 text-xs sm:text-base md:text-lg text-foreground/80 leading-relaxed font-medium">
              <p>
                Since 2013, Brightfield has been helping people build healthier, happier relationships with fitness and wellbeing.
              </p>
              <p>
                And when it comes to midlife women, we understand that one-size-fits-all calorie cutting simply doesn&apos;t work. Your body requires metabolic respect, hormonal awareness, and compassionate consistency.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-foreground/70">
                We replace guesswork and extreme restrictions with proven, sustainable strategies that empower you every single day.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-primary/10 hidden sm:block">
              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-xl shadow-primary/25 hover:bg-primary-hover active:scale-98 transition-all cursor-pointer"
              >
                <CalendarCheck className="w-5 h-5 text-accent flex-shrink-0" />
                <span>BOOK YOUR FREE CONSULTATION</span>
                <div className="absolute inset-0 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-background opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            </div>
          </motion.div>

          {/* Right Checklist Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 sm:p-10 shadow-lg shadow-primary/5 border border-primary/15 relative"
          >
            <div className="flex items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-secondary font-serif leading-snug">
                What Makes Our Approach Different?
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="flex items-start gap-2.5 sm:gap-3.5 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-background/80 border border-primary/10 hover:border-primary/25 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm md:text-base font-semibold text-secondary leading-snug">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 block sm:hidden">
              <button
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg active:scale-98 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="truncate">BOOK FREE CONSULTATION</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
