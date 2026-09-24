"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Dumbbell, Utensils, Brain, CalendarCheck, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

interface ThreeDimensionsSectionProps {
  onOpenBooking: () => void;
}

const dimensions = [
  {
    title: "FITNESS",
    description:
      "Build strength, mobility, stamina & confidence with movement designed for your changing body.",
    icon: Dumbbell,
  },
  {
    title: "NUTRITION",
    description:
      "Learn how to nourish your body without extreme diets, food restrictions or constantly counting calories.",
    icon: Utensils,
  },
  {
    title: "MIND & EMOTIONAL WELLBEING",
    description:
      "Work on stress, emotional eating, confidence, mindset and the mental load that often gets overlooked.",
    icon: Brain,
  },
];

export default function ThreeDimensionsSection({ onOpenBooking }: ThreeDimensionsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const total = dimensions.length;

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
    <section id="dimensions" className="py-7 sm:py-12 bg-[#f8f6f2] relative overflow-hidden w-full max-w-full">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-10 left-4 w-60 h-60 bg-[#0d7363]/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-10 right-4 w-64 h-64 bg-[#d97706]/10 rounded-full blur-3xl opacity-60"></div>
      </div>

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
              <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>The Whole-Woman Framework</span>
            </span>

            <h2 className="text-lg min-[360px]:text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-secondary leading-tight">
              Stop Fighting Your Body.<br />
              <span className="text-primary">Start Understanding It.</span>
            </h2>

            <div className="h-0.5 sm:h-1 w-14 bg-primary rounded-full mx-auto mt-2 sm:mt-2.5 mb-2.5"></div>

            <div className="text-xs sm:text-base text-foreground/85 font-medium leading-relaxed max-w-2xl mx-auto px-1 space-y-1">
              <p>Perimenopause and menopause aren&apos;t simply about changing hormones.</p>
              <p>They can affect how you move, eat, sleep, think, feel and recover.</p>
              <p>That&apos;s why Brightfield doesn&apos;t believe in giving you another generic diet or workout plan.</p>
              <p className="font-bold text-secondary">We work on the woman as a whole.</p>
            </div>
          </motion.div>
        </div>

        {/* ── Mobile: Carousel with Arrows (< md) ── */}
        <div className="md:hidden">
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
              {dimensions.map((dim, index) => {
                const Icon = dim.icon;
                return (
                  <div key={index} className="w-full shrink-0 px-1">
                    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-emerald-950/10 flex flex-col justify-between min-h-[210px]">
                      <div>
                        <div className="w-11 h-11 rounded-xl bg-emerald-950/5 text-primary flex items-center justify-center mb-3.5 shadow-2xs">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-extrabold text-secondary mb-2">{dim.title}</h3>
                        <p className="text-[11px] text-foreground/75 leading-relaxed">{dim.description}</p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-emerald-950/5 flex items-center text-[10px] font-bold text-primary tracking-wide uppercase">
                        <span>Dimension 0{index + 1} &bull; 100% Personalised</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Arrows + Dots */}
          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              aria-label="Previous"
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
              aria-label="Next"
              className="w-10 h-10 rounded-full bg-white border-2 border-[#0d7363]/30 hover:border-primary text-primary hover:bg-emerald-50 shadow-sm flex items-center justify-center active:scale-90 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── Desktop: Grid (md and above) ── */}
        <div className="hidden md:grid md:grid-cols-3 gap-3.5 sm:gap-5 max-w-5xl mx-auto">
          {dimensions.map((dim, index) => {
            const Icon = dim.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm hover:shadow-xl shadow-emerald-950/8 border border-emerald-950/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-950/5 text-primary flex items-center justify-center mb-3.5 shadow-2xs group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-secondary mb-2">{dim.title}</h3>
                  <p className="text-[11px] sm:text-sm text-foreground/75 leading-relaxed">{dim.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-950/5 flex items-center text-[10px] sm:text-xs font-bold text-primary tracking-wide uppercase">
                  <span>Dimension 0{index + 1} &bull; 100% Personalised</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tagline Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 sm:mt-8 bg-gradient-to-r from-[#032d23] via-[#053b2f] to-[#0d7363] text-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 text-center max-w-3xl mx-auto shadow-xl shadow-emerald-950/20"
        >
          <p className="text-base sm:text-xl font-extrabold text-white mb-4">
            One woman. Three dimensions. One personalised approach.
          </p>
          <button
            onClick={onOpenBooking}
            className="inline-flex w-full max-w-[340px] min-[380px]:max-w-[370px] sm:w-auto sm:max-w-none items-center justify-center gap-2.5 rounded-full bg-primary hover:bg-primary-hover active:scale-98 px-7 sm:px-10 py-4 sm:py-4.5 text-xs min-[360px]:text-sm sm:text-base font-extrabold text-white shadow-lg shadow-emerald-950/20 hover:shadow-xl transition-all cursor-pointer tracking-wide"
          >
            <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
            <span>BOOK YOUR FREE CONSULTATION</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
