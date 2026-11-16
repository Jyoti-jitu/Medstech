"use client";

import React from "react";
import { 
  ShieldAlert, 
  Sliders, 
  Code2, 
  Maximize2, 
  Sparkles, 
  Lock, 
  Headphones, 
  CheckCircle2, 
  RefreshCw 
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/data";

export default function WhyChooseUs() {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case "ShieldAlert":
        return ShieldAlert;
      case "Sliders":
        return Sliders;
      case "Code2":
        return Code2;
      case "Maximize2":
        return Maximize2;
      case "Sparkles":
        return Sparkles;
      case "Lock":
        return Lock;
      case "Headphones":
        return Headphones;
      case "CheckCircle2":
        return CheckCircle2;
      case "RefreshCw":
      default:
        return RefreshCw;
    }
  };

  return (
    <section className="py-20 bg-brand-lightgrey/60 border-y border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-softred text-brand-red mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-red"></span>
            Why Choose MedsTech
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
            Engineered Exclusively for Modern Healthcare
          </h2>
          <p className="text-sm sm:text-base text-brand-muted mt-3 leading-relaxed">
            Unlike generalist agencies that treat healthcare like any other ecommerce or corporate website, MedsTech combines medical empathy with rigorous software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = getPillarIcon(item.icon);
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-brand-border/70 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-softred text-brand-red flex items-center justify-center mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-charcoal tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-brand-border/30 flex items-center gap-1.5 text-[11px] font-semibold text-brand-charcoal">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                  Pillar {idx + 1} of 9
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
