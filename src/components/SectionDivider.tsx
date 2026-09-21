"use client";

import { Sparkles, Heart, Sun, Feather } from "lucide-react";

interface SectionDividerProps {
  symbol?: "sparkles" | "lotus" | "sun" | "feather";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionDivider({
  symbol = "sparkles",
  theme = "light",
  className = "",
}: SectionDividerProps) {
  const isDark = theme === "dark";

  return (
    <div
      aria-hidden="true"
      className={`relative w-full py-4 sm:py-6 flex items-center justify-center overflow-hidden pointer-events-none select-none ${className}`}
    >
      {/* Subtle Central Warm Glow */}
      <div
        className={`absolute w-56 h-12 blur-xl rounded-full pointer-events-none ${
          isDark ? "bg-[#C86A4B]/20" : "bg-[#C86A4B]/15"
        }`}
      />

      <div className="max-w-4xl w-full mx-auto px-4 flex items-center justify-center">
        {/* Left Fading Tapered Gradient Line */}
        <div
          className={`flex-1 h-[1.5px] max-w-[90px] sm:max-w-xs bg-gradient-to-r from-transparent ${
            isDark
              ? "via-[#E8927C]/30 to-[#EAC096]"
              : "via-[#DF9B82]/40 to-[#C86A4B]"
          }`}
        />

        {/* Left Decorative Beads */}
        <div className="mx-2 sm:mx-3 flex items-center gap-1.5 shrink-0">
          <span
            className={`w-1.5 h-1.5 rotate-45 shadow-xs ${
              isDark ? "bg-[#EAC096]" : "bg-[#C86A4B]"
            }`}
          />
          <span
            className={`w-1 h-1 rounded-full ${
              isDark ? "bg-[#E8927C]" : "bg-[#EAC096]"
            }`}
          />
        </div>

        {/* Center Golden Medallion */}
        <div
          className={`relative shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full shadow-md ${
            isDark
              ? "bg-gradient-to-br from-[#2E221E] via-[#241A17] to-[#1D1614] border border-[#EAC096]/50 shadow-[#C86A4B]/20"
              : "bg-gradient-to-br from-[#FAF0EB] via-[#FFF8F5] to-[#F5E2D8] border border-[#C86A4B]/50 shadow-[#C86A4B]/15"
          }`}
        >
          {symbol === "lotus" ? (
            <span
              className={`text-xs font-serif font-bold ${
                isDark ? "text-[#F8D2BA]" : "text-[#C86A4B]"
              }`}
            >
              🪷
            </span>
          ) : symbol === "sun" ? (
            <Sun
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                isDark ? "text-[#EAC096]" : "text-[#C86A4B]"
              }`}
            />
          ) : symbol === "feather" ? (
            <Feather
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                isDark ? "text-[#EAC096]" : "text-[#C86A4B]"
              }`}
            />
          ) : (
            <Sparkles
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                isDark ? "text-[#EAC096]" : "text-[#C86A4B]"
              }`}
            />
          )}
        </div>

        {/* Right Decorative Beads */}
        <div className="mx-2 sm:mx-3 flex items-center gap-1.5 shrink-0">
          <span
            className={`w-1 h-1 rounded-full ${
              isDark ? "bg-[#E8927C]" : "bg-[#EAC096]"
            }`}
          />
          <span
            className={`w-1.5 h-1.5 rotate-45 shadow-xs ${
              isDark ? "bg-[#EAC096]" : "bg-[#C86A4B]"
            }`}
          />
        </div>

        {/* Right Fading Tapered Gradient Line */}
        <div
          className={`flex-1 h-[1.5px] max-w-[90px] sm:max-w-xs bg-gradient-to-l from-transparent ${
            isDark
              ? "via-[#E8927C]/30 to-[#EAC096]"
              : "via-[#DF9B82]/40 to-[#C86A4B]"
          }`}
        />
      </div>
    </div>
  );
}
