"use client";

import { motion } from "framer-motion";
import { Heart, CalendarCheck, CheckCircle2 } from "lucide-react";

interface NotAloneSectionProps {
  onOpenBooking: () => void;
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
          className="max-w-3xl mx-auto rounded-2xl sm:rounded-3xl bg-[#f8f6f2] border border-emerald-950/10 p-4 sm:p-7 text-center shadow-xl shadow-emerald-950/8"
        >
          <div className="mx-auto mb-3 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-emerald-950/5 text-primary shadow-2xs border border-[#0d7363]/20">
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary fill-primary/20" />
          </div>

          <h2 className="text-lg min-[360px]:text-xl sm:text-3xl font-extrabold tracking-tight text-secondary mb-1.5 leading-tight">
            You Don&apos;t Have To Figure This Out Alone.
          </h2>

          <div className="h-0.5 sm:h-1 w-14 bg-primary rounded-full mx-auto mb-3"></div>

          <p className="text-xs sm:text-base text-foreground/85 leading-relaxed font-medium max-w-xl mx-auto mb-3.5 px-1">
            Perimenopause is a profound biological shift — not a personal failure. You don&apos;t have to keep searching Google at 2 AM or jumping between extreme fad diets.
          </p>

          <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-2 text-left max-w-lg mx-auto mb-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span className="text-[11px] sm:text-sm font-bold text-secondary">No judgment, just real solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span className="text-[11px] sm:text-sm font-bold text-secondary">Step-by-step 1-on-1 guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span className="text-[11px] sm:text-sm font-bold text-secondary">Real Indian foods you love</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span className="text-[11px] sm:text-sm font-bold text-secondary">Sustainable for life, not 30 days</span>
            </div>
          </div>

          <div className="pt-3.5 border-t border-emerald-950/10">
            <button
              onClick={onOpenBooking}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover active:scale-98 px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-lg transition-all cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4 text-white shrink-0" />
              <span>BOOK YOUR FREE CONSULTATION</span>
            </button>
            <p className="text-[10px] sm:text-[11px] text-foreground/60 font-medium mt-2">
              Compassionate 30-min call &bull; 100% confidential &bull; No pressure
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
