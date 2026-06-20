"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { MapPin, Home, Building2, ArrowRight } from "lucide-react";

type PropertyStatus = "Available" | "Sold" | "Upcoming";
type PropertyCategory = "Residential" | "Commercial";

interface Property {
  id: number;
  name: string;
  location: string;
  type: string;
  status: PropertyStatus;
  category: PropertyCategory;
  image: string;
}

const PROPERTIES: Property[] = [
  // Residential
  {
    id: 1,
    name: "Greenwood Villas",
    location: "Coimbatore",
    type: "3BHK Villa",
    status: "Available",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Palm Grove Apartments",
    location: "Chennai",
    type: "2BHK Apartment",
    status: "Upcoming",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Lakeside Residency",
    location: "Bangalore",
    type: "3BHK Apartment",
    status: "Available",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Royal Enclave",
    location: "Salem",
    type: "4BHK Villa",
    status: "Upcoming",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  },
  // Commercial
  {
    id: 5,
    name: "Tech Park Plaza",
    location: "Coimbatore",
    type: "IT Office Space",
    status: "Available",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Metro Commercial Hub",
    location: "Chennai",
    type: "Retail Space",
    status: "Available",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    name: "Business Bay Tower",
    location: "Bangalore",
    type: "Corporate Office",
    status: "Upcoming",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Industrial Warehouse Park",
    location: "Hosur",
    type: "Warehouse",
    status: "Available",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
  },
];

const STATUS_STYLE: Record<PropertyStatus, string> = {
  Available: "bg-green-100 text-green-700 border-green-200",
  Sold: "bg-red-100 text-red-700 border-red-200",
  Upcoming: "bg-blue-100 text-blue-700 border-blue-200",
};

export default function DiyaDev() {
  const [activeTab, setActiveTab] = useState<PropertyCategory>("Residential");
  const filtered = PROPERTIES.filter((p) => p.category === activeTab);

  return (
    <section
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#f7f8ff" }}
    >
      {/* Top brand stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5"
        style={{ background: "linear-gradient(90deg, #f5a623 0%, #1a4b8c 100%)" }}
      />
      <div className="absolute -top-24 right-0 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ backgroundColor: "#f5a623" }} />
      <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ backgroundColor: "#1a4b8c" }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          {/* Brand name */}
          <div className="inline-flex items-center gap-1 mb-5">
            <span
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold"
              style={{ color: "#f5a623" }}
            >
              Diya
            </span>
            <span
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold"
              style={{ color: "#1a4b8c" }}
            >
              Dev
            </span>
            <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-700 ml-2">
              Developers
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12" style={{ backgroundColor: "#f5a623" }} />
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-medium">
              Real Estate Division of Skandha Constructions
            </span>
            <span className="h-px w-12" style={{ backgroundColor: "#1a4b8c" }} />
          </div>

          <h2 className="font-display text-2xl sm:text-3xl text-gray-800 mt-2">
            Your Dream Home, Built to Last
          </h2>
          <p className="mt-3 text-base text-gray-500 max-w-lg mx-auto leading-relaxed">
            Trusted by families and investors across the region — delivering quality residences
            and premium commercial spaces.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full p-1.5 bg-white shadow-md border border-gray-100">
            {(["Residential", "Commercial"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                style={
                  activeTab === tab
                    ? {
                        backgroundColor: tab === "Residential" ? "#f5a623" : "#1a4b8c",
                        color: "#fff",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                      }
                    : { color: "#6b7280" }
                }
              >
                {tab === "Residential" ? "🏠 Residential" : "🏢 Commercial"}
              </button>
            ))}
          </div>
        </div>

        {/* Property grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
                <span
                  className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full border ${STATUS_STYLE[p.status]}`}
                >
                  {p.status}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 text-lg leading-tight">{p.name}</h3>
                <p className="text-sm text-gray-500 mt-1.5 flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                  {p.location}
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                  {activeTab === "Residential" ? (
                    <Home className="h-3.5 w-3.5" />
                  ) : (
                    <Building2 className="h-3.5 w-3.5" />
                  )}
                  {p.type}
                </div>
                <button
                  className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: activeTab === "Residential" ? "#f5a623" : "#1a4b8c",
                  }}
                >
                  Enquire Now <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-sm text-gray-400"
        >
          For inquiries, call{" "}
          <a href="tel:+919087353637" className="font-semibold text-gray-600 hover:underline">
            +91 90873 53637
          </a>{" "}
          or{" "}
          <a
            href="https://wa.me/919087353637"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
            style={{ color: "#25D366" }}
          >
            WhatsApp us
          </a>
        </motion.p>
      </div>
    </section>
  );
}
