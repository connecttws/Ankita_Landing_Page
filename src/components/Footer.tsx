"use client";

import { Sparkles, ArrowRight } from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-[#01140f] text-white pt-7 sm:pt-10 pb-16 md:pb-10 relative overflow-hidden border-t border-emerald-950/80 w-full max-w-full">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#0d7363]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-3 min-[360px]:px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Big Pre-Footer CTA Box - fluid shrink */}
        <div className="bg-gradient-to-br from-[#032d23] to-[#011a14] rounded-2xl sm:rounded-3xl p-4 min-[360px]:p-6 sm:p-8 md:p-10 border border-[#0d7363]/30 shadow-2xl text-center max-w-4xl mx-auto mb-7 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-950/60 border border-[#0d7363]/30 px-3 py-1 text-[11px] sm:text-xs font-semibold text-accent mb-2 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>Since 2013 &bull; 13+ Years Transforming Women&apos;s Lives</span>
          </div>

          <h3 className="text-lg min-[360px]:text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-1.5 sm:mb-2 leading-tight">
            Ready to Stop Fighting Your Body?
          </h3>

          <p className="text-xs sm:text-base text-white/80 max-w-xl mx-auto mb-4 sm:mb-6 leading-relaxed px-1">
            Book your free 30-minute consultation. Discover how our 3-dimension coaching framework restores your energy, sleep, and natural weight balance.
          </p>

          <button
            onClick={onOpenBooking}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover active:scale-98 px-6 sm:px-8 py-3 text-xs sm:text-sm font-bold text-white shadow-xl shadow-emerald-950/30 transition-all cursor-pointer"
          >
            <span>BOOK YOUR FREE CONSULTATION</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Footer Brand Info - fluid shrink */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 py-5 border-y border-white/10 text-center md:text-left items-center">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <div className="w-7 h-7 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
              </div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white">
                BRIGHTFIELD
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-white/70">
              Women&apos;s Hormonal Wellness &bull; Since 2013
            </p>
          </div>

          <div className="text-center">
            <p className="text-xs sm:text-sm text-white/80 font-medium px-1">
              Specialized Coaching for Women 38+ Navigating Perimenopause &amp; Menopause
            </p>
          </div>

          <div className="text-center md:text-right">
            <button
              onClick={onOpenBooking}
              className="text-xs sm:text-sm font-bold text-accent hover:text-white transition-colors underline decoration-accent/50 underline-offset-4 cursor-pointer"
            >
              Book 1-on-1 Consultation &rarr;
            </button>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="pt-5 text-center max-w-3xl mx-auto space-y-1.5 px-1">
          <p className="text-[10px] leading-relaxed text-white/50">
            <strong>Medical Disclaimer:</strong> Brightfield&apos;s wellness, nutrition, and fitness coaching is intended to support overall health and lifestyle habits. It should complement — not replace — appropriate medical care, diagnosis, or treatment. Always consult with a qualified healthcare professional regarding any medical condition or before making major changes to your diet or exercise regimen.
          </p>
          <p className="text-[10px] text-white/40">
            &copy; {new Date().getFullYear()} Brightfield &bull; Ankita Pareek. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
