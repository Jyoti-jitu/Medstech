"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import RequestDemoModal from "@/components/RequestDemoModal";
import { SERVICES, ServiceItem } from "@/lib/data";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Calendar, 
  PlayCircle, 
  ArrowRight, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Sparkles,
  UserCheck,
  ClipboardList,
  Hospital,
  Globe,
  Smartphone
} from "lucide-react";

interface ServicePageProps {
  params: { slug: string };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col justify-between bg-white">
        <Navbar />
        <div className="text-center py-20 px-4">
          <h1 className="text-2xl font-bold text-brand-charcoal">Service Not Found</h1>
          <p className="text-sm text-brand-muted mt-2">The requested healthcare service could not be located.</p>
          <Link href="/services" className="mt-4 inline-block text-sm font-semibold text-brand-red">
            &larr; Return to Services Overview
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const getIcon = (name: string) => {
    switch (name) {
      case "UserCheck": return UserCheck;
      case "ClipboardList": return ClipboardList;
      case "Hospital": return Hospital;
      case "Globe": return Globe;
      case "Smartphone": return Smartphone;
      default: return Cpu;
    }
  };

  const Icon = getIcon(service.iconName);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Navbar onOpenConsultation={() => setConsultModalOpen(true)} />

      <main>
        {/* Service Hero Banner */}
        <section className="bg-gradient-to-b from-brand-lightgrey/80 to-white py-16 sm:py-20 border-b border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-muted hover:text-brand-red mb-6"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to All Services
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-softred text-brand-red flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-extrabold text-brand-red tracking-wider">
                      SERVICE {service.number}
                    </span>
                    <span className="ml-2 text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-lightgrey text-brand-charcoal border">
                      {service.badge}
                    </span>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-charcoal tracking-tight">
                  {service.title}
                </h1>

                <p className="text-base sm:text-lg font-medium text-brand-red">
                  {service.heroTagline}
                </p>

                <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed max-w-3xl">
                  {service.fullDescription}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <button
                    onClick={() => setConsultModalOpen(true)}
                    className="px-6 py-3 rounded-xl bg-brand-red hover:bg-brand-darkred text-white text-sm font-semibold shadow-md transition-all flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Strategy Consultation</span>
                  </button>
                  <button
                    onClick={() => setDemoModalOpen(true)}
                    className="px-5 py-3 rounded-xl bg-brand-lightgrey hover:bg-brand-border/60 text-brand-charcoal text-sm font-semibold transition-colors flex items-center gap-2"
                  >
                    <PlayCircle className="w-4 h-4 text-brand-red" />
                    <span>Request Technical Walkthrough</span>
                  </button>
                </div>
              </div>

              {/* Quick Tech Highlights Card */}
              <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-brand-border/80 shadow-card">
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-brand-red" />
                  Engineering Stack
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-brand-lightgrey text-brand-charcoal border border-brand-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-brand-border/40 space-y-2 text-xs text-brand-muted">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>HIPAA / Data Privacy Conscious</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span>Modular, Expandable Codebase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience / Specialists (if present) */}
        {service.targetAudience && service.targetAudience.length > 0 && (
          <section className="py-12 bg-[#FBFBFC] border-b border-brand-border/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-4">
                Tailored for Medical Disciplines & Organizations:
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {service.targetAudience.map((aud, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white border border-brand-border/70 text-xs font-semibold text-brand-charcoal flex items-center gap-2 shadow-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                    <span>{aud}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Detailed Modular Breakdown or Feature Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {service.modules && service.modules.length > 0 ? (
              <div>
                <div className="max-w-3xl mb-10">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                    Modular Architecture
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal mt-1">
                    Selectable Functional Modules
                  </h2>
                  <p className="text-sm text-brand-muted mt-2">
                    Deploy only the modules your facility needs today; expand your configuration effortlessly tomorrow.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.modules.map((mod, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl border border-brand-border/70 bg-white shadow-xs hover:border-brand-red/40 transition-colors"
                    >
                      <div className="flex items-center gap-2 font-bold text-sm text-brand-charcoal">
                        <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                        <span>{mod.name}</span>
                      </div>
                      <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                        {mod.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="max-w-3xl mb-10">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                    Comprehensive Capabilities
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal mt-1">
                    Feature & Workflow Specifications
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white border border-brand-border/60 flex items-start gap-3 shadow-xs"
                    >
                      <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs sm:text-sm font-semibold text-brand-charcoal">
                          {feat}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="py-14 bg-brand-charcoal text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Implement {service.title}?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Our engineering team works closely with your clinical leads to draft technical specifications and timelines.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setConsultModalOpen(true)}
                className="px-6 py-3 rounded-xl bg-brand-red hover:bg-brand-darkred text-white text-sm font-semibold transition-all"
              >
                Schedule Technical Consultation
              </button>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-all"
              >
                Send Direct RFQ / Enquiry
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
        defaultService={service.title}
      />
      <RequestDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        productName={service.title}
      />
    </div>
  );
}
