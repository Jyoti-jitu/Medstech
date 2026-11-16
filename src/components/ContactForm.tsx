"use client";

import React, { useState } from "react";
import { 
  Send, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Clock, 
  ShieldCheck,
  Calendar
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

interface ContactFormProps {
  onOpenConsultation?: () => void;
  defaultService?: string;
}

export default function ContactForm({ onOpenConsultation, defaultService }: ContactFormProps) {
  const [fullName, setFullName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(defaultService || "Doctor Website");
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Spam protection

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedId, setSubmittedId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Honeypot spam check
    if (honeypot) {
      console.warn("Spam detected via honeypot");
      setIsSubmitted(true);
      return;
    }

    if (!fullName || !email || !phone || !service) {
      setErrorMessage("Please complete all required fields (*).");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          organization,
          email,
          phone,
          service,
          budget,
          description,
          type: "enquiry",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      setSubmittedId(data.enquiryId || "");
      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "An error occurred while transmitting your enquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName("");
    setOrganization("");
    setEmail("");
    setPhone("");
    setBudget("");
    setDescription("");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-softred text-brand-red mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-red"></span>
            Contact & Business Enquiry
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
            Let's Engineer Your Healthcare Solution
          </h2>
          <p className="text-sm sm:text-base text-brand-muted mt-3 leading-relaxed">
            Whether you require an individual specialist website, an enterprise hospital management suite, or AI research collaboration, our engineering team is ready.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
          {/* Left Column: Direct Contact & Location Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-charcoal text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-red/15 rounded-full blur-2xl"></div>

              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-2">
                MedsTech Headquarters
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                Direct consultation lines open Monday through Saturday for doctors, clinic administrators, and institutional partners.
              </p>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-brand-red shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Address</span>
                    <span className="text-gray-200">{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-brand-red shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Phone Enquiries</span>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-gray-200 hover:text-white font-medium">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-brand-red shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Official Email</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-200 hover:text-white font-medium break-all">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-brand-red shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Operational Hours</span>
                    <span className="text-gray-200">{COMPANY_INFO.officeHours}</span>
                  </div>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20MedsTech%20team,%20I'd%20like%20to%20discuss%20a%20healthcare%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>

                {onOpenConsultation && (
                  <button
                    type="button"
                    onClick={onOpenConsultation}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-brand-red hover:bg-brand-darkred text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Video Call</span>
                  </button>
                )}
              </div>
            </div>

            {/* Google Maps / Location Card */}
            <div className="bg-brand-lightgrey rounded-3xl p-6 border border-brand-border/70">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-brand-red" />
                  Google Maps Location
                </span>
                <span className="text-[11px] font-mono text-brand-muted">Bangalore • Noida</span>
              </div>
              <div className="w-full h-44 rounded-2xl bg-white border border-brand-border overflow-hidden relative flex flex-col items-center justify-center text-center p-4">
                <div className="w-10 h-10 rounded-full bg-brand-softred flex items-center justify-center text-brand-red mb-2 animate-bounce">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-brand-charcoal">MedsTech Innovation Centre</div>
                <div className="text-[11px] text-brand-muted max-w-xs mt-0.5">
                  Cyber Healthcare Tower, Sector 62, Bangalore & Noida Tech Corridor
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-[11px] font-semibold text-brand-red hover:underline"
                >
                  Open in Google Maps &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-border/80 shadow-card">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-charcoal">Enquiry Successfully Dispatched!</h3>
                  <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-brand-charcoal">{fullName}</span>. Your enquiry has been registered under Reference ID: <span className="font-mono font-bold text-brand-red">{submittedId || "MED-ENQ"}</span>.
                  </p>
                  <p className="text-xs text-brand-muted">
                    Our technical lead will review your project requirements and connect via email or phone within 24 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-brand-charcoal text-white text-xs sm:text-sm font-semibold hover:bg-brand-darker transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-brand-border/50 mb-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-brand-charcoal tracking-tight">
                        Project & Technology Enquiry
                      </h3>
                      <p className="text-xs text-brand-muted mt-0.5">
                        Fields marked with an asterisk (*) are required.
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Strict Confidentiality</span>
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Spam Honeypot - hidden from real users */}
                    <input
                      type="text"
                      name="website_url_hp"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-brand-charcoal mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Dr. Alok Mathur"
                          className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-brand-charcoal mb-1.5">
                          Hospital / Clinic / Organization
                        </label>
                        <input
                          type="text"
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          placeholder="e.g. LifeLine Diagnostic Hospital"
                          className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-brand-charcoal mb-1.5">
                          Official Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="alok@hospital.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-brand-charcoal mb-1.5">
                          Phone / Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-brand-charcoal mb-1.5">
                          Service Required *
                        </label>
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-all"
                        >
                          <option value="Doctor Website">Doctor Website</option>
                          <option value="Clinical Management System">Clinical Management System</option>
                          <option value="Hospital Management System">Hospital Management System</option>
                          <option value="Customized Website">Customized Website</option>
                          <option value="Android Application">Android Application</option>
                          <option value="iOS Application">iOS Application</option>
                          <option value="R&D Project">R&D Project</option>
                          <option value="Other Services">Other Services</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-brand-charcoal mb-1.5">
                          Project Budget (Optional)
                        </label>
                        <select
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-all"
                        >
                          <option value="">Select Estimated Range</option>
                          <option value="$1,000 - $3,000">$1,000 - $3,000 (Basic Doctor Site)</option>
                          <option value="$3,000 - $8,000">$3,000 - $8,000 (Clinic CMS / Custom Portal)</option>
                          <option value="$8,000 - $20,000">$8,000 - $20,000 (Hospital HMS / Mobile Apps)</option>
                          <option value="$20,000+">$20,000+ (Enterprise Multi-Hospital / R&D)</option>
                          <option value="Undetermined">To be determined during scoping</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-charcoal mb-1.5">
                        Project Description & Clinical Needs
                      </label>
                      <textarea
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Please describe your hospital/clinic size, existing software or challenges, expected timeline, and key requirements..."
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-all"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-xl bg-brand-red hover:bg-brand-darkred text-white text-sm font-semibold shadow-md shadow-brand-red/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 active:scale-98"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Transmitting Securely...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Healthcare Enquiry</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
