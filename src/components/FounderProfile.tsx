"use client";

import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  Heart,
  Award,
  CheckCircle2,
  Calendar,
  Quote,
} from "lucide-react";

interface FounderProfileProps {
  onBookClick: () => void;
}

export default function FounderProfile({ onBookClick }: FounderProfileProps) {
  const coreBeliefs = [
    { title: "Waking up with energy", desc: "Refreshed and alert from morning onwards" },
    { title: "Feeling strong in your body", desc: "Active muscles, mobility, and confidence" },
    { title: "Confident in your clothes", desc: "No more hiding behind oversized layers" },
    { title: "Calmer relationship with food", desc: "No guilt, no extreme food restrictions" },
    { title: "Feeling like YOURSELF again", desc: "Reconnecting with your joy and vitality" },
  ];

  return (
    <section id="founder" className="py-12 min-[360px]:py-16 sm:py-20 lg:py-24 bg-[#FDFBF7] relative overflow-hidden w-full">
      {/* Background Subtle Floral/Leaf Glow */}
      <div className="absolute top-1/2 -right-40 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-[#C86A4B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="badge-wellness mb-3 min-[360px]:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C86A4B]" />
            <span>Founder &amp; Women’s Wellness Mentor</span>
          </div>

          <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-bold text-[#26201D] tracking-tight mb-2">
            Meet Ankita Pareek
          </h2>
          <p className="text-base min-[360px]:text-lg sm:text-xl text-[#C86A4B] font-serif italic">
            Your Guide Through The Change.
          </p>
        </div>

        {/* Founder Card Shell */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-white via-[#FDFBF7] to-[#FDF2EE] rounded-2xl sm:rounded-3xl border-2 border-[#C86A4B]/30 shadow-xl p-4 min-[360px]:p-6 sm:p-10 lg:p-12 relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            {/* Left Portrait Column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[240px] min-[360px]:max-w-[270px] sm:max-w-[320px] aspect-square rounded-2xl sm:rounded-3xl overflow-hidden border-3 sm:border-4 border-white shadow-xl shadow-[#C86A4B]/15 group">
                <Image
                  src="/images/ankita_portrait.jpg"
                  alt="Ankita Pareek - Founder of Brightfield"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#241A17]/95 backdrop-blur-md p-2 rounded-xl border border-[#EAC096]/30 text-white flex items-center justify-between shadow-md">
                  <div>
                    <div className="text-[9px] min-[360px]:text-[10px] text-[#F8D2BA] uppercase font-bold tracking-wider">
                      Experience
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white">13+ Years Dedicated</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] min-[360px]:text-[10px] text-[#D6C7BF] uppercase font-bold">
                      Brightfield
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#EAC096]">Est. 2013</div>
                  </div>
                </div>
              </div>

              <div className="mt-3.5 text-center">
                <h3 className="font-serif text-lg min-[360px]:text-xl sm:text-2xl font-bold text-[#26201D]">
                  Ankita Pareek
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#C86A4B]">
                  Founder, Brightfield Wellness
                </p>
                <p className="text-[11px] sm:text-xs text-[#5A4D46] mt-0.5">
                  Women’s Midlife Health &amp; Fitness Specialist
                </p>
              </div>
            </div>

            {/* Right Story Column with Eye Capturing Highlights */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              {/* Quote Icon */}
              <div className="mb-2 sm:mb-3">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#C86A4B]/30 rotate-180" />
              </div>

              {/* Bio Story from User Content */}
              <div className="space-y-3 sm:space-y-4 text-xs min-[360px]:text-sm sm:text-base text-[#26201D] leading-relaxed">
                <p className="font-serif font-bold text-base min-[360px]:text-lg sm:text-xl text-[#26201D]">
                  “Hi, I'm Ankita Pareek — Founder of Brightfield.”
                </p>

                <p className="text-[#5A4D46]">
                  For years, I've seen women work incredibly hard to become healthier — only to
                  feel frustrated when their{" "}
                  <span className="highlight-terracotta">
                    bodies begin responding differently in their 40s
                  </span>
                  .
                </p>

                <p className="text-[#5A4D46]">
                  That's why I believe women shouldn't have to choose between looking after their{" "}
                  <strong className="text-[#26201D]">body, their mind and their life</strong>.
                </p>

                <div className="p-3.5 min-[360px]:p-4 rounded-xl sm:rounded-2xl bg-white border border-[#C86A4B]/25 shadow-xs">
                  <p className="text-[10px] min-[360px]:text-xs font-extrabold uppercase tracking-widest text-[#C86A4B] mb-1">
                    The 4 Brightfield Pillars Synchronized
                  </p>
                  <p className="text-xs min-[360px]:text-sm font-bold text-[#26201D] mb-2">
                    We bring these pieces together for whole-woman vitality:
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[10px] min-[360px]:text-xs font-extrabold text-[#26201D]">
                    <span className="px-2.5 py-1 rounded-lg bg-[#FDF2EE] text-[#A85338] border border-[#C86A4B]/25">
                      ✓ Fitness
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#FFF7ED] text-[#B45309] border border-amber-300">
                      ✓ Nutrition
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#FAF0EB] text-[#8C3A22] border border-[#E8D4C8]">
                      ✓ Mindset
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#FAF5FF] text-[#7E22CE] border border-purple-200">
                      ✓ Emotional Wellbeing
                    </span>
                  </div>
                </div>

                <p className="text-[#5A4D46]">
                  Because feeling healthy{" "}
                  <span className="line-through decoration-red-400 font-semibold text-[#5A4D46]">
                    isn't just about the number on the scale
                  </span>
                  . It's about:
                </p>

                {/* 5 Transformation Elements with Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                  {coreBeliefs.map((b) => (
                    <div
                      key={b.title}
                      className="p-2 rounded-xl bg-white/70 border border-[#C86A4B]/15 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C86A4B] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold text-[#26201D] block leading-tight">
                          {b.title}
                        </span>
                        <span className="text-[10px] min-[360px]:text-[11px] text-[#5A4D46]">
                          {b.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Founder Motto */}
                <div className="mt-3 pt-3 sm:mt-4 sm:pt-4 border-t border-[#C86A4B]/15">
                  <p className="font-serif italic text-sm min-[360px]:text-base sm:text-lg font-extrabold text-[#26201D]">
                    “Since 2013, Brightfield has been built around one simple belief:{" "}
                    <span className="highlight-terracotta">
                      A healthier body should help you live a better life.
                    </span>”
                  </p>
                </div>
              </div>

              {/* Founder CTA */}
              <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={onBookClick}
                  className="w-full sm:w-auto btn-primary-terracotta py-3.5 px-6 sm:px-8 text-xs min-[360px]:text-sm font-bold shadow-md cursor-pointer"
                >
                  <span>Book Free Consultation With Ankita's Team</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
