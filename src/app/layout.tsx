import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://medstech.in"),
  title: "MedsTech | Premium Healthcare Technology & Digital Solutions Platform",
  description:
    "Transforming Healthcare Through Technology. Partner with MedsTech for professional doctor websites, Clinical Management Systems (CMS), Hospital Management Systems (HMS), and healthcare mobile apps.",
  keywords: [
    "Healthcare Software Development Company",
    "Doctor Website Development",
    "Clinical Management System Development",
    "Hospital Management Software",
    "Custom Hospital Management System",
    "Medical Website Development",
    "Doctor Portfolio Website",
    "Healthcare Mobile App Development",
    "Medical Software Solutions",
    "Healthcare AI & ML Development",
  ],
  authors: [{ name: "MedsTech Healthcare Solutions" }],
  openGraph: {
    title: "MedsTech | Your Technology Partner in Modern Healthcare",
    description:
      "Empowering doctors, clinics, and hospitals with intelligent digital solutions. From doctor websites to advanced clinical management systems and custom healthcare applications.",
    url: "https://medstech.in",
    siteName: "MedsTech",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "MedsTech Healthcare Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MedsTech Healthcare Platform",
    applicationCategory: "MedicalSoftware",
    operatingSystem: "Web, iOS, Android, Cloud",
    description:
      "Enterprise healthcare technology solutions including doctor portfolio websites, clinical management systems, hospital operating systems, and healthcare AI research.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Complimentary Technical Consultation & Scoping",
    },
    publisher: {
      "@type": "Organization",
      name: "MedsTech",
      url: "https://medstech.in",
      logo: "https://medstech.in/images/logo.png",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-brand-red selection:text-white">
        {children}
      </body>
    </html>
  );
}
