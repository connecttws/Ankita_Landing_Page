"use client";

import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, ShieldCheck, Clock } from "lucide-react";

interface StickyBottomBarProps {
  onBookClick: () => void;
}

export default function StickyBottomBar({ onBookClick }: StickyBottomBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 280px
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-[#EADCD4] p-2 min-[360px]:p-2.5 sm:p-3 shadow-[0_-8px_30px_rgba(180,120,100,0.12)] transition-all duration-300 w-full max-w-[100vw] overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 whitespace-nowrap">
        {/* Left Side: Offer / Program badge (Clean shrink, never wraps) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 truncate">
          <div className="w-7 h-7 min-[360px]:w-8 min-[360px]:h-8 rounded-lg bg-[#FAF0EB] border border-[#EAD0C2] text-[#A64E33] font-serif font-extrabold text-xs min-[360px]:text-sm flex items-center justify-center shadow-2xs shrink-0">
            B
          </div>
          <div className="text-left truncate">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] min-[360px]:text-xs font-extrabold text-[#26201D] tracking-tight truncate">
                Perimenopause Consultation
              </span>
              <span className="hidden min-[480px]:inline-block bg-[#FAF0EB] text-[#A64E33] text-[9px] font-extrabold px-1.5 py-0.2 rounded border border-[#EADCD4] uppercase shrink-0">
                100% Free
              </span>
            </div>
            <p className="text-[9px] min-[360px]:text-[10px] sm:text-[11px] text-[#C86A4B] font-semibold truncate">
              Personalised Guidance • 4 Slots Left
            </p>
          </div>
        </div>

        {/* Action CTA Button - Shrinks cleanly, never wraps */}
        <div className="flex items-center shrink-0">
          <button
            onClick={onBookClick}
            className="btn-luxury-primary flex items-center justify-center gap-1 min-[360px]:gap-1.5 text-[11px] min-[360px]:text-xs sm:text-sm font-extrabold px-3 min-[360px]:px-4 sm:px-6 py-1.5 min-[360px]:py-2 sm:py-2.5 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all whitespace-nowrap cursor-pointer shrink-0"
          >
            <span className="min-[400px]:hidden">Book Free</span>
            <span className="hidden min-[400px]:inline">Book Free Consultation</span>
            <ArrowRight className="w-3 h-3 min-[360px]:w-3.5 min-[360px]:h-3.5 shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
}
