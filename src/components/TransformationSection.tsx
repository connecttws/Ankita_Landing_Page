"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SunMedium, ChevronLeft, ChevronRight, CalendarCheck } from "lucide-react";

interface TransformationSectionProps {
  onOpenBooking?: () => void;
}

const transformations = [
  {
    icon: "☀️",
    text: "Having more energy throughout the day",
  },
  {
    icon: "💪",
    text: "Feeling stronger and more capable in your body",
  },
  {
    icon: "👗",
    text: "Feeling comfortable and confident in your clothes",
  },
  {
    icon: "🥗",
    text: "Eating without constantly worrying about food",
  },
  {
    icon: "🧠",
    text: "Feeling mentally clearer and emotionally more balanced",
  },
  {
    icon: "😴",
    text: "Building better sleep and recovery habits",
  },
  {
    icon: "❤️",
    text: "Understanding your body instead of constantly fighting it",
  },
  {
    icon: "✨",
    text: "And finally feeling like YOU are back in charge.",
  },
];

export default function TransformationSection({ onOpenBooking }: TransformationSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const total = transformations.length;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextSlide();
    else if (distance < -minSwipeDistance) prevSlide();
  };

  return (
    <section id="transformation" className="py-7 sm:py-12 bg-white relative overflow-hidden w-full max-w-full">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#d97706]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#0d7363]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="mx-auto max-w-7xl px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-5 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1 rounded-full bg-emerald-950/5 text-primary font-bold text-[11px] sm:text-xs uppercase tracking-wider mb-2 border border-[#0d7363]/20">
              <SunMedium className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>Your Transformation Reality</span>
            </span>

            <h2 className="text-lg min-[360px]:text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-secondary leading-tight">
              What Could Change For You?<br />
              <span className="text-primary">Imagine Waking Up And…</span>
            </h2>

            <div className="h-0.5 sm:h-1 w-14 bg-primary rounded-full mx-auto mt-2 sm:mt-2.5 mb-2.5"></div>
          </motion.div>
        </div>

        {/* ── Mobile: Carousel with Arrows (< sm) ── */}
        <div className="sm:hidden">
          <div
            className="overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {transformations.map((item, index) => (
                <div key={index} className="w-full shrink-0 px-1">
                  <div className="rounded-2xl p-4 bg-[#f8f6f2] border border-emerald-950/10 flex items-center gap-3.5 min-h-[96px] shadow-2xs">
                    <span className="text-2xl p-2 bg-white rounded-xl shadow-2xs border border-emerald-950/10 shrink-0 select-none">
                      {item.icon}
                    </span>
                    <p className="text-xs min-[360px]:text-sm font-bold text-secondary leading-snug">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows + Counter */}
          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              aria-label="Previous transformation"
              className="w-10 h-10 rounded-full bg-white border-2 border-[#0d7363]/30 hover:border-primary text-primary hover:bg-emerald-50 shadow-sm flex items-center justify-center active:scale-90 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-xs font-extrabold text-secondary tracking-wider">
              {currentIndex + 1} / {total}
            </span>

            <button
              onClick={nextSlide}
              aria-label="Next transformation"
              className="w-10 h-10 rounded-full bg-white border-2 border-[#0d7363]/30 hover:border-primary text-primary hover:bg-emerald-50 shadow-sm flex items-center justify-center active:scale-90 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── Desktop: Grid (sm and above) ── */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.3 }}
              className="rounded-2xl p-4 bg-[#f8f6f2] border border-emerald-950/10 hover:border-primary/40 hover:shadow-md transition-all flex items-center gap-3.5"
            >
              <span className="text-2xl p-2 bg-white rounded-xl shadow-2xs border border-emerald-950/10 shrink-0 select-none">
                {item.icon}
              </span>
              <p className="text-xs sm:text-sm font-bold text-secondary leading-snug">
                {item.text}
              </p>
            </motion.div>
          ))}
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
