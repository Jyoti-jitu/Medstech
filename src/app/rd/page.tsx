"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import { 
  Cpu, 
  Brain, 
  Eye, 
  Activity, 
  Layers, 
  Wifi, 
  Binary, 
  FileCheck, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2,
  Sparkles
} from "lucide-react";

export default function RDPage() {
  const [consultModalOpen, setConsultModalOpen] = useState(false);

  // R&D Enquiry Form State
  const [fullName, setFullName] = useState("");
  const [institution, setInstitution] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [researchDomain, setResearchDomain] = useState("Medical Image Processing & DICOM");
  const [datasetAvailable, setDatasetAvailable] = useState("Yes, de-identified dataset available");
  const [projectBrief, setProjectBrief] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const rdFocusAreas = [
    {
      title: "Artificial Intelligence & Deep Learning",
      description: "Developing specialized deep neural networks for clinical decision support, early pathology detection, and risk scoring.",
      icon: Brain,
    },
    {
      title: "Medical Image Processing",
      description: "Automated volumetric segmentation, contouring, and anomaly localization on DICOM X-Ray, CT, and MRI scans.",
      icon: Eye,
    },
    {
      title: "Predictive Healthcare Analytics",
      description: "Cohort survival analysis, patient deterioration warning indexes, and hospital bed turnover forecasting algorithms.",
      icon: Activity,
    },
    {
      title: "Computer Vision for Surgery & Tools",
      description: "Real-time tool tracking, laparoscopic video analysis, and sterile field monitoring algorithms.",
      icon: Layers,
    },
    {
      title: "IoT & Remote Patient Monitoring",
      description: "Continuous telemetry ingestion from wearable biosensors, cardiac monitors, and BLE-connected pulse oximeters.",
      icon: Wifi,
    },
    {
      title: "Clinical Data Pipelines & NLP",
      description: "Automated extraction and de-identification of unstructured clinical text, doctor notes, and pathology summaries.",
      icon: Binary,
    },
  ];

  const handleRdSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          organization: institution,
          email,
          phone,
          service: `R&D: ${researchDomain}`,
          budget: datasetAvailable,
          description: projectBrief,
          type: "rd",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit R&D proposal.");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to submit proposal.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Navbar onOpenConsultation={() => setConsultModalOpen(true)} />

      <main className="pb-20">
        {/* R&D Hero Banner */}
        <section className="bg-gradient-to-b from-brand-charcoal to-[#181C23] text-white py-20 border-b border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-red/20 text-teal-300 border border-brand-red/40 mb-4">
              <Cpu className="w-4 h-4 text-brand-red" />
              MedsTech Research & Development Division
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Pioneering Practical Intelligence in Healthcare
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed">
              We partner with academic medical centres, clinical researchers, and healthtech innovators to transform complex medical algorithms and hypotheses into validated, production-ready software solutions.
            </p>
          </div>
        </section>

        {/* 6 Research Focus Areas */}
        <section className="py-20 bg-brand-lightgrey/60 border-b border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                Core Competencies
              </span>
              <h2 className="text-3xl font-extrabold text-brand-charcoal mt-1">
                Healthcare R&D Focus Areas
              </h2>
              <p className="text-sm text-brand-muted mt-2">
                Groundbreaking applied computer science tailored specifically for clinical applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rdFocusAreas.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-7 border border-brand-border/70 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-brand-softred text-brand-red flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-charcoal tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-muted mt-2.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Dedicated R&D Proposal / Collaboration Form */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-border/90 shadow-xl">
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                  Institutional & Academic Gateway
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal mt-1">
                  Submit an R&D Collaboration Proposal
                </h2>
                <p className="text-xs sm:text-sm text-brand-muted mt-2">
                  For university researchers, clinical trial directors, medical device inventors, and healthcare institutions seeking engineering partnerships.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-charcoal">R&D Inquiry Logged!</h3>
                  <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-brand-charcoal">{fullName}</span> from <span className="font-semibold text-brand-charcoal">{institution}</span>. Our Head of Healthcare AI & R&D will review your proposal under non-disclosure terms and reach out shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleRdSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-50 text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                        Principal Investigator / Contact Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Dr. Kavita Raman"
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                        Institution / University / Company *
                      </label>
                      <input
                        type="text"
                        required
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)}
                        placeholder="e.g. Institute of Medical Sciences"
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                        Institutional Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="kavita@med-institute.edu"
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                        Research Domain
                      </label>
                      <select
                        value={researchDomain}
                        onChange={(e) => setResearchDomain(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm bg-white"
                      >
                        <option value="Medical Image Processing & DICOM">Medical Image Processing & DICOM</option>
                        <option value="Deep Learning & Clinical AI">Deep Learning & Clinical AI</option>
                        <option value="Predictive Analytics & Patient Risk">Predictive Analytics & Patient Risk</option>
                        <option value="Computer Vision for Surgery">Computer Vision for Surgery</option>
                        <option value="IoT Telemetry & Remote Monitoring">IoT Telemetry & Remote Monitoring</option>
                        <option value="Clinical NLP & Data Mining">Clinical NLP & Data Mining</option>
                        <option value="Custom Proof-of-Concept">Custom Proof-of-Concept</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                        Dataset & Ethical Status
                      </label>
                      <select
                        value={datasetAvailable}
                        onChange={(e) => setDatasetAvailable(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm bg-white"
                      >
                        <option value="Yes, de-identified dataset available">Yes, de-identified dataset available</option>
                        <option value="In collection / IRB pending">In collection / IRB pending</option>
                        <option value="Need synthetic / open benchmark data">Need synthetic / open benchmark data</option>
                        <option value="Conceptual exploration phase">Conceptual exploration phase</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                      Project Objective / Research Hypothesis *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={projectBrief}
                      onChange={(e) => setProjectBrief(e.target.value)}
                      placeholder="Outline the scientific goal, clinical modality, expected outcomes, and technical assistance required..."
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-brand-red hover:bg-brand-darkred text-white text-sm font-semibold shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Proposal...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Research Proposal</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ConsultationModal isOpen={consultModalOpen} onClose={() => setConsultModalOpen(false)} />
    </div>
  );
}
