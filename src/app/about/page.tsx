"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import { 
  COMPANY_INFO, 
  CORE_VALUES, 
  LEADERSHIP_TEAM, 
  COMPANY_MILESTONES 
} from "@/lib/data";
import { 
  Building2, 
  Target, 
  Compass, 
  ShieldCheck, 
  Cpu, 
  HeartHandshake, 
  Lightbulb, 
  Calendar,
  CheckCircle2,
  Award,
  Users
} from "lucide-react";

export default function AboutPage() {
  const [consultModalOpen, setConsultModalOpen] = useState(false);

  const getValueIcon = (name: string) => {
    switch (name) {
      case "HeartHandshake": return HeartHandshake;
      case "Cpu": return Cpu;
      case "ShieldCheck": return ShieldCheck;
      case "Lightbulb": default: return Lightbulb;
    }
  };

  const techStack = [
    { category: "Frontend Web & Portals", items: ["Next.js (App Router)", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn / Radix"] },
    { category: "Backend & Data APIs", items: ["Node.js / Express", "FastAPI (Python)", "REST & GraphQL", "WebSocket Realtime"] },
    { category: "Database & Storage", items: ["PostgreSQL", "MongoDB", "Redis In-Memory Caching", "Encrypted Blob Storage"] },
    { category: "Mobile Engineering", items: ["Kotlin & Jetpack Compose (Android)", "Swift & SwiftUI (iOS)", "WebRTC Video Engine", "HealthKit & Google Health"] },
    { category: "Healthcare Standards & R&D", items: ["DICOM Medical Imaging", "HL7 / FHIR Architecture", "PyTorch / OpenCV", "Role-Based Access Control"] },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Navbar onOpenConsultation={() => setConsultModalOpen(true)} />

      <main className="pb-20">
        {/* About Hero Section */}
        <section className="bg-gradient-to-b from-brand-lightgrey to-white py-16 sm:py-24 border-b border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-softred text-brand-red mb-4">
                <Building2 className="w-4 h-4" />
                About MedsTech
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-charcoal tracking-tight">
                Bridging Healthcare and Technology.
              </h1>
              <p className="text-base sm:text-lg text-brand-charcoal/80 mt-6 leading-relaxed">
                {COMPANY_INFO.aboutDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 sm:p-10 rounded-3xl bg-brand-softred/40 border border-brand-red/20 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-red text-white flex items-center justify-center mb-6">
                    <Compass className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                    Our Vision
                  </span>
                  <h3 className="text-2xl font-extrabold text-brand-charcoal mt-1 mb-4">
                    Toward an Accessible, Smarter Healthcare Ecosystem
                  </h3>
                  <p className="text-sm sm:text-base text-brand-charcoal/90 leading-relaxed italic">
                    &ldquo;{COMPANY_INFO.vision}&rdquo;
                  </p>
                </div>
              </div>

              <div className="p-8 sm:p-10 rounded-3xl bg-brand-charcoal text-white shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6 border border-white/20">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                    Our Mission
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-1 mb-4">
                    Empower Healthcare Professionals Through Technology
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed italic">
                    &ldquo;{COMPANY_INFO.mission}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-brand-lightgrey/60 border-y border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                Our Foundation
              </span>
              <h2 className="text-3xl font-extrabold text-brand-charcoal mt-1">
                Core Engineering Values
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CORE_VALUES.map((val, idx) => {
                const Icon = getValueIcon(val.icon);
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-white border border-brand-border/80 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-brand-softred text-brand-red flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-extrabold text-brand-charcoal text-base mb-2">
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
        </section>

        {/* Technology Expertise */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                Technical Mastery
              </span>
              <h2 className="text-3xl font-extrabold text-brand-charcoal mt-1">
                Our Technology Capabilities
              </h2>
              <p className="text-sm text-brand-muted mt-2">
                Industry-proven, battle-tested modern tools chosen for speed, reliability, and security.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((stack, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-brand-border/70 bg-[#FBFBFC]"
                >
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand-charcoal mb-4 border-l-2 border-brand-red pl-2">
                    {stack.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((it, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white border border-brand-border/60 text-brand-charcoal"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team (Editable) */}
        <section className="py-20 bg-brand-lightgrey/60 border-t border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                Leadership & Advisory
              </span>
              <h2 className="text-3xl font-extrabold text-brand-charcoal mt-1">
                Clinical & Technology Leadership
              </h2>
              <p className="text-sm text-brand-muted mt-2">
                Combining senior medical practitioners and enterprise software architects.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {LEADERSHIP_TEAM.map((leader, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-brand-border/80 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-brand-charcoal text-white flex items-center justify-center font-bold text-lg mb-4">
                      {leader.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <h4 className="text-base font-extrabold text-brand-charcoal">
                      {leader.name}
                    </h4>
                    <div className="text-xs font-semibold text-brand-red mt-0.5">
                      {leader.role}
                    </div>
                    <div className="text-[11px] font-mono text-brand-muted mt-1">
                      {leader.qualification}
                    </div>
                    <p className="text-xs text-brand-muted mt-3 leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones (Editable) */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                Journey
              </span>
              <h2 className="text-3xl font-extrabold text-brand-charcoal mt-1">
                Company Milestones
              </h2>
            </div>

            <div className="space-y-6">
              {COMPANY_MILESTONES.map((m, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-brand-border/60 bg-[#FBFBFC]"
                >
                  <span className="font-mono text-sm font-extrabold text-brand-red bg-brand-softred px-3 py-1 rounded-xl shrink-0">
                    {m.year}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-brand-charcoal">{m.title}</h4>
                    <p className="text-xs text-brand-muted mt-1 leading-relaxed">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ConsultationModal isOpen={consultModalOpen} onClose={() => setConsultModalOpen(false)} />
    </div>
  );
}
