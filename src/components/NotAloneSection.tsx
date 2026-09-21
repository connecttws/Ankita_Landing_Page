"use client";

import { motion } from "framer-motion";
import { Heart, CalendarCheck } from "lucide-react";

interface NotAloneSectionProps {
  onOpenBooking: () => void;
}

export default function NotAloneSection({ onOpenBooking }: NotAloneSectionProps) {
  return (
    <section className="py-10 md:py-20 bg-white relative overflow-hidden w-full max-w-full">
      {/* Gentle Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-2xl sm:rounded-[2.5rem] bg-gradient-to-br from-background via-white to-background border-2 border-primary/20 p-5 sm:p-10 md:p-14 text-center shadow-lg shadow-primary/5"
        >
          <div className="mx-auto mb-4 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-2xs">
            <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-primary fill-primary/20" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-secondary font-serif mb-4 sm:mb-6 leading-tight">
            You Don&apos;t Have To Figure This Out Alone.
          </h2>

          <div className="h-1 w-16 sm:w-20 bg-primary rounded-full mx-auto mb-5 sm:mb-8"></div>

          <div className="space-y-3 sm:space-y-4 text-xs sm:text-base md:text-lg text-foreground/80 leading-relaxed font-medium max-w-2xl mx-auto px-1">
            <p>
              Perimenopause and menopause can feel overwhelming, confusing, and lonely.
            </p>
            <p>
              But you don&apos;t have to keep searching Google late at night every time your body does something unexpected.
            </p>
            <p>
              You don&apos;t have to keep jumping from one extreme diet to another, only to feel exhausted.
            </p>
            <p className="font-semibold text-secondary">
              And you definitely don&apos;t have to believe that feeling constantly tired, gaining stubborn weight, or feeling emotionally disconnected is simply something you have to &ldquo;put up with.&rdquo;
            </p>
            <p className="text-primary font-bold text-base sm:text-xl font-serif pt-2">
              There is a better, gentler way to approach this phase of life. And it starts with understanding your body.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-primary/15">
            <button
              onClick={onOpenBooking}
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-6 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-lg font-bold text-white shadow-xl shadow-primary/30 transition-all hover:bg-primary-hover active:scale-98 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
              <span className="truncate">BOOK YOUR FREE CONSULTATION</span>
              <div className="absolute inset-0 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-white opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
            <p className="text-[11px] sm:text-xs text-foreground/60 font-medium mt-2.5">
              Compassionate 1-on-1 discussion &bull; No obligation &bull; Real answers
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
