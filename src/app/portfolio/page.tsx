"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioGrid from "@/components/PortfolioGrid";
import ConsultationModal from "@/components/ConsultationModal";
import { FolderGit2, Calendar } from "lucide-react";

export default function PortfolioPage() {
  const [consultModalOpen, setConsultModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBFBFC] flex flex-col justify-between">
      <Navbar onOpenConsultation={() => setConsultModalOpen(true)} />

      <main className="pb-20">
        <section className="bg-white py-16 sm:py-20 border-b border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-softred text-brand-red mb-4">
              <FolderGit2 className="w-4 h-4" />
              Engineering Portfolio
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              Selected Work & Clinical Deployments
            </h1>
            <p className="text-sm sm:text-base text-brand-muted mt-4 leading-relaxed">
              Real-world case studies spanning specialist doctor portals, multi-doctor clinical management, tertiary hospital systems, native mobile applications, and AI imaging research.
            </p>
          </div>
        </section>

        <PortfolioGrid />

        {/* Custom Project CTA */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-charcoal text-white rounded-3xl p-8 sm:p-10 shadow-xl text-center space-y-4">
            <h3 className="text-2xl font-bold">Have a Specialized Project in Mind?</h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
              Our architects will review your clinical requirements and prepare a detailed scope, architecture blueprint, and cost estimate.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setConsultModalOpen(true)}
                className="px-6 py-3 rounded-xl bg-brand-red hover:bg-brand-darkred text-white text-sm font-semibold shadow-md transition-all inline-flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Technical Scoping Session</span>
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
