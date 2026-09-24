"use client";

import { motion } from "framer-motion";
import { Heart, CalendarCheck } from "lucide-react";

interface NotAloneSectionProps {
  onOpenBooking?: () => void;
}

export default function NotAloneSection({ onOpenBooking }: NotAloneSectionProps) {
  return (
    <section className="py-7 sm:py-12 bg-white relative overflow-hidden w-full max-w-full">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0d7363]/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-3 min-[360px]:px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto rounded-2xl sm:rounded-3xl bg-[#f8f6f2] border border-emerald-950/10 p-5 sm:p-8 text-center shadow-xl shadow-emerald-950/8"
        >
          <div className="mx-auto mb-3 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-emerald-950/5 text-primary shadow-2xs border border-[#0d7363]/20">
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary fill-primary/20" />
          </div>

          <h2 className="text-lg min-[360px]:text-xl sm:text-3xl font-extrabold tracking-tight text-secondary mb-1.5 leading-tight">
            You Don&apos;t Have To Figure This Out Alone.
          </h2>

          <div className="h-0.5 sm:h-1 w-14 bg-primary rounded-full mx-auto mb-3.5"></div>

          <div className="space-y-2.5 text-xs sm:text-base text-foreground/85 leading-relaxed font-medium max-w-xl mx-auto mb-6 px-1">
            <p>Perimenopause and menopause can feel confusing.</p>
            <p>But you don&apos;t have to keep searching Google every time your body does something new.</p>
            <p>You don&apos;t have to keep jumping from one diet to another.</p>
            <p>And you definitely don&apos;t have to believe that feeling tired, gaining weight or feeling emotionally different is simply something you have to “put up with.”</p>
            <p className="font-bold text-secondary pt-1">
              There is a better way to approach this phase of life.<br />
              <span className="text-primary">And it starts with understanding your body.</span>
            </p>
          </div>

          <div className="pt-4 border-t border-emerald-950/10">
            <button
              onClick={onOpenBooking}
              className="inline-flex w-full max-w-[340px] min-[380px]:max-w-[370px] sm:w-auto sm:max-w-none items-center justify-center gap-2.5 rounded-full bg-primary hover:bg-primary-hover active:scale-98 px-7 sm:px-10 py-4 sm:py-4.5 text-xs min-[360px]:text-sm sm:text-base font-extrabold text-white shadow-lg shadow-emerald-950/20 hover:shadow-xl transition-all cursor-pointer tracking-wide"
            >
              <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
              <span>BOOK YOUR FREE CONSULTATION</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
