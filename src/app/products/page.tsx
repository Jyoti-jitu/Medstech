"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import RequestDemoModal from "@/components/RequestDemoModal";
import ConsultationModal from "@/components/ConsultationModal";
import { PRODUCTS } from "@/lib/data";
import { 
  Laptop, 
  PlayCircle, 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  Clock, 
  Layers,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("MedsTech Clinical");

  const handleOpenDemo = (prodName: string) => {
    setSelectedProduct(prodName);
    setDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFC] flex flex-col justify-between">
      <Navbar onOpenConsultation={() => setConsultModalOpen(true)} />

      <main className="pb-20">
        {/* Products Page Hero */}
        <section className="bg-white py-16 sm:py-20 border-b border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-softred text-brand-red mb-4">
              <Laptop className="w-4 h-4" />
              MedsTech Software Ecosystem
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              Integrated Products & Platforms
            </h1>
            <p className="text-sm sm:text-base text-brand-muted mt-4 leading-relaxed">
              Explore our core software families engineered to modernize medical documentation, hospital administration, patient teleconsultations, and clinical machine learning.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/demo"
                className="px-5 py-2.5 rounded-xl bg-brand-charcoal text-white text-xs sm:text-sm font-semibold hover:bg-brand-darker transition-colors flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Open Live CMS Simulator</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Product Showcase Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onRequestDemo={handleOpenDemo}
              />
            ))}
          </div>
        </section>

        {/* Scalability Notice */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-charcoal to-[#181d24] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                  Future-Proof Scalability
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Tailored Deployments for Clinics to Multi-Chain Hospitals
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  All MedsTech products feature open API architecture, allowing seamless integration with third-party billing, laboratory equipment analyzers, and legacy database systems.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => handleOpenDemo("MedsTech Hospital")}
                  className="w-full py-3 px-5 rounded-xl bg-brand-red hover:bg-brand-darkred text-white text-xs sm:text-sm font-semibold shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <PlayCircle className="w-4 h-4" />
                  <span>Request Enterprise Demo</span>
                </button>
                <button
                  onClick={() => setConsultModalOpen(true)}
                  className="w-full py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  Discuss Custom Deployment
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <RequestDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        productName={selectedProduct}
      />
      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
      />
    </div>
  );
}
