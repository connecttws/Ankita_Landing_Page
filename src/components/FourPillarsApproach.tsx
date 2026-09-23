"use client";

import { motion } from "framer-motion";
import { Activity, Apple, RefreshCw, Trophy, Sparkles } from "lucide-react";

interface FourPillarsApproachProps {
  onOpenBooking?: () => void;
}

const pillars = [
  {
    num: "01",
    tag: "MOVE",
    title: "Joint-Friendly Strength",
    description:
      "Targeted resistance training that revives your resting metabolism and protects bone density without adrenal burnout.",
    icon: Activity,
  },
  {
    num: "02",
    tag: "NOURISH",
    title: "Hormonal Nutrition",
    description:
      "Nutrient-dense Indian meals with optimal protein and fiber to stabilize insulin, eliminate cravings, and fuel your day.",
    icon: Apple,
  },
  {
    num: "03",
    tag: "RESET",
    title: "Nervous System Recovery",
    description:
      "Daily protocols to down-regulate cortisol, soothe midlife anxiety, and restore 7-8 hours of deep restorative sleep.",
    icon: RefreshCw,
  },
  {
    num: "04",
    tag: "SUSTAIN",
    title: "Lifelong Habit Architecture",
    description:
      "Simple, realistic routines that integrate seamlessly with your family and work — no temporary 30-day crash challenges.",
    icon: Trophy,
  },
];

export default function FourPillarsApproach({}: FourPillarsApproachProps) {
  return (
    <section id="approach" className="py-7 sm:py-12 bg-white relative overflow-hidden w-full max-w-full">
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
              <span>The Brightfield Method</span>
            </span>

            <h2 className="text-lg min-[360px]:text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-secondary leading-tight">
              A Stronger You — <span className="text-primary">From The Inside Out.</span>
            </h2>

            <div className="h-0.5 sm:h-1 w-14 bg-primary rounded-full mx-auto mt-2 sm:mt-2.5 mb-2.5"></div>

            <p className="text-xs sm:text-base text-foreground/80 font-medium leading-relaxed max-w-2xl mx-auto px-1">
              Four progressive pillars engineered specifically for women navigating midlife hormonal transitions.
            </p>
          </motion.div>
        </div>

        {/* 4 Pillars Grid - fluid shrink */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4.5 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.4 }}
                className="bg-[#f8f6f2] rounded-2xl sm:rounded-3xl p-4 sm:p-5.5 border border-emerald-950/10 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-950/8 hover:-translate-y-1 relative group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-extrabold text-primary">
                      {pillar.num}
                    </span>
                    <span className="text-[10px] min-[360px]:text-[11px] font-bold uppercase tracking-wider text-white bg-[#032d23] px-2.5 py-0.5 rounded-full shadow-2xs whitespace-nowrap">
                      {pillar.tag}
                    </span>
                  </div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-950/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                <h3 className="text-sm sm:text-base md:text-lg font-extrabold text-secondary mb-1 leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-[11px] sm:text-sm text-foreground/75 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
