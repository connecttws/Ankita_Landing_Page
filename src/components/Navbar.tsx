"use client";

import { useState } from "react";
import { Sparkles, Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "The Transition", href: "#symptoms" },
    { name: "3 Dimensions", href: "#dimensions" },
    { name: "The Approach", href: "#approach" },
    { name: "Why Brightfield", href: "#why-brightfield" },
    { name: "Meet Ankita", href: "#founder" },
    { name: "Outcomes", href: "#outcomes" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FCFAF8]/90 backdrop-blur-md border-b border-[#EFE6E0] shadow-[0_2px_15px_rgba(180,140,120,0.04)]">
      <div className="max-w-7xl mx-auto px-2.5 min-[360px]:px-3.5 sm:px-6 lg:px-8 h-15 sm:h-18 lg:h-20 flex items-center justify-between gap-2 sm:gap-3">
        {/* Brand: Single Line */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <div className="w-8 h-8 min-[360px]:w-9 min-[360px]:h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#FAF0EB] via-[#FDF8F5] to-[#F5E2D8] flex items-center justify-center text-[#A64E33] shadow-xs border border-[#E8D4C8] group-hover:scale-105 transition-transform shrink-0">
            <span className="font-serif font-extrabold text-sm min-[360px]:text-base sm:text-xl text-[#A64E33]">
              B
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="flex flex-col">
              <span className="font-serif font-extrabold text-[15px] min-[360px]:text-base sm:text-xl text-[#26201D] tracking-wider uppercase whitespace-nowrap">
                BRIGHTFIELD
              </span>
              <span className="text-[9px] min-[360px]:text-[10px] sm:text-[11px] font-bold tracking-widest text-[#C86A4B] uppercase -mt-0.5 whitespace-nowrap hidden min-[360px]:block">
                Fitness • Nutrition • Mind
              </span>
            </div>

            <span className="hidden xl:inline-flex items-center gap-1 bg-[#FAF0EB] text-[#A64E33] border border-[#EEDDD4] text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-2xs ml-1">
              <Sparkles className="w-2.5 h-2.5 text-[#C86A4B]" />
              Women 38+
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-sm font-semibold text-[#4A3F39]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#C86A4B] transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C86A4B] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onBookClick}
            className="btn-luxury-primary flex items-center gap-1 min-[360px]:gap-1.5 text-[11px] min-[360px]:text-xs sm:text-sm px-3 min-[360px]:px-4 sm:px-5 py-1.5 min-[360px]:py-2 sm:py-2.5 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all whitespace-nowrap cursor-pointer shrink-0"
          >
            <span className="min-[420px]:hidden">Book Free</span>
            <span className="hidden min-[420px]:inline">Book Free Consultation</span>
            <ArrowRight className="w-3 h-3 min-[360px]:w-3.5 min-[360px]:h-3.5" />
          </button>

          {/* Mobile Drawer Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 min-[360px]:p-2 rounded-lg text-[#26201D] hover:bg-[#FAF0EB] transition-colors shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 min-[360px]:w-6 min-[360px]:h-6" />
            ) : (
              <Menu className="w-5 h-5 min-[360px]:w-6 min-[360px]:h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FCFAF8] border-b border-[#EFE6E0] px-3 min-[360px]:px-4 pt-2 pb-5 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          <div className="grid grid-cols-1 gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs sm:text-sm font-semibold text-[#26201D] hover:text-[#C86A4B] hover:bg-[#FAF0EB] rounded-lg transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#EFE6E0]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full btn-luxury-primary py-2.5 text-xs sm:text-sm font-bold shadow-md justify-center"
            >
              <span>Book Your Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
