export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  heroTagline: string;
  fullDescription: string;
  iconName: string;
  targetAudience?: string[];
  features: string[];
  modules?: { name: string; description: string }[];
  deliverables?: string[];
  technologies: string[];
  badge: string;
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  overview: string;
  benefits: string[];
  keyFeatures: string[];
  previewType: "clinical" | "hospital" | "connect" | "digital" | "research";
  stats?: { label: string; value: string }[];
  ctaText: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "Doctor Websites" | "Clinical Software" | "Hospital Software" | "Android Applications" | "iOS Applications" | "Healthcare Automation" | "Research Projects";
  clientType: string;
  location?: string;
  badge?: string;
  metrics?: string;
  liveUrl?: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  features: string[];
  imagePlaceholder: string;
  demoAvailable: boolean;
}

export const COMPANY_INFO = {
  name: "MedsTech",
  tagline: "Your Technology Partner in Modern Healthcare.",
  heroHeadline: "Transforming Healthcare Through Technology.",
  heroSubheading:
    "Empowering doctors, clinics, and hospitals with intelligent digital solutions. From professional doctor websites to advanced clinical management systems and custom healthcare applications, MedsTech makes healthcare smarter, simpler, and more connected.",
  vision: "To contribute to a smarter, more accessible, and technologically advanced healthcare ecosystem.",
  mission:
    "To empower healthcare professionals and institutions through reliable, customized, and innovative technology solutions.",
  aboutDescription:
    "MedsTech is a healthcare technology and software development company focused on creating innovative digital solutions for doctors, clinics, hospitals, and healthcare organizations. We combine software engineering, modern application development, and research-driven innovation to simplify healthcare operations and improve digital experiences.",
  email: "contact@medstech.in",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  address: "MedsTech Innovation Hub, Cyber Healthcare Tower, Sector 62, Bangalore & Noida, India",
  officeHours: "Monday – Saturday: 9:00 AM – 7:00 PM IST",
};

