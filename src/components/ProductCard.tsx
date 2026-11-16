"use client";

import React from "react";
import { 
  Check, 
  PlayCircle, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Activity, 
  Laptop, 
  Hospital, 
  Smartphone, 
  Globe, 
  Cpu 
} from "lucide-react";
import { ProductItem } from "@/lib/data";

interface ProductCardProps {
  product: ProductItem;
  onRequestDemo: (productName: string) => void;
}

export default function ProductCard({ product, onRequestDemo }: ProductCardProps) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Clinical Software":
        return Activity;
      case "Hospital Management":
        return Hospital;
      case "Mobile Applications":
        return Smartphone;
      case "Healthcare Websites":
        return Globe;
      case "R&D & Innovation":
      default:
        return Cpu;
    }
  };

  const Icon = getCategoryIcon(product.category);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Category Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-brand-softred text-brand-red">
              <Icon className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">
              {product.category}
            </span>
          </div>
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            Enterprise Ready
          </span>
        </div>

        {/* Product Title & Tagline */}
        <h3 className="text-2xl font-extrabold text-brand-charcoal tracking-tight">
          {product.name}
        </h3>
        <p className="text-xs sm:text-sm font-semibold text-brand-red mt-1">
          {product.tagline}
        </p>

        <p className="text-xs sm:text-sm text-brand-muted mt-3 leading-relaxed">
          {product.overview}
        </p>

        {/* Stats Strip (if available) */}
        {product.stats && (
          <div className="grid grid-cols-3 gap-2 my-5 p-3 rounded-2xl bg-brand-lightgrey border border-brand-border/40">
            {product.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-[10px] uppercase font-bold text-brand-muted">{stat.label}</div>
                <div className="text-xs sm:text-sm font-extrabold text-brand-charcoal mt-0.5">{stat.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Key Features List */}
        <div className="mt-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2.5">
            Key Operational Capabilities
          </h4>
          <ul className="space-y-2">
            {product.keyFeatures.slice(0, 4).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-brand-charcoal">
                <Check className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Clinical Benefits */}
        <div className="mt-4 pt-4 border-t border-brand-border/40">
          <h4 className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-2">
            Core Clinical Value
          </h4>
          <p className="text-xs text-brand-muted italic">
            &ldquo;{product.benefits[0]}&rdquo;
          </p>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-6 pt-5 border-t border-brand-border/50 flex flex-col sm:flex-row items-center gap-3">
        <button
          onClick={() => onRequestDemo(product.name)}
          className="w-full sm:w-auto flex-1 py-2.5 px-4 rounded-xl bg-brand-red hover:bg-brand-darkred text-white text-xs sm:text-sm font-semibold shadow-sm transition-all flex items-center justify-center gap-2"
        >
          <PlayCircle className="w-4 h-4" />
          <span>{product.ctaText}</span>
        </button>
        <button
          onClick={() => onRequestDemo(product.name)}
          className="w-full sm:w-auto py-2.5 px-3 rounded-xl bg-brand-lightgrey hover:bg-brand-border/60 text-brand-charcoal text-xs font-semibold transition-colors"
        >
          Technical Specs
        </button>
      </div>
    </div>
  );
}
