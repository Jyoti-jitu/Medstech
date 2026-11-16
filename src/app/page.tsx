"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroVisual from "@/components/HeroVisual";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessTimeline from "@/components/ProcessTimeline";
import PortfolioGrid from "@/components/PortfolioGrid";
import ContactForm from "@/components/ContactForm";
import ConsultationModal from "@/components/ConsultationModal";
import RequestDemoModal from "@/components/RequestDemoModal";
import { 
  COMPANY_INFO, 
  CAPABILITY_HIGHLIGHTS, 
  SERVICES, 
  PRODUCTS, 
  CORE_VALUES 
} from "@/lib/data";
import { 
  ArrowRight, 
  Calendar, 
  Stethoscope, 
  Building2, 
  Smartphone, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Target, 
  Compass, 
  HeartHandshake, 
  Lightbulb,
  PlayCircle
} from "lucide-react";

export default function HomePage() {
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedDemoProduct, setSelectedDemoProduct] = useState("MedsTech Clinical");

  const handleOpenDemo = (productName: string) => {
    setSelectedDemoProduct(productName);
    setDemoModalOpen(true);
  };

  const getCapabilityIcon = (iconName: string) => {
    switch (iconName) {
      case "Stethoscope": return Stethoscope;
      case "Building2": return Building2;
      case "Smartphone": return Smartphone;
      default: return Cpu;
    }
  };

  const getValueIcon = (name: string) => {
    switch (name) {
      case "HeartHandshake": return HeartHandshake;
      case "Cpu": return Cpu;
      case "ShieldCheck": return ShieldCheck;
      default: return Lightbulb;
    }
  };

  return (
    <div className="min-h-screen bg-white text-brand-charcoal flex flex-col justify-between">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenConsultation={() => setConsultModalOpen(true)} />

      <main>
        {/* =========================================================================
            1. HERO SECTION
        ========================================================================= */}
        <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 bg-gradient-to-b from-brand-lightgrey/60 via-white to-white overflow-hidden bg-grid-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Top Tagline Badge */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-softred text-brand-red border border-brand-red/20 mb-6 shadow-xs animate-in fade-in duration-300">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                <span>{COMPANY_INFO.tagline}</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-brand-charcoal tracking-tight leading-[1.1]">
                Transforming Healthcare{" "}
                <span className="text-brand-red relative inline-block">
                  Through Technology.
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-brand-red/10 -z-10 rounded"></span>
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg lg:text-xl text-brand-charcoal/80 mt-6 leading-relaxed max-w-3xl mx-auto">
                {COMPANY_INFO.heroSubheading}
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#services"
                  className="px-7 py-3.5 rounded-2xl bg-brand-red hover:bg-brand-darkred text-white text-sm sm:text-base font-bold shadow-lg shadow-brand-red/25 hover:shadow-brand-red/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                >
                  <span>Explore Our Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setConsultModalOpen(true)}
                  className="px-7 py-3.5 rounded-2xl bg-white hover:bg-brand-lightgrey text-brand-charcoal border border-brand-border text-sm sm:text-base font-bold shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-brand-red" />
                  <span>Book a Free Consultation</span>
                </button>
              </div>

              {/* Live Simulator Pill */}
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-brand-muted">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Want to test the software right away?</span>
                <Link href="/demo" className="font-bold text-brand-red hover:underline flex items-center gap-1">
                  Launch Interactive CMS Demo &rarr;
                </Link>
              </div>
            </div>

            {/* Interactive Hero Visual (Laptop with Clinical Dashboard + Mobile App) */}
            <div className="mt-14 sm:mt-16">
              <HeroVisual />
            </div>
          </div>
        </section>


        {/* =========================================================================
            2. TRUST & EXPERTISE SECTION
        ========================================================================= */}
        <section className="py-20 bg-white border-b border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                Demonstrated Engineering Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight mt-1">
                Four Pillars of HealthTech Excellence
              </h2>
              <p className="text-sm sm:text-base text-brand-muted mt-2.5">
                Purpose-built software and web solutions engineered for doctors, polyclinics, hospitals, and clinical investigators.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {CAPABILITY_HIGHLIGHTS.map((cap, idx) => {
                const Icon = getCapabilityIcon(cap.icon);
                return (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-3xl bg-brand-lightgrey/60 border border-brand-border/70 hover:border-brand-red/30 hover:bg-white hover:shadow-card transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-brand-softred text-brand-red flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-brand-charcoal tracking-tight">
                        {cap.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-brand-border/40 space-y-1.5">
                      {cap.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-brand-charcoal/90">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* =========================================================================
            3. OUR SERVICES SECTION
        ========================================================================= */}
        <section id="services" className="py-20 bg-[#FBFBFC] border-b border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-softred text-brand-red mb-3">
                  <Stethoscope className="w-3.5 h-3.5" />
                  End-to-End Capabilities
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
                  Comprehensive Healthcare Technology Services
                </h2>
                <p className="text-sm sm:text-base text-brand-muted mt-2.5 leading-relaxed">
                  Every service is architected around real clinical workflows, patient privacy guidelines, and seamless administrative interoperability.
                </p>
              </div>

              <div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-red hover:underline"
                >
                  <span>Explore Full Service Specifications</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>


        {/* =========================================================================
            4. PRODUCTS & SOLUTIONS SHOWCASE
        ========================================================================= */}
        <section id="products" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-softred text-brand-red mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Proprietary Platforms
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
                MedsTech Product Families
              </h2>
              <p className="text-sm sm:text-base text-brand-muted mt-2.5 leading-relaxed">
                Scalable, modular platforms ready for clinical deployment, custom branding, and institutional integration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  onRequestDemo={handleOpenDemo}
                />
              ))}
            </div>

            {/* Live Simulator Banner */}
            <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-brand-lightgrey border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-brand-charcoal">
                    Test the Live Clinical & Hospital Simulator
                  </h4>
                  <p className="text-xs text-brand-muted mt-0.5">
                    Experience doctor prescription drafting, token queuing, and hospital bed management in our interactive demo sandbox.
                  </p>
                </div>
              </div>
              <Link
                href="/demo"
                className="px-5 py-2.5 rounded-xl bg-brand-charcoal text-white text-xs sm:text-sm font-semibold hover:bg-brand-darker transition-colors shrink-0"
              >
                Launch Sandbox &rarr;
              </Link>
            </div>
          </div>
        </section>


        {/* =========================================================================
            5. WHY CHOOSE MEDSTECH
        ========================================================================= */}
        <WhyChooseUs />


        {/* =========================================================================
            6. OUR DEVELOPMENT PROCESS (TIMELINE)
        ========================================================================= */}
        <ProcessTimeline />


        {/* =========================================================================
            7. PORTFOLIO & CASE STUDIES
        ========================================================================= */}
        <PortfolioGrid />


        {/* =========================================================================
            8. ABOUT MEDSTECH (OVERVIEW & VALUES)
        ========================================================================= */}
        <section id="about" className="py-20 bg-white border-t border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-softred text-brand-red">
                  <Building2 className="w-3.5 h-3.5" />
                  About MedsTech
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
                  Bridging Healthcare and Technology.
                </h2>
                <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed">
                  {COMPANY_INFO.aboutDescription}
                </p>

                {/* Vision & Mission inline */}
                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-2xl bg-brand-lightgrey border border-brand-border/50">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-red block mb-1">
                      Our Vision
                    </span>
                    <p className="text-xs text-brand-charcoal italic">
                      &ldquo;{COMPANY_INFO.vision}&rdquo;
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-brand-softred/40 border border-brand-red/20">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-red block mb-1">
                      Our Mission
                    </span>
                    <p className="text-xs text-brand-charcoal italic">
                      &ldquo;{COMPANY_INFO.mission}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-red hover:underline"
                  >
                    <span>Read Full Company Story, Leadership & Milestones</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Core Values 2x2 Grid */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CORE_VALUES.map((val, idx) => {
                  const Icon = getValueIcon(val.icon);
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-3xl bg-[#FBFBFC] border border-brand-border/70 hover:border-brand-red/30 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-brand-softred text-brand-red flex items-center justify-center mb-4">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-extrabold text-brand-charcoal text-sm mb-1.5">
                          {val.title}
                        </h4>
                        <p className="text-xs text-brand-muted leading-relaxed">
                          {val.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================================
            9. CONTACT & BUSINESS ENQUIRY
        ========================================================================= */}
        <ContactForm onOpenConsultation={() => setConsultModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Shared Modals */}
      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
      />
      <RequestDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        productName={selectedDemoProduct}
      />
    </div>
  );
}
