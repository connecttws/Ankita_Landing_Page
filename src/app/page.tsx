"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import TransitionSymptoms from "@/components/TransitionSymptoms";
import ThreeDimensionsSection from "@/components/ThreeDimensionsSection";
import FourPillarsApproach from "@/components/FourPillarsApproach";
import WhyBrightfield from "@/components/WhyBrightfield";
import FounderProfile from "@/components/FounderProfile";
import TransformationSection from "@/components/TransformationSection";
import ProcessSteps from "@/components/ProcessSteps";
import NotAloneSection from "@/components/NotAloneSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaBanner from "@/components/FinalCtaBanner";
import Footer from "@/components/Footer";
import StickyBottomBar from "@/components/StickyBottomBar";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalChallenge, setModalChallenge] = useState("Belly Weight & Metabolism");

  const handleOpenModal = (challenge = "Belly Weight & Metabolism") => {
    setModalChallenge(challenge);
    setIsModalOpen(true);
  };

  return (
    <main className="relative w-full max-w-[100vw] min-h-[100dvh] overflow-x-hidden bg-[#FCFAF8] text-[#26201D]">
      {/* 1. Main Navigation Header (Top Announcement Bar removed per user instruction) */}
      <Navbar onBookClick={() => handleOpenModal()} />

      {/* 2. Hero Section with VSL Video Frame & Hook */}
      <Hero onBookClick={() => handleOpenModal()} />

      <SectionDivider symbol="sparkles" />

      {/* 3. The Transition & 7 Symptoms Deep-Dive */}
      <TransitionSymptoms onBookClick={() => handleOpenModal()} />

      <SectionDivider symbol="lotus" />

      {/* 4. Core Philosophy: The 3 Dimensions (Fitness, Nutrition, Mindset) - Rich Medium-Dark Mocha */}
      <ThreeDimensionsSection onBookClick={() => handleOpenModal()} />

      <SectionDivider symbol="sun" />

      {/* 5. The Brightfield 4-Pillar Approach (Move, Nourish, Reset, Thrive) */}
      <FourPillarsApproach onBookClick={() => handleOpenModal()} />

      <SectionDivider symbol="feather" />

      {/* 6. Why Brightfield: Differentiators vs Generic Diets with High-Contrast Brightfield Method */}
      <WhyBrightfield onBookClick={() => handleOpenModal()} />

      <SectionDivider symbol="sparkles" />

      {/* 7. Meet Ankita Pareek: Founder Story & Portrait */}
      <FounderProfile onBookClick={() => handleOpenModal()} />

      <SectionDivider symbol="lotus" />

      {/* 8. Transformation Vision: Imagine Waking Up And... */}
      <TransformationSection onBookClick={() => handleOpenModal()} />

      <SectionDivider symbol="sun" />

      {/* 9. Process Roadmap: What Happens When You Start? (Steps 1 to 4) */}
      <ProcessSteps onBookClick={() => handleOpenModal()} />

      <SectionDivider symbol="feather" />

      {/* 10. Empathy Reassurance: You Don't Have To Figure This Out Alone - Rich Medium-Dark Mocha */}
      <NotAloneSection onBookClick={() => handleOpenModal()} />

      <SectionDivider symbol="sparkles" />

      {/* 11. Frequently Asked Questions (Accordion) */}
      <FaqSection onBookClick={() => handleOpenModal()} />

      <SectionDivider symbol="lotus" />

      {/* 12. Final Grand CTA Banner - Rich Medium-Dark Mocha */}
      <FinalCtaBanner onBookClick={() => handleOpenModal()} />

      {/* 13. Trust Footer with Medical Disclaimer & Copyright - Grounding Espresso Mocha */}
      <Footer />

      {/* 14. Sticky Conversion Bottom Bar (Mobile & Desktop) */}
      <StickyBottomBar onBookClick={() => handleOpenModal()} />

      {/* 15. Interactive Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultChallenge={modalChallenge}
      />
    </main>
  );
}
