"use client";

import { motion } from "framer-motion";
import { CalendarCheck, HeartHandshake } from "lucide-react";

interface TransitionSymptomsProps {
  onOpenBooking: () => void;
}

const symptoms = [
  {
    icon: "😩",
    title: "Your energy isn't what it used to be",
    description: "You feel exhausted even after a normal day, feeling drained before the evening even begins.",
  },
  {
    icon: "⚖️",
    title: "Your weight has started behaving differently",
    description: "Especially around your belly and waistline, despite eating cleaner or cutting calories.",
  },
  {
    icon: "🌙",
    title: "Your sleep feels disturbed",
    description: "You wake up tired, feel restless through the night, or find your mind unable to switch off.",
  },
  {
    icon: "🌪️",
    title: "Your moods feel unpredictable",
    description: "Sudden irritability, anxiety, emotional overwhelm, or simply feeling unlike yourself.",
  },
  {
    icon: "💪",
    title: "You feel weaker or less active",
    description: "Workouts that once worked don't give you the same results, leaving you sore or fatigued instead.",
  },
  {
    icon: "🍫",
    title: "Cravings have become harder to manage",
    description: "Especially for sugar or carbs when you're stressed, tired, or emotionally drained.",
  },
  {
    icon: "❤️",
    title: "And somewhere along the way, you stopped feeling like YOU",
    description: "Your confidence has dipped, your clothes feel uncomfortable, and you miss your vibrant self.",
    highlight: true,
  },
];

export default function TransitionSymptoms({ onOpenBooking }: TransitionSymptomsProps) {
  return (
    <section id="symptoms" className="py-10 md:py-20 bg-white relative overflow-hidden w-full max-w-full">
      {/* Ambient background decor */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-[10px] min-[360px]:text-xs uppercase tracking-wider mb-3">
              <HeartHandshake className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Empathetic Understanding</span>
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-secondary font-serif leading-tight">
              You&apos;re Not <span className="italic text-primary">“Getting Lazy”</span>.<br />
              Your Body Is Going Through a Transition.
            </h2>

            <div className="h-1 w-16 sm:w-20 bg-primary rounded-full mx-auto mt-3 sm:mt-4 mb-4 sm:mb-5"></div>

            <p className="text-xs sm:text-base md:text-lg text-foreground/75 font-medium leading-relaxed px-1">
              When estrogen and progesterone fluctuate, your metabolism, cortisol, and insulin sensitivity change. It isn&apos;t a lack of willpower — it&apos;s biology. Maybe you&apos;ve noticed:
            </p>
          </motion.div>
        </div>

        {/* Symptoms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 max-w-6xl mx-auto">
          {symptoms.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className={`rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-all duration-300 ${
                item.highlight
                  ? "md:col-span-2 lg:col-span-3 bg-gradient-to-br from-primary/10 via-white to-accent/10 border-2 border-primary/25 shadow-md shadow-primary/5"
                  : "bg-background border border-primary/10 shadow-2xs hover:shadow-md hover:border-primary/25 hover:-translate-y-1"
              }`}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="text-2xl sm:text-3xl flex-shrink-0 select-none p-2 bg-white rounded-xl sm:rounded-2xl shadow-2xs border border-black/5">
                  {item.icon}
                </span>
                <div className="space-y-1 min-w-0">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-secondary font-serif leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reassurance Callout & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 sm:mt-16 text-center max-w-2xl mx-auto px-2"
        >
          <p className="text-base sm:text-xl font-bold text-secondary font-serif mb-4 sm:mb-6">
            If this sounds familiar, you&apos;re not alone.
          </p>

          <button
            onClick={onOpenBooking}
            className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-lg font-bold text-white shadow-xl shadow-primary/25 hover:bg-primary-hover active:scale-98 transition-all cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
            <span className="truncate">BOOK YOUR FREE CONSULTATION</span>
            <div className="absolute inset-0 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-white opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