export const CAPABILITY_HIGHLIGHTS = [
  {
    title: "Doctor & Clinic Digital Solutions",
    description:
      "Bespoke digital presence and streamlined workflow tools built specifically for medical specialists, solo practitioners, and multi-doctor polyclinics.",
    icon: "Stethoscope",
    highlights: ["Doctor Profile Websites", "Appointment Scheduling", "SEO & Digital Presence", "Patient Engagement"],
  },
  {
    title: "Clinical & Hospital Software",
    description:
      "Enterprise-grade Clinical Management Systems (CMS) and modular Hospital Management Systems (HMS) architected for zero downtime and effortless clinical workflows.",
    icon: "Building2",
    highlights: ["Electronic Medical Records (EMR)", "OPD/IPD Management", "Pharmacy & Lab Systems", "Automated Billing"],
  },
  {
    title: "Mobile Application Development",
    description:
      "Native iOS and Android healthcare applications engineered with high performance, secure biometric authentication, and smooth patient-doctor interaction.",
    icon: "Smartphone",
    highlights: ["Patient Companion Apps", "Doctor Clinical Apps", "Teleconsultation", "Prescription & Vitals Sync"],
  },
  {
    title: "Healthcare Innovation & R&D",
    description:
      "Applied machine learning, computer vision for medical imaging, and predictive analytics built in collaboration with clinical institutions and researchers.",
    icon: "Cpu",
    highlights: ["AI Diagnostic Assistance", "Medical Image Processing", "Predictive Patient Flow", "IoT Medical Telemetry"],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "01",
    slug: "doctor-website-development",
    number: "01",
    title: "Doctor Website Development",
    badge: "Practitioner Identity",
    heroTagline: "Elevate your professional medical practice with an authoritative, high-converting digital presence.",
    shortDescription:
      "High-performance, professional websites tailored for physicians, surgeons, and specialists. Includes appointment booking, qualifications, verified patient feedback, and seamless WhatsApp integration.",
    fullDescription:
      "In modern medicine, your website is your digital clinic front. MedsTech develops bespoke, medically-grounded web solutions tailored to the exact specialty and clinical workflow of doctors. We ensure full HIPAA-conscious UX, fast mobile responsiveness, structured schema for local medical SEO, and instant appointment booking channels.",
    iconName: "UserCheck",
    targetAudience: [
      "General Physicians",
      "Cardiologists",
      "Orthopaedic Surgeons",
      "Dentists",
      "Dermatologists",
      "Paediatricians",
      "Gynaecologists",
      "Neurologists",
      "Surgeons & Specialized Consultants",
    ],
    features: [
      "Doctor profile and clinical biography",
      "Qualifications, accreditations, and fellowships",
      "Specialization and clinical procedures list",
      "Clinic timings and multi-location consultation schedules",
      "Direct online appointment booking with instant notifications",
      "Online patient enquiry forms with validation",
      "Google Maps integration with one-tap navigation",
      "Curated patient feedback & testimonials showcase",
      "Health articles & blog publishing system",
      "Specialty-specific SEO-friendly architecture",
      "Direct WhatsApp enquiry integration",
      "Mobile-first, responsive design across all devices",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Local SEO Schema", "Vercel / Cloudflare"],
  },
  {
    id: "02",
    slug: "clinical-management-system",
    number: "02",
    title: "Clinical Management System (CMS)",
    badge: "Clinic Workflow",
    heroTagline: "Streamline consultations, patient records, digital prescriptions, and clinic billing in one unified platform.",
    shortDescription:
      "An advanced clinical management platform for solo doctors and group clinics. Automate patient registration, EMR, e-prescriptions, lab tests, and billing with role-based access.",
    fullDescription:
      "MedsTech CMS transforms daily clinical practice by eliminating paper clutter, reducing patient wait times, and consolidating records into an intuitive, secure interface. From fast one-click prescription generation with pre-populated drug databases to complete diagnosis and billing tracking, every screen is optimized for doctor speed and patient clarity.",
    iconName: "ClipboardList",
    features: [
      "Patient registration and demographic management",
      "Electronic Medical Records (EMR) with longitudinal timelines",
      "Digital prescriptions with custom drug masters and dosage templates",
      "Intelligent appointment scheduling with token queue management",
      "Specialist doctor dashboard tailored to your daily schedule",
      "Complete patient consultation and surgical history",
      "ICD-10 diagnosis management and symptom logging",
      "Integrated billing, itemized invoicing, and payment receipts",
      "In-house pharmacy inventory and dispensing tracking",
      "Laboratory test orders, sample tracking, and report uploads",
      "Clinical and financial reports & operational analytics",
      "Automated follow-up reminders via SMS / WhatsApp",
      "Role-based access controls for doctors, nurses, and receptionists",
      "Secure document and medical report cloud storage",
    ],
    technologies: ["PostgreSQL / Node.js", "React / Next.js", "REST APIs", "Role-Based Access", "Encrypted Storage"],
  },
  {
    id: "03",
    slug: "hospital-management-system",
    number: "03",
    title: "Hospital Management System (HMS)",
    badge: "Enterprise Hospital Suite",
    heroTagline: "Enterprise healthcare operating system with modular architecture for hospitals and multi-specialty centres.",
    shortDescription:
      "Comprehensive hospital management software covering OPD, IPD, Emergency, OT, Pharmacy, Ward Management, Laboratory, and Insurance with modular adaptability.",
    fullDescription:
      "Engineered for high-volume hospitals, MedsTech HMS bridges administrative, clinical, and financial departments into a cohesive ecosystem. Built with modular architecture, hospitals can deploy only the modules they require today and expand seamlessly as department capacity grows.",
    iconName: "Hospital",
    modules: [
      { name: "Patient Information Management", description: "Centralized Master Patient Index (MPI) with biometric or UHID tracking." },
      { name: "OPD Management", description: "Outpatient queue management, multi-doctor scheduling, and fast-track triage." },
      { name: "IPD Management", description: "Inpatient admission, transfer, discharge (ATD) workflows and daily progress notes." },
      { name: "Emergency Management", description: "Trauma room triage, rapid code alerts, and acute care coordination." },
      { name: "Doctor & Staff Management", description: "Duty rosters, specialist on-call schedules, and credential verification." },
      { name: "Bed & Ward Management", description: "Visual interactive bed occupancy matrix, ICU allocations, and sanitation logs." },
      { name: "Billing & Accounts", description: "Corporate, cash, and TPA billing with granular tariff masters." },
      { name: "Pharmacy Management", description: "Batch tracking, expiry management, e-requisition, and barcode dispensation." },
      { name: "Laboratory Management (LIS)", description: "Sample accessioning, analyzer interfacing, and auto-generated report signatures." },
      { name: "Radiology Management (RIS)", description: "DICOM/PACS viewer integration, scan appointment queuing, and radiologist reporting." },
      { name: "Operation Theatre (OT)", description: "Surgical suite scheduling, anesthesia logs, and post-op recovery notes." },
      { name: "Inventory & Supply Chain", description: "Hospital consumable tracking, vendor PO workflows, and central store audits." },
      { name: "HR & Medical Payroll", description: "Shift management, duty attendance, and medical specialist incentive calculations." },
      { name: "Insurance & TPA Claims", description: "Pre-authorization filings, cashless claim adjudication, and settlement reconciliation." },
      { name: "Reports & Analytics", description: "Hospital executive dashboards, average length of stay (ALOS), and bed turnover metrics." },
      { name: "Administrative Control", description: "Global permission matrices, audit logs, and compliance oversight." },
    ],
    features: [
      "18 integrated modules with plug-and-play architecture",
      "Unified electronic medical records accessible across departments",
      "Customizable tariff lists for general, semi-private, and VIP wards",
      "Real-time visual bed availability and OT occupancy boards",
      "Automated insurance pre-authorization documentation",
      "Multi-branch hospital consolidation capabilities",
    ],
    technologies: ["Node.js / Express / Next.js", "PostgreSQL", "Redis Caching", "Docker", "HL7 / FHIR Data Ready"],
  },
  {
    id: "04",
    slug: "customized-healthcare-websites",
    number: "04",
    title: "Customized Healthcare Websites",
    badge: "Institutional Web",
    heroTagline: "Tailor-made web portals for hospitals, diagnostic centres, nursing homes, and health institutions.",
    shortDescription:
      "Bespoke digital platforms with custom UI/UX, specialty department showcases, diagnostic test booking, doctor finders, and administrative content management.",
    fullDescription:
      "Every healthcare institution possesses distinct clinical strengths and brand identity. We design custom healthcare web portals that inspire patient confidence, make service exploration effortless, and turn website visits into confirmed appointments and lab bookings.",
    iconName: "Globe",
    targetAudience: [
      "Hospitals & Healthcare Networks",
      "Nursing Homes & Care Facilities",
      "Diagnostic Centres & Imaging Clinics",
      "Dental Multi-Specialty Clinics",
      "Medical Laboratories & Blood Banks",
      "Physiotherapy & Rehab Centres",
      "Healthcare Startups & HealthTech Ventures",
      "Medical Institutions & Research Colleges",
    ],
    features: [
      "Custom UI/UX crafted around patient journey and accessibility",
      "Specialty department directories and medical procedure guides",
      "Find-a-Doctor search with filter by specialty, symptom, and timing",
      "Diagnostic test booking with home sample collection requests",
      "Secure patient portal for lab report download via OTP verification",
      "Dedicated admin CMS for updating doctors, services, news, and packages",
      "Comprehensive medical SEO and fast Core Web Vitals performance",
      "Multi-language support for diverse patient demographics",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS", "Cloudflare Edge"],
  },
  {
    id: "05",
    slug: "mobile-application-development",
    number: "05",
    title: "Android & iOS Applications",
    badge: "Mobile Health (mHealth)",
    heroTagline: "Native and cross-platform mobile apps for connected patient care and mobile doctor workflows.",
    shortDescription:
      "End-to-end mobile development for iOS and Android. Build high-converting patient apps and on-the-go doctor clinical apps with video teleconsultation, payment gateways, and vitals sync.",
    fullDescription:
      "We build robust, intuitive mobile applications that put healthcare in the palm of patients and doctors. From biometric-authenticated medical records to zero-lag WebRTC teleconsultations and intelligent medicine reminders, our mobile apps adhere to strict platform design standards.",
    iconName: "Smartphone",
    modules: [
      { name: "Patient Mobile Applications", description: "Instant appointment booking, digital prescriptions, lab reports, and medication reminders." },
      { name: "Doctor Mobile Applications", description: "Daily consultation schedule, one-tap patient history, e-prescription generation, and teleconsultation queue." },
      { name: "Android Native Development", description: "Kotlin & Jetpack Compose apps engineered for maximum compatibility across Android devices." },
      { name: "iOS Native Development", description: "Swift & SwiftUI apps optimized for Apple HealthKit integration and iOS human interface guidelines." },
    ],
    features: [
      "Dedicated Patient & Doctor dedicated user modes",
      "Real-time appointment scheduling with calendar synchronization",
      "Digital prescription viewing, offline caching, and pharmacy reorders",
      "HD video and audio teleconsultation with in-call messaging",
      "Automated push notifications for upcoming visits and medicine times",
      "Multi-channel payment gateway integration (Cards, UPI, Netbanking)",
      "Biometric authentication (FaceID, Fingerprint) and encrypted local storage",
      "Real-time updates and push alerts powered by WebSocket/Firebase",
    ],
    technologies: ["Kotlin", "Swift", "React Native", "Flutter", "WebRTC", "Firebase / Push Notifications"],
  },
  {
    id: "06",
    slug: "research-and-development",
    number: "06",
    title: "Research & Development (R&D)",
    badge: "Healthcare Innovation",
    heroTagline: "Pioneering the future of medicine with practical AI, medical computer vision, and clinical data intelligence.",
    shortDescription:
      "Collaborative research engineering for medical institutions, academic bodies, and healthtech innovators. Specializing in AI/ML, DICOM image processing, predictive clinical analytics, and IoT telemetry.",
    fullDescription:
      "MedsTech bridges the gap between theoretical medical research and production-grade software. We partner with universities, clinical investigators, and medical device innovators to transform complex algorithms and clinical hypotheses into functional, testable software solutions.",
    iconName: "Cpu",
    targetAudience: [
      "Medical Colleges & University Research Labs",
      "Clinical Trial Teams & Investigators",
      "Medical Device Manufacturers",
      "Healthcare Startups seeking AI Proof-of-Concepts",
      "Hospital Innovation Councils",
    ],
    features: [
      "Artificial Intelligence & Deep Learning in Healthcare",
      "Machine Learning for Risk Stratification & Early Detection",
      "Medical Image Processing (DICOM, X-Ray, MRI, CT segmentation)",
      "Predictive Healthcare Analytics & Bed Turnover Models",
      "Clinical Workflow Automation & Smart Alert Systems",
      "Computer Vision for Surgical Tool & Procedure Tracking",
      "Clinical Data Analytics & Longitudinal Outcome Studies",
      "IoT-Based Healthcare & Remote Patient Monitoring Telemetry",
      "Smart Medical Applications & Prototype Validation",
      "Academic & Institutional Research Collaborations",
    ],
    technologies: ["Python / PyTorch", "TensorFlow", "OpenCV", "DICOM Standards", "FastAPI", "Edge Computing"],
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: "medstech-clinical",
    name: "MedsTech Clinical",
    tagline: "Intelligent Clinical Management Platform",
    category: "Clinical Software",
    overview:
      "A fast, modern clinic operating system designed for independent doctors, polyclinics, and specialty consulting rooms. Cuts administrative overhead in half so physicians can focus on patient care.",
    benefits: [
      "Reduces average patient consultation registration time by 70%",
      "Generates clear, legibly formatted digital prescriptions in seconds",
      "Consolidates historical vitals, allergies, and diagnoses on a single timeline",
      "Minimizes appointment no-shows with automated WhatsApp/SMS reminders",
    ],
    keyFeatures: [
      "Smart Prescription Builder with customizable drug database",
      "One-click ICD-10 diagnosis entry and common template macros",
      "Direct laboratory order routing with automated status tracking",
      "Integrated billing receipts with GST and tariff customization",
      "Interactive multi-doctor calendar with token-based walk-in queues",
      "Cloud-synced patient documents and diagnostic scan storage",
    ],
    previewType: "clinical",
    stats: [
      { label: "Prescription Speed", value: "< 45 sec" },
      { label: "Patient Record Access", value: "Instant" },
      { label: "Data Security", value: "256-bit AES" },
    ],
    ctaText: "Request Clinical Demo",
  },
  {
    id: "medstech-hospital",
    name: "MedsTech Hospital",
    tagline: "Modular Enterprise Hospital Management Suite",
    category: "Hospital Management",
    overview:
      "A complete hospital information system (HIS/HMS) uniting outpatient queues, inpatient admissions, operating theatres, pharmacy stocks, and corporate insurance billing in real time.",
    benefits: [
      "Modular design: deploy OPD/Billing first, expand to IPD and OT later",
      "Eliminates departmental silos between nursing stations, lab, and billing",
      "Streamlines corporate TPA insurance approvals and itemized bills",
      "Real-time visibility into bed occupancy, ICU loads, and equipment utilization",
    ],
    keyFeatures: [
      "Interactive Bed & Ward matrix with instant status color-coding",
      "Comprehensive IPD admission, transfer, and discharge tracking",
      "Centralized pharmacy inventory with batch expiry and FIFO alerts",
      "Emergency trauma room triage workflow with quick code broadcast",
      "Granular role-based security permissions for 50+ staff roles",
      "Executive analytics dashboard with daily revenue and ALOS metrics",
    ],
    previewType: "hospital",
    stats: [
      { label: "Hospital Modules", value: "18 Modules" },
      { label: "Architecture", value: "Micro-Modular" },
      { label: "Scalability", value: "10-1000+ Beds" },
    ],
    ctaText: "Schedule Hospital Consultation",
  },
  {
    id: "medstech-connect",
    name: "MedsTech Connect",
    tagline: "Dual-Faced Doctor & Patient Mobile Ecosystem",
    category: "Mobile Applications",
    overview:
      "A synchronized mobile experience uniting patients with their trusted healthcare providers through native iOS and Android apps, encrypted teleconsultation, and medication tracking.",
    benefits: [
      "Provides patients 24/7 access to their verified digital prescriptions and lab tests",
      "Allows doctors to manage appointments and review urgent cases from anywhere",
      "Supports seamless, high-definition teleconsultation with zero app latency",
      "Increases patient treatment adherence via automated pill reminders",
    ],
    keyFeatures: [
      "Dual interface profiles: Patient Companion & Doctor Workstation",
      "Encrypted HD video/audio teleconsultation with in-call file transfer",
      "Real-time push notifications for appointment updates and lab results",
      "Integrated UPI, credit card, and digital wallet payment options",
      "Biometric authentication (Touch ID, Face ID, Android Biometrics)",
      "Sync with Apple Health and Google Health Connect vitals",
    ],
    previewType: "connect",
    stats: [
      { label: "Platform", value: "iOS & Android" },
      { label: "Call Latency", value: "< 120ms" },
      { label: "Security", value: "Biometric Auth" },
    ],
    ctaText: "Explore Mobile Solutions",
  },
  {
    id: "medstech-digital",
    name: "MedsTech Digital",
    tagline: "Authority Websites & Web Portals for Healthcare",
    category: "Healthcare Websites",
    overview:
      "High-converting, medically optimized websites engineered for solo specialists, surgical centres, and hospital networks seeking an authoritative, search-optimized online presence.",
    benefits: [
      "Achieves top Core Web Vitals performance for exceptional Google rank",
      "Direct integration with WhatsApp and online appointment booking engines",
      "Specialty-specific content architecture highlighting clinical procedures",
      "Built-in compliance with medical advertising norms and patient privacy",
    ],
    keyFeatures: [
      "Tailored UI/UX customized to medical specialties (Cardio, Ortho, Neuro, etc.)",
      "Verified patient testimonial displays with privacy preservation",
      "Interactive doctor scheduling calendars and Google Maps locator",
      "Integrated health blog and patient education content hub",
      "One-click phone calls and WhatsApp consultation triggers",
      "Speed-optimized image pipelines and 100% mobile responsiveness",
    ],
    previewType: "digital",
    stats: [
      { label: "Lighthouse Score", value: "95+" },
      { label: "Specialty Templates", value: "15+ Fields" },
      { label: "SEO Readiness", value: "Complete" },
    ],
    ctaText: "View Website Frameworks",
  },
  {
    id: "medstech-research",
    name: "MedsTech Research",
    tagline: "Clinical AI, Computer Vision & Data Analytics Suite",
    category: "R&D & Innovation",
    overview:
      "Specialized machine learning pipelines and medical imaging analysis software built for medical researchers, clinical trials, and institutional health innovators.",
    benefits: [
      "Bridges experimental AI models with practical clinical decision support",
      "Accelerates medical image annotation and segmentation tasks",
      "Enables multi-variable statistical analysis across large clinical cohorts",
      "Engineered to run locally or on private cloud servers for data governance",
    ],
    keyFeatures: [
      "DICOM / NIfTI medical image processing and contouring tools",
      "Computer vision models for lesion identification and measurement",
      "Longitudinal clinical data aggregation with automated de-identification",
      "Customizable REST APIs for hospital telemetry and wearable IoT sensors",
      "Interactive Python / Jupyter notebook integration for researchers",
      "Strict compliance with academic data handling and audit trails",
    ],
    previewType: "research",
    stats: [
      { label: "DICOM Support", value: "Native" },
      { label: "Model Runtime", value: "PyTorch / ONNX" },
      { label: "Data Pipeline", value: "De-identified" },
    ],
    ctaText: "Discuss R&D Collaboration",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Healthcare-Focused Development",
    description:
      "We do not build generic business sites. Our engineers, architects, and designers work exclusively on medical technology, understanding clinical workflows, terminology, and patient expectations.",
    icon: "ShieldAlert",
  },
  {
    title: "Customized & Modular Solutions",
    description:
      "No two medical practices are identical. We architect modular systems tailored to your exact clinic specialty, bed count, and organizational hierarchy without forcing unnecessary overhead.",
    icon: "Sliders",
  },
  {
    title: "Modern Technology Stack",
    description:
      "Built on industry-proven technologies like Next.js, TypeScript, PostgreSQL, and secure cloud microservices ensuring lightning-fast load times, zero bloat, and enterprise stability.",
    icon: "Code2",
  },
  {
    title: "Responsive & Scalable Systems",
    description:
      "Every portal and application adapts fluidly from smartphones and tablets to high-resolution surgical monitors, scaling smoothly from single clinics to 1000-bed hospitals.",
    icon: "Maximize2",
  },
  {
    title: "User-Friendly Interfaces",
    description:
      "Designed specifically to minimize cognitive fatigue for busy doctors and clinical staff. Clear visual hierarchies, high-contrast controls, and intuitive zero-clutter screens.",
    icon: "Sparkles",
  },
  {
    title: "Security-Conscious Architecture",
    description:
      "Strict role-based access control (RBAC), end-to-end data encryption in transit and at rest, automated backup protocols, and privacy-oriented system architecture.",
    icon: "Lock",
  },
  {
    title: "Dedicated Technical Support",
    description:
      "Reliable, continuous technical support and rapid response times to keep critical clinical systems running smoothly day and night.",
    icon: "Headphones",
  },
  {
    title: "End-to-End Development",
    description:
      "From initial architectural consultation and workflow mapping to UI/UX design, custom backend development, deployment, and staff training — we manage the complete lifecycle.",
    icon: "CheckCircle2",
  },
  {
    title: "Continuous Improvement",
    description:
      "Healthcare technology evolves rapidly. We deliver periodic feature updates, security patches, and regulatory adaptability to keep your technology at the forefront.",
    icon: "RefreshCw",
  },
];

export const DEVELOPMENT_PROCESS = [
  {
    step: "01",
    title: "Consultation",
    tagline: "Understand Requirements",
    description:
      "We conduct an in-depth operational analysis with doctors, administrators, and stakeholders to map patient flows, clinical pain points, and exact technology goals.",
  },
  {
    step: "02",
    title: "Planning",
    tagline: "Scope & Architecture",
    description:
      "We define the technical blueprint, module boundaries, database schemas, security roles, and project milestones to ensure transparent, predictable delivery.",
  },
  {
    step: "03",
    title: "UI/UX Design",
    tagline: "Medical-Grade Interfaces",
    description:
      "Our designers craft ergonomic, distraction-free wireframes and clickable prototypes tailored for rapid data entry, legibility, and effortless patient booking.",
  },
  {
    step: "04",
    title: "Development",
    tagline: "Robust Engineering",
    description:
      "Our engineering team builds clean, modular frontend and backend systems with robust APIs, adhering strictly to modern TypeScript and architectural best practices.",
  },
  {
    step: "05",
    title: "Testing",
    tagline: "Rigorous Validation",
    description:
      "Comprehensive functional testing, cross-device usability verification, simulated patient load checks, and vulnerability assessments before staging approval.",
  },
  {
    step: "06",
    title: "Deployment",
    tagline: "Seamless Launch",
    description:
      "Zero-downtime deployment to secure cloud infrastructure, database migration, domain setup, SSL provisioning, and staff onboarding walkthroughs.",
  },
  {
    step: "07",
    title: "Maintenance",
    tagline: "Ongoing Partnership",
    description:
      "Proactive uptime monitoring, automated database backups, periodic software updates, and dedicated technical assistance whenever you need it.",
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "dr-radhamadhab-sahu",
    title: "Dr. Radhamadhab Sahu — Senior ENT & Skull Base Surgeon",
    category: "Doctor Websites",
    clientType: "Dr. Radhamadhab Sahu (SUM Ultimate Medicare)",
    location: "Kalinga Nagar & SUM Ultimate Medicare, Bhubaneswar",
    badge: "Top Pick",
    metrics: "+220% Consultations",
    liveUrl: "https://dr-radhamadhab-sahu.vercel.app/",
    description:
      "Official surgical practice and clinical portal for Dr. Radhamadhab Sahu, Senior Consultant & HOD of ENT & Skull Base Surgery at SUM Ultimate Medicare and founder of E.N.T. & Cancer Super-Speciality Clinic.",
    challenge:
      "Patients across Odisha and Eastern India required a high-authority digital portal to verify surgical qualifications, access post-operative care guides, and navigate dual-center OPD consultation schedules between SUM Ultimate Medicare and private clinics.",
    solution:
      "Architected a specialized surgical clinical portal with dual-center OPD scheduling, verified residency and fellowship credentials (VMMC & Safdarjung Hospital, New Delhi), interactive surgical treatment guides, and 1-tap emergency telephonic triage with WhatsApp booking.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Medical Authority Schema", "Vercel"],
    features: [
      "Dual-center OPD scheduling (SUM Ultimate Medicare & Ghatikia Super-Speciality Clinic)",
      "Verified residency credentials (VMMC & Safdarjung Hospital, New Delhi)",
      "Interactive digital patient education brochure & surgical treatment guides",
      "Instant 1-tap emergency telephonic triage & WhatsApp consultation booking",
    ],
    imagePlaceholder: "skull-base-surgery",
    demoAvailable: true,
  },
  {
    id: "satyabhama-healthcare",
    title: "SatyaBhama Healthcare — Multispecialty Clinic & Doctor Directory",
    category: "Clinical Software",
    clientType: "Satyabhama Health Care",
    location: "Nehru Stadium Road, Bhadrak, Odisha",
    badge: "Multispecialty",
    metrics: "+220% Patient Inquiries",
    liveUrl: "https://satyabhamahealthcare.in/",
    description:
      "Official multispecialty clinic portal and verified doctor consultation directory for Satyabhama Health Care, located at Nehru Stadium Road near Bonth Chhak, Bhadrak, Odisha.",
    challenge:
      "Patients in Bhadrak district lacked a centralized, real-time schedule of visiting specialists across ENT, Orthopedics, Medicine, and Surgery, causing clinic congestion and missed appointments.",
    solution:
      "Built a lightning-fast clinic directory and inquiry routing system with verified specialist rosters, 1-tap reception dialing, local SEO schema, and Nehru Stadium Road Google Maps integration delivered on Cloudflare Edge.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Cloudflare Workers", "Medical Schema"],
    features: [
      "Verified specialist doctor roster & consultation timings (ENT, Ortho, Medicine, Surgery)",
      "1-Tap clinic reception calling & instant query routing",
      "Local Bhadrak healthcare SEO schema & Nehru Stadium Road Google Maps integration",
      "Ultra-fast Cloudflare Edge & Next.js delivery with patient-first responsive UI",
    ],
    imagePlaceholder: "multispecialty-clinic",
    demoAvailable: true,
  },
  {
    id: "port-01",
    title: "Apex Heart & Vascular Institute Portal",
    category: "Doctor Websites",
    clientType: "Interventional Cardiology Practice",
    description:
      "A high-authority digital presence featuring specialized cardiology procedure guides, patient risk calculators, direct WhatsApp triage, and seamless appointment booking.",
    challenge:
      "The practice had an outdated website that failed to reflect their tertiary cardiology expertise and caused patients difficulty when locating clinic consultation timings.",
    solution:
      "Architected a Next.js specialty portal with animated cardiac anatomy guides, doctor fellowship credentials, interactive clinic maps, and direct appointment scheduling.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Medical Schema SEO"],
    features: ["Procedure Directory", "Appointment Engine", "Doctor Bio & Research", "Cardiology Calculators"],
    imagePlaceholder: "cardiology",
    demoAvailable: true,
  },
  {
    id: "port-02",
    title: "PulseCare Multi-Specialty Clinical Platform",
    category: "Clinical Software",
    clientType: "12-Doctor Multi-Specialty Polyclinic",
    description:
      "A complete Clinical Management System (CMS) coordinating 12 consulting rooms with centralized patient records, e-prescriptions, and integrated clinic billing.",
    challenge:
      "Overlapping patient appointments, physical paper records slowing down doctors, and manual billing reconciliation at the end of each clinic shift.",
    solution:
      "Deployed MedsTech Clinical with tailored prescription macros for pediatric, dental, and orthopedic doctors, plus token queue displays in reception.",
    technologies: ["Node.js", "PostgreSQL", "React", "Role-Based Access"],
    features: ["Fast e-Prescription", "Token Queue Display", "Pharmacy Dispensation", "Day-End Billing Summary"],
    imagePlaceholder: "clinical-cms",
    demoAvailable: true,
  },
  {
    id: "port-03",
    title: "MetroLife 250-Bed Hospital Operating Suite",
    category: "Hospital Software",
    clientType: "Multi-Specialty Secondary Care Hospital",
    description:
      "Enterprise modular Hospital Management System managing OPD queues, IPD admissions, 6 Operation Theatres, and cashless insurance claims.",
    challenge:
      "Disparate legacy software in pharmacy and billing causing delays in inpatient discharge and billing disputes with TPA insurance providers.",
    solution:
      "Implemented MedsTech Hospital with unified Electronic Health Records, real-time bed management matrix, and automated insurance pre-authorization documentation.",
    technologies: ["PostgreSQL", "Next.js", "Docker", "Redis", "REST APIs"],
    features: ["Interactive Bed Matrix", "IPD/OPD Workflows", "TPA Insurance Desk", "OT Scheduling"],
    imagePlaceholder: "hospital-hms",
    demoAvailable: true,
  },
  {
    id: "port-04",
    title: "CareSync Patient Companion & Telehealth App",
    category: "Android Applications",
    clientType: "Regional Healthcare Network",
    description:
      "Native Android application enabling over 45,000 registered patients to view lab results, attend video teleconsultations, and reorder prescriptions.",
    challenge:
      "High rate of follow-up appointment cancellations due to travel distance for rural patients and delayed test report collections.",
    solution:
      "Engineered an Android application with WebRTC teleconsultation, instant PDF lab report downloads with OTP, and automated medicine intake alarms.",
    technologies: ["Kotlin", "Jetpack Compose", "WebRTC", "Firebase"],
    features: ["Video Consultation", "Offline PDF Prescriptions", "Pill Reminders", "Push Notifications"],
    imagePlaceholder: "android-app",
    demoAvailable: true,
  },
  {
    id: "port-05",
    title: "DocOnCall iOS Clinical Rounds Assistant",
    category: "iOS Applications",
    clientType: "Visiting Consultant Network",
    description:
      "Swift-native iOS application for mobile physicians to review patient charts, dictate voice progress notes, and approve digital discharge summaries.",
    challenge:
      "Doctors spending up to 2 hours every evening at stationary hospital computers completing documentation after clinical rounds.",
    solution:
      "Created a sleek iOS app with biometric FaceID sign-in, bedside chart review, speech-to-text progress logging, and instant notification of critical lab alerts.",
    technologies: ["Swift", "SwiftUI", "Apple HealthKit", "Secure Enclave"],
    features: ["FaceID Security", "Bedside Charting", "Critical Lab Alerts", "Voice Progress Notes"],
    imagePlaceholder: "ios-app",
    demoAvailable: true,
  },
  {
    id: "port-06",
    title: "NeuroScan Automated CT Hemorrhage Detector",
    category: "Research Projects",
    clientType: "Academic Medical Centre & Radiology Department",
    description:
      "Applied computer vision research project demonstrating automatic triage and slice segmentation of non-contrast brain CT scans for acute intracranial hemorrhage.",
    challenge:
      "Overnight emergency radiology backlogs leading to delayed triage of time-critical acute brain trauma cases.",
    solution:
      "Trained and containerized a deep learning segmentation pipeline adhering to DICOM standards that flags suspected hemorrhages to the on-call radiologist within 90 seconds.",
    technologies: ["Python", "PyTorch", "OpenCV", "DICOM Standards", "FastAPI"],
    features: ["DICOM De-identification", "90-sec Scan Triage", "Interactive Heatmaps", "Research Audit Trail"],
    imagePlaceholder: "rd-ai",
    demoAvailable: true,
  },
  {
    id: "port-07",
    title: "SmartLab Automated Specimen Tracking & WhatsApp Dispatch",
    category: "Healthcare Automation",
    clientType: "Diagnostic Laboratory Chain",
    description:
      "End-to-end automation system connecting barcode scanners, blood analyzers, and automated WhatsApp delivery of verified test reports to patients.",
    challenge:
      "High front-desk phone inquiries asking 'Is my report ready?' and manual dispatch errors when emailing PDF results.",
    solution:
      "Built automated middleware listening to analyzer flags, validating biochemist digital signatures, and immediately delivering password-protected PDFs via official WhatsApp Business API.",
    technologies: ["Node.js", "WhatsApp Cloud API", "HL7 Middleware", "PDF Encryption"],
    features: ["Analyzer Interfacing", "Zero-Touch Dispatch", "WhatsApp Delivery", "Audit Logging"],
    imagePlaceholder: "automation",
    demoAvailable: true,
  },
];

