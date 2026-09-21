"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck } from "lucide-react";

interface StickyBottomBarProps {
  onOpenBooking: () => void;
}

export default function StickyBottomBar({ onOpenBooking }: StickyBottomBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-primary/20 px-3.5 py-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] shadow-2xl"
        >
          <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
            <div className="flex flex-col min-w-0 pr-1">
              <span className="text-[11px] sm:text-xs font-bold text-secondary font-serif truncate">
                Perimenopause Wellness
              </span>
              <span className="text-[9.5px] sm:text-[10px] text-foreground/70 truncate">
                Free 1-on-1 consultation
              </span>
            </div>

            <button
              onClick={onOpenBooking}
              className="flex-shrink-0 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-bold text-white shadow-md shadow-primary/30 active:scale-95 transition-all cursor-pointer"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-accent flex-shrink-0" />
              <span>Book Free Call</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
