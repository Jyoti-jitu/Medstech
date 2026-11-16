"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, CheckCircle2, AlertCircle, Loader2, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ConsultationModal({ isOpen, onClose, defaultService }: ConsultationModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [service, setService] = useState(defaultService || "Doctor Website");
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("11:00 AM");
  const [notes, setNotes] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          organization,
          service,
          scheduledDate,
          scheduledTime,
          notes,
          type: "consultation",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to schedule consultation.");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName("");
    setEmail("");
    setPhone("");
    setOrganization("");
    setNotes("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-brand-border/80 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-brand-muted hover:text-brand-charcoal hover:bg-brand-lightgrey transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-brand-charcoal">Consultation Requested!</h3>
            <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-brand-charcoal">{fullName}</span>. Our healthcare engineering specialist will review your request and send a Google Meet / calendar invitation to <span className="font-semibold text-brand-charcoal">{email}</span>.
            </p>
            <div className="bg-brand-lightgrey rounded-xl p-4 text-xs text-brand-charcoal text-left max-w-sm mx-auto space-y-1">
              <div className="font-bold text-brand-red">Summary:</div>
              <div>Service: {service}</div>
              {scheduledDate && <div>Preferred Date: {scheduledDate} at {scheduledTime}</div>}
              <div>Organization: {organization || "Individual Practitioner"}</div>
            </div>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-brand-charcoal text-white text-sm font-semibold hover:bg-brand-darker transition-colors"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-brand-softred text-brand-red">
                Complimentary 1-on-1 Session
              </span>
              <span className="text-xs text-brand-muted flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-brand-red" /> 30-Min Technical Discovery
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-brand-charcoal tracking-tight">
              Book a Free HealthTech Consultation
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted mt-1 leading-relaxed">
              Discuss your clinical workflows, website needs, or custom software requirements directly with our healthcare technology specialists.
            </p>

            {errorMsg && (
              <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Dr. Rajesh Khanna"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                    Clinic / Hospital / Organization
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Apex Heart Centre"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="doctor@clinic.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Service of Interest *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-all"
                >
                  <option value="Doctor Website">Doctor Website Development</option>
                  <option value="Clinical Management System">Clinical Management System (CMS)</option>
                  <option value="Hospital Management System">Hospital Management System (HMS)</option>
                  <option value="Customized Website">Customized Healthcare Website</option>
                  <option value="Android Application">Android Mobile Application</option>
                  <option value="iOS Application">iOS Mobile Application</option>
                  <option value="R&D Project">Research & Development (AI / Imaging)</option>
                  <option value="Healthcare Digital Transformation">Healthcare Digital Transformation</option>
                  <option value="Other Healthcare IT Services">Other Healthcare IT Services</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={scheduledDate}
                    onChange={(e) => setScheduledDate(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-brand-border text-xs focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={scheduledTime}
                    onChange={(e) => setScheduledTime(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-brand-border text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-all"
                  >
                    <option value="10:00 AM">10:00 AM - 11:00 AM</option>
                    <option value="11:30 AM">11:30 AM - 12:30 PM</option>
                    <option value="02:30 PM">02:30 PM - 03:30 PM</option>
                    <option value="04:30 PM">04:30 PM - 05:30 PM</option>
                    <option value="06:00 PM">06:00 PM - 07:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Brief Requirements / Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about your clinic size, current pain points, or timeline..."
                  className="w-full px-3.5 py-2 rounded-xl border border-brand-border text-xs focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-all"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-brand-red hover:bg-brand-darkred text-white text-sm font-semibold shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Confirming Slot...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Confirm Free Consultation</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
