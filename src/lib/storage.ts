import fs from "fs";
import path from "path";

export interface EnquiryRecord {
  id: string;
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  service: string;
  budget?: string;
  description: string;
  type: "enquiry" | "consultation" | "demo" | "rd";
  status: "New" | "Contacted" | "In Review" | "Proposal Sent" | "Closed";
  createdAt: string;
  notes?: string;
  scheduledDate?: string;
  scheduledTime?: string;
}

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "enquiries.json");

// Default initial inquiries so admin panel has rich demonstration state immediately
const DEFAULT_ENQUIRIES: EnquiryRecord[] = [
  {
    id: "enq-101",
    fullName: "Dr. Arvind Menon",
    organization: "Menon Heart & Rhythm Clinic",
    email: "arvind.menon@menonclinic.org",
    phone: "+91 98450 11223",
    service: "Doctor Website",
    budget: "$2,000 - $5,000",
    description: "Looking to develop a specialized website for my electrophysiology cardiology practice with appointment booking and patient education articles on cardiac rhythm.",
    type: "enquiry",
    status: "New",
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    notes: "Requires WhatsApp integration and Google Maps clinic locator.",
  },
  {
    id: "enq-102",
    fullName: "Suresh Radhakrishnan",
    organization: "City Ortho & Trauma Centre (60 Beds)",
    email: "suresh.r@cityortho.com",
    phone: "+91 98840 99881",
    service: "Hospital Management System",
    budget: "$10,000 - $25,000",
    description: "Seeking to replace our legacy desktop software with MedsTech Hospital. We need OPD, IPD, Operation Theatre, and TPA Insurance claim modules.",
    type: "demo",
    status: "In Review",
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
    notes: "Requested a product walkthrough for their administrative and medical board next Tuesday.",
  },
  {
    id: "enq-103",
    fullName: "Dr. Meenakshi Sundaram",
    organization: "Apollo Telehealth Research Group",
    email: "meenakshi.s@telehealth-group.in",
    phone: "+91 94432 55667",
    service: "R&D Project",
    budget: "$15,000+",
    description: "Interested in collaborative R&D for automated non-contrast CT brain hemorrhage triage algorithms and DICOM viewer integration.",
    type: "rd",
    status: "Contacted",
    createdAt: new Date(Date.now() - 3600000 * 36).toISOString(),
    notes: "Initial discussion completed. Preparing technical feasibility scope.",
  },
  {
    id: "enq-104",
    fullName: "Dr. Kavita Deshmukh",
    organization: "Blossom Paediatric & Adolescent Care",
    email: "kavita@blossompediatrics.in",
    phone: "+91 98220 33445",
    service: "Clinical Management System",
    budget: "$2,000 - $5,000",
    description: "Need an easy-to-use clinic management system with immunization schedules, pediatric growth charts, and quick digital prescriptions.",
    type: "consultation",
    status: "New",
    createdAt: new Date(Date.now() - 3600000 * 60).toISOString(),
    scheduledDate: "2026-11-20",
    scheduledTime: "11:00 AM",
    notes: "Free consultation booked via portal.",
  },
];

function ensureDataFile() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify(DEFAULT_ENQUIRIES, null, 2), "utf-8");
    }
  } catch (err) {
    console.warn("Storage warning: Could not initialize data file, using in-memory mode.", err);
  }
}

let inMemoryStore: EnquiryRecord[] = [...DEFAULT_ENQUIRIES];

export function getEnquiries(): EnquiryRecord[] {
  ensureDataFile();
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (e) {
    console.error("Failed to read enquiries file:", e);
  }
  return inMemoryStore;
}

export function saveEnquiry(record: Omit<EnquiryRecord, "id" | "createdAt" | "status">): EnquiryRecord {
  ensureDataFile();
  const newRecord: EnquiryRecord = {
    ...record,
    id: "enq-" + Date.now().toString(36) + "-" + Math.random().toString(36).substring(2, 6),
    createdAt: new Date().toISOString(),
    status: "New",
  };

  try {
    const list = getEnquiries();
    const updated = [newRecord, ...list];
    fs.writeFileSync(DATA_FILE, JSON.stringify(updated, null, 2), "utf-8");
    inMemoryStore = updated;
  } catch (e) {
    console.error("Failed to write enquiry to file, fallback memory:", e);
    inMemoryStore = [newRecord, ...inMemoryStore];
  }

  return newRecord;
}

export function updateEnquiryStatus(id: string, status: EnquiryRecord["status"], notes?: string): boolean {
  ensureDataFile();
  try {
    const list = getEnquiries();
    const item = list.find((e) => e.id === id);
    if (!item) return false;

    item.status = status;
    if (notes !== undefined) {
      item.notes = notes;
    }

    fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2), "utf-8");
    inMemoryStore = list;
    return true;
  } catch (e) {
    console.error("Failed to update enquiry status:", e);
    return false;
  }
}
