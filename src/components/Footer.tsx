"use client";

import { Sparkles, ArrowRight } from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-secondary text-white pt-10 sm:pt-14 pb-20 md:pb-12 relative overflow-hidden border-t border-primary/20 w-full max-w-full">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Big Impact Call to Action Box */}
        <div className="bg-gradient-to-br from-[#481d34] to-secondary rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border border-primary/30 shadow-2xl text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-semibold text-accent mb-3 sm:mb-4 max-w-full truncate">
            <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">Since 2013 &bull; +13 Years Transforming Women&apos;s Lives</span>
          </div>

          <h3 className="text-xl sm:text-3xl md:text-4xl font-bold font-serif text-white tracking-tight mb-2 sm:mb-3 leading-tight">
            A Better Way Through Midlife.
          </h3>

          <p className="text-xs sm:text-base text-white/80 max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed px-1">
            Stop guessing. Build strength, reclaim your vibrant energy, and feel completely at home in your body again.
          </p>

          <button
            onClick={onOpenBooking}
            className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 sm:gap-3 rounded-full bg-primary hover:bg-primary-hover active:scale-98 px-6 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-lg font-bold text-white shadow-xl shadow-primary/40 transition-all cursor-pointer"
          >
            <span className="truncate">START YOUR BRIGHTFIELD JOURNEY</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-accent group-hover:translate-x-1 transition-transform flex-shrink-0" />
            <div className="absolute inset-0 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-secondary opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        </div>

        {/* Footer Brand Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 py-6 sm:py-8 border-y border-white/10 text-center md:text-left items-center">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-2.5 mb-1 sm:mb-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
              </div>
              <span className="font-serif font-bold text-xl sm:text-2xl tracking-tight text-white">
                BRIGHTFIELD
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-white/70">
              Fitness &bull; Nutrition &bull; Mind &bull; Since 2013
            </p>
          </div>

          <div className="text-center">
            <p className="text-xs sm:text-sm text-white/85 font-medium px-2">
              Specialized Wellness Coaching for Women 38+ Navigating Perimenopause &amp; Menopause
            </p>
          </div>

          <div className="text-center md:text-right">
            <button
              onClick={onOpenBooking}
              className="text-xs font-bold text-accent hover:text-white transition-colors underline decoration-accent/50 underline-offset-4 cursor-pointer"
            >
              Book 1-on-1 Consultation &rarr;
            </button>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="pt-6 sm:pt-8 text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 px-1">
          <p className="text-[10px] sm:text-[11px] leading-relaxed text-white/50">
            <strong>Medical Disclaimer:</strong> Brightfield&apos;s wellness, nutrition, and fitness coaching is intended to support overall health and lifestyle habits. It should complement — not replace — appropriate medical care, diagnosis, or treatment. Always consult with a qualified healthcare professional regarding any medical condition or before making major changes to your diet or exercise regimen.
          </p>
          <p className="text-[10px] sm:text-[11px] text-white/40">
            &copy; {new Date().getFullYear()} Brightfield &bull; Ankita Pareek. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
