"use client";

import React from "react";
import Link from "next/link";
import { 
  UserCheck, 
  ClipboardList, 
  Hospital, 
  Globe, 
  Smartphone, 
  Cpu, 
  ArrowRight, 
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { ServiceItem } from "@/lib/data";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "UserCheck":
        return UserCheck;
      case "ClipboardList":
        return ClipboardList;
      case "Hospital":
        return Hospital;
      case "Globe":
        return Globe;
      case "Smartphone":
        return Smartphone;
      case "Cpu":
      default:
        return Cpu;
    }
  };

  const Icon = getIcon(service.iconName);

  return (
    <div className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/70 shadow-card hover:shadow-card-hover hover:border-brand-red/30 transition-all duration-300 flex flex-col justify-between">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-softred text-brand-red flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 shadow-xs">
              <Icon className="w-6 h-6" />
            </div>
            <span className="font-mono text-xs font-extrabold text-brand-muted tracking-wider">
              SERVICE {service.number}
            </span>
          </div>
          <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-brand-lightgrey text-brand-charcoal border border-brand-border/50">
            {service.badge}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-brand-charcoal group-hover:text-brand-red transition-colors tracking-tight">
          {service.title}
        </h3>

        <p className="text-xs sm:text-sm text-brand-muted mt-2.5 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Target Specialists / Segments (if available) */}
        {service.targetAudience && service.targetAudience.length > 0 && (
          <div className="mt-4 pt-3 border-t border-brand-border/40">
            <span className="text-[10px] uppercase font-bold tracking-wider text-brand-muted block mb-2">
              Designed For:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {service.targetAudience.slice(0, 4).map((spec, i) => (
                <span
                  key={i}
                  className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-brand-lightgrey text-brand-charcoal"
                >
                  {spec}
                </span>
              ))}
              {service.targetAudience.length > 4 && (
                <span className="text-[11px] font-bold px-1.5 py-0.5 text-brand-red">
                  +{service.targetAudience.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Feature Highlights */}
        <div className="mt-5 space-y-2">
          {service.features.slice(0, 4).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-brand-charcoal/90">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-6 pt-5 border-t border-brand-border/50 flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-charcoal group-hover:text-brand-red transition-colors"
        >
          <span>Explore Detailed Specifications</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <span className="text-xs text-brand-muted font-mono">{service.technologies[0]}</span>
      </div>
    </div>
  );
}
