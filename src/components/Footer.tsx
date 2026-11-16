"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Clock,
  Heart,
  ExternalLink
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-darker text-white border-t border-white/10">
      {/* Top Pre-Footer CTA Bar */}
      <div className="border-b border-white/10 bg-gradient-to-r from-brand-charcoal to-[#1a1f26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-red/20 text-teal-300 border border-brand-red/30 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
                Partner in Healthcare Innovation
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ready to Upgrade Your Healthcare Digital Ecosystem?
              </h3>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                Connect with our specialized healthtech engineers for customized doctor websites, clinic management, hospital systems, and AI workflows.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-red hover:bg-brand-darkred text-white text-sm font-semibold shadow-lg shadow-brand-red/30 transition-all hover:scale-105 active:scale-95"
              >
                <span>Initiate Business Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20MedsTech%20team,%20I%20would%20like%20to%20enquire%20about%20healthcare%20technology%20solutions.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold shadow-md transition-all hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-brand-red/40 bg-white p-1">
                <Image
                  src="/images/logo.png"
                  alt="MedsTech Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-white">
                  MEDS<span className="text-brand-red">Tech</span>
                </span>
                <span className="text-[11px] tracking-wider uppercase font-semibold text-gray-400">
                  Healthcare Technology & Solutions
                </span>
              </div>
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              &ldquo;Transforming Healthcare Through Technology.&rdquo;
            </p>
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              Your technology partner in modern healthcare. Delivering doctor websites, clinical management software, hospital suites, mobile apps, and clinical research engineering.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Purpose-Built for Healthcare Professionals</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-brand-red pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-white hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white hover:underline transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white hover:underline transition-colors">
                  Products & Solutions
                </Link>
              </li>
              <li>
                <Link href="/rd" className="hover:text-white hover:underline transition-colors">
                  Healthcare R&D
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white hover:underline transition-colors">
                  Portfolio & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:underline transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Live CMS Simulator
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-brand-red pl-2.5">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/services/doctor-website-development" className="hover:text-white hover:underline transition-colors">
                  Doctor Websites
                </Link>
              </li>
              <li>
                <Link href="/services/clinical-management-system" className="hover:text-white hover:underline transition-colors">
                  Clinical Management (CMS)
                </Link>
              </li>
              <li>
                <Link href="/services/hospital-management-system" className="hover:text-white hover:underline transition-colors">
                  Hospital Management (HMS)
                </Link>
              </li>
              <li>
                <Link href="/services/customized-healthcare-websites" className="hover:text-white hover:underline transition-colors">
                  Healthcare Portals
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-application-development" className="hover:text-white hover:underline transition-colors">
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link href="/services/research-and-development" className="hover:text-white hover:underline transition-colors">
                  Healthcare R&D & AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-brand-red pl-2.5">
              Contact Details
            </h4>
            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-red shrink-0" />
                <span>{COMPANY_INFO.officeHours}</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10">
              <Link
                href="/admin"
                className="text-xs text-gray-400 hover:text-white inline-flex items-center gap-1 transition-colors"
              >
                <span>Admin Management Panel</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            &copy; {currentYear} {COMPANY_INFO.name} Healthcare Technology Solutions. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/about" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <span className="text-gray-400">
              Excellence in Healthcare Software
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
