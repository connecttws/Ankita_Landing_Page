"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Activity, Apple, RefreshCw, Trophy, Sparkles, ChevronLeft, ChevronRight, CalendarCheck } from "lucide-react";

interface FourPillarsApproachProps {
  onOpenBooking?: () => void;
}

const pillars = [
  {
    num: "01",
    tag: "MOVE",
    title: "Build a body that supports the life you want to live.",
    description:
      "Personalised fitness that focuses on strength, mobility, balance, stamina and functional movement.",
    icon: Activity,
  },
  {
    num: "02",
    tag: "NOURISH",
    title: "Eat to support your changing body — not punish it.",
    description:
      "Practical nutrition strategies designed around your lifestyle, preferences and goals.",
    icon: Apple,
  },
  {
    num: "03",
    tag: "RESET",
    title: "Because your mental wellbeing matters too.",
    description:
      "Understand your emotional triggers, manage stress better and rebuild the confidence that may have taken a backseat.",
    icon: RefreshCw,
  },
  {
    num: "04",
    tag: "THRIVE",
    title: "Turn healthy choices into a lifestyle you can actually maintain.",
    description:
      "No temporary fixes. No 30-day challenges. Just sustainable habits that fit into your real life.",
    icon: Trophy,
  },
];

export default function FourPillarsApproach({ onOpenBooking }: FourPillarsApproachProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const total = pillars.length;

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
    <section id="approach" className="py-7 sm:py-12 bg-white relative overflow-hidden w-full max-w-full">
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
              <span>Introducing the Brightfield Approach</span>
            </span>

            <h2 className="text-lg min-[360px]:text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-secondary leading-tight">
              A Stronger You — <span className="text-primary">From The Inside Out.</span>
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
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div key={index} className="w-full shrink-0 px-1">
                    <div className="bg-[#f8f6f2] rounded-2xl p-4 border border-emerald-950/10 relative group min-h-[190px]">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-extrabold text-primary">{pillar.num}</span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#032d23] px-2.5 py-0.5 rounded-full shadow-2xs whitespace-nowrap">
                            {pillar.tag}
                          </span>
                        </div>
                        <div className="w-9 h-9 rounded-xl bg-emerald-950/5 text-primary flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                      <h3 className="text-sm font-extrabold text-secondary mb-1 leading-snug">{pillar.title}</h3>
                      <p className="text-[11px] text-foreground/75 leading-relaxed">{pillar.description}</p>
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
              aria-label="Previous pillar"
              className="w-10 h-10 rounded-full bg-white border-2 border-[#0d7363]/30 hover:border-primary text-primary hover:bg-emerald-50 shadow-sm flex items-center justify-center active:scale-90 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: total }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to pillar ${idx + 1}`}
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
              aria-label="Next pillar"
              className="w-10 h-10 rounded-full bg-white border-2 border-[#0d7363]/30 hover:border-primary text-primary hover:bg-emerald-50 shadow-sm flex items-center justify-center active:scale-90 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── Desktop: Grid (sm and above) ── */}
        <div className="hidden sm:grid sm:grid-cols-2 gap-3 sm:gap-4.5 max-w-5xl mx-auto">
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
                    <span className="text-xl sm:text-2xl font-extrabold text-primary">{pillar.num}</span>
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
                <p className="text-[11px] sm:text-sm text-foreground/75 leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
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
