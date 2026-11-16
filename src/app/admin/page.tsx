"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  Lock, 
  User, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Search, 
  Filter, 
  FileText, 
  ArrowLeft, 
  LogOut, 
  BarChart3, 
  Users, 
  Sparkles, 
  RefreshCw,
  Mail,
  Phone,
  Building2,
  Calendar,
  Layers,
  Laptop
} from "lucide-react";
import { EnquiryRecord } from "@/lib/storage";
import { SERVICES, PRODUCTS, PORTFOLIO_ITEMS } from "@/lib/data";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("admin@medstech.in");
  const [password, setPassword] = useState("medstech2026");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  // Dashboard Data State
  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [activeTab, setActiveTab] = useState<"enquiries" | "services" | "products" | "portfolio" | "analytics">("enquiries");
  
  // Detail Modal
  const [selectedEnquiry, setSelectedEnquiry] = useState<EnquiryRecord | null>(null);
  const [editNotes, setEditNotes] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setLoginError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Authentication failed");
      }
      setIsAuthenticated(true);
      fetchEnquiries();
    } catch (err: any) {
      setLoginError(err.message || "Invalid credentials. Try admin@medstech.in / medstech2026");
    } finally {
      setLoading(false);
    }
  };

  const fetchEnquiries = async () => {
    try {
      const res = await fetch("/api/enquiries");
      const data = await res.json();
      if (data.success && data.data) {
        setEnquiries(data.data);
      }
    } catch (e) {
      console.error("Failed to load inquiries:", e);
    }
  };

  const handleStatusChange = async (id: string, newStatus: EnquiryRecord["status"]) => {
    try {
      const res = await fetch("/api/admin/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        setEnquiries((prev) =>
          prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
        );
        if (selectedEnquiry && selectedEnquiry.id === id) {
          setSelectedEnquiry({ ...selectedEnquiry, status: newStatus });
        }
      }
    } catch (e) {
      console.error("Failed to update status:", e);
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedEnquiry) return;
    try {
      const res = await fetch("/api/admin/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selectedEnquiry.id, status: selectedEnquiry.status, notes: editNotes }),
      });
      if (res.ok) {
        setEnquiries((prev) =>
          prev.map((item) => (item.id === selectedEnquiry.id ? { ...item, notes: editNotes } : item))
        );
        setSelectedEnquiry({ ...selectedEnquiry, notes: editNotes });
        alert("Internal note updated successfully!");
      }
    } catch (e) {
      console.error("Failed to save note:", e);
    }
  };

  const filteredEnquiries = enquiries.filter((e) => {
    const matchesStatus = selectedStatus === "All" || e.status === selectedStatus;
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      e.fullName.toLowerCase().includes(term) ||
      e.organization.toLowerCase().includes(term) ||
      e.service.toLowerCase().includes(term) ||
      e.email.toLowerCase().includes(term);
    return matchesStatus && matchesSearch;
  });

  // Calculate quick analytics
  const totalCount = enquiries.length;
  const newCount = enquiries.filter((e) => e.status === "New").length;
  const consultationCount = enquiries.filter((e) => e.type === "consultation").length;
  const demoCount = enquiries.filter((e) => e.type === "demo").length;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-brand-lightgrey flex flex-col justify-center items-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-brand-border/80">
          <div className="text-center mb-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border border-brand-red/30 mx-auto mb-3 bg-white p-1">
              <Image
                src="/images/logo.png"
                alt="MedsTech Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl font-extrabold text-brand-charcoal">
              MedsTech Administration
            </h1>
            <p className="text-xs text-brand-muted mt-1">
              Protected executive management portal for enquiries, leads, and content.
            </p>
          </div>

          {loginError && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <div className="mb-4 p-3 rounded-xl bg-brand-softred border border-brand-red/20 text-xs text-brand-charcoal">
            <span className="font-bold text-brand-red block mb-0.5">Demo Admin Credentials:</span>
            <div>Username: <code className="font-mono bg-white px-1.5 py-0.5 rounded border">admin@medstech.in</code></div>
            <div>Password: <code className="font-mono bg-white px-1.5 py-0.5 rounded border">medstech2026</code></div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                Admin Username / Email
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-brand-red hover:bg-brand-darkred text-white text-sm font-semibold shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span>{loading ? "Authenticating..." : "Sign In to Admin Console"}</span>
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-xs text-brand-muted hover:text-brand-charcoal inline-flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Return to Public Portal
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F6F8] flex flex-col">
      {/* Top Admin Header */}
      <header className="bg-brand-charcoal text-white px-6 py-4 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-white p-0.5">
              <Image src="/images/logo.png" alt="MedsTech" width={32} height={32} />
            </div>
            <span className="font-extrabold text-lg text-white">
              MEDS<span className="text-brand-red">Tech</span> Admin
            </span>
          </Link>
          <span className="text-xs font-mono bg-white/10 px-2.5 py-0.5 rounded text-gray-300">
            Secure Session Active
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-xs text-gray-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors"
          >
            View Live Site
          </Link>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-xs text-red-300 hover:text-white px-3 py-1.5 rounded-lg bg-brand-red/20 hover:bg-brand-red transition-colors flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main Admin Workspace */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        {/* KPI Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-3xl border border-brand-border/70 shadow-xs flex items-center justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-muted">Total Enquiries</div>
              <div className="text-2xl font-extrabold text-brand-charcoal mt-1">{totalCount}</div>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-brand-softred text-brand-red flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-brand-border/70 shadow-xs flex items-center justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-muted">New Uncontacted</div>
              <div className="text-2xl font-extrabold text-brand-red mt-1">{newCount}</div>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-red-100 text-brand-red flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-brand-border/70 shadow-xs flex items-center justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-muted">Consultation Calls</div>
              <div className="text-2xl font-extrabold text-brand-charcoal mt-1">{consultationCount}</div>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-brand-border/70 shadow-xs flex items-center justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-muted">Product Demo Requests</div>
              <div className="text-2xl font-extrabold text-brand-charcoal mt-1">{demoCount}</div>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Laptop className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-brand-border pb-3">
          <button
            onClick={() => setActiveTab("enquiries")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "enquiries"
                ? "bg-brand-red text-white shadow-sm"
                : "bg-white text-brand-charcoal hover:bg-brand-lightgrey"
            }`}
          >
            Enquiries & Leads ({enquiries.length})
          </button>
          <button
            onClick={() => setActiveTab("services")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "services"
                ? "bg-brand-red text-white shadow-sm"
                : "bg-white text-brand-charcoal hover:bg-brand-lightgrey"
            }`}
          >
            Services Catalog ({SERVICES.length})
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "products"
                ? "bg-brand-red text-white shadow-sm"
                : "bg-white text-brand-charcoal hover:bg-brand-lightgrey"
            }`}
          >
            Product Families ({PRODUCTS.length})
          </button>
          <button
            onClick={() => setActiveTab("portfolio")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "portfolio"
                ? "bg-brand-red text-white shadow-sm"
                : "bg-white text-brand-charcoal hover:bg-brand-lightgrey"
            }`}
          >
            Portfolio Showcase ({PORTFOLIO_ITEMS.length})
          </button>
          <button
            onClick={() => setActiveTab("analytics")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "analytics"
                ? "bg-brand-red text-white shadow-sm"
                : "bg-white text-brand-charcoal hover:bg-brand-lightgrey"
            }`}
          >
            Pipeline Analytics
          </button>
        </div>

        {/* 1. ENQUIRIES TAB */}
        {activeTab === "enquiries" && (
          <div className="bg-white rounded-3xl p-6 border border-brand-border/80 shadow-card">
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2 w-full sm:w-80 bg-brand-lightgrey px-3 py-2 rounded-xl border border-brand-border/60">
                <Search className="w-4 h-4 text-brand-muted" />
                <input
                  type="text"
                  placeholder="Search by name, clinic, or service..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent text-xs w-full focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs font-semibold text-brand-muted">Status:</span>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-3 py-1.5 rounded-xl border border-brand-border text-xs bg-white focus:outline-none"
                >
                  <option value="All">All Statuses</option>
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="In Review">In Review</option>
                  <option value="Proposal Sent">Proposal Sent</option>
                  <option value="Closed">Closed</option>
                </select>
                <button
                  onClick={fetchEnquiries}
                  className="p-2 rounded-xl border border-brand-border hover:bg-brand-lightgrey"
                  title="Refresh Enquiries"
                >
                  <RefreshCw className="w-4 h-4 text-brand-charcoal" />
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-brand-lightgrey/80 text-brand-charcoal font-bold uppercase tracking-wider text-[11px] border-y border-brand-border/60">
                  <tr>
                    <th className="py-3 px-4">Contact & Practice</th>
                    <th className="py-3 px-4">Service Required</th>
                    <th className="py-3 px-4">Type</th>
                    <th className="py-3 px-4">Budget / Schedule</th>
                    <th className="py-3 px-4">Status & Action</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border/40">
                  {filteredEnquiries.map((item) => (
                    <tr key={item.id} className="hover:bg-brand-lightgrey/40 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-brand-charcoal">{item.fullName}</div>
                        <div className="text-brand-muted text-[11px]">{item.organization}</div>
                        <div className="text-gray-400 text-[10px]">{item.email} • {item.phone}</div>
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-brand-charcoal">
                        {item.service}
                      </td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                            item.type === "consultation"
                              ? "bg-emerald-100 text-emerald-800"
                              : item.type === "demo"
                              ? "bg-blue-100 text-blue-800"
                              : item.type === "rd"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {item.type}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-brand-muted">
                        <div>{item.budget || "Standard"}</div>
                        {item.scheduledDate && (
                          <div className="text-[11px] font-semibold text-brand-red">
                            {item.scheduledDate} {item.scheduledTime}
                          </div>
                        )}
                      </td>
                      <td className="py-3.5 px-4">
                        <select
                          value={item.status}
                          onChange={(e) => handleStatusChange(item.id, e.target.value as any)}
                          className={`text-xs font-bold px-2.5 py-1 rounded-lg border focus:outline-none ${
                            item.status === "New"
                              ? "bg-red-50 text-brand-red border-red-200"
                              : item.status === "Contacted"
                              ? "bg-yellow-50 text-amber-800 border-yellow-200"
                              : item.status === "In Review"
                              ? "bg-blue-50 text-blue-800 border-blue-200"
                              : "bg-emerald-50 text-emerald-800 border-emerald-200"
                          }`}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="In Review">In Review</option>
                          <option value="Proposal Sent">Proposal Sent</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => {
                            setSelectedEnquiry(item);
                            setEditNotes(item.notes || "");
                          }}
                          className="px-3 py-1 rounded-lg bg-brand-lightgrey hover:bg-brand-border text-brand-charcoal text-xs font-semibold"
                        >
                          Inspect
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredEnquiries.length === 0 && (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-brand-muted">
                        No enquiries matched the selected filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 2. SERVICES CATALOG TAB */}
        {activeTab === "services" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.id} className="bg-white rounded-3xl p-6 border border-brand-border shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-brand-red">Service {s.number}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-brand-lightgrey">{s.badge}</span>
                </div>
                <h4 className="text-lg font-bold text-brand-charcoal">{s.title}</h4>
                <p className="text-xs text-brand-muted mt-2 line-clamp-3">{s.shortDescription}</p>
                <div className="mt-4 pt-3 border-t text-xs font-semibold text-brand-charcoal flex items-center justify-between">
                  <span>{s.features.length} Features Documented</span>
                  <Link href={`/services/${s.slug}`} className="text-brand-red hover:underline">
                    View &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. PRODUCTS TAB */}
        {activeTab === "products" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <div key={p.id} className="bg-white rounded-3xl p-6 border border-brand-border shadow-xs">
                <span className="text-[10px] uppercase font-bold text-brand-muted">{p.category}</span>
                <h4 className="text-lg font-bold text-brand-charcoal mt-1">{p.name}</h4>
                <div className="text-xs text-brand-red font-medium">{p.tagline}</div>
                <p className="text-xs text-brand-muted mt-2 line-clamp-3">{p.overview}</p>
                <div className="mt-4 pt-3 border-t flex justify-between text-xs text-brand-muted">
                  <span>{p.keyFeatures.length} Key Capabilities</span>
                  <span className="font-bold text-emerald-600">Active Pipeline</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 4. PORTFOLIO TAB */}
        {activeTab === "portfolio" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_ITEMS.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl p-6 border border-brand-border shadow-xs">
                <span className="text-[10px] uppercase font-bold text-brand-red">{item.category}</span>
                <h4 className="text-base font-bold text-brand-charcoal mt-1">{item.title}</h4>
                <div className="text-xs text-brand-muted mt-0.5">{item.clientType}</div>
                <p className="text-xs text-brand-muted mt-2 line-clamp-3">{item.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* 5. PIPELINE ANALYTICS TAB */}
        {activeTab === "analytics" && (
          <div className="bg-white rounded-3xl p-8 border border-brand-border shadow-card space-y-6">
            <div>
              <h3 className="text-xl font-bold text-brand-charcoal">Healthcare Solutions Demand Breakdown</h3>
              <p className="text-xs text-brand-muted mt-1">Lead distribution across MedsTech core business areas.</p>
            </div>

            <div className="space-y-4">
              {[
                { name: "Hospital Management Systems (HMS)", pct: 35, count: "High Institutional Demand" },
                { name: "Doctor Portfolio & Specialist Websites", pct: 25, count: "Steady Clinic Volume" },
                { name: "Clinical Management Systems (CMS)", pct: 20, count: "Growing Polyclinic Inquiries" },
                { name: "Mobile App Development (iOS & Android)", pct: 12, count: "Patient Portal Sync" },
                { name: "Healthcare R&D & Computer Vision", pct: 8, count: "Academic Grant Collaborations" },
              ].map((bar, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold text-brand-charcoal">
                    <span>{bar.name}</span>
                    <span className="text-brand-muted">{bar.count} ({bar.pct}%)</span>
                  </div>
                  <div className="w-full h-3 bg-brand-lightgrey rounded-full overflow-hidden">
                    <div className="h-full bg-brand-red rounded-full" style={{ width: `${bar.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lead Inspection Modal */}
        {selectedEnquiry && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-brand-border">
              <div className="flex items-center justify-between pb-4 border-b border-brand-border/60 mb-4">
                <div>
                  <span className="text-[10px] font-mono font-bold text-brand-red uppercase">
                    ID: {selectedEnquiry.id}
                  </span>
                  <h3 className="text-xl font-extrabold text-brand-charcoal">
                    {selectedEnquiry.fullName}
                  </h3>
                  <div className="text-xs text-brand-muted">{selectedEnquiry.organization}</div>
                </div>
                <button
                  onClick={() => setSelectedEnquiry(null)}
                  className="p-1 rounded-full text-brand-muted hover:text-brand-charcoal"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div className="grid grid-cols-2 gap-2 bg-brand-lightgrey p-3 rounded-xl">
                  <div>
                    <span className="text-brand-muted block">Email:</span>
                    <a href={`mailto:${selectedEnquiry.email}`} className="font-semibold text-brand-red hover:underline">
                      {selectedEnquiry.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-brand-muted block">Phone:</span>
                    <a href={`tel:${selectedEnquiry.phone}`} className="font-semibold text-brand-charcoal">
                      {selectedEnquiry.phone}
                    </a>
                  </div>
                </div>

                <div>
                  <span className="text-brand-muted block font-semibold mb-1">Clinical Requirement / Message:</span>
                  <div className="p-3 bg-white rounded-xl border border-brand-border text-brand-charcoal leading-relaxed">
                    {selectedEnquiry.description}
                  </div>
                </div>

                <div>
                  <label className="text-brand-charcoal block font-bold mb-1">
                    Internal Sales & Scoping Notes:
                  </label>
                  <textarea
                    rows={3}
                    value={editNotes}
                    onChange={(e) => setEditNotes(e.target.value)}
                    placeholder="Enter discussion notes, call logs, or proposed pricing..."
                    className="w-full p-3 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-red/30"
                  ></textarea>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t flex justify-between gap-2">
                <button
                  onClick={handleSaveNotes}
                  className="px-4 py-2 rounded-xl bg-brand-red text-white text-xs font-semibold hover:bg-brand-darkred"
                >
                  Save Internal Notes
                </button>
                <button
                  onClick={() => setSelectedEnquiry(null)}
                  className="px-4 py-2 rounded-xl bg-brand-lightgrey text-brand-charcoal text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
