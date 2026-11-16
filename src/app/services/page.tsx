"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ConsultationModal from "@/components/ConsultationModal";
import { SERVICES } from "@/lib/data";
import { Stethoscope, Calendar, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const [consultModalOpen, setConsultModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBFBFC] flex flex-col justify-between">
      <Navbar onOpenConsultation={() => setConsultModalOpen(true)} />

      <main className="pb-20">
        {/* Services Page Header */}
        <section className="bg-white py-16 sm:py-20 border-b border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-softred text-brand-red mb-4">
              <Stethoscope className="w-4 h-4" />
              Specialized Healthcare Engineering
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              Our Core Services & Healthcare Solutions
            </h1>
            <p className="text-sm sm:text-base text-brand-muted mt-4 leading-relaxed">
              From individual specialist digital identities to modular enterprise hospital suites and cutting-edge clinical AI research, explore how MedsTech elevates modern healthcare delivery.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* Clinical Assurance Strip */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-charcoal text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl space-y-3 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                Architectural Guarantee
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Need a Custom Combination of Services?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Many clients combine our Doctor Websites with our Clinical Management System (CMS) or order customized mobile applications synced directly with their hospital EHR.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setConsultModalOpen(true)}
                className="px-6 py-3 rounded-xl bg-brand-red hover:bg-brand-darkred text-white text-sm font-semibold shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Technical Scoping Call</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ConsultationModal isOpen={consultModalOpen} onClose={() => setConsultModalOpen(false)} />
    </div>
  );
}
