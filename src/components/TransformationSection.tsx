"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Sparkles, SunMedium } from "lucide-react";

interface TransformationSectionProps {
  onOpenBooking: () => void;
}

const transformations = [
  {
    icon: "☀️",
    title: "Having more energy throughout the day",
    detail: "No afternoon slump or waking up exhausted. Sustained vitality from morning to evening.",
  },
  {
    icon: "💪",
    title: "Feeling stronger and more capable in your body",
    detail: "Joints feel supported, muscle tone improves, and everyday movements feel effortless.",
  },
  {
    icon: "👗",
    title: "Feeling comfortable and confident in your clothes",
    detail: "Wearing your favorite outfits without hiding behind oversized layers or self-criticism.",
  },
  {
    icon: "🥗",
    title: "Eating without constantly worrying about food",
    detail: "Freedom from calorie obsession and guilt. Enjoying meals with peace of mind.",
  },
  {
    icon: "🧠",
    title: "Feeling mentally clearer and emotionally balanced",
    detail: "Lifting brain fog, smoothing hormonal mood swings, and feeling grounded through stress.",
  },
  {
    icon: "😴",
    title: "Building better sleep and recovery habits",
    detail: "Falling asleep easily, sleeping deeply through the night, and waking refreshed.",
  },
  {
    icon: "❤️",
    title: "Understanding your body instead of fighting it",
    detail: "Replacing frustration with body literacy and hormonal synergy that works with you.",
  },
  {
    icon: "✨",
    title: "And finally feeling like YOU are back in charge",
    detail: "Reclaiming your vibrant identity, joy, and quiet inner confidence for your best years.",
    featured: true,
  },
];

export default function TransformationSection({ onOpenBooking }: TransformationSectionProps) {
  return (
    <section id="transformation" className="py-10 md:py-20 bg-white relative overflow-hidden w-full max-w-full">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-[10px] min-[360px]:text-xs uppercase tracking-wider mb-3">
              <SunMedium className="w-3.5 h-3.5 text-accent flex-shrink-0" />
              <span>Your Future Reality</span>
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-secondary font-serif leading-tight">
              What Could Change For You?<br />
              <span className="text-primary italic">Imagine Waking Up And…</span>
            </h2>

            <div className="h-1 w-16 sm:w-20 bg-primary rounded-full mx-auto mt-3 sm:mt-4 mb-4 sm:mb-6"></div>

            <p className="text-xs sm:text-base md:text-lg text-foreground/80 font-medium leading-relaxed max-w-2xl mx-auto px-1">
              Midlife doesn&apos;t have to be a decline. With the right hormonal support and personalised habits, it becomes your most empowered chapter.
            </p>
          </motion.div>
        </div>

        {/* Transformations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 max-w-6xl mx-auto">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className={`rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col justify-between transition-all duration-300 ${
                item.featured
                  ? "bg-gradient-to-br from-primary/15 via-primary/5 to-accent/15 border-2 border-primary/30 shadow-md shadow-primary/10 hover:-translate-y-1"
                  : "bg-background border border-primary/15 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 hover:-translate-y-1"
              }`}
            >
              <div>
                <span className="text-2xl sm:text-4xl block mb-3 sm:mb-4 p-2 bg-white rounded-xl sm:rounded-2xl w-fit shadow-2xs border border-black/5">
                  {item.icon}
                </span>

                <h3 className="text-sm sm:text-base md:text-lg font-bold text-secondary font-serif mb-1.5 sm:mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-black/5 flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-primary uppercase">
                <Sparkles className="w-3 h-3 text-accent flex-shrink-0" />
                <span>Life Changing Shift</span>
              </div>
            </motion.div>
          ))}
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
