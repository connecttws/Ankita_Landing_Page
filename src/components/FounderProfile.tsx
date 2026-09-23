"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Sparkles, Check } from "lucide-react";
import Image from "next/image";

interface FounderProfileProps {
  onOpenBooking: () => void;
}

export default function FounderProfile({ onOpenBooking }: FounderProfileProps) {
  return (
    <section id="founder" className="py-7 sm:py-12 bg-[#021f18] text-white relative overflow-hidden w-full max-w-full">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0d7363]/25 via-transparent to-transparent opacity-80 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d97706]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-3 min-[360px]:px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
          {/* Photo Area - fluid shrink */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[240px] min-[360px]:max-w-[270px] sm:max-w-sm md:max-w-md aspect-[4/5] rounded-[2rem] bg-emerald-950/80 border border-[#0d7363]/30 overflow-hidden shadow-2xl flex items-center justify-center group">
              <Image
                src="/images/ankita_portrait.jpg"
                alt="Ankita Pareek - Founder of Brightfield"
                fill
                priority
                className="object-cover object-top z-0 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 270px, (max-width: 1024px) 384px, 448px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021f18]/85 via-transparent to-transparent z-10 pointer-events-none"></div>

              {/* Floating Badge on Photo */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 z-20 bg-[#021f18]/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 border border-[#0d7363]/25 shadow-lg">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#0d7363]/25 flex items-center justify-center text-accent shrink-0">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] sm:text-xs uppercase font-extrabold tracking-wider text-accent truncate">
                      Founder &bull; Brightfield
                    </span>
                    <span className="text-[10px] sm:text-xs font-semibold text-white/90 truncate block">
                      13+ Years Transforming Women&apos;s Health
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="w-full lg:w-1/2 text-center lg:text-left text-white"
          >
            <span className="text-[10.5px] min-[360px]:text-[11px] uppercase font-bold tracking-widest text-accent mb-1 inline-block">
              Your Guide Through The Transition
            </span>

            <h2 className="text-xl min-[360px]:text-2xl sm:text-4xl font-extrabold tracking-tight mb-1">
              Meet <span className="font-signature font-normal text-3xl min-[360px]:text-4xl sm:text-5xl text-accent block lg:inline lg:ml-2">Ankita Pareek</span>
            </h2>

            <h3 className="text-[11px] sm:text-xs font-semibold text-emerald-300 tracking-wider uppercase mb-3 flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
              <span>Founder of Brightfield</span>
              <span className="opacity-50">&bull;</span>
              <span>Women&apos;s Midlife Wellness Specialist</span>
            </h3>

            <div className="space-y-2.5 text-white/85 text-xs sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p>
                For over 13 years, I&apos;ve watched capable women work relentlessly to stay healthy — only to feel frustrated when their bodies begin responding differently after 38.
              </p>
              <p>
                At Brightfield, we integrate <strong className="text-white">Fitness, Hormonal Nutrition, and Nervous System Recovery</strong>. It isn&apos;t just about the scale — it&apos;s about waking up energized, feeling strong, and reclaiming your confidence.
              </p>

              {/* Short Benefits Checklist - fluid shrink */}
              <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-1.5 pt-1 pb-1 text-left">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span className="text-[11px] sm:text-sm text-white/90">Waking up with vibrant energy</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span className="text-[11px] sm:text-sm text-white/90">Rebuilding lean strength</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span className="text-[11px] sm:text-sm text-white/90">Fitting comfortably in your clothes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span className="text-[11px] sm:text-sm text-white/90">Calmer, peaceful sleep at night</span>
                </div>
              </div>

              <p className="italic text-emerald-200 text-[11px] sm:text-sm pt-1">
                &ldquo;Since 2013, Brightfield has been built on one principle: Your health should support your life, not consume it.&rdquo;
              </p>
            </div>

            <div className="mt-4 pt-3.5 border-t border-emerald-900/60">
              <button
                onClick={onOpenBooking}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover active:scale-98 px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-xl transition-all cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 text-white shrink-0" />
                <span>BOOK YOUR FREE CONSULTATION</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
