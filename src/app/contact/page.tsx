"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ConsultationModal from "@/components/ConsultationModal";
import { MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [consultModalOpen, setConsultModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Navbar onOpenConsultation={() => setConsultModalOpen(true)} />

      <main className="pb-16">
        <ContactForm onOpenConsultation={() => setConsultModalOpen(true)} />
      </main>

      <Footer />
      <ConsultationModal isOpen={consultModalOpen} onClose={() => setConsultModalOpen(false)} />
    </div>
  );
}
