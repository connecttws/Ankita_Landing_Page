"use client";

import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

interface TransitionSymptomsProps {
  onOpenBooking?: () => void;
}

const symptoms = [
  {
    icon: "⚖️",
    title: "Stubborn Midsection Weight",
    description: "The exact diets and cardio that worked in your 20s and 30s suddenly stop working.",
  },
  {
    icon: "🌙",
    title: "Broken Sleep & 3 AM Wakeups",
    description: "Falling asleep tired but waking up wired at 3 AM due to nocturnal cortisol surges.",
  },
  {
    icon: "🧠",
    title: "Brain Fog & Mood Shifts",
    description: "Sudden anxiety, uncharacteristic irritability, or losing your usual mental sharpness.",
  },
  {
    icon: "⚡",
    title: "Fatigue & Slower Metabolism",
    description: "Hormonal shifts make your body hold onto fat and leave you drained by mid-afternoon.",
  },
];

export default function TransitionSymptoms({}: TransitionSymptomsProps) {
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
              <span className="text-primary">Your Hormones Are Changing the Rules.</span>
            </h2>

            <div className="h-0.5 sm:h-1 w-14 bg-primary rounded-full mx-auto mt-2 sm:mt-2.5 mb-2.5"></div>

            <p className="text-xs sm:text-base text-foreground/80 font-medium leading-relaxed max-w-2xl mx-auto px-1">
              When estrogen and progesterone fluctuate, metabolic rate drops and cortisol rises. It isn&apos;t a lack of discipline — it&apos;s physiology.
            </p>
          </motion.div>
        </div>

        {/* Symptoms 4-Card Grid - responsive shrink */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 max-w-4xl mx-auto">
          {symptoms.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.35 }}
              className="rounded-2xl p-3.5 sm:p-5 bg-[#f8f6f2] border border-emerald-950/10 hover:border-primary/40 shadow-2xs hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <span className="text-lg sm:text-2xl shrink-0 select-none p-2 bg-white rounded-xl shadow-2xs border border-emerald-950/10">
                  {item.icon}
                </span>
                <div className="space-y-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-secondary leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-sm text-foreground/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Reassurance Bar - dark effect */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-5 sm:mt-7 text-center max-w-xl mx-auto p-3 rounded-2xl bg-[#032d23] text-white shadow-md shadow-emerald-950/15"
        >
          <p className="text-[11px] sm:text-sm font-semibold text-emerald-100">
            💡 When you stop starving your body and start nourishing your hormonal rhythm, weight loss becomes natural again.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
