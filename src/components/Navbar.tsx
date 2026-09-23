"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, CalendarCheck } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs py-1.5 sm:py-2.5 border-b border-emerald-950/10"
          : "bg-transparent py-1.5 sm:py-3.5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 w-full">
        {/* Brand Logo & Tagline - fluid shrink */}
        <a href="#" className="flex items-center gap-2 sm:gap-2.5 cursor-pointer min-w-0 pr-1 group">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm shadow-primary/25">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-extrabold text-sm sm:text-xl tracking-tight text-secondary group-hover:text-primary transition-colors leading-none truncate">
              BRIGHTFIELD
            </span>
            <span className="text-[7.5px] sm:text-[10px] text-foreground/70 tracking-[0.12em] font-semibold uppercase mt-0.5 truncate">
              Women&apos;s Hormonal Wellness &bull;
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-secondary/80">
          <a href="#symptoms" className="hover:text-primary transition-colors">Symptoms</a>
          <a href="#dimensions" className="hover:text-primary transition-colors">3 Dimensions</a>
          <a href="#approach" className="hover:text-primary transition-colors">Approach</a>
          <a href="#founder" className="hover:text-primary transition-colors">Meet Ankita</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>

        {/* CTA Button - guaranteed within viewport */}
        <div className="shrink-0">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary hover:bg-primary-hover active:scale-95 px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-white shadow-sm hover:shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            <CalendarCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
            <span>Book <span className="hidden min-[380px]:inline">Free </span>Call</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
