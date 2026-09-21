"use client";

import { Sparkles, ShieldCheck, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#191210] text-[#B8AAA2] border-t border-[#312521] pt-14 pb-28 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#312521]">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#251C19] border border-[#EAC096]/40 flex items-center justify-center text-[#EAC096] font-serif font-extrabold text-xl shadow-xs">
                B
              </div>
              <div>
                <span className="font-serif font-extrabold text-lg text-white tracking-wider block">
                  BRIGHTFIELD
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#E8927C] font-bold block">
                  Fitness • Nutrition • Mind
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#B8AAA2] leading-relaxed max-w-sm">
              Helping midlife women build healthier relationships with their changing bodies
              through personalized fitness, hormone-supportive nutrition, and mindset wellness.
            </p>

            <div className="text-xs text-[#EAC096] font-bold">
              Founded by Ankita Pareek • Since 2013
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2 text-xs sm:text-sm">
            <span className="text-[#FAF0EB] font-extrabold uppercase tracking-wider text-xs block mb-3">
              Framework
            </span>
            <ul className="space-y-2 font-medium">
              <li>
                <a href="#symptoms" className="hover:text-[#EAC096] transition-colors">
                  The Hormonal Transition
                </a>
              </li>
              <li>
                <a href="#dimensions" className="hover:text-[#EAC096] transition-colors">
                  The 3 Dimensions
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-[#EAC096] transition-colors">
                  The Brightfield Approach
                </a>
              </li>
              <li>
                <a href="#why-brightfield" className="hover:text-[#EAC096] transition-colors">
                  Why Brightfield
                </a>
              </li>
              <li>
                <a href="#founder" className="hover:text-[#EAC096] transition-colors">
                  Meet Ankita Pareek
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#EAC096] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Core Philosophy Box */}
          <div className="md:col-span-4 p-5 rounded-2xl bg-[#241A17] border border-[#E8927C]/30 shadow-xs space-y-2.5">
            <span className="text-[10px] min-[360px]:text-xs font-extrabold uppercase tracking-widest text-[#EAC096] block">
              Our Core Philosophy
            </span>
            <p className="font-serif italic text-sm text-[#FAF0EB] leading-relaxed">
              “A healthier body should help you live a better life. You shouldn’t have to
              choose between looking after your body, your mind, and your life.”
            </p>
            <p className="text-xs text-[#B8AAA2] font-semibold">— Ankita Pareek, Founder</p>
          </div>
        </div>

        {/* Mandatory Medical Disclaimer */}
        <div className="py-6 border-b border-[#312521] text-[11px] text-[#9E8F88] leading-relaxed space-y-1.5">
          <div className="flex items-center gap-1.5 text-[#FAF0EB] font-bold text-xs">
            <ShieldCheck className="w-4 h-4 text-[#EAC096] shrink-0" />
            <span>Health &amp; Medical Disclaimer</span>
          </div>
          <p>
            Brightfield’s wellness support should complement — not replace — appropriate medical
            care. If you have a medical condition, severe hormonal symptoms, cardiovascular
            concerns, or any health issue requiring clinical assessment, consult your doctor or
            qualified healthcare professional. Brightfield programs provide lifestyle,
            nutritional, and fitness education and are not intended to diagnose, treat, cure, or
            prevent any medical disease.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9E8F88]">
          <div>
            © 2013 - {new Date().getFullYear()} Brightfield. All rights reserved. Founded by
            Ankita Pareek.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#EAC096] transition-colors cursor-pointer text-xs font-semibold text-[#FAF0EB]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
