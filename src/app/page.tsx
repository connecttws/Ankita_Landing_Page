"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TransitionSymptoms from "@/components/TransitionSymptoms";
import ThreeDimensionsSection from "@/components/ThreeDimensionsSection";
import FourPillarsApproach from "@/components/FourPillarsApproach";
import WhyBrightfield from "@/components/WhyBrightfield";
import FounderProfile from "@/components/FounderProfile";
import TransformationSection from "@/components/TransformationSection";
import ProcessSteps from "@/components/ProcessSteps";
import NotAloneSection from "@/components/NotAloneSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import StickyBottomBar from "@/components/StickyBottomBar";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <main className="min-h-[100dvh] overflow-x-hidden bg-background text-foreground">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Section */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* Symptoms / Empathy Section */}
      <TransitionSymptoms onOpenBooking={handleOpenBooking} />

      {/* Philosophy / 3 Dimensions Section */}
      <ThreeDimensionsSection onOpenBooking={handleOpenBooking} />

      {/* 4 Pillars Framework Section */}
      <FourPillarsApproach onOpenBooking={handleOpenBooking} />

      {/* Why Brightfield Differentiators */}
      <WhyBrightfield onOpenBooking={handleOpenBooking} />

      {/* Founder Spotlight: Ankita Pareek */}
      <FounderProfile onOpenBooking={handleOpenBooking} />

      {/* Transformation / Future Reality */}
      <TransformationSection onOpenBooking={handleOpenBooking} />

      {/* 4 Steps Process Roadmap */}
      <ProcessSteps onOpenBooking={handleOpenBooking} />

      {/* Reassurance Block */}
      <NotAloneSection onOpenBooking={handleOpenBooking} />

      {/* FAQ Accordion */}
      <FaqSection onOpenBooking={handleOpenBooking} />

      {/* Footer & Final Journey CTA */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Mobile Sticky Consultation Bar */}
      <StickyBottomBar onOpenBooking={handleOpenBooking} />

      {/* Interactive Consultation Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </main>
  );
}
