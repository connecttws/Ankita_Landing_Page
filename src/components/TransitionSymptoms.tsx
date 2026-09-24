"use client";

import { motion } from "framer-motion";
import { HeartHandshake, CalendarCheck } from "lucide-react";

interface TransitionSymptomsProps {
  onOpenBooking?: () => void;
}

const symptoms = [
  {
    icon: "😩",
    title: "Your energy isn't what it used to be",
    description: "You feel exhausted even after a normal day.",
  },
  {
    icon: "⚖️",
    title: "Your weight has started behaving differently",
    description: "Especially around your belly, despite trying to eat better.",
  },
  {
    icon: "🌙",
    title: "Your sleep feels disturbed",
    description: "You wake up tired, restless or unable to switch off.",
  },
  {
    icon: "🌪️",
    title: "Your moods feel unpredictable",
    description: "Irritability, anxiety, emotional overwhelm or feeling unlike yourself.",
  },
  {
    icon: "💪",
    title: "You feel weaker or less active",
    description: "The workouts that once worked don't seem to give you the same results.",
  },
  {
    icon: "🍫",
    title: "Cravings have become harder to manage",
    description: "Especially when you're stressed, tired or emotionally drained.",
  },
  {
    icon: "❤️",
    title: "And somewhere along the way, you stopped feeling like YOU.",
    description: "",
  },
];

export default function TransitionSymptoms({ onOpenBooking }: TransitionSymptomsProps) {
  return (
    <section id="symptoms" className="py-7 sm:py-12 bg-white relative overflow-hidden w-full max-w-full">
      {/* Ambient background decor */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#0d7363]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#d97706]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-5 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1 rounded-full bg-emerald-950/5 text-primary font-bold text-[11px] sm:text-xs uppercase tracking-wider mb-2 border border-[#0d7363]/20">
              <HeartHandshake className="w-3.5 h-3.5 shrink-0" />
              <span>Empathetic Understanding</span>
            </span>

            <h2 className="text-lg min-[360px]:text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-secondary leading-tight">
              You&apos;re Not “Getting Lazy”.<br />
              <span className="text-primary">Your Body Is Going Through a Transition.</span>
            </h2>

            <div className="h-0.5 sm:h-1 w-14 bg-primary rounded-full mx-auto mt-2 sm:mt-2.5 mb-2.5"></div>

            <p className="text-xs sm:text-base text-foreground/80 font-bold leading-relaxed max-w-2xl mx-auto px-1">
              Maybe you&apos;ve noticed:
            </p>
          </motion.div>
        </div>

        {/* Symptoms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 max-w-4xl mx-auto">
          {symptoms.map((item, index) => {
            const isLast = index === symptoms.length - 1;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.35 }}
                className={`rounded-2xl p-3.5 sm:p-5 bg-[#f8f6f2] border border-emerald-950/10 hover:border-primary/40 shadow-2xs hover:shadow-md transition-all duration-300 ${
                  isLast ? "sm:col-span-2 bg-gradient-to-r from-[#f8f6f2] via-emerald-50/50 to-[#f8f6f2] border-primary/30" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-lg sm:text-2xl shrink-0 select-none p-2 bg-white rounded-xl shadow-2xs border border-emerald-950/10">
                    {item.icon}
                  </span>
                  <div className="space-y-0.5 min-w-0">
                    <h3 className={`font-bold text-secondary leading-snug ${isLast ? "text-sm sm:text-base text-primary" : "text-sm sm:text-base"}`}>
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-[11px] sm:text-sm text-foreground/75 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reassurance & CTA area */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 sm:mt-8 text-center max-w-xl mx-auto flex flex-col items-center gap-3"
        >
          <p className="text-xs sm:text-base font-bold text-secondary">
            If this sounds familiar, you&apos;re not alone.
          </p>
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
