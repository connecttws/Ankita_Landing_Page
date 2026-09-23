"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, SunMedium, ChevronLeft, ChevronRight } from "lucide-react";

interface TransformationSectionProps {
  onOpenBooking?: () => void;
}

const transformations = [
  {
    icon: "☀️",
    title: "Sustained All-Day Energy",
    detail: "No afternoon slump or morning exhaustion. Clean, vibrant stamina from dawn until bedtime.",
  },
  {
    icon: "👗",
    title: "Effortless Clothes Confidence",
    detail: "Releasing stubborn belly weight and feeling radiant, comfortable, and proud in your favorite outfits.",
  },
  {
    icon: "😴",
    title: "Deep, Restorative Sleep",
    detail: "Sleeping peacefully through the night without 3 AM wakeups, and greeting each morning fully refreshed.",
  },
  {
    icon: "🧠",
    title: "Mental Clarity & Calm Mind",
    detail: "Dissolving brain fog, calming hormonal anxiety, and enjoying peaceful meals without guilt or calorie obsession.",
  },
];

export default function TransformationSection({}: TransformationSectionProps) {
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
              <span className="text-primary">Imagine Waking Up Feeling Like You Again.</span>
            </h2>

            <div className="h-0.5 sm:h-1 w-14 bg-primary rounded-full mx-auto mt-2 sm:mt-2.5 mb-2.5"></div>

            <p className="text-xs sm:text-base text-foreground/80 font-medium leading-relaxed max-w-2xl mx-auto px-1">
              Midlife does not have to be a slow decline. With doctor-aligned coaching and hormonal synergy, it becomes your most vibrant chapter.
            </p>
          </motion.div>
        </div>

        {/* ── Mobile: Carousel with Arrows (< min-[480px]) ── */}
        <div className="min-[480px]:hidden">
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
                  <div className="rounded-2xl p-4 bg-[#f8f6f2] border border-emerald-950/10 flex flex-col justify-between min-h-[185px]">
                    <div>
                      <span className="text-xl block mb-2.5 p-2 bg-white rounded-xl w-fit shadow-2xs border border-emerald-950/10">
                        {item.icon}
                      </span>
                      <h3 className="text-sm font-extrabold text-secondary mb-1 leading-snug">{item.title}</h3>
                      <p className="text-[11px] text-foreground/75 leading-relaxed">{item.detail}</p>
                    </div>
                    <div className="mt-3.5 pt-2.5 border-t border-emerald-950/5 flex items-center gap-1.5 text-[10px] font-bold text-primary uppercase">
                      <Sparkles className="w-3 h-3 text-accent shrink-0" />
                      <span>Lasting Habit Shift</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows + Dots */}
          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              aria-label="Previous transformation"
              className="w-10 h-10 rounded-full bg-white border-2 border-[#0d7363]/30 hover:border-primary text-primary hover:bg-emerald-50 shadow-sm flex items-center justify-center active:scale-90 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: total }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-6 bg-primary shadow-xs"
                      : "w-2.5 bg-emerald-950/20 hover:bg-emerald-950/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next transformation"
              className="w-10 h-10 rounded-full bg-white border-2 border-[#0d7363]/30 hover:border-primary text-primary hover:bg-emerald-50 shadow-sm flex items-center justify-center active:scale-90 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── Desktop: Grid (min-[480px] and above) ── */}
        <div className="hidden min-[480px]:grid min-[480px]:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.35 }}
              className="rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 bg-[#f8f6f2] border border-emerald-950/10 hover:border-primary/40 hover:shadow-xl hover:shadow-emerald-950/8 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <span className="text-xl sm:text-2xl block mb-2.5 p-2 bg-white rounded-xl w-fit shadow-2xs border border-emerald-950/10">
                  {item.icon}
                </span>
                <h3 className="text-sm sm:text-base font-extrabold text-secondary mb-1 leading-snug">{item.title}</h3>
                <p className="text-[11px] sm:text-sm text-foreground/75 leading-relaxed">{item.detail}</p>
              </div>
              <div className="mt-3.5 pt-2.5 border-t border-emerald-950/5 flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-primary uppercase">
                <Sparkles className="w-3 h-3 text-accent shrink-0" />
                <span>Lasting Habit Shift</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
