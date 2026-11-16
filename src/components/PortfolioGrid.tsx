"use client";

import React, { useState } from "react";
import { 
  Filter, 
  ExternalLink, 
  X, 
  CheckCircle2, 
  Layers, 
  Monitor, 
  Smartphone, 
  Activity, 
  Cpu, 
  Hospital,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { PORTFOLIO_ITEMS, PortfolioItem } from "@/lib/data";

const CATEGORIES = [
  "All Projects",
  "Doctor Websites",
  "Clinical Software",
  "Hospital Software",
  "Android Applications",
  "iOS Applications",
  "Healthcare Automation",
  "Research Projects",
] as const;

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Projects");
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const filteredItems = selectedCategory === "All Projects"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Doctor Websites":
        return Monitor;
      case "Clinical Software":
        return Activity;
      case "Hospital Software":
        return Hospital;
      case "Android Applications":
      case "iOS Applications":
        return Smartphone;
      case "Healthcare Automation":
        return Layers;
      case "Research Projects":
      default:
        return Cpu;
    }
  };

  return (
    <section className="py-20 bg-[#FBFBFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-softred text-brand-red mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-red"></span>
            Case Studies & Deployments
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
            Demonstrated Clinical Engineering
          </h2>
          <p className="text-sm sm:text-base text-brand-muted mt-3 leading-relaxed">
            Explore authentic digital solutions delivered across doctor practices, polyclinics, tertiary hospitals, and clinical AI research laboratories.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? "bg-brand-red text-white shadow-md shadow-brand-red/20 scale-102"
                    : "bg-white text-brand-charcoal border border-brand-border/70 hover:border-brand-red/40 hover:bg-brand-softred/40"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const CategoryIcon = getCategoryIcon(item.category);

            return (
              <div
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden border border-brand-border/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Header / Mockup Banner */}
                <div className="h-44 bg-gradient-to-br from-brand-charcoal to-[#1a1f26] p-5 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-brand-red/20 blur-xl"></div>
                  
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/15 flex items-center gap-1.5">
                      <CategoryIcon className="w-3.5 h-3.5 text-brand-red" />
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">ID: {item.id}</span>
                  </div>

                  <div className="z-10">
                    <span className="text-[10px] uppercase tracking-wider text-gray-300 block font-medium">
                      {item.clientType}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-teal-300 transition-colors line-clamp-2 mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-3">
                      {item.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.technologies.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-brand-lightgrey text-brand-charcoal border border-brand-border/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Project Action */}
                  <div className="pt-4 border-t border-brand-border/50 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalItem(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:text-brand-darkred transition-colors"
                    >
                      <span>View Project Details</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      Case Study
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal: Project Deep Dive */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div 
              className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-brand-border/80 animate-in fade-in zoom-in-95 duration-200"
              role="dialog"
              aria-modal="true"
            >
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-brand-muted hover:text-brand-charcoal hover:bg-brand-lightgrey transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-brand-softred text-brand-red">
                  {activeModalItem.category}
                </span>
                <span className="text-xs text-brand-muted font-medium">
                  Client: {activeModalItem.clientType}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-brand-charcoal tracking-tight">
                {activeModalItem.title}
              </h3>

              <div className="mt-5 space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-brand-lightgrey border border-brand-border/50">
                  <div className="font-bold text-brand-charcoal mb-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-red"></span>
                    The Clinical Challenge:
                  </div>
                  <p className="text-brand-muted leading-relaxed">
                    {activeModalItem.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-brand-softred/40 border border-brand-red/20">
                  <div className="font-bold text-brand-red mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-red" />
                    The MedsTech Engineering Solution:
                  </div>
                  <p className="text-brand-charcoal/90 leading-relaxed">
                    {activeModalItem.solution}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-brand-charcoal text-xs uppercase tracking-wider mb-2">
                    Key Features Deployed:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalItem.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-brand-charcoal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-brand-charcoal text-xs uppercase tracking-wider mb-2">
                    Technology Stack Utilized:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalItem.technologies.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-brand-charcoal text-white"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-border/60 flex items-center justify-between">
                <span className="text-xs text-brand-muted">
                  Case study verified by MedsTech Quality Assurance
                </span>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="px-5 py-2 rounded-xl bg-brand-charcoal text-white text-xs font-semibold hover:bg-brand-darker transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
