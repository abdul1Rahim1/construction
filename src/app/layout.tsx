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
  title: "Skandha Constructions Constructions — Building Legacies, Moving Earth",
  description:
    "Skandha Constructions Constructions delivers world-class government & private construction projects and large-scale earth mover leasing across the nation.",
  keywords: [
    "Skandha Constructions Constructions",
    "construction company",
    "earth movers",
    "heavy equipment leasing",
    "government projects",
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