export const CORE_VALUES = [
  {
    title: "Clinical Empathy",
    description: "We design software by standing beside doctors, nurses, and patients, understanding their time pressures and clinical constraints.",
    icon: "HeartHandshake",
  },
  {
    title: "Engineering Precision",
    description: "Healthcare allows zero room for sloppy bugs. We write thoroughly typed, maintainable, resilient code built to perform reliably.",
    icon: "Cpu",
  },
  {
    title: "Uncompromising Privacy",
    description: "We enforce strict security practices, data encryption, and role-based protection at every architectural layer.",
    icon: "ShieldCheck",
  },
  {
    title: "Sustainable Innovation",
    description: "We prioritize practical, measurable technology improvements that actively help clinical outcomes rather than chasing fleeting buzzwords.",
    icon: "Lightbulb",
  },
];

export const COMPANY_MILESTONES = [
  { year: "2021", title: "Foundation", description: "Established as a dedicated healthcare software lab focusing on doctor digital presence and clinic automation." },
  { year: "2022", title: "CMS Release", description: "Launched MedsTech Clinical, rolling out EMR and digital prescriptions to over 40 private practices." },
  { year: "2023", title: "Hospital Suite & Mobile", description: "Expanded to enterprise Hospital Management Systems and native mobile health applications." },
  { year: "2024", title: "R&D Initiative", description: "Formed the healthcare R&D division for medical imaging computer vision and predictive analytics." },
  { year: "Present", title: "Full-Spectrum Partner", description: "Empowering healthcare providers with websites, software, mobile apps, and institutional R&D solutions." },
];

