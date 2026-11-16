"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Calendar, 
  Stethoscope, 
  Hospital, 
  ClipboardList, 
  Smartphone, 
  Cpu, 
  Globe, 
  ShieldCheck,
  ArrowRight,
  ExternalLink
} from "lucide-react";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { 
      name: "Services", 
      href: "/services", 
      hasDropdown: true 
    },
    { name: "Products", href: "/products" },
    { name: "R&D", href: "/rd" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact Us", href: "/contact" },
  ];

  const serviceCategories = [
    {
      title: "Doctor Website Development",
      description: "Tailored sites for physicians, cardiologists, surgeons & specialists",
      href: "/services/doctor-website-development",
      icon: Stethoscope,
    },
    {
      title: "Clinical Management System",
      description: "EMR, digital prescriptions, appointment queues & clinic billing",
      href: "/services/clinical-management-system",
      icon: ClipboardList,
    },
    {
      title: "Hospital Management System",
      description: "Modular HIS with OPD, IPD, OT, Ward, Lab & TPA Insurance",
      href: "/services/hospital-management-system",
      icon: Hospital,
    },
    {
      title: "Customized Healthcare Websites",
      description: "Portals for hospitals, diagnostic labs & health institutions",
      href: "/services/customized-healthcare-websites",
      icon: Globe,
    },
    {
      title: "Android & iOS Applications",
      description: "Patient companion & doctor workstation mobile apps",
      href: "/services/mobile-application-development",
      icon: Smartphone,
    },
    {
      title: "Healthcare Innovation & R&D",
      description: "Medical computer vision, AI triage models & IoT telemetry",
      href: "/services/research-and-development",
      icon: Cpu,
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-border/60 py-3"
            : "bg-white border-b border-brand-border/30 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-brand-red/20 shadow-sm group-hover:scale-105 transition-transform duration-200 bg-white flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="MedsTech Logo"
                  width={48}
                  height={48}
                  priority
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-brand-charcoal">
                    MEDS<span className="text-brand-red">Tech</span>
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
                </div>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-brand-muted hidden sm:inline-block">
                  Healthcare Technology
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                          isActive
                            ? "text-brand-red bg-brand-softred font-semibold"
                            : "text-brand-charcoal hover:text-brand-red hover:bg-brand-lightgrey"
                        }`}
                      >
                        {link.name}
                        <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
                      </Link>

                      {/* Mega Menu Dropdown */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 w-[540px] pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
                          <div className="bg-white rounded-2xl shadow-2xl border border-brand-border/70 p-4 grid grid-cols-2 gap-2">
                            <div className="col-span-2 px-3 py-2 bg-brand-lightgrey/80 rounded-xl mb-1 flex items-center justify-between">
                              <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                                Core Healthcare Services
                              </span>
                              <Link
                                href="/services"
                                className="text-xs font-semibold text-brand-red hover:underline flex items-center gap-1"
                              >
                                View All <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                            {serviceCategories.map((service) => {
                              const IconComponent = service.icon;
                              return (
                                <Link
                                  key={service.title}
                                  href={service.href}
                                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-softred/60 transition-colors group"
                                >
                                  <div className="p-2 rounded-lg bg-brand-softred text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                                    <IconComponent className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-xs font-bold text-brand-charcoal group-hover:text-brand-red">
                                      {service.title}
                                    </div>
                                    <div className="text-[11px] text-brand-muted line-clamp-1 mt-0.5">
                                      {service.description}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? "text-brand-red bg-brand-softred font-semibold"
                        : "text-brand-charcoal hover:text-brand-red hover:bg-brand-lightgrey"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/demo"
                className="text-xs font-semibold text-brand-charcoal hover:text-brand-red px-3 py-2 rounded-lg hover:bg-brand-lightgrey transition-colors flex items-center gap-1.5"
                title="Interactive Clinical System Simulator"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Live CMS Demo
              </Link>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-red hover:bg-brand-darkred text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Get a Free Consultation</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-red text-white text-xs font-semibold"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Consult</span>
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-brand-charcoal hover:bg-brand-lightgrey"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-brand-border/80 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium ${
                    pathname === link.href
                      ? "bg-brand-softred text-brand-red font-semibold"
                      : "text-brand-charcoal hover:bg-brand-lightgrey"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-3 border-t border-brand-border/60 mt-2 flex flex-col gap-2">
                <Link
                  href="/demo"
                  className="w-full text-center py-2.5 rounded-xl bg-brand-lightgrey text-brand-charcoal font-semibold text-sm hover:bg-brand-border/60 transition-colors flex items-center justify-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Explore Live CMS Demo
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation?.();
                  }}
                  className="w-full py-3 rounded-xl bg-brand-red text-white font-semibold text-sm hover:bg-brand-darkred transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Get a Free Consultation</span>
                </button>
                <Link
                  href="/admin"
                  className="text-center text-xs text-brand-muted hover:text-brand-charcoal py-1"
                >
                  Admin Portal Access
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Spacer for sticky header */}
      <div className="h-20"></div>
    </>
  );
}
