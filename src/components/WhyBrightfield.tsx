"use client";

import { motion } from "framer-motion";
import { CheckCircle2, CalendarCheck, Sparkles, Award } from "lucide-react";

interface WhyBrightfieldProps {
  onOpenBooking: () => void;
}

const differentiators = [
  "Fitness + Nutrition + Emotional Wellbeing",
  "Personalised, not generic",
  "Designed around your real lifestyle",
  "Focused on strength & sustainable health",
  "Support through perimenopause AND menopause",
  "Long-term lifestyle change — not quick fixes",
];

export default function WhyBrightfield({ onOpenBooking }: WhyBrightfieldProps) {
  return (
    <section className="py-7 sm:py-12 bg-[#f8f6f2] relative overflow-hidden w-full max-w-full">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#0d7363]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#d97706]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="mx-auto max-w-7xl px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-center max-w-6xl mx-auto">
          {/* Left Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1 rounded-full bg-emerald-950/5 text-primary font-bold text-[11px] sm:text-xs uppercase tracking-wider mb-2 border border-[#0d7363]/20">
              <Award className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>Proven Experience Since 2013</span>
            </span>

            <h2 className="text-lg min-[360px]:text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-secondary leading-tight">
              Why Brightfield?<br />
              <span className="text-primary">Because You Need More Than Another Diet Plan.</span>
            </h2>

            <div className="h-0.5 sm:h-1 w-14 bg-primary rounded-full mt-2 sm:mt-2.5 mb-2.5"></div>

            <div className="space-y-2.5 text-xs sm:text-base text-foreground/85 leading-relaxed font-medium">
              <p>
                Since 2013, Brightfield has been helping people build healthier relationships with fitness and wellbeing.
              </p>
              <p>
                And when it comes to midlife women, we understand that one-size-fits-all doesn&apos;t work.
              </p>
            </div>

            <div className="mt-4 pt-1">
              <button
                onClick={onOpenBooking}
                className="inline-flex w-full max-w-[340px] min-[380px]:max-w-[370px] sm:w-auto sm:max-w-none items-center justify-center gap-2.5 rounded-full bg-primary hover:bg-primary-hover active:scale-98 px-7 sm:px-10 py-4 sm:py-4.5 text-xs min-[360px]:text-sm sm:text-base font-extrabold text-white shadow-lg shadow-emerald-950/20 hover:shadow-xl transition-all cursor-pointer tracking-wide"
              >
                <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
                <span>BOOK YOUR FREE CONSULTATION</span>
              </button>
            </div>
          </motion.div>

          {/* Right Checklist Card - fluid shrink */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl shadow-emerald-950/8 border border-emerald-950/10 relative"
          >
            <div className="flex items-center gap-2 mb-3.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-950/5 text-primary flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-secondary leading-snug">
                What makes our approach different?
              </h3>
            </div>

            <div className="space-y-2">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="flex items-start gap-2.5 p-2 min-[360px]:p-2.5 sm:p-3 rounded-xl bg-[#f8f6f2] border border-emerald-950/10 hover:border-primary/40 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-[11px] sm:text-sm font-bold text-secondary leading-snug">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
