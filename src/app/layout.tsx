import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import Chatbot from "@/components/Chatbot";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://skandhaconstructions.com"
  ),
  title: "Skandha Constructions — Building Legacies, Building Trust",
  description:
    "Skandha Constructions delivers world-class government and private construction projects — from marriage halls and commercial complexes to public infrastructure — across Tamil Nadu.",
  keywords: [
    "Skandha Constructions",
    "construction company",
    "government projects",
    "commercial construction",
    "residential construction",
    "marriage hall construction",
    "infrastructure",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ivory text-charcoal">
        {/* Animated content wrapper — transform here does NOT affect fixed-position siblings */}
        <div className="page-content min-h-full flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        {/* Fixed overlays are direct body children, outside the animated div → always viewport-fixed */}
        <SocialSidebar />
        <Chatbot />
      </body>
    </html>
  );
}
