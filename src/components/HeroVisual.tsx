"use client";

import React, { useState } from "react";
import { 
  Activity, 
  User, 
  Calendar, 
  FileText, 
  Heart, 
  ShieldCheck, 
  Smartphone, 
  CheckCircle2, 
  Clock, 
  Bed, 
  Search,
  Bell,
  Stethoscope,
  Sparkles
} from "lucide-react";

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState<"clinical" | "hospital" | "mobile">("clinical");

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Decorative Glow Elements */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Floating Badge 1 - Top Left */}
      <div className="hidden sm:flex absolute -top-5 -left-6 z-20 items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-card border border-brand-border/80 animate-float">
        <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
          <Activity className="w-4 h-4 animate-pulse" />
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-wider font-bold text-brand-muted">System Status</div>
          <div className="text-xs font-bold text-brand-charcoal flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            All 18 Modules Operational
          </div>
        </div>
      </div>

      {/* Floating Badge 2 - Bottom Right */}
      <div className="hidden sm:flex absolute -bottom-6 -right-6 z-20 items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-card border border-brand-border/80">
        <div className="w-8 h-8 rounded-xl bg-brand-softred text-brand-red flex items-center justify-center">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-wider font-bold text-brand-muted">Data Security</div>
          <div className="text-xs font-bold text-brand-charcoal">Role-Based & Encrypted</div>
        </div>
      </div>

      {/* Main Laptop Frame */}
      <div className="relative bg-brand-charcoal rounded-3xl p-3 sm:p-4 shadow-2xl border border-gray-700/60 transition-all">
        {/* Laptop Top Bar / Camera */}
        <div className="flex items-center justify-between pb-3 px-2 border-b border-gray-700/60">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-muted"></div>
            <span className="text-[11px] font-mono text-gray-400">MedsTech Enterprise Core v4.2</span>
          </div>
          {/* Quick Screen Switcher Tabs */}
          <div className="flex items-center bg-gray-800/80 rounded-lg p-0.5 border border-gray-700">
            <button
              onClick={() => setActiveTab("clinical")}
              className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-all ${
                activeTab === "clinical"
                  ? "bg-brand-red text-white shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              CMS Dashboard
            </button>
            <button
              onClick={() => setActiveTab("hospital")}
              className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-all ${
                activeTab === "hospital"
                  ? "bg-brand-red text-white shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Hospital Ward
            </button>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-all ${
                activeTab === "mobile"
                  ? "bg-brand-red text-white shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Patient App
            </button>
          </div>
        </div>

        {/* Laptop Screen Content */}
        <div className="bg-[#F8FAFC] rounded-2xl overflow-hidden mt-3 border border-gray-200 min-h-[360px] sm:min-h-[420px] flex flex-col text-brand-charcoal">
          {/* Screen Header */}
          <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-softred flex items-center justify-center text-brand-red font-bold text-sm">
                +
              </div>
              <div>
                <div className="text-xs font-extrabold text-brand-charcoal">
                  {activeTab === "clinical" && "Dr. Sharma Clinical Suite • Cardiology & Internal Medicine"}
                  {activeTab === "hospital" && "MetroLife Multi-Specialty Hospital • Central Bed Management"}
                  {activeTab === "mobile" && "CareSync Patient Companion & Teleconsultation"}
                </div>
                <div className="text-[10px] text-brand-muted">
                  Live Clinic Sync: Active | Zero Unsent Prescriptions
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-2 bg-brand-lightgrey px-2.5 py-1 rounded-md text-xs text-brand-muted border border-brand-border/60">
                <Search className="w-3.5 h-3.5" />
                <span>Search UHID / Patient Name...</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-brand-softred flex items-center justify-center text-brand-red">
                <Bell className="w-3.5 h-3.5" />
              </div>
              <div className="w-7 h-7 rounded-full bg-brand-charcoal text-white flex items-center justify-center text-xs font-bold">
                DR
              </div>
            </div>
          </div>

          {/* Tab 1: Clinical Dashboard (EMR) */}
          {activeTab === "clinical" && (
            <div className="p-4 sm:p-5 flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Left Column: Patient Queue */}
              <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm flex flex-col">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100 mb-2">
                  <span className="text-xs font-bold text-brand-charcoal">Today's Consultation Queue</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-softred text-brand-red">
                    4 In Waiting
                  </span>
                </div>
                <div className="space-y-2 flex-1">
                  {[
                    { token: "T-14", name: "Ramesh Varma", age: "54M", reason: "Post-Angioplasty Review", active: true },
                    { token: "T-15", name: "Ananya Iyer", age: "32F", reason: "Holter Monitor Analysis", active: false },
                    { token: "T-16", name: "K. N. Rao", age: "68M", reason: "BP Titration & ECG", active: false },
                  ].map((p, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-lg border text-xs transition-all ${
                        p.active
                          ? "bg-brand-softred/60 border-brand-red/30 shadow-xs"
                          : "bg-white border-gray-100 hover:border-gray-200"
                      }`}
                    >
                      <div className="flex items-center justify-between font-semibold">
                        <span className="text-brand-charcoal">{p.name} ({p.age})</span>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${p.active ? "bg-brand-red text-white" : "bg-gray-100 text-gray-600"}`}>
                          {p.token}
                        </span>
                      </div>
                      <div className="text-[11px] text-brand-muted mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-brand-red" />
                        <span>{p.reason}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Middle & Right: Active Patient EMR & Prescription */}
              <div className="md:col-span-2 space-y-4">
                {/* Active Patient Card */}
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-gray-100">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-extrabold text-brand-charcoal">Ramesh Varma (UHID: MED-9824)</h4>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          Active Consultation
                        </span>
                      </div>
                      <p className="text-xs text-brand-muted mt-0.5">Known Hypertensive • Stent in LAD (2024) • No known drug allergies</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="px-2 py-1 rounded bg-brand-lightgrey text-[11px] font-mono font-medium">BP: 128/82</span>
                      <span className="px-2 py-1 rounded bg-brand-lightgrey text-[11px] font-mono font-medium">HR: 72 bpm</span>
                      <span className="px-2 py-1 rounded bg-brand-lightgrey text-[11px] font-mono font-medium">SpO2: 99%</span>
                    </div>
                  </div>

                  {/* Diagnosis & Digital Rx Form */}
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-brand-lightgrey/70 p-3 rounded-lg border border-brand-border/60">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-brand-muted mb-1.5 flex items-center justify-between">
                        <span>Clinical Diagnosis (ICD-10)</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <div className="text-xs font-semibold text-brand-charcoal">I25.10 - Atherosclerotic Heart Disease</div>
                      <div className="text-[11px] text-brand-muted mt-1">Status: Stable on dual antiplatelet therapy.</div>
                    </div>

                    <div className="bg-brand-lightgrey/70 p-3 rounded-lg border border-brand-border/60">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-brand-muted mb-1.5">
                        Digital Prescription Template
                      </div>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between font-mono text-[11px]">
                          <span className="font-semibold text-brand-charcoal">1. Tab. Rosuvastatin 20mg</span>
                          <span className="text-brand-red font-bold">1-0-0 (30 Days)</span>
                        </div>
                        <div className="flex justify-between font-mono text-[11px]">
                          <span className="font-semibold text-brand-charcoal">2. Tab. Telmisartan 40mg</span>
                          <span className="text-brand-red font-bold">0-1-0 (30 Days)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] text-brand-muted flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-brand-red" />
                      Auto-synced with Clinic Pharmacy & WhatsApp dispatch
                    </span>
                    <button className="px-3 py-1.5 rounded-lg bg-brand-red text-white text-xs font-semibold hover:bg-brand-darkred transition-colors flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" />
                      Print & Send Digital Rx
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Hospital Ward & Bed Matrix (HMS) */}
          {activeTab === "hospital" && (
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-xs font-extrabold text-brand-charcoal uppercase tracking-wider">
                      Live Inpatient & Critical Care Bed Matrix
                    </h4>
                    <p className="text-[11px] text-brand-muted">Total 250 Beds • 198 Occupied (79.2% Occupancy)</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-emerald-500"></span> Available</span>
                    <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-brand-red"></span> Occupied</span>
                    <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-amber-500"></span> Sanitizing</span>
                  </div>
                </div>

                {/* Bed Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
                  {[
                    { id: "ICU-01", status: "occupied", patient: "M. Khan (61M)", diag: "Post-CABG", badge: "Crit" },
                    { id: "ICU-02", status: "occupied", patient: "V. Sharma (44F)", diag: "Sepsis ICU", badge: "Crit" },
                    { id: "ICU-03", status: "available", patient: "Ready for Triage", diag: "Cleaned 12m ago", badge: "Free" },
                    { id: "PVT-201", status: "occupied", patient: "S. Roy (38M)", diag: "Appendectomy", badge: "Ward" },
                    { id: "PVT-202", status: "cleaning", patient: "Discharge Done", diag: "Housekeeping", badge: "Prep" },
                    { id: "PVT-203", status: "available", patient: "Allocated: OPD T-4", diag: "Ready", badge: "Free" },
                  ].map((bed) => (
                    <div
                      key={bed.id}
                      className={`p-2.5 rounded-xl border text-xs flex flex-col justify-between h-24 ${
                        bed.status === "occupied"
                          ? "bg-brand-softred/70 border-brand-red/30 text-brand-charcoal"
                          : bed.status === "available"
                          ? "bg-emerald-50/70 border-emerald-200 text-emerald-950"
                          : "bg-amber-50/70 border-amber-200 text-amber-950"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[11px]">{bed.id}</span>
                        <Bed className="w-3.5 h-3.5 opacity-80" />
                      </div>
                      <div>
                        <div className="font-semibold text-[11px] truncate">{bed.patient}</div>
                        <div className="text-[10px] text-brand-muted truncate">{bed.diag}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-white border border-gray-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                  <span className="font-semibold text-brand-charcoal">OT 1 & OT 3 Active</span>
                  <span className="text-brand-muted">| Emergency Triage Room Clean & Clear</span>
                </div>
                <span className="font-mono text-brand-red font-bold">HMS Real-Time Stream</span>
              </div>
            </div>
          )}

          {/* Tab 3: Patient Companion Mobile App */}
          {activeTab === "mobile" && (
            <div className="p-4 sm:p-5 flex-1 flex flex-col sm:flex-row items-center justify-around gap-6">
              {/* Mobile Phone Mockup */}
              <div className="w-56 bg-brand-charcoal rounded-3xl p-2.5 border-2 border-gray-700 shadow-xl">
                <div className="w-16 h-3 bg-gray-800 rounded-full mx-auto mb-2"></div>
                <div className="bg-white rounded-2xl p-3 text-brand-charcoal min-h-[260px] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <span className="text-[10px] font-extrabold text-brand-red">MedsTech CareSync</span>
                      <User className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                    <div className="mt-2 text-center py-2 bg-brand-softred rounded-lg">
                      <div className="text-[10px] text-brand-muted uppercase font-bold">Upcoming Consultation</div>
                      <div className="text-xs font-bold text-brand-charcoal mt-0.5">Today at 4:30 PM</div>
                      <div className="text-[11px] text-brand-red font-semibold">Dr. A. Sengupta (Cardiology)</div>
                    </div>
                    <div className="mt-2 space-y-1.5 text-[11px]">
                      <div className="p-1.5 rounded bg-gray-50 flex items-center justify-between">
                        <span>Lab Report: Lipid Profile</span>
                        <span className="text-[10px] font-bold text-emerald-600">Verified PDF</span>
                      </div>
                      <div className="p-1.5 rounded bg-gray-50 flex items-center justify-between">
                        <span>Pill Alert: 8:00 PM</span>
                        <span className="text-[10px] font-bold text-brand-red">Rosuvastatin</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-1.5 rounded-lg bg-brand-red text-white text-[11px] font-bold flex items-center justify-center gap-1 shadow-sm">
                    <Smartphone className="w-3 h-3" />
                    Join HD Video Room
                  </button>
                </div>
              </div>

              {/* Mobile Features Explanation */}
              <div className="max-w-sm space-y-2.5">
                <h4 className="text-sm font-extrabold text-brand-charcoal">
                  Connected Healthcare in Every Patient's Hand
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Our native iOS (Swift) and Android (Kotlin) mobile apps give patients instant access to lab results, teleconsultations, and automated medicine intake reminders while syncing live with your hospital EHR.
                </p>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Biometric FaceID & Fingerprint security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Integrated video teleconsultation via WebRTC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Direct pharmacy reorders & prescription vault</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
