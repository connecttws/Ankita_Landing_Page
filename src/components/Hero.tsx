"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

const trustItems = [
  { number: "13+ Years", label: "Transforming Women's Health", icon: "⭐" },
  { number: "Since 2013", label: "Brightfield Coaching", icon: "🌿" },
  { number: "3 Dimensions", label: "Fitness • Food • Mind", icon: "✨" },
  { number: "100% Tailored", label: "Doctor-Aligned Care", icon: "🩺" },
  { number: "1,000+ Women", label: "Guided Worldwide", icon: "💖" },
  { number: "Zero Crash Diets", label: "Sustainable Habits", icon: "🎯" },
];

export default function Hero({ onOpenBooking }: HeroProps) {

  return (
    <section className="relative overflow-hidden bg-[#f8f6f2] pt-20 min-[400px]:pt-22 pb-6 sm:pt-28 sm:pb-12 w-full max-w-full">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Deep Spruce Gradient Orb */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-[#0d7363]/15 via-transparent to-transparent opacity-80 blur-3xl"></div>

        {/* Warm Honey Amber Gradient Orb */}
        <div className="absolute top-16 right-0 w-[260px] sm:w-[450px] h-[260px] sm:h-[450px] bg-[#d97706]/10 rounded-full blur-3xl"></div>

        {/* Floating Shapes */}
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-[5%] w-14 h-14 sm:w-20 sm:h-20 rounded-full border border-[#0d7363]/15 bg-gradient-to-br from-[#0d7363]/10 to-transparent"
        />
        <motion.div
          animate={{ y: [0, 18, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-[6%] w-16 h-16 sm:w-28 sm:h-28 rounded-3xl border border-[#d97706]/15 bg-gradient-to-bl from-[#d97706]/10 to-transparent transform rotate-12"
        />
      </div>

      <div className="mx-auto max-w-7xl px-3.5 min-[360px]:px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="mx-auto max-w-4xl text-center">
          {/* Top Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-emerald-950/5 border border-[#0d7363]/25 px-3.5 sm:px-4 py-1 sm:py-1.5 text-[10px] min-[360px]:text-[11px] sm:text-xs font-bold text-primary tracking-wider mb-3 sm:mb-4 shadow-2xs uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
            <span>PERIMENOPAUSE &amp; MENOPAUSE WELLNESS FOR WOMEN 38+</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-[20px] min-[360px]:text-[22px] min-[400px]:text-2xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-secondary leading-[1.25] sm:leading-[1.15] mb-4 sm:mb-6">
              <span className="block">
                If losing weight suddenly <br className="sm:hidden" />feels impossible after 38
              </span>{" "}
              <span className="block text-primary mt-1 sm:mt-2">
                feeling stuck, this is for you
              </span>
            </h1>
          </motion.div>


          {/* VSL Video Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-1 sm:mt-2 relative w-full max-w-2xl mx-auto aspect-video rounded-xl sm:rounded-3xl shadow-xl shadow-emerald-950/15 overflow-hidden border-2 sm:border-4 border-white/90 bg-[#032d23]"
          >
            <iframe
              src="https://fast.wistia.net/embed/iframe/jui1y28et8?seo=false&videoFoam=true"
              title="Hero Video"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            ></iframe>
          </motion.div>

          {/* Primary CTA Area */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-5 sm:mt-7 flex flex-col items-center justify-center gap-2.5 sm:gap-3.5 w-full"
          >
            <button
              onClick={onOpenBooking}
              className="inline-flex w-full max-w-[340px] min-[380px]:max-w-[370px] sm:w-auto sm:max-w-none items-center justify-center gap-2.5 rounded-full bg-primary hover:bg-primary-hover active:scale-98 px-7 sm:px-10 py-4 sm:py-4.5 text-xs min-[360px]:text-sm sm:text-base font-extrabold text-white shadow-lg shadow-emerald-950/20 hover:shadow-xl transition-all cursor-pointer tracking-wide"
            >
              <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
              <span>BOOK YOUR FREE CONSULTATION</span>
            </button>

            {/* Micro trust row */}
            <div className="flex items-center justify-center gap-x-2.5 gap-y-1 sm:gap-3.5 text-[10.5px] min-[360px]:text-[11.5px] sm:text-xs text-foreground/80 font-semibold flex-wrap sm:flex-nowrap pt-0.5">
              <span>Personalised guidance</span>
              <span className="text-primary">&bull;</span>
              <span>Sustainable habits</span>
              <span className="text-primary">&bull;</span>
              <span>No crash diets</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Moving Carousel for "13+ Years" Trust Section */}
      <div className="mt-7 sm:mt-10 border-y border-emerald-950/10 bg-white py-3 sm:py-4 w-full overflow-hidden relative">
        {/* Left & Right Gradient Shadows */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-3 sm:gap-4 shrink-0 will-change-transform"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 12,
          }}
        >
          {[...trustItems, ...trustItems].map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#f8f6f2] border border-emerald-950/10 shadow-2xs shrink-0 whitespace-nowrap"
            >
              <span className="text-sm sm:text-base select-none">{item.icon}</span>
              <span className="text-xs sm:text-sm font-extrabold text-secondary tracking-tight">
                {item.number}
              </span>
              <span className="text-xs sm:text-sm text-foreground/75 font-medium">
                &bull; {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
