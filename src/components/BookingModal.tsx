"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Calendar, Phone, Mail, User, Sparkles } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    stage: "Perimenopause (38–45)",
    goal: "Weight & Hormonal Balance",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 min-[360px]:p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Box - fluid sizing with dvh */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg max-h-[90dvh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-white shadow-2xl border border-emerald-950/10 z-10 my-auto"
          >
            {/* Header with decorative deep spruce background */}
            <div className="relative bg-gradient-to-br from-[#032d23] to-[#011a14] px-4 min-[360px]:px-5 sm:px-6 py-4 sm:py-5 text-white">
              <button
                onClick={onClose}
                className="absolute top-3.5 right-3.5 rounded-full p-1 text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold text-accent mb-1.5">
                <Sparkles className="w-3 h-3" />
                <span>1-on-1 Confidential Call</span>
              </div>
              <h3 className="text-lg min-[360px]:text-xl sm:text-2xl font-extrabold tracking-tight">
                Book Your Free Consultation
              </h3>
              <p className="text-[11px] sm:text-xs text-white/80 mt-0.5 leading-snug">
                Personalized guidance with Ankita Pareek • No generic diets • 100% confidential
              </p>
            </div>

            <div className="p-3.5 min-[360px]:p-5 sm:p-6">
              {submitted ? (
                <div className="py-6 text-center">
                  <div className="mx-auto mb-3.5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-950/5 text-primary">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-extrabold text-secondary mb-1.5">
                    Consultation Requested!
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/80 max-w-sm mx-auto mb-5 leading-relaxed">
                    Thank you, <span className="font-semibold text-secondary">{formData.fullName}</span>. Ankita Pareek&apos;s team will reach out via WhatsApp / phone to schedule your session.
                  </p>
                  <button
                    onClick={handleReset}
                    className="rounded-full bg-primary px-7 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-primary-hover transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-secondary mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priya Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 pl-9 pr-3 py-2 text-xs sm:text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold text-secondary mb-1">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl border border-gray-200 pl-9 pr-3 py-2 text-xs sm:text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold text-secondary mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-gray-200 pl-9 pr-3 py-2 text-xs sm:text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold text-secondary mb-1">
                        Where Are You In Your Journey?
                      </label>
                      <select
                        value={formData.stage}
                        onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 px-2.5 py-2 text-xs sm:text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white"
                      >
                        <option>Perimenopause (Age 38–45)</option>
                        <option>Menopause (Age 45–55)</option>
                        <option>Post-Menopause (55+)</option>
                        <option>Not Sure / Experiencing Symptoms</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold text-secondary mb-1">
                        Main Focus Area
                      </label>
                      <select
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 px-2.5 py-2 text-xs sm:text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white"
                      >
                        <option>Weight & Stubborn Belly Fat</option>
                        <option>Energy, Fatigue & Sleep</option>
                        <option>Mood, Anxiety & Emotional Eating</option>
                        <option>Overall Strength & Mobility</option>
                        <option>Complete Midlife Reset</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-secondary mb-1">
                      Anything specific you want Ankita to know? (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Share your current challenges or questions..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 px-3 py-1.5 text-xs sm:text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-primary py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-950/20 hover:bg-primary-hover active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    <span>Confirm Free Consultation Request</span>
                  </button>

                  <p className="text-[10px] text-center text-gray-500">
                    🔒 No spam. Your information is 100% private and confidential.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
