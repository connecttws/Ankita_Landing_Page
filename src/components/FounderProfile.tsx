"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Sparkles, Check } from "lucide-react";
import Image from "next/image";

interface FounderProfileProps {
  onOpenBooking: () => void;
}

export default function FounderProfile({ onOpenBooking }: FounderProfileProps) {
  return (
    <section id="founder" className="py-12 md:py-24 bg-secondary text-white relative overflow-hidden w-full max-w-full">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-80 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-60 sm:w-96 h-60 sm:h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Photo Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md aspect-[4/5] rounded-3xl sm:rounded-[2.5rem] bg-[#481d34] border border-primary/30 overflow-hidden shadow-2xl flex items-center justify-center group">
              {/* Photo Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent z-10 pointer-events-none opacity-80"></div>

              <Image
                src="/images/ankita_portrait.jpg"
                alt="Ankita Pareek - Founder of Brightfield"
                fill
                priority
                className="object-cover object-top z-0 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 384px, 448px"
              />

              {/* Floating Badge on Photo */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 z-20 bg-secondary/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 shadow-lg">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/30 flex items-center justify-center text-accent flex-shrink-0">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] sm:text-xs uppercase font-bold tracking-wider text-accent truncate">
                      Founder &bull; Brightfield
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white/90 truncate block">
                      13+ Years Transforming Women&apos;s Health
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full lg:w-1/2 text-center lg:text-left text-white"
          >
            <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-accent mb-2 inline-block">
              Your Guide Through The Change
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2 sm:mb-3 font-serif">
              Meet <span className="font-signature font-normal text-4xl min-[360px]:text-5xl sm:text-7xl text-accent block sm:inline sm:ml-2">Ankita Pareek</span>
            </h2>

            <h3 className="text-[10px] sm:text-xs md:text-sm font-semibold text-pink-200 tracking-wider uppercase mb-5 sm:mb-6 flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
              <span>Founder of Brightfield</span>
              <span className="opacity-40">&bull;</span>
              <span>Women&apos;s Midlife Specialist</span>
            </h3>

            <div className="space-y-3 sm:space-y-4 text-white/85 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                Hi, I&apos;m Ankita Pareek — Founder of Brightfield.
              </p>
              <p>
                For years, I&apos;ve seen women work incredibly hard to become healthier — only to feel frustrated and defeated when their bodies begin responding differently in their late 30s and 40s.
              </p>
              <p>
                That&apos;s why I believe women shouldn&apos;t have to choose between looking after their body, their mind, and their life. At Brightfield, we bring these pieces together: <strong className="text-accent">Fitness. Nutrition. Mindset. Emotional wellbeing.</strong>
              </p>
              <p>
                Because feeling healthy isn&apos;t just about the number on the weighing scale. It&apos;s about:
              </p>

              {/* Benefits list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 pb-1 text-left">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-xs sm:text-sm text-white/90">Waking up with real energy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-xs sm:text-sm text-white/90">Feeling strong in your body</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-xs sm:text-sm text-white/90">Feeling confident in your clothes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-xs sm:text-sm text-white/90">Calmer relationship with food</span>
                </div>
                <div className="flex items-center gap-2 sm:col-span-2">
                  <Check className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-xs sm:text-sm text-white/90 font-semibold text-accent">And feeling like yourself again.</span>
                </div>
              </div>

              <p className="italic text-pink-100 font-serif text-xs sm:text-base pt-1 sm:pt-2">
                &ldquo;Since 2013, Brightfield has been built around one simple belief: A healthier body should help you live a better life.&rdquo;
              </p>
            </div>

            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-primary/25">
              <p className="font-semibold text-accent mb-4 sm:mb-6 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-4 text-xs sm:text-sm">
                <span>Personalised Fitness</span>
                <span>&bull;</span>
                <span>Sustainable Nutrition</span>
                <span>&bull;</span>
                <span>Emotional Support</span>
              </p>

              <button
                onClick={onOpenBooking}
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-lg font-bold text-white shadow-xl shadow-primary/30 transition-all hover:bg-primary-hover active:scale-98 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span className="truncate">BOOK YOUR FREE CONSULTATION</span>
                <div className="absolute inset-0 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-secondary opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
