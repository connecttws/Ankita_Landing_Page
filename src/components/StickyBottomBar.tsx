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
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-emerald-950/10 px-3 min-[360px]:px-4 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-2xl"
        >
          <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
            <div className="flex flex-col min-w-0 pr-1">
              <span className="text-xs font-extrabold text-secondary truncate">
                Hormonal Health 38+
              </span>
              <span className="text-[10px] text-foreground/75 truncate">
                Free 30-min discovery call
              </span>
            </div>

            <button
              onClick={onOpenBooking}
              className="shrink-0 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary hover:bg-primary-hover px-3.5 py-1.5 min-[360px]:px-4 min-[360px]:py-2 text-xs font-bold text-white shadow-md active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-white shrink-0" />
              <span>Book Free Call</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
