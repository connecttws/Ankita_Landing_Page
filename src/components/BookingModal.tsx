"use client";

import { useState, useEffect } from "react";
import {
  X,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  Phone,
  User,
  Mail,
  Heart,
  ArrowRight,
} from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultChallenge?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultChallenge = "Belly Weight & Metabolism",
}: BookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [ageGroup, setAgeGroup] = useState("38 - 43 Years");
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([
    "Belly Weight & Metabolism",
    "Energy & Fatigue",
  ]);
  const [preferredSlot, setPreferredSlot] = useState("Evening (5 PM - 8 PM)");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const challengeOptions = [
    "Belly Weight & Metabolism",
    "Energy & Fatigue",
    "Disturbed Sleep & Insomnia",
    "Mood Swings & Anxiety",
    "Food Cravings & Emotional Eating",
    "Muscle Loss & Workout Stagnation",
  ];

  const toggleChallenge = (item: string) => {
    setSelectedChallenges((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setStep(1);
    setName("");
    setPhone("");
    setEmail("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 min-[360px]:p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FCFAF8] rounded-2xl sm:rounded-3xl border border-[#EADCD4] shadow-2xl overflow-hidden max-h-[90dvh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar - Warm Silk Alabaster */}
        <div className="bg-gradient-to-r from-[#FAF3EE] via-[#FDF8F5] to-[#FAF3EE] p-3.5 min-[360px]:p-4 sm:p-5 text-[#26201D] border-b border-[#EEDDD4] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 min-[360px]:gap-3">
            <div className="w-8 h-8 min-[360px]:w-9 min-[360px]:h-9 rounded-xl bg-[#FAF0EB] text-[#A64E33] border border-[#EAD0C2] flex items-center justify-center font-serif font-extrabold text-base min-[360px]:text-lg shadow-2xs shrink-0">
              B
            </div>
            <div className="truncate">
              <h3 className="font-serif font-bold text-sm min-[360px]:text-base sm:text-lg text-[#26201D] truncate">
                Book Free Consultation
              </h3>
              <p className="text-[10px] min-[360px]:text-[11px] text-[#C86A4B] font-semibold truncate">
                Brightfield • Ankita Pareek’s Team
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#635852] hover:text-[#26201D] hover:bg-[#FAF0EB] transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 min-[360px]:p-5 sm:p-7 overflow-y-auto flex-1 bg-white">
          {isSuccess ? (
            /* Success State */
            <div className="text-center py-4 sm:py-6 space-y-3 sm:space-y-4 animate-in zoom-in-95 duration-300">
              <div className="w-14 h-14 min-[360px]:w-16 min-[360px]:h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8 min-[360px]:w-9 min-[360px]:h-9" />
              </div>

              <div className="space-y-1">
                <h4 className="font-serif text-xl min-[360px]:text-2xl font-bold text-[#26201D]">
                  Consultation Request Received!
                </h4>
                <p className="text-xs min-[360px]:text-sm text-[#635852]">
                  Thank you, <span className="font-bold text-[#26201D]">{name || "there"}</span>
                  . Ankita’s team is reviewing your profile.
                </p>
              </div>

              <div className="p-3.5 rounded-xl sm:rounded-2xl bg-[#FAF6F2] border border-[#EADCD4] text-left text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[#635852]">Phone / WhatsApp:</span>
                  <span className="font-bold text-[#26201D]">{phone}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#635852]">Age Group:</span>
                  <span className="font-bold text-[#26201D]">{ageGroup}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#635852]">Preferred Slot:</span>
                  <span className="font-bold text-[#C86A4B]">{preferredSlot}</span>
                </div>
              </div>

              <p className="text-[11px] min-[360px]:text-xs text-[#635852] leading-relaxed">
                A senior wellness coach will reach out to you via WhatsApp within 4 business hours
                to confirm your consultation time.
              </p>

              <button
                onClick={handleReset}
                className="w-full btn-luxury-primary py-3 text-xs min-[360px]:text-sm font-bold shadow-md cursor-pointer mt-2"
              >
                Done
              </button>
            </div>
          ) : (
            /* Step 1 & 2 Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 ? (
                /* Step 1: Personal Details */
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] min-[360px]:text-xs font-bold text-[#C86A4B] uppercase tracking-wider">
                      Step 1 of 2: Details
                    </span>
                    <span className="text-[10px] min-[360px]:text-xs text-[#635852]">
                      100% Confidential
                    </span>
                  </div>

                  <div>
                    <label className="block text-[11px] min-[360px]:text-xs font-bold text-[#26201D] mb-1">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#635852] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priya Sharma"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 min-[360px]:py-3 rounded-xl border border-[#EADCD4] bg-[#FCFAF8] text-xs min-[360px]:text-sm text-[#26201D] focus:outline-none focus:border-[#C86A4B] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] min-[360px]:text-xs font-bold text-[#26201D] mb-1">
                      WhatsApp Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#635852] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 min-[360px]:py-3 rounded-xl border border-[#EADCD4] bg-[#FCFAF8] text-xs min-[360px]:text-sm text-[#26201D] focus:outline-none focus:border-[#C86A4B] focus:bg-white transition-all"
                      />
                    </div>
                    <span className="text-[10px] text-[#635852] mt-0.5 block">
                      We will message you on WhatsApp to confirm your slot time.
                    </span>
                  </div>

                  <div>
                    <label className="block text-[11px] min-[360px]:text-xs font-bold text-[#26201D] mb-1">
                      Email Address (Optional)
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#635852] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        placeholder="e.g. priya@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 min-[360px]:py-3 rounded-xl border border-[#EADCD4] bg-[#FCFAF8] text-xs min-[360px]:text-sm text-[#26201D] focus:outline-none focus:border-[#C86A4B] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] min-[360px]:text-xs font-bold text-[#26201D] mb-1">
                      Your Age Group
                    </label>
                    <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                      {["38 - 43 Years", "44 - 48 Years", "49 - 53 Years", "54+ Years"].map(
                        (g) => (
                          <button
                            type="button"
                            key={g}
                            onClick={() => setAgeGroup(g)}
                            className={`py-1.5 sm:py-2 px-2 text-[11px] min-[360px]:text-xs font-semibold rounded-xl border transition-all text-center ${
                              ageGroup === g
                                ? "bg-[#FAF0EB] text-[#A64E33] border-[#C86A4B] font-bold shadow-2xs"
                                : "bg-[#FCFAF8] text-[#26201D] border-[#EADCD4] hover:border-[#C86A4B]"
                            }`}
                          >
                            {g}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    disabled={!name || !phone}
                    onClick={() => setStep(2)}
                    className="w-full btn-luxury-primary py-3 text-xs min-[360px]:text-sm font-bold shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-1"
                  >
                    <span>Continue to Lifestyle Goals</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </button>
                </div>
              ) : (
                /* Step 2: Challenges & Preferences */
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between mb-1">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs text-[#C86A4B] hover:underline font-semibold cursor-pointer"
                    >
                      ← Back
                    </button>
                    <span className="text-[10px] min-[360px]:text-xs font-bold text-[#C86A4B] uppercase tracking-wider">
                      Step 2 of 2: Symptoms
                    </span>
                  </div>

                  <div>
                    <label className="block text-[11px] min-[360px]:text-xs font-bold text-[#26201D] mb-1.5">
                      Top challenges right now (Select all that apply)
                    </label>
                    <div className="space-y-1.5">
                      {challengeOptions.map((opt) => {
                        const isSelected = selectedChallenges.includes(opt);
                        return (
                          <div
                            key={opt}
                            onClick={() => toggleChallenge(opt)}
                            className={`p-2 rounded-xl border text-[11px] min-[360px]:text-xs font-medium cursor-pointer flex items-center justify-between transition-all select-none ${
                              isSelected
                                ? "bg-[#FAF0EB] border-[#C86A4B] text-[#A64E33] font-bold"
                                : "bg-[#FCFAF8] border-[#EADCD4] text-[#26201D] hover:border-[#C86A4B]"
                            }`}
                          >
                            <span>{opt}</span>
                            <div
                              className={`w-4 h-4 rounded-full flex items-center justify-center border text-[9px] ${
                                isSelected
                                  ? "bg-[#C86A4B] text-white border-[#C86A4B]"
                                  : "border-gray-300"
                              }`}
                            >
                              {isSelected && "✓"}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] min-[360px]:text-xs font-bold text-[#26201D] mb-1">
                      Preferred Call Time
                    </label>
                    <select
                      value={preferredSlot}
                      onChange={(e) => setPreferredSlot(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-[#EADCD4] bg-[#FCFAF8] text-xs min-[360px]:text-sm text-[#26201D] focus:outline-none focus:border-[#C86A4B]"
                    >
                      <option>Morning (10 AM - 1 PM)</option>
                      <option>Afternoon (2 PM - 5 PM)</option>
                      <option>Evening (5 PM - 8 PM)</option>
                    </select>
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-luxury-primary py-3.5 text-xs min-[360px]:text-sm font-bold shadow-lg cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Reserving Your Slot...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-1.5">
                          <span>Confirm &amp; Book Free Consultation</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </span>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#635852] pt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Your privacy is protected. No spam ever.</span>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
