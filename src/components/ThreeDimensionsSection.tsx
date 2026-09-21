"use client";

import { motion } from "framer-motion";
import { Dumbbell, Utensils, Brain, CalendarCheck, Sparkles } from "lucide-react";

interface ThreeDimensionsSectionProps {
  onOpenBooking: () => void;
}

const dimensions = [
  {
    title: "FITNESS",
    tagline: "Move for Strength & Vitality",
    description:
      "Build strength, mobility, stamina & confidence with movement designed specifically for your changing body — protecting bones, joints, and lean muscle without burnout.",
    icon: Dumbbell,
    accentColor: "from-primary/20 to-primary/5",
    iconBg: "bg-primary text-white",
  },
  {
    title: "NUTRITION",
    tagline: "Nourish Without Restriction",
    description:
      "Learn how to nourish your body without extreme diets, severe food restrictions, or constantly counting calories. Practical Indian meals that stabilize hormones and blood sugar.",
    icon: Utensils,
    accentColor: "from-accent/25 to-accent/5",
    iconBg: "bg-accent text-secondary",
  },
  {
    title: "MIND & EMOTIONAL WELLBEING",
    tagline: "Calm the Mental Load",
    description:
      "Work on stress, emotional eating, confidence, mindset, and the invisible mental load that often gets overlooked in midlife transitions. Regain emotional balance and peaceful sleep.",
    icon: Brain,
    accentColor: "from-secondary/15 to-secondary/5",
    iconBg: "bg-secondary text-white",
  },
];

export default function ThreeDimensionsSection({ onOpenBooking }: ThreeDimensionsSectionProps) {
  return (
    <section id="dimensions" className="py-10 md:py-20 bg-background relative overflow-hidden w-full max-w-full">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-10 left-4 w-60 sm:w-72 h-60 sm:h-72 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-10 right-4 w-64 sm:w-80 h-64 sm:h-80 bg-accent/15 rounded-full blur-3xl opacity-60"></div>
      </div>

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
              <span>The Whole-Woman Philosophy</span>
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-secondary font-serif leading-tight">
              Stop Fighting Your Body.<br />
              <span className="text-primary italic">Start Understanding It.</span>
            </h2>

            <div className="h-1 w-16 sm:w-20 bg-primary rounded-full mx-auto mt-3 sm:mt-4 mb-4 sm:mb-6"></div>

            <p className="text-xs sm:text-base md:text-lg text-foreground/80 font-medium leading-relaxed max-w-2xl mx-auto px-1">
              Perimenopause and menopause aren&apos;t simply about changing hormones. They can affect how you move, eat, sleep, think, feel, and recover.
            </p>
            <p className="mt-1.5 text-xs sm:text-sm text-foreground/70 leading-relaxed max-w-2xl mx-auto px-1">
              That&apos;s why Brightfield doesn&apos;t believe in giving you another generic diet or workout plan. We work on the woman as a whole.
            </p>
          </motion.div>
        </div>

        {/* 3 Dimensions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {dimensions.map((dim, index) => {
            const Icon = dim.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-md shadow-primary/5 border border-primary/15 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between relative group"
              >
                <div>
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${dim.iconBg} flex items-center justify-center mb-4 sm:mb-6 shadow-sm shadow-primary/20 group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  <span className="text-[10px] sm:text-xs font-bold text-accent tracking-wider uppercase block mb-1">
                    {dim.tagline}
                  </span>

                  <h3 className="text-lg sm:text-2xl font-bold text-secondary font-serif mb-2.5 sm:mb-4">
                    {dim.title}
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base text-foreground/75 leading-relaxed">
                    {dim.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center text-[10px] sm:text-xs font-bold text-primary tracking-wide uppercase">
                  <span>Dimension 0{index + 1} &bull; Tailored to You</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tagline Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 sm:mt-16 bg-gradient-to-r from-secondary via-secondary to-[#481d34] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-center max-w-4xl mx-auto shadow-xl"
        >
          <p className="text-lg sm:text-2xl font-serif font-bold text-accent mb-2 leading-snug">
            One woman. Three dimensions. One personalised approach.
          </p>
          <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto mb-5 sm:mb-6 leading-relaxed">
            When your movement, food, and emotional wellbeing work together, sustainable weight balance and renewed energy happen naturally.
          </p>

          <button
            onClick={onOpenBooking}
            className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover active:scale-98 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white shadow-lg shadow-primary/30 transition-all cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
            <span className="truncate">BOOK YOUR FREE CONSULTATION</span>
            <div className="absolute inset-0 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-secondary opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
