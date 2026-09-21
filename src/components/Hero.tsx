"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, Play, Sparkles, HeartPulse } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-10 sm:pt-36 sm:pb-20 w-full max-w-full">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#b850680d_1px,transparent_1px),linear-gradient(to_bottom,#b850680d_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:44px_44px]"></div>

        {/* Top Left Rosewood Blur */}
        <div className="absolute top-0 left-0 w-full h-[500px] sm:h-[650px] bg-gradient-to-br from-primary/10 via-accent/5 to-transparent opacity-90 blur-2xl sm:blur-3xl"></div>

        {/* Top Right Amber/Plum Glow */}
        <div className="absolute top-16 right-0 w-[240px] sm:w-[500px] h-[240px] sm:h-[500px] bg-accent/10 rounded-full blur-2xl sm:blur-3xl"></div>

        {/* Floating Shapes */}
        <motion.div
          animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-[4%] w-16 h-16 sm:w-24 sm:h-24 rounded-full border-2 border-primary/15 bg-gradient-to-br from-primary/10 to-transparent"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-[5%] w-20 h-20 sm:w-32 sm:h-32 rounded-2xl border border-accent/20 bg-gradient-to-bl from-accent/10 to-transparent transform rotate-12"
        />
      </div>

      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="mx-auto max-w-4xl text-center">
          {/* Top Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] min-[360px]:text-xs sm:text-sm font-bold text-primary tracking-wide uppercase mb-3 sm:mb-4 shadow-2xs max-w-full text-center"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
            <span className="truncate">Perimenopause &bull; Menopause Wellness 38+</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="text-[22px] min-[360px]:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-secondary font-serif leading-[1.2] sm:leading-[1.15] mb-3 sm:mb-4 break-words">
              If Losing Weight Suddenly Feels <span className="text-primary italic">Impossible</span> After 38 &amp; Feeling Stuck —{" "}
              <span className="block mt-1 sm:mt-2 text-secondary">
                This Is For You.
              </span>
            </h1>

            <p className="mt-2.5 sm:mt-4 text-xs min-[360px]:text-sm sm:text-lg leading-relaxed text-foreground/80 font-medium max-w-2xl mx-auto px-1">
              Stop fighting your body with punishing diets. Learn why your metabolism and hormones have changed — and how to rebuild strength, calm, and vitality with a whole-woman approach.
            </p>
          </motion.div>

          {/* Conic Gradient Animated Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-4 sm:mt-6 flex flex-row items-stretch justify-center gap-1.5 sm:gap-3 text-[10px] min-[360px]:text-xs sm:text-sm font-semibold text-secondary w-full max-w-2xl mx-auto"
          >
            <div className="relative flex flex-1 sm:flex-none overflow-hidden rounded-xl sm:rounded-full p-[1.5px] shadow-2xs min-w-0">
              <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#b85068_50%,transparent_100%)] opacity-85" />
              <div className="relative flex flex-1 sm:flex-none flex-row items-center justify-center bg-white/95 backdrop-blur px-1.5 sm:px-5 py-2 sm:py-2.5 rounded-[10px] sm:rounded-full text-center leading-tight h-full w-full">
                <span className="truncate">Personalised<br className="sm:hidden" /> Guidance</span>
              </div>
            </div>

            <div className="relative flex flex-1 sm:flex-none overflow-hidden rounded-xl sm:rounded-full p-[1.5px] shadow-2xs min-w-0">
              <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#b85068_50%,transparent_100%)] opacity-85" />
              <div className="relative flex flex-1 sm:flex-none flex-row items-center justify-center bg-white/95 backdrop-blur px-1.5 sm:px-5 py-2 sm:py-2.5 rounded-[10px] sm:rounded-full text-center leading-tight h-full w-full">
                <span className="truncate">Sustainable<br className="sm:hidden" /> Habits</span>
              </div>
            </div>

            <div className="relative flex flex-1 sm:flex-none overflow-hidden rounded-xl sm:rounded-full p-[1.5px] shadow-2xs min-w-0">
              <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#b85068_50%,transparent_100%)] opacity-85" />
              <div className="relative flex flex-1 sm:flex-none flex-row items-center justify-center bg-white/95 backdrop-blur px-1.5 sm:px-5 py-2 sm:py-2.5 rounded-[10px] sm:rounded-full text-center leading-tight h-full w-full">
                <span className="truncate">No Crash<br className="sm:hidden" /> Diets</span>
              </div>
            </div>
          </motion.div>

          {/* VSL Video Container */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-6 sm:mt-10 relative w-full max-w-3xl mx-auto aspect-video bg-secondary rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden group border-2 sm:border-4 border-white/80"
          >
            {isPlayingVideo ? (
              <div className="relative w-full h-full flex flex-col items-center justify-center bg-secondary text-white p-4 sm:p-6 text-center">
                <HeartPulse className="w-10 h-10 sm:w-12 sm:h-12 text-accent animate-pulse mb-2" />
                <h4 className="text-base sm:text-xl font-bold font-serif mb-1 sm:mb-2">
                  Special Video Presentation by Ankita Pareek
                </h4>
                <p className="text-xs sm:text-sm text-white/80 max-w-md mb-4">
                  Understand how hormonal fluctuations after 38 affect your fat storage, sleep, and mood — and how our 3-dimension system restores your energy.
                </p>
                <button
                  onClick={onOpenBooking}
                  className="rounded-full bg-primary hover:bg-primary-hover px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-md cursor-pointer"
                >
                  Book Free 1-on-1 Consultation
                </button>
              </div>
            ) : (
              <div
                onClick={() => setIsPlayingVideo(true)}
                className="relative w-full h-full cursor-pointer overflow-hidden group"
              >
                <Image
                  src="/images/vsl_video_cover.jpg"
                  alt="Ankita Pareek Video Cover"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 768px"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/35 to-transparent transition-opacity group-hover:opacity-90"></div>

                {/* Pulsing Play Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-primary/40 animate-ping"></div>
                    <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-primary text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary-hover transition-all duration-300">
                      <Play className="w-5 h-5 sm:w-9 sm:h-9 fill-white ml-0.5 sm:ml-1" />
                    </div>
                  </div>
                  <span className="mt-2.5 sm:mt-3 text-[10px] min-[360px]:text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-secondary/85 backdrop-blur-xs px-3 sm:px-4 py-1 rounded-full border border-white/20 max-w-[90%] truncate text-center">
                    Watch Free Masterclass &bull; +13 Years Experience
                  </span>
                </div>
              </div>
            )}
          </motion.div>

          {/* Primary CTA Area */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-6 sm:mt-10 flex flex-col items-center justify-center gap-2.5 sm:gap-3 w-full"
          >
            <button
              onClick={onOpenBooking}
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-6 sm:px-10 py-3.5 sm:py-5 text-sm sm:text-xl font-bold text-white shadow-xl shadow-primary/30 transition-all hover:bg-primary-hover active:scale-98 cursor-pointer"
            >
              <CalendarCheck className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
              <span className="truncate">BOOK YOUR FREE CONSULTATION</span>
              <div className="absolute inset-0 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-background opacity-0 transition-opacity group-hover:opacity-100" />
            </button>

            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-4 text-[11px] sm:text-sm text-foreground/75 font-medium mt-1">
              <span>Personalised guidance</span>
              <span className="text-primary">&bull;</span>
              <span>Sustainable habits</span>
              <span className="text-primary">&bull;</span>
              <span>No crash diets</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Strip below Hero */}
      <div className="mt-10 sm:mt-16 border-y border-primary/10 bg-white/70 backdrop-blur-xs py-3.5 sm:py-4 w-full">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 text-center">
            <div className="p-2 bg-white/70 sm:bg-transparent rounded-xl sm:rounded-none border sm:border-0 border-primary/10 sm:border-r sm:border-primary/10">
              <span className="block text-lg sm:text-2xl font-bold text-secondary font-serif">13+ Years</span>
              <span className="text-[10px] sm:text-xs text-foreground/70 font-medium">Women&apos;s Wellness</span>
            </div>
            <div className="p-2 bg-white/70 sm:bg-transparent rounded-xl sm:rounded-none border sm:border-0 border-primary/10 sm:border-r sm:border-primary/10">
              <span className="block text-lg sm:text-2xl font-bold text-secondary font-serif">Since 2013</span>
              <span className="text-[10px] sm:text-xs text-foreground/70 font-medium">Brightfield Coaching</span>
            </div>
            <div className="p-2 bg-white/70 sm:bg-transparent rounded-xl sm:rounded-none border sm:border-0 border-primary/10 sm:border-r sm:border-primary/10">
              <span className="block text-lg sm:text-2xl font-bold text-secondary font-serif">3 Dimensions</span>
              <span className="text-[10px] sm:text-xs text-foreground/70 font-medium">Fitness &bull; Food &bull; Mind</span>
            </div>
            <div className="p-2 bg-white/70 sm:bg-transparent rounded-xl sm:rounded-none border sm:border-0 border-primary/10">
              <span className="block text-lg sm:text-2xl font-bold text-secondary font-serif">100% Tailored</span>
              <span className="text-[10px] sm:text-xs text-foreground/70 font-medium">No Generic Plans</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
