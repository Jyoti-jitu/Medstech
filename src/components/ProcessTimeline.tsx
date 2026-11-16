"use client";

import React, { useState } from "react";
import { Check, ArrowRight, Sparkles, Layers } from "lucide-react";
import { DEVELOPMENT_PROCESS } from "@/lib/data";

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-softred text-brand-red mb-3">
            <Layers className="w-3.5 h-3.5" />
            Methodology & Governance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
            Our 7-Stage Development Lifecycle
          </h2>
          <p className="text-sm sm:text-base text-brand-muted mt-3 leading-relaxed">
            A structured, transparent engineering process ensuring clinical accuracy, timely milestones, and zero operational disruption to your practice.
          </p>
        </div>

        {/* Desktop Horizontal Stepper Bar */}
        <div className="hidden lg:grid grid-cols-7 gap-2 mb-10 p-2 rounded-2xl bg-brand-lightgrey border border-brand-border/60">
          {DEVELOPMENT_PROCESS.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`py-3 px-2 rounded-xl text-center transition-all ${
                  isSelected
                    ? "bg-white shadow-md border border-brand-red/30 scale-102"
                    : "hover:bg-white/60 text-brand-muted"
                }`}
              >
                <div
                  className={`text-[10px] font-mono font-extrabold ${
                    isSelected ? "text-brand-red" : "text-brand-muted"
                  }`}
                >
                  PHASE {step.step}
                </div>
                <div
                  className={`text-xs font-bold truncate mt-0.5 ${
                    isSelected ? "text-brand-charcoal" : "text-brand-charcoal/80"
                  }`}
                >
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Spotlight */}
        <div className="bg-gradient-to-br from-brand-lightgrey to-white rounded-3xl p-6 sm:p-10 border border-brand-border/80 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-brand-red font-mono font-extrabold text-sm mb-2">
                <span className="w-8 h-8 rounded-xl bg-brand-softred flex items-center justify-center text-brand-red font-bold text-sm">
                  {DEVELOPMENT_PROCESS[activeStep].step}
                </span>
                <span>STAGE {DEVELOPMENT_PROCESS[activeStep].step} OF 07</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight">
                {DEVELOPMENT_PROCESS[activeStep].title}
              </h3>
              <p className="text-sm font-semibold text-brand-red mt-1">
                {DEVELOPMENT_PROCESS[activeStep].tagline}
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <p className="text-sm sm:text-base text-brand-charcoal/90 leading-relaxed bg-white p-5 rounded-2xl border border-brand-border/50 shadow-xs">
                {DEVELOPMENT_PROCESS[activeStep].description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-brand-muted font-medium">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Clinical stakeholder alignment before next phase</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className="px-3 py-1.5 rounded-lg border border-brand-border text-xs font-semibold text-brand-charcoal disabled:opacity-30 hover:bg-white transition-colors"
                  >
                    Previous Phase
                  </button>
                  <button
                    disabled={activeStep === DEVELOPMENT_PROCESS.length - 1}
                    onClick={() => setActiveStep((prev) => Math.min(DEVELOPMENT_PROCESS.length - 1, prev + 1))}
                    className="px-4 py-1.5 rounded-lg bg-brand-red text-white text-xs font-semibold disabled:opacity-30 hover:bg-brand-darkred transition-colors flex items-center gap-1"
                  >
                    <span>Next Phase</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Stepper List */}
        <div className="lg:hidden mt-8 space-y-3">
          {DEVELOPMENT_PROCESS.map((s, idx) => (
            <div
              key={s.step}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                activeStep === idx
                  ? "bg-brand-softred/40 border-brand-red"
                  : "bg-white border-brand-border/70"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-brand-red">STEP {s.step}</span>
                <span className="text-xs font-bold text-brand-charcoal">{s.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
