"use client";

import { Sparkles, ArrowRight } from "lucide-react";

interface TopBannerProps {
  onBookClick: () => void;
}

export default function TopBanner({ onBookClick }: TopBannerProps) {
  return (
    <aside
      aria-label="Announcement"
      className="w-full bg-gradient-to-r from-[#FAF3EE] via-[#FDF8F5] to-[#FAF3EE] text-[#4A3F39] py-1.5 min-[360px]:py-2 px-2.5 min-[360px]:px-3.5 sm:px-6 text-xs sm:text-sm font-medium border-b border-[#EEDDD4] shadow-xs overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 whitespace-nowrap">
        {/* Left Side: Single line message with shrink/truncate - Never wraps */}
        <div className="flex items-center gap-1.5 sm:gap-2 truncate">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#C86A4B] text-white font-bold text-[10px] min-[360px]:text-[11px] uppercase tracking-wider shrink-0 shadow-xs">
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
            13+ Yrs
          </span>

          <span className="text-[#362E2A] font-semibold text-[11px] min-[360px]:text-xs sm:text-sm truncate">
            <span>Women’s Wellness</span>
            <span className="hidden min-[480px]:inline"> &amp; Fitness (38+)</span>
            <span className="text-[#C86A4B]/40 mx-1.5 hidden sm:inline">•</span>
            <span className="text-[#635852] font-normal hidden sm:inline">
              Personalised Guidance • Sustainable Habits • No Crash Diets
            </span>
          </span>
        </div>

        {/* Right Side: Limited slots & Action Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="flex items-center gap-1 min-[360px]:gap-1.5 bg-white/90 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-[#EADCD4] text-[#8C4A32] text-[10px] min-[360px]:text-[11px] sm:text-xs shadow-2xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse shrink-0" />
            <span className="hidden min-[420px]:inline">Consultations:</span>
            <span className="font-extrabold text-[#C86A4B]">4 Left</span>
          </div>

          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-1 bg-[#C86A4B] hover:bg-[#A64E33] text-white font-bold text-[10px] min-[360px]:text-[11px] sm:text-xs px-2.5 min-[360px]:px-3.5 py-1 rounded-full transition-all hover:scale-105 active:scale-95 shadow-xs whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>Book Free</span>
            <ArrowRight className="w-2.5 h-2.5 min-[360px]:w-3 min-[360px]:h-3" />
          </button>
        </div>
      </div>
    </aside>
  );
}
