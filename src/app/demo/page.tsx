"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import { 
  Activity, 
  Stethoscope, 
  Hospital, 
  UserPlus, 
  Bed, 
  FileText, 
  Check, 
  Plus, 
  Search, 
  Sparkles, 
  ArrowLeft,
  Calendar,
  Clock,
  Printer,
  ShieldCheck
} from "lucide-react";

interface PatientQueueItem {
  id: string;
  name: string;
  age: string;
  gender: string;
  token: string;
  symptom: string;
  vitals: { bp: string; pulse: string; temp: string };
  rxList: string[];
}

export default function DemoPage() {
  const [activeModule, setActiveModule] = useState<"doctor" | "reception" | "beds">("doctor");
  const [consultModalOpen, setConsultModalOpen] = useState(false);

  // Doctor Suite State
  const [patients, setPatients] = useState<PatientQueueItem[]>([
    {
      id: "P1",
      name: "Rameshwar Sen",
      age: "58",
      gender: "Male",
      token: "A-01",
      symptom: "Follow-up post PTCA Stenting, mild shortness of breath upon exertion.",
      vitals: { bp: "130/84", pulse: "74 bpm", temp: "98.4 F" },
      rxList: ["Tab. Ticagrelor 90mg (1-0-1)", "Tab. Atorvastatin 40mg (0-0-1)", "Tab. Metoprolol 25mg (1-0-0)"],
    },
    {
      id: "P2",
      name: "Sneha Mukherjee",
      age: "34",
      gender: "Female",
      token: "A-02",
      symptom: "Severe migraine with aura, photophobia since 2 days.",
      vitals: { bp: "118/76", pulse: "80 bpm", temp: "98.6 F" },
      rxList: ["Tab. Naproxen 500mg SOS", "Tab. Zolmitriptan 2.5mg (At onset)"],
    },
    {
      id: "P3",
      name: "Harishankar Iyer",
      age: "47",
      gender: "Male",
      token: "A-03",
      symptom: "Type-2 Diabetes annual diabetic foot and HbA1c review.",
      vitals: { bp: "124/80", pulse: "70 bpm", temp: "98.2 F" },
      rxList: ["Tab. Metformin 1000mg ER (1-0-1)", "Tab. Teneligliptin 20mg (1-0-0)"],
    },
  ]);

  const [selectedPatientId, setSelectedPatientId] = useState<string>("P1");
  const [newMedName, setNewMedName] = useState("");
  const [newMedDose, setNewMedDose] = useState("1-0-1 (5 Days)");

  // Reception Queue Form
  const [newPatientName, setNewPatientName] = useState("");
  const [newPatientAge, setNewPatientAge] = useState("");
  const [newPatientSymptom, setNewPatientSymptom] = useState("");

  // Bed Matrix State
  const [bedList, setBedList] = useState([
    { id: "ICU-01", wing: "Cardiac ICU", status: "Occupied", patient: "K. N. Rao (62M)", doctor: "Dr. Sengupta" },
    { id: "ICU-02", wing: "Cardiac ICU", status: "Occupied", patient: "S. Mathew (55M)", doctor: "Dr. Sengupta" },
    { id: "ICU-03", wing: "Cardiac ICU", status: "Available", patient: "Cleaned & Ready", doctor: "-" },
    { id: "PVT-101", wing: "Deluxe Ward", status: "Occupied", patient: "Anita Roy (41F)", doctor: "Dr. Sharma" },
    { id: "PVT-102", wing: "Deluxe Ward", status: "Sanitizing", patient: "Discharge Done", doctor: "Housekeeping" },
    { id: "PVT-103", wing: "Deluxe Ward", status: "Available", patient: "Unallocated", doctor: "-" },
    { id: "GEN-01", wing: "General Ward", status: "Occupied", patient: "Mohan Lal (29M)", doctor: "Dr. Verma" },
    { id: "GEN-02", wing: "General Ward", status: "Available", patient: "Ready", doctor: "-" },
  ]);

  const currentPatient = patients.find((p) => p.id === selectedPatientId) || patients[0];

  const handleAddMedicine = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMedName) return;

    setPatients((prev) =>
      prev.map((p) => {
        if (p.id === selectedPatientId) {
          return {
            ...p,
            rxList: [...p.rxList, `${newMedName} (${newMedDose})`],
          };
        }
        return p;
      })
    );
    setNewMedName("");
  };

  const handleRegisterPatient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPatientName) return;

    const newId = "P" + (patients.length + 1);
    const newToken = "A-0" + (patients.length + 1);

    const newEntry: PatientQueueItem = {
      id: newId,
      name: newPatientName,
      age: newPatientAge || "30",
      gender: "Not specified",
      token: newToken,
      symptom: newPatientSymptom || "General health consultation",
      vitals: { bp: "120/80", pulse: "72 bpm", temp: "98.6 F" },
      rxList: ["Tab. Paracetamol 650mg SOS"],
    };

    setPatients((prev) => [...prev, newEntry]);
    setSelectedPatientId(newId);
    setNewPatientName("");
    setNewPatientAge("");
    setNewPatientSymptom("");
    setActiveModule("doctor");
  };

  const toggleBedStatus = (bedId: string) => {
    setBedList((prev) =>
      prev.map((b) => {
        if (b.id === bedId) {
          if (b.status === "Occupied") return { ...b, status: "Sanitizing", patient: "Cleaning in progress" };
          if (b.status === "Sanitizing") return { ...b, status: "Available", patient: "Ready for triage" };
          return { ...b, status: "Occupied", patient: "Newly Admitted Patient" };
        }
        return b;
      })
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F6F8] flex flex-col justify-between">
      <Navbar onOpenConsultation={() => setConsultModalOpen(true)} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        {/* Header Breadcrumb & Notice */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-muted hover:text-brand-red mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to MedsTech Overview
            </Link>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal">
                Interactive Clinical & Hospital Suite Simulator
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-brand-muted mt-1">
              Experience the instant responsiveness, clean typography, and zero-latency workflow of MedsTech's clinical operating system.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-brand-border shadow-xs text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-brand-charcoal">Live Interactive Sandbox Mode</span>
          </div>
        </div>

        {/* Module Switcher Tabs */}
        <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-brand-border/70 shadow-sm mb-6 max-w-md">
          <button
            onClick={() => setActiveModule("doctor")}
            className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
              activeModule === "doctor"
                ? "bg-brand-red text-white shadow-sm"
                : "text-brand-charcoal hover:bg-brand-lightgrey"
            }`}
          >
            <Stethoscope className="w-4 h-4" />
            <span>Doctor EMR & Rx</span>
          </button>
          <button
            onClick={() => setActiveModule("reception")}
            className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
              activeModule === "reception"
                ? "bg-brand-red text-white shadow-sm"
                : "text-brand-charcoal hover:bg-brand-lightgrey"
            }`}
          >
            <UserPlus className="w-4 h-4" />
            <span>OPD Queue Desk</span>
          </button>
          <button
            onClick={() => setActiveModule("beds")}
            className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
              activeModule === "beds"
                ? "bg-brand-red text-white shadow-sm"
                : "text-brand-charcoal hover:bg-brand-lightgrey"
            }`}
          >
            <Bed className="w-4 h-4" />
            <span>Hospital Bed Matrix</span>
          </button>
        </div>

        {/* 1. DOCTOR EMR MODULE */}
        {activeModule === "doctor" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Waiting Queue */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-brand-border/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                    Consultation Room Queue
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-brand-softred text-brand-red">
                    {patients.length} Registered
                  </span>
                </div>

                <div className="space-y-2.5">
                  {patients.map((pat) => {
                    const isSelected = pat.id === selectedPatientId;
                    return (
                      <div
                        key={pat.id}
                        onClick={() => setSelectedPatientId(pat.id)}
                        className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                          isSelected
                            ? "bg-brand-softred/60 border-brand-red shadow-xs"
                            : "bg-brand-lightgrey/50 border-gray-200 hover:border-brand-red/40"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs sm:text-sm text-brand-charcoal">
                            {pat.name}
                          </span>
                          <span
                            className={`text-xs font-mono font-extrabold px-2 py-0.5 rounded ${
                              isSelected ? "bg-brand-red text-white" : "bg-white text-brand-charcoal border"
                            }`}
                          >
                            {pat.token}
                          </span>
                        </div>
                        <div className="text-[11px] text-brand-muted mt-1">
                          {pat.age} Yrs • {pat.symptom}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-brand-muted">
                <span>Selected: {currentPatient.name}</span>
                <span className="font-mono text-emerald-600 font-bold">EMR Connected</span>
              </div>
            </div>

            {/* Right Column: Active Patient Examination & Rx Builder */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/80 shadow-card">
              {/* Patient Header Strip */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-brand-border/50">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-extrabold text-brand-charcoal">
                      {currentPatient.name}
                    </h3>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      Token {currentPatient.token}
                    </span>
                  </div>
                  <p className="text-xs text-brand-muted mt-0.5">
                    Age: {currentPatient.age} Yrs | Chief Complaint: {currentPatient.symptom}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="p-2 rounded-xl bg-brand-lightgrey border font-mono">
                    BP: {currentPatient.vitals.bp}
                  </span>
                  <span className="p-2 rounded-xl bg-brand-lightgrey border font-mono">
                    Pulse: {currentPatient.vitals.pulse}
                  </span>
                  <span className="p-2 rounded-xl bg-brand-lightgrey border font-mono">
                    Temp: {currentPatient.vitals.temp}
                  </span>
                </div>
              </div>

              {/* Digital Prescription Builder */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-brand-red" />
                    Digital e-Prescription (Rx)
                  </h4>
                  <span className="text-[11px] text-brand-muted">Auto-saves to Patient Record</span>
                </div>

                {/* Medicine List */}
                <div className="space-y-2 bg-brand-lightgrey/60 p-4 rounded-2xl border border-brand-border/40">
                  {currentPatient.rxList.map((med, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-3 rounded-xl border border-gray-200 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2 font-mono font-semibold text-brand-charcoal">
                        <span className="w-5 h-5 rounded-full bg-brand-softred text-brand-red flex items-center justify-center text-[10px] font-bold">
                          {idx + 1}
                        </span>
                        <span>{med}</span>
                      </div>
                      <span className="text-[11px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                        Prescribed
                      </span>
                    </div>
                  ))}
                </div>

                {/* Add Medicine Form */}
                <form onSubmit={handleAddMedicine} className="mt-4 flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={newMedName}
                    onChange={(e) => setNewMedName(e.target.value)}
                    placeholder="Type drug / salt name (e.g. Tab. Amoxicillin 500mg)..."
                    className="flex-1 px-4 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
                  />
                  <select
                    value={newMedDose}
                    onChange={(e) => setNewMedDose(e.target.value)}
                    className="px-3 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm bg-white"
                  >
                    <option value="1-0-1 (5 Days)">1-0-1 (5 Days)</option>
                    <option value="1-0-0 (30 Days)">1-0-0 (30 Days)</option>
                    <option value="0-0-1 (14 Days)">0-0-1 (14 Days)</option>
                    <option value="SOS (As Needed)">SOS (As Needed)</option>
                  </select>
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-brand-charcoal hover:bg-brand-darker text-white text-xs font-semibold flex items-center justify-center gap-1"
                  >
                    <Plus className="w-4 h-4" /> Add Rx
                  </button>
                </form>

                {/* Prescription Actions */}
                <div className="mt-6 pt-4 border-t border-brand-border/50 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-brand-muted">
                    <Sparkles className="w-4 h-4 text-brand-red" />
                    <span>Instant WhatsApp dispatch & PDF preview ready</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => alert(`Prescription for ${currentPatient.name} formatted and sent to clinic printer!`)}
                      className="px-4 py-2 rounded-xl bg-white border border-brand-border text-brand-charcoal text-xs font-semibold hover:bg-brand-lightgrey transition-colors flex items-center gap-1.5"
                    >
                      <Printer className="w-3.5 h-3.5" /> Print Rx
                    </button>
                    <button
                      onClick={() => alert(`Prescription for ${currentPatient.name} transmitted to patient WhatsApp & pharmacy inventory!`)}
                      className="px-4 py-2 rounded-xl bg-brand-red hover:bg-brand-darkred text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5" /> Complete Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. RECEPTION / WALK-IN QUEUE MODULE */}
        {activeModule === "reception" && (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/80 shadow-card">
            <div className="pb-4 border-b border-brand-border/50 mb-6">
              <h3 className="text-xl font-extrabold text-brand-charcoal">
                OPD Patient Registration & Token Dispenser
              </h3>
              <p className="text-xs text-brand-muted mt-1">
                Fast 20-second walk-in intake. Emits a clinic token and automatically updates the doctor's active queue.
              </p>
            </div>

            <form onSubmit={handleRegisterPatient} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Patient Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={newPatientName}
                  onChange={(e) => setNewPatientName(e.target.value)}
                  placeholder="e.g. Varun Chhabra"
                  className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    value={newPatientAge}
                    onChange={(e) => setNewPatientAge(e.target.value)}
                    placeholder="e.g. 42"
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                    Visiting Doctor
                  </label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm bg-white">
                    <option>Dr. A. Sengupta (Cardiology)</option>
                    <option>Dr. V. Sharma (Internal Medicine)</option>
                    <option>Dr. P. Nair (Paediatrics)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Chief Complaint / Symptom
                </label>
                <textarea
                  rows={2}
                  value={newPatientSymptom}
                  onChange={(e) => setNewPatientSymptom(e.target.value)}
                  placeholder="e.g. Chest discomfort after meals, routine checkup..."
                  className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-brand-red hover:bg-brand-darkred text-white text-sm font-semibold shadow-md transition-all flex items-center justify-center gap-2"
              >
                <UserPlus className="w-4 h-4" />
                <span>Dispense Token & Queue for Consultation</span>
              </button>
            </form>
          </div>
        )}

        {/* 3. HOSPITAL BED OCCUPANCY MODULE */}
        {activeModule === "beds" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/80 shadow-card">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-border/50 mb-6">
              <div>
                <h3 className="text-xl font-extrabold text-brand-charcoal">
                  Hospital Bed & Ward Occupancy Matrix
                </h3>
                <p className="text-xs text-brand-muted mt-1">
                  Click on any bed below to toggle between Occupied, Sanitizing, and Available status.
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-md bg-emerald-500"></span> Available
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-md bg-brand-red"></span> Occupied
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-md bg-amber-500"></span> Sanitizing
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {bedList.map((bed) => {
                const isOccupied = bed.status === "Occupied";
                const isAvail = bed.status === "Available";
                return (
                  <div
                    key={bed.id}
                    onClick={() => toggleBedStatus(bed.id)}
                    className={`p-4 rounded-2xl border text-left cursor-pointer transition-all hover:scale-102 select-none ${
                      isOccupied
                        ? "bg-brand-softred/80 border-brand-red/30"
                        : isAvail
                        ? "bg-emerald-50/80 border-emerald-200"
                        : "bg-amber-50/80 border-amber-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-extrabold text-sm text-brand-charcoal">{bed.id}</span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isOccupied
                            ? "bg-brand-red text-white"
                            : isAvail
                            ? "bg-emerald-600 text-white"
                            : "bg-amber-600 text-white"
                        }`}
                      >
                        {bed.status}
                      </span>
                    </div>
                    <div className="text-[11px] font-semibold text-brand-charcoal truncate">
                      {bed.patient}
                    </div>
                    <div className="text-[10px] text-brand-muted mt-1 flex items-center justify-between">
                      <span>{bed.wing}</span>
                      <span>{bed.doctor}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-brand-lightgrey border border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-brand-muted">
                Tip: Click on any bed card to simulate real-time discharge, housekeeping, and admission status transitions.
              </span>
              <button
                onClick={() => setConsultModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-brand-charcoal text-white font-semibold hover:bg-brand-darker transition-colors shrink-0"
              >
                Inquire for Hospital HMS Deployment
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
      <ConsultationModal isOpen={consultModalOpen} onClose={() => setConsultModalOpen(false)} />
    </div>
  );
}
