"use client";

import React, { useState } from "react";
import { X, PlayCircle, CheckCircle2, AlertCircle, Loader2, Sparkles, Building2 } from "lucide-react";

interface RequestDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export default function RequestDemoModal({ isOpen, onClose, productName = "MedsTech Clinical" }: RequestDemoModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [role, setRole] = useState("Doctor / Consultant");
  const [selectedProduct, setSelectedProduct] = useState(productName);
  const [notes, setNotes] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Sync selectedProduct if prop changes
  React.useEffect(() => {
    if (productName) {
      setSelectedProduct(productName);
    }
  }, [productName]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          organization: `${hospitalName || "Not specified"} (${role})`,
          service: selectedProduct,
          budget: "Product Demo Request",
          description: notes ? `Demo requested for ${selectedProduct}. Notes: ${notes}` : `Live walkthrough requested for ${selectedProduct}.`,
          type: "demo",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to schedule product demo.");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to submit demo request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName("");
    setEmail("");
    setPhone("");
    setHospitalName("");
    setNotes("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-brand-border/80 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
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
            <h3 className="text-2xl font-bold text-brand-charcoal">Demo Walkthrough Booked!</h3>
            <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
              We have received your demo request for <span className="font-semibold text-brand-charcoal">{selectedProduct}</span>. Our solutions engineer will contact you shortly to coordinate an interactive screen-share walkthrough.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-brand-charcoal text-white text-sm font-semibold hover:bg-brand-darker transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-brand-softred text-brand-red flex items-center gap-1">
                <PlayCircle className="w-3.5 h-3.5" /> Interactive Guided Demo
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-brand-charcoal tracking-tight">
              Request a Live Product Demo
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted mt-1 leading-relaxed">
              Experience the interface, speed, and workflows of our healthcare software with a dedicated product specialist.
            </p>

            {errorMsg && (
              <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5 text-left">
              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Product Family *
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red font-semibold text-brand-charcoal"
                >
                  <option value="MedsTech Clinical">MedsTech Clinical (Clinical Management / EMR)</option>
                  <option value="MedsTech Hospital">MedsTech Hospital (Modular Hospital HIS)</option>
                  <option value="MedsTech Connect">MedsTech Connect (Patient & Doctor Mobile Apps)</option>
                  <option value="MedsTech Digital">MedsTech Digital (Specialty Doctor & Hospital Websites)</option>
                  <option value="MedsTech Research">MedsTech Research (Medical AI & Computer Vision)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Dr. Priya Nair"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                    Hospital / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={hospitalName}
                    onChange={(e) => setHospitalName(e.target.value)}
                    placeholder="e.g. Metro Care Hospital"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="priya@metrocare.in"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Your Primary Clinical / Operational Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-brand-border text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
                >
                  <option value="Doctor / Medical Specialist">Doctor / Medical Specialist</option>
                  <option value="Hospital Administrator / Medical Director">Hospital Administrator / Medical Director</option>
                  <option value="IT Director / HealthTech Lead">IT Director / HealthTech Lead</option>
                  <option value="Clinic Owner / Managing Partner">Clinic Owner / Managing Partner</option>
                  <option value="Researcher / Academic Investigator">Researcher / Academic Investigator</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Any specific modules or workflows to highlight?
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Need to review bed matrix and prescription printing..."
                  className="w-full px-3.5 py-2 rounded-xl border border-brand-border text-xs focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
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
                      <span>Scheduling Demo...</span>
                    </>
                  ) : (
                    <>
                      <PlayCircle className="w-4 h-4" />
                      <span>Schedule Live Guided Demo</span>
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
