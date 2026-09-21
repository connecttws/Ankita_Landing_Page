"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Eye,
  RotateCcw,
} from "lucide-react";

interface VslVideoFrameProps {
  onBookClick: () => void;
  className?: string;
}

export default function VslVideoFrame({
  onBookClick,
  className = "",
}: VslVideoFrameProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(32);
  const [viewerCount, setViewerCount] = useState(44);

  useEffect(() => {
    const timer = setInterval(() => {
      setViewerCount((prev) => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 900);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  const handleOpen = () => {
    setIsOpen(true);
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsPlaying(false);
  };

  return (
    <>
      {/* ──────── VSL Trigger Card Shell ──────── */}
      <div className={`relative w-full max-w-4xl mx-auto ${className}`}>
        {/* Soft Background Warm Glow */}
        <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#C86A4B]/20 via-[#EAC096]/25 to-[#DF9B82]/20 blur-xl -z-10 opacity-75 group-hover:opacity-100 transition-opacity" />

        <div
          onClick={handleOpen}
          className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-3xl bg-[#1E1715] border-2 border-[#EADCD4] shadow-2xl shadow-[#C86A4B]/10 overflow-hidden cursor-pointer group select-none flex flex-col justify-between"
        >
          {/* Top Gradient Shimmer Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C86A4B] via-[#EAC096] to-[#C86A4B] bg-[length:200%_auto] animate-shimmer pointer-events-none z-20" />

          {/* Background Image / VSL Cover */}
          <div className="absolute inset-0 z-0 transition-transform duration-700 ease-out group-hover:scale-105">
            <Image
              src="/images/vsl_video_cover.jpg"
              alt="Ankita Pareek - Perimenopause and Menopause Wellness Masterclass"
              fill
              className="object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity"
              priority
            />
            {/* Cinematic Warm Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1210] via-transparent to-[#1A1210]/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1210]/50 via-transparent to-[#1A1210]/35" />
          </div>

          {/* ── Top Header Tags ── */}
          <div className="relative z-10 p-3 sm:p-5 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-600/95 text-white text-[10px] min-[360px]:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md shadow-md">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              Live Masterclass
            </span>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 text-[#F4D3A1] text-xs font-semibold backdrop-blur-md border border-white/15 shadow-2xs">
                <Eye className="w-3.5 h-3.5 text-[#EAC096]" />
                {viewerCount} watching
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-medium backdrop-blur-md border border-white/20">
                <Clock className="w-3.5 h-3.5 text-[#F4D3A1]" />
                03:45 min
              </span>
            </div>
          </div>

          {/* ── Center Play Button ── */}
          <div className="relative z-10 flex flex-col items-center justify-center py-4">
            <div className="relative group-hover:scale-110 transition-transform duration-300">
              <div className="absolute -inset-3 sm:-inset-4 rounded-full bg-[#C86A4B]/40 animate-ping opacity-75" />
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#A64E33] via-[#C86A4B] to-[#DF9B82] flex items-center justify-center text-white shadow-2xl border-2 border-white/90 transition-all group-hover:shadow-[0_0_35px_rgba(200,106,75,0.7)]">
                <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white translate-x-0.5" />
              </div>
            </div>

            <span className="mt-3 px-3 py-1 rounded-full bg-black/65 text-white text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md border border-white/20 shadow-md">
              Click to Watch Presentation
            </span>
          </div>

          {/* ── Bottom Summary Strip ── */}
          <div className="relative z-10 p-3 sm:p-5 bg-gradient-to-t from-[#1A1210] via-[#1A1210]/85 to-transparent">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-1.5 text-[#EAC096] text-[10px] min-[360px]:text-xs font-extrabold uppercase tracking-wider mb-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Free Video Masterclass
                </div>
                <h3 className="text-white text-sm sm:text-base md:text-lg font-bold drop-shadow">
                  The Hormonal Shift After 38: Why Common Diets Fail &amp; How to Reset
                </h3>
              </div>
              <span className="text-[10px] min-[360px]:text-xs text-white/85 font-medium self-start sm:self-center px-2 py-0.5 rounded bg-white/10 backdrop-blur-sm border border-white/15">
                Sound Available 🔊
              </span>
            </div>
          </div>
        </div>

        {/* ── Bottom Benefit Quick Points (Light Luxury) ── */}
        <div className="mt-3.5 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#635852]">
          <span className="flex items-center gap-1.5 font-semibold text-[#26201D]">
            <CheckCircle2 className="w-4 h-4 text-[#C86A4B]" />
            No crash diets or starvation
          </span>
          <span className="flex items-center gap-1.5 font-semibold text-[#26201D]">
            <CheckCircle2 className="w-4 h-4 text-[#C86A4B]" />
            Specific for perimenopause 38+
          </span>
          <span className="flex items-center gap-1.5 font-semibold text-[#26201D]">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            100% Free Consultation Available
          </span>
        </div>
      </div>

      {/* ──────── Interactive Video Player Modal ──────── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-4xl bg-[#1E1715] rounded-2xl sm:rounded-3xl border border-[#EADCD4]/30 shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Strip */}
            <div className="px-4 py-3 bg-[#241D1A] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
                  Brightfield Masterclass with Ankita Pareek
                </span>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close presentation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Canvas Area */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
              <Image
                src="/images/vsl_video_cover.jpg"
                alt="Video Masterclass"
                fill
                className="object-cover"
              />

              {/* Subtitles Overlay */}
              <div className="absolute bottom-14 left-3 right-3 sm:left-8 sm:right-8 bg-black/80 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/15 text-center transition-all">
                <span className="text-[#EAC096] text-[10px] min-[360px]:text-xs font-bold uppercase tracking-wider block mb-0.5">
                  Key Insight #{Math.floor(progress / 25) + 1}
                </span>
                <p className="text-white text-xs sm:text-sm md:text-base font-medium leading-snug">
                  {progress < 25
                    ? "“Perimenopause isn’t a failure of discipline. Your progesterone and estrogen shifts alter metabolic pacing.”"
                    : progress < 50
                    ? "“Doing aggressive cardio with severe calorie restriction spikes cortisol, signaling stubborn belly fat storage.”"
                    : progress < 75
                    ? "“The solution: Intentional strength training + hormone-calibrated nutrition + nervous system reset.”"
                    : "“A stronger you — from the inside out. Tailored guidance for your specific stage of life.”"}
                </p>
              </div>

              {/* Center Play/Pause */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute w-16 h-16 rounded-full bg-black/55 hover:bg-black/75 backdrop-blur-md flex items-center justify-center text-white border border-white/30 transition-transform active:scale-95 cursor-pointer"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-7 h-7 fill-white" />
                ) : (
                  <Play className="w-7 h-7 fill-white translate-x-0.5" />
                )}
              </button>
            </div>

            {/* Video Controls Bar */}
            <div className="p-3 sm:p-4 bg-[#241D1A] border-t border-white/10 flex flex-col gap-2">
              <div className="w-full bg-white/20 rounded-full h-1.5 cursor-pointer overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#C86A4B] to-[#EAC096] h-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-white/80">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-white transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-rose-400" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-[#EAC096]" />
                    )}
                    <span className="text-[10px]">{isMuted ? "Muted" : "Audio On"}</span>
                  </button>
                  <span className="text-[11px] text-white/60">
                    {Math.floor((progress * 225) / 100 / 60)}:
                    {String(Math.floor(((progress * 225) / 100) % 60)).padStart(2, "0")}{" "}
                    / 03:45
                  </span>
                </div>

                <button
                  onClick={() => setProgress(0)}
                  className="hover:text-white transition-colors flex items-center gap-1 text-[11px]"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Restart
                </button>
              </div>
            </div>

            {/* Action Bar inside modal */}
            <div className="p-4 bg-[#1E1715] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <p className="text-white text-xs sm:text-sm font-semibold">
                  Ready to stop guessing and start understanding your body?
                </p>
                <p className="text-white/60 text-xs">
                  Book a free 1-on-1 consultation with Brightfield’s wellness team.
                </p>
              </div>
              <button
                onClick={() => {
                  handleClose();
                  onBookClick();
                }}
                className="w-full sm:w-auto btn-luxury-primary px-6 py-2.5 text-xs sm:text-sm font-bold shadow-lg cursor-pointer"
              >
                <span>Book Your Free Consultation</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