export const LEADERSHIP_TEAM = [
  {
    name: "Dr. A. Sengupta",
    role: "Chief Medical & Clinical Strategy Advisor",
    qualification: "MBBS, MD, Healthcare IT Consultant",
    bio: "Over 18 years of clinical practice and hospital administration experience, bridging real-world medical workflows with digital software engineering.",
  },
  {
    name: "Vikram R. Sharma",
    role: "Head of Software Engineering",
    qualification: "B.Tech (CS), Ex-Enterprise Systems Architect",
    bio: "Specializes in high-availability distributed systems, HL7/FHIR healthcare data interoperability, and modular hospital management architectures.",
  },
  {
    name: "Pooja K. Nair",
    role: "Director of Product & UI/UX Design",
    qualification: "M.Des (Human-Computer Interaction)",
    bio: "Dedicated to eliminating clinical fatigue through human-centred design, intuitive patient journeys, and distraction-free doctor dashboards.",
  },
  {
    name: "Dr. Raghavendra V.",
    role: "Head of AI & Healthcare R&D",
    qualification: "Ph.D. in Biomedical Signal & Image Processing",
    bio: "Leads research collaborations in deep learning, medical computer vision, DICOM pipelines, and automated clinical triage models.",
  },
];

export const FAQS = [
  {
    question: "How is MedsTech different from generic web or software agencies?",
    answer:
      "MedsTech focuses exclusively on healthcare. We understand clinical terminology, doctor consultation patterns, patient privacy requirements, EMR structures, and hospital departmental coordination. We don't apply retail or corporate website templates to medical practices.",
  },
  {
    question: "Can our hospital start with a few modules and add more later?",
    answer:
      "Yes. MedsTech Hospital is built with micro-modular architecture. You can start with OPD and Billing, then seamlessly integrate IPD, Pharmacy, Ward Management, Laboratory, and Insurance modules as your needs evolve without data migration headaches.",
  },
  {
    question: "Do you build both Android and iOS mobile applications?",
    answer:
      "Yes. We develop native applications using Kotlin (Android) and Swift (iOS) for maximum hardware performance and biometric security, as well as cross-platform solutions (React Native/Flutter) based on your timeline and budget preferences.",
  },
  {
    question: "How do you handle appointment booking on Doctor Websites?",
    answer:
      "Our doctor websites support direct online booking calendars, instant WhatsApp enquiry triggers, automated email alerts, and optional synchronization with your existing clinic management software or calendar.",
  },
  {
    question: "What does your R&D collaboration model look like?",
    answer:
      "We partner with medical colleges, research investigators, and healthtech startups to build proof-of-concepts, clinical trial data capture systems, DICOM image analysis tools, and algorithm validation pipelines under strict confidentiality and ethical governance.",
  },
];
