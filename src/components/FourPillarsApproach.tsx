"use client";

import { motion } from "framer-motion";
import { Activity, Apple, RefreshCw, Trophy, CalendarCheck, Sparkles } from "lucide-react";

interface FourPillarsApproachProps {
  onOpenBooking: () => void;
}

const pillars = [
  {
    num: "01",
    tag: "MOVE",
    title: "Build a body that supports the life you want to live",
    description:
      "Personalised fitness that focuses on strength, mobility, balance, stamina, and functional movement. Gentle on joints, protective of bones, and energizing instead of draining.",
    icon: Activity,
  },
  {
    num: "02",
    tag: "NOURISH",
    title: "Eat to support your changing body — not punish it",
    description:
      "Practical nutrition strategies designed around your lifestyle, preferences, and cultural foods. Balancing protein, healthy fats, and fiber to stabilize blood sugar and midlife metabolism.",
    icon: Apple,
  },
  {
    num: "03",
    tag: "RESET",
    title: "Because your mental wellbeing matters too",
    description:
      "Understand your emotional triggers, manage stress cortisol spikes better, and rebuild the quiet, steady self-confidence that may have taken a backseat during hormonal shifts.",
    icon: RefreshCw,
  },
  {
    num: "04",
    tag: "THRIVE",
    title: "Turn healthy choices into a lifestyle you maintain",
    description:
      "No temporary fixes. No extreme 30-day crash challenges. Just sustainable micro-habits that fit seamlessly into your family, career, and real daily routine for decades to come.",
    icon: Trophy,
  },
];

export default function FourPillarsApproach({ onOpenBooking }: FourPillarsApproachProps) {
  return (
    <section id="approach" className="py-10 md:py-20 bg-white relative overflow-hidden w-full max-w-full">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 text-secondary font-bold text-[10px] min-[360px]:text-xs uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>Introducing the Brightfield Approach</span>
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-secondary font-serif leading-tight">
              A Stronger You — <span className="text-primary italic">From The Inside Out.</span>
            </h2>

            <div className="h-1 w-16 sm:w-20 bg-primary rounded-full mx-auto mt-3 sm:mt-4 mb-4 sm:mb-6"></div>

            <p className="text-xs sm:text-base md:text-lg text-foreground/80 font-medium leading-relaxed max-w-2xl mx-auto px-1">
              Four progressive pillars designed specifically for midlife women to regain their hormonal harmony, functional strength, and peace of mind.
            </p>
          </motion.div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="bg-background rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-primary/15 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 relative group"
              >
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl font-serif font-extrabold text-primary/70">
                      {pillar.num}
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-secondary bg-white px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-black/5 shadow-2xs">
                      {pillar.tag}
                    </span>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>

                <h3 className="text-base sm:text-xl md:text-2xl font-bold text-secondary font-serif mb-2 sm:mb-3 leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm md:text-base text-foreground/75 leading-relaxed">
                  {pillar.description}
                </p>
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
            <div className="absolute inset-0 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-white opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
