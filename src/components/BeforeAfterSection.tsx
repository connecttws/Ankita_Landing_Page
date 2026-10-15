"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CalendarCheck,
  CheckCircle2,
  TrendingDown,
  Award,
} from "lucide-react";

interface BeforeAfterSectionProps {
  onOpenBooking?: () => void;
}

interface TransformationItem {
  id: number;
  image: string;
  tag: string;
  title: string;
  subtitle: string;
  highlight: string;
  duration?: string;
}

const transformations: TransformationItem[] = [
  {
    id: 1,
    image: "/images/before_after_1.jpeg",
    tag: "25 KG WEIGHT LOSS",
    title: "90 kgs → 65 kgs Sustainable Reset",
    subtitle: "Overcame severe hormonal weight gain without crash dieting or feeling weak.",
    highlight: "Lost 25 kgs • Hormones Balanced",
    duration: "Consistent Holistic Coaching",
  },
  {
    id: 2,
    image: "/images/before_after_2.jpeg",
    tag: "BODY RECOMPOSITION",
    title: "Core Strength & Midsection Toning",
    subtitle: "Replaced stubborn visceral belly fat with lean muscle and renewed metabolic fire.",
    highlight: "Inches Lost Across Waist & Core",
    duration: "Doctor-Aligned Nutrition",
  },
  {
    id: 3,
    image: "/images/before_after_3.jpeg",
    tag: "HORMONAL RECOVERY",
    title: "Energy Restored & Confidence Reclaimed",
    subtitle: "Restored natural hormonal rhythm, shedding post-transition weight with vibrant energy.",
    highlight: "Flatter Stomach & Radiant Glow",
    duration: "Zero Deprivation",
  },
  {
    id: 4,
    image: "/images/before_after_4.jpeg",
    tag: "WARDROBE TRANSFORMATION",
    title: "Fitting Effortlessly Into Dream Outfits",
    subtitle: "Moved from hiding in loose clothes to radiating confidence in elegant silhouettes.",
    highlight: "Dramatic Waistline Definition",
    duration: "Whole-Woman Wellness",
  },
  {
    id: 5,
    image: "/images/before_after_5.jpeg",
    tag: "METABOLIC RESET",
    title: "Bloating Gone, Vitality Unlocked",
    subtitle: "Fixed sluggish digestion and midlife fatigue through sustainable whole foods.",
    highlight: "Visibly Leaner & Energized",
    duration: "3 Dimensions Approach",
  },
  {
    id: 6,
    image: "/images/before_after_6.jpeg",
    tag: "AGELESS FITNESS",
    title: "Stronger, Lighter & Happier at 38+",
    subtitle: "Proved that losing weight and feeling youthful after 38 is 100% possible.",
    highlight: "Full-Body Posture & Confidence",
    duration: "Sustainable Habits",
  },
  {
    id: 7,
    image: "/images/before_after_7.jpeg",
    tag: "MULTI-STAGE MASTERY",
    title: "3-Phase Progressive Transformation",
    subtitle: "Consistent habit stacking that created long-term results that stay for life.",
    highlight: "Long-Term Habit Mastery",
    duration: "Personalised Guidance",
  },
];

export default function BeforeAfterSection({ onOpenBooking }: BeforeAfterSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const total = transformations.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  return (
    <section id="results" className="py-8 sm:py-16 bg-[#f8f6f2] relative overflow-hidden w-full max-w-full">
      {/* Ambient background glow matching brand palette */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#0d7363]/8 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#d97706]/8 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="mx-auto max-w-7xl px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-6 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-950/5 text-primary font-bold text-[11px] sm:text-xs uppercase tracking-wider mb-2.5 border border-[#0d7363]/25 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>Real Client Transformations</span>
            </span>

            <h2 className="text-xl min-[360px]:text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-secondary leading-tight sm:leading-tight">
              Real Women. Real Transitions.<br />
              <span className="text-primary">Real, Sustainable Results.</span>
            </h2>

            <div className="h-0.5 sm:h-1 w-16 bg-primary rounded-full mx-auto mt-2.5 sm:mt-3 mb-3"></div>

            <p className="text-xs sm:text-base text-foreground/80 font-medium leading-relaxed max-w-2xl mx-auto px-1">
              Every woman here was once told her metabolism was simply “too slow” after 38. With our personalized Whole-Woman approach, they rewrote their reality.
            </p>
          </motion.div>
        </div>

        {/* ── Carousel Track ── */}
        <div className="relative w-full overflow-hidden">
          {/* Mobile View with Peek Effect (< sm) */}
          <div
            className="sm:hidden w-full overflow-visible touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-out"
              style={{
                // 82% card width + gap allows ~14-16% of next slide to peek on the right edge!
                transform: `translateX(-${currentIndex * 85.5}%)`,
              }}
            >
              {transformations.map((item, index) => {
                const isActive = index === currentIndex;
                return (
                  <div
                    key={item.id}
                    className="w-[82vw] min-[360px]:w-[83vw] max-w-[340px] shrink-0 mr-3 min-[360px]:mr-3.5 transition-all duration-300"
                  >
                    <div
                      className={`h-full rounded-2xl bg-white border overflow-hidden shadow-md transition-all duration-300 ${
                        isActive
                          ? "border-primary/40 ring-2 ring-primary/10 shadow-emerald-950/15"
                          : "border-emerald-950/10 opacity-90 scale-[0.98]"
                      }`}
                    >
                      {/* Photo with Before & After Badges */}
                      <div className="relative aspect-square w-full bg-[#032d23] overflow-hidden group">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 85vw, 400px"
                          priority={index < 2}
                          className="object-cover object-center"
                        />

                        {/* Subtle Top Gradient for badge legibility */}
                        <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black/60 via-black/25 to-transparent pointer-events-none" />

                        {/* Before & After Pill Badges */}
                        <div className="absolute top-2.5 left-2.5 z-10">
                          <span className="inline-flex items-center gap-1 rounded-full bg-black/65 backdrop-blur-md px-2.5 py-0.5 text-[9.5px] font-extrabold text-white/95 uppercase tracking-wider border border-white/20 shadow-xs">
                            Before
                          </span>
                        </div>
                        <div className="absolute top-2.5 right-2.5 z-10">
                          <span className="inline-flex items-center gap-1 rounded-full bg-primary/90 backdrop-blur-md px-2.5 py-0.5 text-[9.5px] font-extrabold text-white uppercase tracking-wider border border-white/25 shadow-xs">
                            After ✨
                          </span>
                        </div>

                        {/* Bottom Tag Badge on Image */}
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-950/85 backdrop-blur-md px-3 py-1 text-[10px] font-extrabold text-[#f8f6f2] border border-white/15 shadow-sm">
                            <TrendingDown className="w-3 h-3 text-accent shrink-0" />
                            <span className="truncate">{item.tag}</span>
                          </span>
                        </div>
                      </div>

                      {/* Card Content Details */}
                      <div className="p-3.5 min-[360px]:p-4 flex flex-col justify-between">
                        <div>
                          <h3 className="text-sm min-[360px]:text-base font-extrabold text-secondary leading-snug line-clamp-1">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-[11px] min-[360px]:text-xs text-foreground/75 leading-relaxed line-clamp-2">
                            {item.subtitle}
                          </p>
                        </div>

                        <div className="mt-3 pt-2.5 border-t border-emerald-950/10 flex items-center justify-between gap-2 text-[10px] min-[360px]:text-[11px] font-bold text-primary">
                          <span className="flex items-center gap-1 truncate">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                            <span className="truncate">{item.highlight}</span>
                          </span>
                          <span className="text-foreground/50 shrink-0 text-[10px] font-medium">
                            {index + 1}/{total}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop & Tablet View (sm and above) */}
          <div className="hidden sm:block w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-4 lg:gap-5"
              style={{
                // Responsive desktop translation by item index
                transform: `translateX(-${currentIndex * (100 / (isMobile ? 1 : 3))}%)`,
              }}
            >
              {transformations.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className="w-[calc(50%-8px)] lg:w-[calc(33.333%-14px)] shrink-0 transition-all duration-300"
                  >
                    <div className="h-full rounded-3xl bg-white border border-emerald-950/10 hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group">
                      {/* Photo with Before & After Badges */}
                      <div className="relative aspect-square w-full bg-[#032d23] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-center group-hover:scale-103 transition-transform duration-500"
                        />

                        {/* Top Gradient */}
                        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />

                        {/* Badges */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="inline-flex items-center gap-1 rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-xs font-extrabold text-white/95 uppercase tracking-wider border border-white/20 shadow-xs">
                            Before
                          </span>
                        </div>
                        <div className="absolute top-3 right-3 z-10">
                          <span className="inline-flex items-center gap-1 rounded-full bg-primary/95 backdrop-blur-md px-3 py-1 text-xs font-extrabold text-white uppercase tracking-wider border border-white/25 shadow-xs">
                            After ✨
                          </span>
                        </div>

                        {/* Tag */}
                        <div className="absolute bottom-3 left-3 right-3 z-10">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-950/90 backdrop-blur-md px-3.5 py-1 text-xs font-extrabold text-[#f8f6f2] border border-white/15 shadow-sm">
                            <TrendingDown className="w-3.5 h-3.5 text-accent shrink-0" />
                            <span>{item.tag}</span>
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col justify-between flex-grow">
                        <div>
                          <h3 className="text-base lg:text-lg font-extrabold text-secondary leading-snug">
                            {item.title}
                          </h3>
                          <p className="mt-1.5 text-xs lg:text-sm text-foreground/75 leading-relaxed">
                            {item.subtitle}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-emerald-950/10 flex items-center justify-between text-xs font-bold text-primary">
                          <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                            <span>{item.highlight}</span>
                          </span>
                          <span className="text-[11px] text-foreground/50 font-semibold">
                            {item.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Downside Navigation Controls (Arrows + Dots + Counter) ── */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-3">
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            {/* Previous Arrow Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous transformation photo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#0d7363]/30 hover:border-primary text-primary hover:bg-primary hover:text-white shadow-sm hover:shadow-md flex items-center justify-center active:scale-95 transition-all cursor-pointer group"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-emerald-950/10 shadow-2xs">
              {transformations.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => goToSlide(dotIdx)}
                  aria-label={`Go to transformation ${dotIdx + 1}`}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    dotIdx === currentIndex
                      ? "w-6 sm:w-8 bg-primary"
                      : "w-2 sm:w-2.5 bg-emerald-950/20 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            {/* Next Arrow Button */}
            <button
              onClick={nextSlide}
              aria-label="Next transformation photo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#0d7363]/30 hover:border-primary text-primary hover:bg-primary hover:text-white shadow-sm hover:shadow-md flex items-center justify-center active:scale-95 transition-all cursor-pointer group"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Slide Indicator Badge */}
          <div className="flex items-center gap-1.5 text-xs font-bold text-secondary tracking-wide">
            <Award className="w-3.5 h-3.5 text-accent" />
            <span>
              Transformation {currentIndex + 1} of {total}
            </span>
            <span className="text-foreground/40">&bull;</span>
            <span className="text-primary">100% Real Brightfield Clients</span>
          </div>
        </div>

        {/* Section Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-7 sm:mt-10 text-center"
        >
          <button
            onClick={onOpenBooking}
            className="inline-flex w-full max-w-[340px] min-[380px]:max-w-[370px] sm:w-auto sm:max-w-none items-center justify-center gap-2.5 rounded-full bg-primary hover:bg-primary-hover active:scale-98 px-7 sm:px-10 py-4 sm:py-4.5 text-xs min-[360px]:text-sm sm:text-base font-extrabold text-white shadow-lg shadow-emerald-950/20 hover:shadow-xl transition-all cursor-pointer tracking-wide"
          >
            <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
            <span>START YOUR TRANSFORMATION TODAY</span>
          </button>
          <p className="mt-2 text-[11px] sm:text-xs text-foreground/70 font-semibold">
            Free 1-on-1 Consultation &bull; Personalized Roadmap &bull; Zero Pressure
          </p>
        </motion.div>
      </div>
    </section>
  );
}
